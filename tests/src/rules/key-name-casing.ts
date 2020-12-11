import { RuleTester } from "eslint"
import rule from "../../../src/rules/key-name-casing"

const tester = new RuleTester({
    parser: require.resolve("yaml-eslint-parser"),
    parserOptions: {
        ecmaVersion: 2020,
    },
})

tester.run("key-name-casing", rule as any, {
    valid: [
        '{"key": "value"}',
        '{"camelCase": "value"}',
        '"PascalCase"',
        '"string"',
        '["element"]',
        {
            code: `
            {
                "foo.bar": "value",
            }`,
            options: [{ ignores: ["^[a-z\\.]+$"] }],
        },
    ],
    invalid: [
        {
            code: `
            {
                "camelCase": "camelCaseValue", 
                "PascalCase": "PascalCaseValue",
                "SCREAMING_SNAKE_CASE": "SCREAMING_SNAKE_CASE_VALUE",
                "kebab-case": "kebab-case-value",
                "snake_case": "snake_case_value",
                "Mixed-Case": "Mixed-Case-Value",
                "foo.bar": "value",
            }`,
            errors: [
                "Key name `PascalCase` must match one of the following formats: camelCase",
                "Key name `SCREAMING_SNAKE_CASE` must match one of the following formats: camelCase",
                "Key name `kebab-case` must match one of the following formats: camelCase",
                "Key name `snake_case` must match one of the following formats: camelCase",
                "Key name `Mixed-Case` must match one of the following formats: camelCase",
                "Key name `foo.bar` must match one of the following formats: camelCase",
            ],
        },
        {
            code: `
            {
                camelCase: "camelCaseValue", 
                PascalCase: "PascalCaseValue",
                SCREAMING_SNAKE_CASE: "SCREAMING_SNAKE_CASE_VALUE",
                snake_case: "snake_case_value",
            }`,
            errors: [
                "Key name `PascalCase` must match one of the following formats: camelCase",
                "Key name `SCREAMING_SNAKE_CASE` must match one of the following formats: camelCase",
                "Key name `snake_case` must match one of the following formats: camelCase",
            ],
        },
        {
            code: `
            {
                "camelCase": "camelCaseValue", 
                "PascalCase": "PascalCaseValue",
                "SCREAMING_SNAKE_CASE": "SCREAMING_SNAKE_CASE_VALUE",
                "kebab-case": "kebab-case-value",
                "snake_case": "snake_case_value",
                "Mixed-Case": "Mixed-Case-Value",
            }`,
            options: [
                {
                    camelCase: true,
                    "kebab-case": true,
                    // eslint-disable-next-line @typescript-eslint/naming-convention -- test
                    PascalCase: true,
                    // eslint-disable-next-line @typescript-eslint/naming-convention -- test
                    snake_case: true,
                    // eslint-disable-next-line @typescript-eslint/naming-convention -- test
                    SCREAMING_SNAKE_CASE: true,
                },
            ],
            errors: [
                "Key name `Mixed-Case` must match one of the following formats: camelCase, kebab-case, PascalCase, snake_case, SCREAMING_SNAKE_CASE",
            ],
        },
    ],
})
