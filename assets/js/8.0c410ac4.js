(window.webpackJsonp=window.webpackJsonp||[]).push([[8,10],{154:function(e,t,i){},156:function(e,t,i){},163:function(e,t,i){"use strict";i(154)},165:function(e,t,i){"use strict";i.r(t),i.d(t,"conf",(function(){return n})),i.d(t,"language",(function(){return o}));
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var n={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{offSide:!0}},o={tokenPostfix:".yaml",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["true","True","TRUE","false","False","FALSE","null","Null","Null","~"],numberInteger:/(?:0|[+-]?[0-9]+)/,numberFloat:/(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,numberOctal:/0o[0-7]+/,numberHex:/0x[0-9a-fA-F]+/,numberInfinity:/[+-]?\.(?:inf|Inf|INF)/,numberNaN:/\.(?:nan|Nan|NAN)/,numberDate:/\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,escapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},[/%[^ ]+.*$/,"meta.directive"],[/---/,"operators.directivesEnd"],[/\.{3}/,"operators.documentEnd"],[/[-?:](?= )/,"operators"],{include:"@anchor"},{include:"@tagHandle"},{include:"@flowCollections"},{include:"@blockStyle"},[/@numberInteger(?![ \t]*\S+)/,"number"],[/@numberFloat(?![ \t]*\S+)/,"number.float"],[/@numberOctal(?![ \t]*\S+)/,"number.octal"],[/@numberHex(?![ \t]*\S+)/,"number.hex"],[/@numberInfinity(?![ \t]*\S+)/,"number.infinity"],[/@numberNaN(?![ \t]*\S+)/,"number.nan"],[/@numberDate(?![ \t]*\S+)/,"number.date"],[/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,["type","white","operators","white"]],{include:"@flowScalars"},[/[^#]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],object:[{include:"@whitespace"},{include:"@comment"},[/\}/,"@brackets","@pop"],[/,/,"delimiter.comma"],[/:(?= )/,"operators"],[/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/,"type"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\},]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],array:[{include:"@whitespace"},{include:"@comment"},[/\]/,"@brackets","@pop"],[/,/,"delimiter.comma"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\],]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],multiString:[[/^( +).+$/,"string","@multiStringContinued.$1"]],multiStringContinued:[[/^( *).+$/,{cases:{"$1==$S2":"string","@default":{token:"@rematch",next:"@popall"}}}]],whitespace:[[/[ \t\r\n]+/,"white"]],comment:[[/#.*$/,"comment"]],flowCollections:[[/\[/,"@brackets","@array"],[/\{/,"@brackets","@object"]],flowScalars:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'[^']*'/,"string"],[/"/,"string","@doubleQuotedString"]],doubleQuotedString:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],blockStyle:[[/[>|][0-9]*[+-]?$/,"operators","@multiString"]],flowNumber:[[/@numberInteger(?=[ \t]*[,\]\}])/,"number"],[/@numberFloat(?=[ \t]*[,\]\}])/,"number.float"],[/@numberOctal(?=[ \t]*[,\]\}])/,"number.octal"],[/@numberHex(?=[ \t]*[,\]\}])/,"number.hex"],[/@numberInfinity(?=[ \t]*[,\]\}])/,"number.infinity"],[/@numberNaN(?=[ \t]*[,\]\}])/,"number.nan"],[/@numberDate(?=[ \t]*[,\]\}])/,"number.date"]],tagHandle:[[/\![^ ]*/,"tag"]],anchor:[[/[&*][^ ]+/,"namespace"]]}}},166:function(e,t,i){"use strict";i(156)},167:function(e,t,i){"use strict";const n={autoIndent:!0,automaticLayout:!0,find:{autoFindInSelection:!0,seedSearchStringFromSelection:!0},minimap:{enabled:!1},renderControlCharacters:!0,renderIndentGuides:!0,renderValidationDecorations:"on",renderWhitespace:"boundary",scrollBeyondLastLine:!1};function o(e,t){return Math.max(1,0|(void 0!==e?e:t))}function r(e,t){const i=e.getModel();null!=i&&t!==i.getValue()&&i.setValue(t)}function s(e){null!=e&&(e.getOriginalEditor&&s(e.getOriginalEditor()),e.getModifiedEditor&&s(e.getModifiedEditor()),e.getModel&&s(e.getModel()),e.dispose&&e.dispose())}function a(e){const t=("string"==typeof e.code?e.code:e.code&&e.code.value)||"";return`[${e.startLineNumber},${e.startColumn},${e.endLineNumber},${e.endColumn}]-${t}`}function d(e,t,i,n){const o=i.getPositionAt(n.range[0]),r=i.getPositionAt(n.range[1]),s={startLineNumber:o.lineNumber,startColumn:o.column,endLineNumber:r.lineNumber,endColumn:r.column};return{title:e,diagnostics:[t],kind:"quickfix",edit:{edits:[{resource:i.uri,edit:{range:s,text:n.text}}]}}}var l={name:"ESLintEditor",model:{prop:"code",event:"input"},props:{linter:{type:Object,default:null},code:{type:String,default:""},config:{type:Object,default:()=>({})},dark:{type:Boolean},filename:{type:String,default:"a.js"},preprocess:{type:Function,default:null,required:!1},postprocess:{type:Function,default:null,required:!1},fix:{type:Boolean},format:{type:Object,default:()=>({insertSpaces:!0,tabSize:4})},language:{type:String,default:"javascript"}},data(){return{monaco:null,monacoLoadingError:null,loadLanguage:null,editor:null,editing:!1,messages:[],fixedCode:this.code,fixedMessages:[],previewFix:!1,requestFix:!1,editorMessageMap:new Map,codeActionProviderDisposable:null}},computed:{codeEditor(){const e=this.editor;return null!=e?null!=e.getOriginalEditor?e.getOriginalEditor():e:null},fixedCodeEditor(){const e=this.editor;return null!=e&&null!=e.getModifiedEditor?e.getModifiedEditor():null},codeActionProvider(){return{provideCodeActions:(e,t,i)=>{const{editorMessageMap:n}=this,o=n.get(e.uri);if("quickfix"!==i.only||!o)return{actions:[],dispose(){}};const r=[];for(const t of i.markers){const i=o.get(a(t));if(i&&(i.fix&&r.push(d(`Fix this ${i.ruleId} problem`,t,e,i.fix)),i.suggestions))for(const n of i.suggestions)r.push(d(`${n.desc} (${i.ruleId})`,t,e,n.fix))}return{actions:r,dispose(){}}}}}},watch:{linter(){this.invalidate()},code(e){this.updateCode(e)},previewFix(){this.initialize()},config:{handler(){this.invalidate()},deep:!0},filename(){this.invalidate()},fix(){this.initialize()},fixedCode(e){const t=this.fixedCodeEditor;null!=t&&r(t,e)},fixedMessages(e){const t=this.fixedCodeEditor;null!=t&&this.updateMarkers(t,e)},format(e){const t=this.codeEditor;null!=t&&t.getModel().updateOptions(e)},messages(e){const t=this.codeEditor;null!=t&&this.updateMarkers(t,e,!0)},language(e){const{monaco:t,loadLanguage:i}=this;null!=t&&(async()=>{if(await i(e),e===this.language){for(const i of[this.codeEditor,this.fixedCodeEditor])null!=i&&t.editor.setModelLanguage(i.getModel(),e);s(this.codeActionProviderDisposable),this.codeActionProviderDisposable=this.monaco.languages.registerCodeActionProvider(this.language,this.codeActionProvider)}})().catch(t=>{console.error("Failed to set the language '%s':",e,t)})}},mounted(){(async()=>{const{monaco:e,loadLanguage:t}=await Promise.all([i.e(0),i.e(16)]).then(i.bind(null,776));await t(this.language),this.monaco=e,this.loadLanguage=t,this.codeActionProviderDisposable=e.languages.registerCodeActionProvider(this.language,this.codeActionProvider)})().catch(e=>{console.error("Failed to load Monaco editor:",e),this.monacoLoadingError=e})},beforeDestroy(){s(this.editor),s(this.codeActionProviderDisposable),this.$refs.monaco.innerHTML="",this.editor=null},methods:{fadeIn(e){this.$refs.monaco&&this.$refs.monaco.parentNode===e&&this.initialize()},initialize(){null!=this.monaco&&(s(this.editor),this.$refs.monaco.innerHTML="",this.editor=this.previewFix?this.createTwoPaneEditor():this.createEditor(),this.lint())},createEditor(){const{code:e,dark:t,format:i,language:o,messages:r,monaco:s}=this,a=s.editor.createModel(e,o);a.updateOptions(i),a.onDidChangeContent(()=>{this.$emit("input",a.getValue()),this.invalidate()});const d=s.editor.create(this.$refs.monaco,{model:a,theme:t?"vs-dark":"vs",...n});return this.updateMarkers(d,r,!0),d},createTwoPaneEditor(){const{code:e,dark:t,fixedCode:i,fixedMessages:o,format:r,language:s,messages:a,monaco:d}=this,l=d.editor.createDiffEditor(this.$refs.monaco,{originalEditable:!0,theme:t?"vs-dark":"vs",...n}),c=d.editor.createModel(e,s),u=d.editor.createModel(i,s),m=l.getOriginalEditor(),g=l.getModifiedEditor();return g.updateOptions({readOnly:!0}),c.updateOptions(r),c.onDidChangeContent(()=>{const e=c.getValue();this.fixedCode=e,this.$emit("input",e),this.invalidate()}),l.setModel({original:c,modified:u}),this.updateMarkers(m,a,!0),this.updateMarkers(g,o),l},messageToMarker(e){const{monaco:t,linter:i}=this,n=e.ruleId&&i.getRules().get(e.ruleId),r=n&&n.meta&&n.meta.docs&&n.meta.docs.url,s=o(e.line,1),a=o(e.column,1),d=o(e.endLine,s),l=o(e.endColumn,a+1);return{code:r?{value:e.ruleId,link:r}:e.ruleId||"FATAL",severity:t.MarkerSeverity.Error,source:"ESLint",message:e.message,startLineNumber:s,startColumn:a,endLineNumber:d,endColumn:l}},updateMarkers(e,t,i){const{monaco:n,editorMessageMap:o}=this,r=e.getModel(),s=e.getId();o.delete(r.uri);const d=[];let l=null;i&&(l=new Map,o.set(r.uri,l));for(const e of t){const t=this.messageToMarker(e);d.push(t),i&&l.set(a(t),e)}n.editor.setModelMarkers(r,s,d)},updateCode(e){const t=this.codeEditor;null!=t&&r(t,e),this.invalidate()},invalidate(){null==this.editor||this.editing||(this.editing=!0,setTimeout(()=>{this.lint(),this.editing=!1},667))},lint(){const{codeEditor:e,config:t,filename:i,preprocess:n,postprocess:o,linter:r}=this;if(null==e||null==r)return;this.editorMessageMap.clear();const s=e.getModel().getValue();try{this.messages=r.verify(s,t,{filename:i,preprocess:n,postprocess:o})}catch(e){this.messages=[{fatal:!0,severity:2,message:e.message,line:1,column:0}]}try{const e=r.verifyAndFix(s,t,{filename:i});this.fixedCode=e.fixed?e.output:s,this.fixedMessages=e.messages}catch(e){this.fixedCode=s,this.fixedMessages=[{fatal:!0,severity:2,message:e.message,line:1,column:0}]}this.$emit("change",{code:s,messages:this.messages,fixedCode:this.fixedCode,fixedMessages:this.fixedMessages}),this.requestFix&&(this.requestFix=!1,this.fixedCode!==this.code&&(this.$emit("input",this.fixedCode),this.updateCode(this.fixedCode)))},applyAutofix(){const{code:e,fixedCode:t,editing:i}=this;i?this.requestFix=!0:t!==e&&(this.$emit("input",t),this.updateCode(t))}}},c=(i(163),i(6)),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"eslint-editor-root",class:{"eslint-editor-dark":e.dark}},[i("transition",{attrs:{name:"eslint-editor-fade"},on:{"before-enter":e.fadeIn}},[e.monaco?i("div",{key:"editor",staticClass:"eslint-editor-swap-container"},[i("div",{ref:"monaco",staticClass:"eslint-editor-monaco"}),e._v(" "),e.fix?i("div",{staticClass:"eslint-editor-actions"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.previewFix,expression:"previewFix"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.previewFix)?e._i(e.previewFix,null)>-1:e.previewFix},on:{change:function(t){var i=e.previewFix,n=t.target,o=!!n.checked;if(Array.isArray(i)){var r=e._i(i,null);n.checked?r<0&&(e.previewFix=i.concat([null])):r>-1&&(e.previewFix=i.slice(0,r).concat(i.slice(r+1)))}else e.previewFix=o}}}),e._v("\n                    Preview\n                ")]),e._v(" "),i("button",{on:{click:e.applyAutofix}},[e._v("\n                    Apply\n                ")])]):e._e()]):i("div",{key:"placeholder",staticClass:"eslint-editor-swap-container"},[i("code",{staticClass:"eslint-editor-placeholder-code"},[e._v(e._s(e.code))]),e._v(" "),i("transition",{attrs:{name:"eslint-editor-fade"}},[e.monacoLoadingError?i("div",{key:"error",staticClass:"eslint-editor-placeholder-error"},[e._v("\n                    Failed to load this editor\n                ")]):i("div",{key:"loading",staticClass:"eslint-editor-placeholder-loading"},[i("div",{staticClass:"eslint-editor-placeholder-loading-icon"},[i("div"),e._v(" "),i("div"),e._v(" "),i("div")]),e._v(" "),i("div",{staticClass:"eslint-editor-placeholder-loading-message"},[e._v("\n                        Now loading...\n                    ")])])])],1)])],1)}),[],!1,null,null,null);t.a=u.exports},171:function(e,t,i){"use strict";i.r(t);var n=i(167),o=i(161),r=i(170),s=i.n(r),a={name:"EslintPluginEditor",components:{EslintEditor:n.a},model:{prop:"code"},props:{code:{type:String,default:""},fix:{type:Boolean},rules:{type:Object,default:()=>({})},dark:{type:Boolean},language:{type:String,default:"yaml"},fileName:{type:String,default:"a.yaml"},parser:{type:String,default:"yaml-eslint-parser"}},data:()=>({yamlESLintParser:null,vueESLintParser:null,format:{insertSpaces:!0,tabSize:2}}),computed:{config(){return{globals:{ArrayBuffer:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1,WeakMap:!1,WeakSet:!1,Atomics:!1,SharedArrayBuffer:!1},rules:this.rules,parser:this.parser,parserOptions:{sourceType:"script",ecmaVersion:2021}}},linter(){if(!this.yamlESLintParser||!this.vueESLintParser)return null;const e=new o.Linter;e.defineParser("yaml-eslint-parser",this.yamlESLintParser),e.defineParser("vue-eslint-parser",this.vueESLintParser);for(const t of Object.keys(s.a.rules)){const i=s.a.rules[t];e.defineRule(i.meta.docs.ruleId,i)}return e}},async mounted(){const[e,t]=await Promise.all([Promise.resolve().then(i.t.bind(null,185,7)),Promise.resolve().then(i.t.bind(null,172,7)).then(()=>Promise.all([i.e(5),i.e(17)]).then(i.t.bind(null,775,7)))]);this.yamlESLintParser=e,this.vueESLintParser=t;const n=this.$refs.editor;n.$watch("monaco",()=>{const{monaco:e}=n;e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({validate:!1}),e.languages.typescript.javascriptDefaults.setDiagnosticsOptions({validate:!1}),e.languages.register({id:"yaml"}),e.languages.setMonarchTokensProvider("yaml",i(165).language)}),n.$watch("codeEditor",()=>{n.codeEditor&&n.codeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(n.codeEditor))}),n.$watch("fixedCodeEditor",()=>{n.fixedCodeEditor&&n.fixedCodeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(n.fixedCodeEditor))})},methods:{onDidChangeModelDecorations(e){const{monaco:t}=this.$refs.editor,i=e.getModel();t.editor.setModelMarkers(i,"yaml",[])}}},d=(i(166),i(6)),l=Object(d.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("eslint-editor",{ref:"editor",staticClass:"eslint-code-block",attrs:{linter:e.linter,config:e.config,code:e.code,language:e.language,filename:e.fileName,dark:e.dark,format:e.format,fix:e.fix},on:{input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})}),[],!1,null,"bcc0c5c2",null);t.default=l.exports},272:function(e,t,i){"use strict";i.r(t);var n={name:"PgEditor",components:{EslintPluginEditor:i(171).default},props:{value:{type:String,default:""},rules:{type:Object,default:()=>({})},messages:{type:Array,default:()=>[]}}},o=i(6),r=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("eslint-plugin-editor",{ref:"editor",attrs:{code:e.value,rules:e.rules,fix:"",dark:""},on:{input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})}),[],!1,null,null,null);t.default=r.exports}}]);