import{t as L,m as O,__tla as __tla_0}from"./index-C_j5peXq.js";let m,X,z,W,$,Q,y,q,Z,p,V,J,U,G,Y,B,j,H,C,ie,ne,re,se;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{var I=Object.defineProperty,N=Object.getOwnPropertyDescriptor,M=Object.getOwnPropertyNames,R=Object.prototype.hasOwnProperty,K=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of M(t))!R.call(e,n)&&n!==i&&I(e,n,{get:()=>t[n],enumerable:!(o=N(t,n))||o.enumerable});return e},E=(e,t,i)=>(K(e,t,"default"),i),a={};E(a,O);let r;H=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=a.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(a.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}};r={};r["lib.d.ts"]=!0;r["lib.decorators.d.ts"]=!0;r["lib.decorators.legacy.d.ts"]=!0;r["lib.dom.asynciterable.d.ts"]=!0;r["lib.dom.d.ts"]=!0;r["lib.dom.iterable.d.ts"]=!0;r["lib.es2015.collection.d.ts"]=!0;r["lib.es2015.core.d.ts"]=!0;r["lib.es2015.d.ts"]=!0;r["lib.es2015.generator.d.ts"]=!0;r["lib.es2015.iterable.d.ts"]=!0;r["lib.es2015.promise.d.ts"]=!0;r["lib.es2015.proxy.d.ts"]=!0;r["lib.es2015.reflect.d.ts"]=!0;r["lib.es2015.symbol.d.ts"]=!0;r["lib.es2015.symbol.wellknown.d.ts"]=!0;r["lib.es2016.array.include.d.ts"]=!0;r["lib.es2016.d.ts"]=!0;r["lib.es2016.full.d.ts"]=!0;r["lib.es2016.intl.d.ts"]=!0;r["lib.es2017.d.ts"]=!0;r["lib.es2017.date.d.ts"]=!0;r["lib.es2017.full.d.ts"]=!0;r["lib.es2017.intl.d.ts"]=!0;r["lib.es2017.object.d.ts"]=!0;r["lib.es2017.sharedmemory.d.ts"]=!0;r["lib.es2017.string.d.ts"]=!0;r["lib.es2017.typedarrays.d.ts"]=!0;r["lib.es2018.asyncgenerator.d.ts"]=!0;r["lib.es2018.asynciterable.d.ts"]=!0;r["lib.es2018.d.ts"]=!0;r["lib.es2018.full.d.ts"]=!0;r["lib.es2018.intl.d.ts"]=!0;r["lib.es2018.promise.d.ts"]=!0;r["lib.es2018.regexp.d.ts"]=!0;r["lib.es2019.array.d.ts"]=!0;r["lib.es2019.d.ts"]=!0;r["lib.es2019.full.d.ts"]=!0;r["lib.es2019.intl.d.ts"]=!0;r["lib.es2019.object.d.ts"]=!0;r["lib.es2019.string.d.ts"]=!0;r["lib.es2019.symbol.d.ts"]=!0;r["lib.es2020.bigint.d.ts"]=!0;r["lib.es2020.d.ts"]=!0;r["lib.es2020.date.d.ts"]=!0;r["lib.es2020.full.d.ts"]=!0;r["lib.es2020.intl.d.ts"]=!0;r["lib.es2020.number.d.ts"]=!0;r["lib.es2020.promise.d.ts"]=!0;r["lib.es2020.sharedmemory.d.ts"]=!0;r["lib.es2020.string.d.ts"]=!0;r["lib.es2020.symbol.wellknown.d.ts"]=!0;r["lib.es2021.d.ts"]=!0;r["lib.es2021.full.d.ts"]=!0;r["lib.es2021.intl.d.ts"]=!0;r["lib.es2021.promise.d.ts"]=!0;r["lib.es2021.string.d.ts"]=!0;r["lib.es2021.weakref.d.ts"]=!0;r["lib.es2022.array.d.ts"]=!0;r["lib.es2022.d.ts"]=!0;r["lib.es2022.error.d.ts"]=!0;r["lib.es2022.full.d.ts"]=!0;r["lib.es2022.intl.d.ts"]=!0;r["lib.es2022.object.d.ts"]=!0;r["lib.es2022.regexp.d.ts"]=!0;r["lib.es2022.sharedmemory.d.ts"]=!0;r["lib.es2022.string.d.ts"]=!0;r["lib.es2023.array.d.ts"]=!0;r["lib.es2023.collection.d.ts"]=!0;r["lib.es2023.d.ts"]=!0;r["lib.es2023.full.d.ts"]=!0;r["lib.es5.d.ts"]=!0;r["lib.es6.d.ts"]=!0;r["lib.esnext.collection.d.ts"]=!0;r["lib.esnext.d.ts"]=!0;r["lib.esnext.decorators.d.ts"]=!0;r["lib.esnext.disposable.d.ts"]=!0;r["lib.esnext.full.d.ts"]=!0;r["lib.esnext.intl.d.ts"]=!0;r["lib.esnext.object.d.ts"]=!0;r["lib.esnext.promise.d.ts"]=!0;r["lib.scripthost.d.ts"]=!0;r["lib.webworker.asynciterable.d.ts"]=!0;r["lib.webworker.d.ts"]=!0;r["lib.webworker.importscripts.d.ts"]=!0;r["lib.webworker.iterable.d.ts"]=!0;C=function(e,t,i=0){if(typeof e=="string")return e;if(e===void 0)return"";let o="";if(i){o+=t;for(let n=0;n<i;n++)o+="  "}if(o+=e.messageText,i++,e.next)for(const n of e.next)o+=C(n,t,i);return o};function _(e){return e?e.map(t=>t.text).join(""):""}m=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),o=e.getPositionAt(t.start+t.length),{lineNumber:n,column:c}=i,{lineNumber:u,column:s}=o;return{startLineNumber:n,startColumn:c,endLineNumber:u,endColumn:s}}};V=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!r[e.path.slice(1)]:!1}getOrCreateModel(e){const t=a.Uri.parse(e),i=a.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return a.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const o=L.getExtraLibs()[e];return o?a.editor.createModel(o.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}};W=class extends m{constructor(e,t,i,o){super(o),this._libFiles=e,this._defaults=t,this._selector=i,this._disposables=[],this._listener=Object.create(null);const n=s=>{if(s.getLanguageId()!==i)return;const l=()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f?s.isAttachedToEditor()&&this._doValidate(s):this._doValidate(s)};let g;const d=s.onDidChangeContent(()=>{clearTimeout(g),g=window.setTimeout(l,500)}),h=s.onDidChangeAttached(()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f&&(s.isAttachedToEditor()?l():a.editor.setModelMarkers(s,this._selector,[]))});this._listener[s.uri.toString()]={dispose(){d.dispose(),h.dispose(),clearTimeout(g)}},l()},c=s=>{a.editor.setModelMarkers(s,this._selector,[]);const l=s.uri.toString();this._listener[l]&&(this._listener[l].dispose(),delete this._listener[l])};this._disposables.push(a.editor.onDidCreateModel(s=>n(s))),this._disposables.push(a.editor.onWillDisposeModel(c)),this._disposables.push(a.editor.onDidChangeModelLanguage(s=>{c(s.model),n(s.model)})),this._disposables.push({dispose(){for(const s of a.editor.getModels())c(s)}});const u=()=>{for(const s of a.editor.getModels())c(s),n(s)};this._disposables.push(this._defaults.onDidChange(u)),this._disposables.push(this._defaults.onDidExtraLibsChange(u)),a.editor.getModels().forEach(s=>n(s))}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:o,noSemanticValidation:n,noSuggestionDiagnostics:c}=this._defaults.getDiagnosticsOptions();o||i.push(t.getSyntacticDiagnostics(e.uri.toString())),n||i.push(t.getSemanticDiagnostics(e.uri.toString())),c||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const u=await Promise.all(i);if(!u||e.isDisposed())return;const s=u.reduce((g,d)=>d.concat(g),[]).filter(g=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)===-1),l=s.map(g=>g.relatedInformation||[]).reduce((g,d)=>d.concat(g),[]).map(g=>g.file?a.Uri.parse(g.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(l),!e.isDisposed()&&a.editor.setModelMarkers(e,this._selector,s.map(g=>this._convertDiagnostics(e,g)))}_convertDiagnostics(e,t){const i=t.start||0,o=t.length||1,{lineNumber:n,column:c}=e.getPositionAt(i),{lineNumber:u,column:s}=e.getPositionAt(i+o),l=[];return t.reportsUnnecessary&&l.push(a.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(a.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:n,startColumn:c,endLineNumber:u,endColumn:s,message:C(t.messageText,`
`),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach(o=>{let n=e;if(o.file&&(n=this._libFiles.getOrCreateModel(o.file.fileName)),!n)return;const c=o.start||0,u=o.length||1,{lineNumber:s,column:l}=n.getPositionAt(c),{lineNumber:g,column:d}=n.getPositionAt(c+u);i.push({resource:n.uri,startLineNumber:s,startColumn:l,endLineNumber:g,endColumn:d,message:C(o.messageText,`
`)})}),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return a.MarkerSeverity.Error;case 3:return a.MarkerSeverity.Info;case 0:return a.MarkerSeverity.Warning;case 2:return a.MarkerSeverity.Hint}return a.MarkerSeverity.Info}};j=class x extends m{get triggerCharacters(){return["."]}async provideCompletionItems(t,i,o,n){const c=t.getWordUntilPosition(i),u=new a.Range(i.lineNumber,c.startColumn,i.lineNumber,c.endColumn),s=t.uri,l=t.getOffsetAt(i),g=await this._worker(s);if(t.isDisposed())return;const d=await g.getCompletionsAtPosition(s.toString(),l);return!d||t.isDisposed()?void 0:{suggestions:d.entries.map(f=>{let w=u;if(f.replacementSpan){const k=t.getPositionAt(f.replacementSpan.start),v=t.getPositionAt(f.replacementSpan.start+f.replacementSpan.length);w=new a.Range(k.lineNumber,k.column,v.lineNumber,v.column)}const S=[];return f.kindModifiers!==void 0&&f.kindModifiers.indexOf("deprecated")!==-1&&S.push(a.languages.CompletionItemTag.Deprecated),{uri:s,position:i,offset:l,range:w,label:f.name,insertText:f.name,sortText:f.sortText,kind:x.convertKind(f.kind),tags:S}})}}async resolveCompletionItem(t,i){const o=t,n=o.uri,c=o.position,u=o.offset,l=await (await this._worker(n)).getCompletionEntryDetails(n.toString(),u,o.label);return l?{uri:n,position:c,label:l.name,kind:x.convertKind(l.kind),detail:_(l.displayParts),documentation:{value:x.createDocumentationString(l)}}:o}static convertKind(t){switch(t){case p.primitiveType:case p.keyword:return a.languages.CompletionItemKind.Keyword;case p.variable:case p.localVariable:return a.languages.CompletionItemKind.Variable;case p.memberVariable:case p.memberGetAccessor:case p.memberSetAccessor:return a.languages.CompletionItemKind.Field;case p.function:case p.memberFunction:case p.constructSignature:case p.callSignature:case p.indexSignature:return a.languages.CompletionItemKind.Function;case p.enum:return a.languages.CompletionItemKind.Enum;case p.module:return a.languages.CompletionItemKind.Module;case p.class:return a.languages.CompletionItemKind.Class;case p.interface:return a.languages.CompletionItemKind.Interface;case p.warning:return a.languages.CompletionItemKind.File}return a.languages.CompletionItemKind.Property}static createDocumentationString(t){let i=_(t.documentation);if(t.tags)for(const o of t.tags)i+=`

${F(o)}`;return i}};function F(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[i,...o]=e.text;t+=`\`${i.text}\``,o.length>0&&(t+=` — ${o.map(n=>n.text).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map(i=>i.text).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}let b;B=class T extends m{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case a.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,i,o,n){const c=t.uri,u=t.getOffsetAt(i),s=await this._worker(c);if(t.isDisposed())return;const l=await s.getSignatureHelpItems(c.toString(),u,{triggerReason:T._toSignatureHelpTriggerReason(n)});if(!l||t.isDisposed())return;const g={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]};return l.items.forEach(d=>{const h={label:"",parameters:[]};h.documentation={value:_(d.documentation)},h.label+=_(d.prefixDisplayParts),d.parameters.forEach((f,w,S)=>{const k=_(f.displayParts),v={label:k,documentation:{value:_(f.documentation)}};h.label+=k,h.parameters.push(v),w<S.length-1&&(h.label+=_(d.separatorDisplayParts))}),h.label+=_(d.suffixDisplayParts),g.signatures.push(h)}),{value:g,dispose(){}}}};U=class extends m{async provideHover(e,t,i){const o=e.uri,n=e.getOffsetAt(t),c=await this._worker(o);if(e.isDisposed())return;const u=await c.getQuickInfoAtPosition(o.toString(),n);if(!u||e.isDisposed())return;const s=_(u.documentation),l=u.tags?u.tags.map(d=>F(d)).join(`  

`):"",g=_(u.displayParts);return{range:this._textSpanToRange(e,u.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:s+(l?`

`+l:"")}]}}};$=class extends m{async provideDocumentHighlights(e,t,i){const o=e.uri,n=e.getOffsetAt(t),c=await this._worker(o);if(e.isDisposed())return;const u=await c.getDocumentHighlights(o.toString(),n,[o.toString()]);if(!(!u||e.isDisposed()))return u.flatMap(s=>s.highlightSpans.map(l=>({range:this._textSpanToRange(e,l.textSpan),kind:l.kind==="writtenReference"?a.languages.DocumentHighlightKind.Write:a.languages.DocumentHighlightKind.Text})))}};z=class extends m{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const o=e.uri,n=e.getOffsetAt(t),c=await this._worker(o);if(e.isDisposed())return;const u=await c.getDefinitionAtPosition(o.toString(),n);if(!u||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(u.map(l=>a.Uri.parse(l.fileName))),e.isDisposed()))return;const s=[];for(let l of u){const g=this._libFiles.getOrCreateModel(l.fileName);g&&s.push({uri:g.uri,range:this._textSpanToRange(g,l.textSpan)})}return s}};G=class extends m{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,o){const n=e.uri,c=e.getOffsetAt(t),u=await this._worker(n);if(e.isDisposed())return;const s=await u.getReferencesAtPosition(n.toString(),c);if(!s||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(s.map(g=>a.Uri.parse(g.fileName))),e.isDisposed()))return;const l=[];for(let g of s){const d=this._libFiles.getOrCreateModel(g.fileName);d&&l.push({uri:d.uri,range:this._textSpanToRange(d,g.textSpan)})}return l}};J=class extends m{async provideDocumentSymbols(e,t){const i=e.uri,o=await this._worker(i);if(e.isDisposed())return;const n=await o.getNavigationTree(i.toString());if(!n||e.isDisposed())return;const c=(s,l)=>({name:s.text,detail:"",kind:b[s.kind]||a.languages.SymbolKind.Variable,range:this._textSpanToRange(e,s.spans[0]),selectionRange:this._textSpanToRange(e,s.spans[0]),tags:[],children:s.childItems?.map(d=>c(d,s.text)),containerName:l});return n.childItems?n.childItems.map(s=>c(s)):[]}};p=class{static{this.unknown=""}static{this.keyword="keyword"}static{this.script="script"}static{this.module="module"}static{this.class="class"}static{this.interface="interface"}static{this.type="type"}static{this.enum="enum"}static{this.variable="var"}static{this.localVariable="local var"}static{this.function="function"}static{this.localFunction="local function"}static{this.memberFunction="method"}static{this.memberGetAccessor="getter"}static{this.memberSetAccessor="setter"}static{this.memberVariable="property"}static{this.constructorImplementation="constructor"}static{this.callSignature="call"}static{this.indexSignature="index"}static{this.constructSignature="construct"}static{this.parameter="parameter"}static{this.typeParameter="type parameter"}static{this.primitiveType="primitive type"}static{this.label="label"}static{this.alias="alias"}static{this.const="const"}static{this.let="let"}static{this.warning="warning"}};b=Object.create(null);b[p.module]=a.languages.SymbolKind.Module;b[p.class]=a.languages.SymbolKind.Class;b[p.enum]=a.languages.SymbolKind.Enum;b[p.interface]=a.languages.SymbolKind.Interface;b[p.memberFunction]=a.languages.SymbolKind.Method;b[p.memberVariable]=a.languages.SymbolKind.Property;b[p.memberGetAccessor]=a.languages.SymbolKind.Property;b[p.memberSetAccessor]=a.languages.SymbolKind.Property;b[p.variable]=a.languages.SymbolKind.Variable;b[p.const]=a.languages.SymbolKind.Variable;b[p.localVariable]=a.languages.SymbolKind.Variable;b[p.variable]=a.languages.SymbolKind.Variable;b[p.function]=a.languages.SymbolKind.Function;b[p.localFunction]=a.languages.SymbolKind.Function;let D,A;y=class extends m{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}};Q=class extends y{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}async provideDocumentRangeFormattingEdits(e,t,i,o){const n=e.uri,c=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=await this._worker(n);if(e.isDisposed())return;const l=await s.getFormattingEditsForRange(n.toString(),c,u,y._convertOptions(i));if(!(!l||e.isDisposed()))return l.map(g=>this._convertTextChanges(e,g))}};q=class extends y{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,i,o,n){const c=e.uri,u=e.getOffsetAt(t),s=await this._worker(c);if(e.isDisposed())return;const l=await s.getFormattingEditsAfterKeystroke(c.toString(),u,i,y._convertOptions(o));if(!(!l||e.isDisposed()))return l.map(g=>this._convertTextChanges(e,g))}};X=class extends y{async provideCodeActions(e,t,i,o){const n=e.uri,c=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=y._convertOptions(e.getOptions()),l=i.markers.filter(f=>f.code).map(f=>f.code).map(Number),g=await this._worker(n);if(e.isDisposed())return;const d=await g.getCodeFixesAtPosition(n.toString(),c,u,l,s);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter(f=>f.changes.filter(w=>w.isNewFile).length===0).map(f=>this._tsCodeFixActionToMonacoCodeAction(e,i,f)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const o=[];for(const c of i.changes)for(const u of c.textChanges)o.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.span),text:u.newText}});return{title:i.description,edit:{edits:o},diagnostics:t.markers,kind:"quickfix"}}};Y=class extends m{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,o){const n=e.uri,c=n.toString(),u=e.getOffsetAt(t),s=await this._worker(n);if(e.isDisposed())return;const l=await s.getRenameInfo(c,u,{allowRenameOfImportPath:!1});if(l.canRename===!1)return{edits:[],rejectReason:l.localizedErrorMessage};if(l.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const g=await s.findRenameLocations(c,u,!1,!1,!1);if(!g||e.isDisposed())return;const d=[];for(const h of g){const f=this._libFiles.getOrCreateModel(h.fileName);if(f)d.push({resource:f.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(f,h.textSpan),text:i}});else throw new Error(`Unknown file ${h.fileName}.`)}return{edits:d}}};Z=class extends m{async provideInlayHints(e,t,i){const o=e.uri,n=o.toString(),c=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=await this._worker(o);return e.isDisposed()?null:{hints:(await s.provideInlayHints(n,c,u)).map(d=>({...d,label:d.text,position:e.getPositionAt(d.position),kind:this._convertHintKind(d.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return a.languages.InlayHintKind.Parameter;case"Type":return a.languages.InlayHintKind.Type;default:return a.languages.InlayHintKind.Type}}};se=function(e){A=P(e,"typescript")};re=function(e){D=P(e,"javascript")};ie=function(){return new Promise((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)})};ne=function(){return new Promise((e,t)=>{if(!A)return t("TypeScript not registered!");e(A)})};function P(e,t){const i=[],o=new H(t,e),n=(...s)=>o.getLanguageServiceWorker(...s),c=new V(n);function u(){const{modeConfiguration:s}=e;ee(i),s.completionItems&&i.push(a.languages.registerCompletionItemProvider(t,new j(n))),s.signatureHelp&&i.push(a.languages.registerSignatureHelpProvider(t,new B(n))),s.hovers&&i.push(a.languages.registerHoverProvider(t,new U(n))),s.documentHighlights&&i.push(a.languages.registerDocumentHighlightProvider(t,new $(n))),s.definitions&&i.push(a.languages.registerDefinitionProvider(t,new z(c,n))),s.references&&i.push(a.languages.registerReferenceProvider(t,new G(c,n))),s.documentSymbols&&i.push(a.languages.registerDocumentSymbolProvider(t,new J(n))),s.rename&&i.push(a.languages.registerRenameProvider(t,new Y(c,n))),s.documentRangeFormattingEdits&&i.push(a.languages.registerDocumentRangeFormattingEditProvider(t,new Q(n))),s.onTypeFormattingEdits&&i.push(a.languages.registerOnTypeFormattingEditProvider(t,new q(n))),s.codeActions&&i.push(a.languages.registerCodeActionProvider(t,new X(n))),s.inlayHints&&i.push(a.languages.registerInlayHintsProvider(t,new Z(n))),s.diagnostics&&i.push(new W(c,e,t,n))}return u(),n}function ee(e){for(;e.length;)e.pop().dispose()}});export{m as Adapter,X as CodeActionAdaptor,z as DefinitionAdapter,W as DiagnosticsAdapter,$ as DocumentHighlightAdapter,Q as FormatAdapter,y as FormatHelper,q as FormatOnTypeAdapter,Z as InlayHintsAdapter,p as Kind,V as LibFiles,J as OutlineAdapter,U as QuickInfoAdapter,G as ReferenceAdapter,Y as RenameAdapter,B as SignatureHelpAdapter,j as SuggestAdapter,H as WorkerManager,C as flattenDiagnosticMessageText,ie as getJavaScriptWorker,ne as getTypeScriptWorker,re as setupJavaScript,se as setupTypeScript,__tla};