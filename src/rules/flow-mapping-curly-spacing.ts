import {
    createRule,
    defineWrapperListener,
    getProxyNode,
    getCoreRule,
} from "../utils"
const coreRule = getCoreRule("object-curly-spacing")

export default createRule("flow-mapping-curly-spacing", {
    meta: {
        docs: {
            description: "enforce consistent spacing inside braces",
            categories: ["standard"],
            extensionRule: "object-curly-spacing",
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
                    YAMLMapping(node) {
                        if (node.style === "flow") {
                            listener.ObjectExpression(
                                getProxyNode(node, {
                                    type: "ObjectExpression",
                                    get properties() {
                                        return node.pairs
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
