(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{810:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-guide"}},[t._v("#")]),t._v(" User Guide")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" 💿 Installation")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev eslint eslint-plugin-yml\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Requirements")]),t._v(" "),a("ul",[a("li",[t._v("ESLint v6.0.0 and above")]),t._v(" "),a("li",[t._v("Node.js v12.22.x, v14.17.x, v16.x and above")])])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" 📖 Usage")]),t._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v(".eslintrc.*")]),t._v(" file to configure rules. See also: "),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://eslint.org/docs/user-guide/configuring"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Example "),a("strong",[t._v(".eslintrc.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add more generic rulesets here, such as:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'eslint:recommended',")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:yml/standard'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// override/add rules settings here, such as:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'yml/rule-name': 'error'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This plugin provides configs:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("plugin:yml/base")]),t._v(" ... Configuration to enable correct YAML parsing.")]),t._v(" "),a("li",[a("code",[t._v("plugin:yml/recommended")]),t._v(" ... Above, plus rules to prevent errors or unintended behavior.")]),t._v(" "),a("li",[a("code",[t._v("plugin:yml/standard")]),t._v(" ... Above, plus rules to enforce the common stylistic conventions.")]),t._v(" "),a("li",[a("code",[t._v("plugin:yml/prettier")]),t._v(" ... Turn off rules that may conflict with "),a("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/rules/"}},[t._v("the rule list")]),t._v(" to get the "),a("code",[t._v("rules")]),t._v(" that this plugin provides.")],1),t._v(" "),a("h4",{attrs:{id:"parser-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parser-configuration"}},[t._v("#")]),t._v(" Parser Configuration")]),t._v(" "),a("p",[t._v("If you have specified a parser, you need to configure a parser for "),a("code",[t._v(".yaml")]),t._v(".")]),t._v(" "),a("p",[t._v("For example, if you are using the "),a("code",[t._v('"@babel/eslint-parser"')]),t._v(", configure it as follows:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:yml/standard"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/eslint-parser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add an `overrides` section to add a parser configuration for YAML.")]),t._v("\n  overrides"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      files"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yaml-eslint-parser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"running-eslint-from-the-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-eslint-from-the-command-line"}},[t._v("#")]),t._v(" Running ESLint from the command line")]),t._v(" "),a("p",[t._v("If you want to run "),a("code",[t._v("eslint")]),t._v(" from the command line, make sure you include the "),a("code",[t._v(".yaml")]),t._v(" extension using "),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring#specifying-file-extensions-to-lint",target:"_blank",rel:"noopener noreferrer"}},[t._v("the "),a("code",[t._v("--ext")]),t._v(" option"),a("OutboundLink")],1),t._v(" or a glob pattern, because ESLint targets only "),a("code",[t._v(".js")]),t._v(" files by default.")]),t._v(" "),a("p",[t._v("Examples:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("eslint --ext .js,.yaml,.yml src\neslint "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*.{js,yaml,yml}"')]),t._v("\n")])])]),a("h2",{attrs:{id:"editor-integrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editor-integrations"}},[t._v("#")]),t._v(" 💻 Editor Integrations")]),t._v(" "),a("h3",{attrs:{id:"visual-studio-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code"}},[t._v("#")]),t._v(" Visual Studio Code")]),t._v(" "),a("p",[t._v("Use the "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("dbaeumer.vscode-eslint"),a("OutboundLink")],1),t._v(" extension that Microsoft provides officially.")]),t._v(" "),a("p",[t._v("You have to configure the "),a("code",[t._v("eslint.validate")]),t._v(" option of the extension to check "),a("code",[t._v(".yaml")]),t._v(" files, because the extension targets only "),a("code",[t._v("*.js")]),t._v(" or "),a("code",[t._v("*.jsx")]),t._v(" files by default.")]),t._v(" "),a("p",[t._v("Example "),a("strong",[t._v(".vscode/settings.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.validate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascriptreact"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yaml"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" ❓ FAQ")]),t._v(" "),a("ul",[a("li",[t._v("TODO")])])])}),[],!1,null,null,null);s.default=n.exports}}]);