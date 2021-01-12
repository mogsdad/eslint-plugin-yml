import {
    createRule,
    defineWrapperListener,
    getProxyNode,
    getCoreRule,
} from "../utils"
const coreRule = getCoreRule("array-bracket-spacing")

export default createRule("flow-sequence-bracket-spacing", {
    meta: {
        docs: {
            description:
                "enforce consistent spacing inside flow sequence brackets",
            categories: ["standard"],
            extensionRule: "array-bracket-spacing",
        },
        fixable: coreRule.meta!.fixable,
        schema: coreRule.meta!.schema!,
        messages: coreRule.meta!.messages!,
        type: coreRule.meta!.type!,
    },
    create(context) {
        if (!context.parserServices.isYAML) {
            return {}
        }

        return defineWrapperListener(coreRule, context, {
            options: context.options,
            createListenerProxy(listener) {
                return {
                    YAMLSequence(node) {
                        if (node.style === "flow") {
                            listener.ArrayExpression(
                                getProxyNode(node, {
                                    type: "ArrayExpression",
                                    get elements() {
                                        return node.entries
                                    },
                                }),
                            )
                        }
                    },
                }
            },
        })
    },
})
