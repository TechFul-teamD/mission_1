(()=>{"use strict";var e={800:(e,n,r)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.config=n.loadMessageBundle=n.localize=n.format=n.setPseudo=n.isPseudo=n.isDefined=n.BundleFormat=n.MessageFormat=void 0;var o,a,t,s=r(1926);function i(e){return void 0!==e}function l(e,r){return n.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===r.length?e:e.replace(/\{(\d+)\}/g,(function(e,n){var o=n[0],a=r[o],t=e;return"string"==typeof a?t=a:"number"!=typeof a&&"boolean"!=typeof a&&null!=a||(t=String(a)),t}))}(t=n.MessageFormat||(n.MessageFormat={})).file="file",t.bundle="bundle",t.both="both",(a=n.BundleFormat||(n.BundleFormat={})).standalone="standalone",a.languagePack="languagePack",function(e){e.is=function(e){var n=e;return n&&i(n.key)&&i(n.comment)}}(o||(o={})),n.isDefined=i,n.isPseudo=!1,n.setPseudo=function(e){n.isPseudo=e},n.format=l,n.localize=function(e,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return l(n,r)},n.loadMessageBundle=function(e){return(0,s.default)().loadMessageBundle(e)},n.config=function(e){return(0,s.default)().config(e)}},1926:(e,n)=>{var r;function o(){if(void 0===r)throw new Error("No runtime abstraction layer installed");return r}Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");r=e}}(o||(o={})),n.default=o},8472:(e,n,r)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.config=n.loadMessageBundle=n.BundleFormat=n.MessageFormat=void 0;var o=r(5622),a=r(5747),t=r(1926),s=r(800),i=r(800);Object.defineProperty(n,"MessageFormat",{enumerable:!0,get:function(){return i.MessageFormat}}),Object.defineProperty(n,"BundleFormat",{enumerable:!0,get:function(){return i.BundleFormat}});var l,c,u=Object.prototype.toString;function d(e){return"[object Number]"===u.call(e)}function f(e){return"[object String]"===u.call(e)}function g(e){return JSON.parse(a.readFileSync(e,"utf8"))}function p(e){return function(n,r){for(var o=[],a=2;a<arguments.length;a++)o[a-2]=arguments[a];return d(n)?n>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: ".concat(new Error("").stack)):(0,s.format)(e[n],o):f(r)?(console.warn("Message ".concat(r," didn't get externalized correctly.")),(0,s.format)(r,o)):void console.error("Broken localize call found. Stacktrace is\n: ".concat(new Error("").stack))}}function v(e,n){return l[e]=n,n}function m(e){try{return function(e){var n=g(o.join(e,"nls.metadata.json")),r=Object.create(null);for(var a in n){var t=n[a];r[a]=t.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function S(e,n){var r;if(!0===c.languagePackSupport&&void 0!==c.cacheRoot&&void 0!==c.languagePackId&&void 0!==c.translationsConfigFile&&void 0!==c.translationsConfig)try{r=function(e,n){var r,t,s,i=o.join(c.cacheRoot,"".concat(e.id,"-").concat(e.hash,".json")),l=!1,u=!1;try{return r=JSON.parse(a.readFileSync(i,{encoding:"utf8",flag:"r"})),t=i,s=new Date,a.utimes(t,s,s,(function(){})),r}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: ".concat(e.message,".")),a.unlink(i,(function(e){e&&console.error("Deleting corrupted bundle ".concat(i," failed."))})),l=!0}}if(!(r=function(e,n){var r=c.translationsConfig[e.id];if(r){var a=g(r).contents,t=g(o.join(n,"nls.metadata.json")),s=Object.create(null);for(var i in t){var l=t[i],u=a["".concat(e.outDir,"/").concat(i)];if(u){for(var d=[],p=0;p<l.keys.length;p++){var v=l.keys[p],m=u[f(v)?v:v.key];void 0===m&&(m=l.messages[p]),d.push(m)}s[i]=d}else s[i]=l.messages}return s}}(e,n))||l)return r;if(u)try{a.writeFileSync(i,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}(e,n)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(c.languagePackSupport)return m(n);var t=function(e){for(var n=c.language;n;){var r=o.join(e,"nls.bundle.".concat(n,".json"));if(a.existsSync(r))return r;var t=n.lastIndexOf("-");n=t>0?n.substring(0,t):void 0}if(void 0===n&&(r=o.join(e,"nls.bundle.json"),a.existsSync(r)))return r}(n);if(t)try{return g(t)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=m(n)}return r}function h(e){if(!e)return s.localize;var n=o.extname(e);if(n&&(e=e.substr(0,e.length-n.length)),c.messageFormat===s.MessageFormat.both||c.messageFormat===s.MessageFormat.bundle){var r=function(e){for(var n,r=o.dirname(e);n=o.join(r,"nls.metadata.header.json"),!a.existsSync(n);){var t=o.dirname(r);if(t===r){n=void 0;break}r=t}return n}(e);if(r){var t=o.dirname(r),i=l[t];if(void 0===i)try{var u=JSON.parse(a.readFileSync(r,"utf8"));try{var d=S(u,t);i=v(t,d?{header:u,nlsBundle:d}:null)}catch(e){console.error("Failed to load nls bundle",e),i=v(t,null)}}catch(e){console.error("Failed to read header file",e),i=v(t,null)}if(i){var f=e.substr(t.length+1).replace(/\\/g,"/"),m=i.nlsBundle[f];return void 0===m?(console.error("Messages for file ".concat(e," not found. See console for details.")),function(){return"Messages not found."}):p(m)}}}if(c.messageFormat===s.MessageFormat.both||c.messageFormat===s.MessageFormat.file)try{var h=g(function(e){var n;if(c.cacheLanguageResolution&&n)n=n;else{if(s.isPseudo||!c.language)n=".nls.json";else for(var r=c.language;r;){var o=".nls."+r+".json";if(a.existsSync(e+o)){n=o;break}var t=r.lastIndexOf("-");t>0?r=r.substring(0,t):(n=".nls.json",r=null)}c.cacheLanguageResolution&&(n=n)}return e+n}(e));return Array.isArray(h)?p(h):(0,s.isDefined)(h.messages)&&(0,s.isDefined)(h.keys)?p(h.messages):(console.error("String bundle '".concat(e,"' uses an unsupported format.")),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file ".concat(e)),function(){return"Failed to load message bundle. See console for details."}}function _(e){return e&&(f(e.locale)&&(c.locale=e.locale.toLowerCase(),c.language=c.locale,l=Object.create(null)),void 0!==e.messageFormat&&(c.messageFormat=e.messageFormat),e.bundleFormat===s.BundleFormat.standalone&&!0===c.languagePackSupport&&(c.languagePackSupport=!1)),(0,s.setPseudo)("pseudo"===c.locale),h}!function(){if(c={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:s.MessageFormat.bundle},f(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),n=void 0;if(e.availableLanguages){var r=e.availableLanguages["*"];f(r)&&(n=r)}if(f(e.locale)&&(c.locale=e.locale.toLowerCase()),void 0===n?c.language=c.locale:"en"!==n&&(c.language=n),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(c.languagePackSupport=e._languagePackSupport),f(e._cacheRoot)&&(c.cacheRoot=e._cacheRoot),f(e._languagePackId)&&(c.languagePackId=e._languagePackId),f(e._translationsConfigFile)){c.translationsConfigFile=e._translationsConfigFile;try{c.translationsConfig=g(c.translationsConfigFile)}catch(n){if(e._corruptedFile){var t=o.dirname(e._corruptedFile);a.exists(t,(function(n){n&&a.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}))}}}}catch(e){}(0,s.setPseudo)("pseudo"===c.locale),l=Object.create(null)}(),n.loadMessageBundle=h,n.config=_,t.default.install(Object.freeze({loadMessageBundle:h,config:_}))},6675:(e,n,r)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IPCClient=void 0;const o=r(8605);n.IPCClient=class{constructor(e){this.handlerName=e;const n=process.env.VSCODE_GIT_IPC_HANDLE;if(!n)throw new Error("Missing VSCODE_GIT_IPC_HANDLE");this.ipcHandlePath=n}call(e){const n={socketPath:this.ipcHandlePath,path:`/${this.handlerName}`,method:"POST"};return new Promise(((r,a)=>{const t=o.request(n,(e=>{if(200!==e.statusCode)return a(new Error(`Bad status code: ${e.statusCode}`));const n=[];e.on("data",(e=>n.push(e))),e.on("end",(()=>r(JSON.parse(Buffer.concat(n).toString("utf8")))))}));t.on("error",(e=>a(e))),t.write(JSON.stringify(e)),t.end()}))}}},5747:e=>{e.exports=require("fs")},8605:e=>{e.exports=require("http")},5622:e=>{e.exports=require("path")}},n={};function r(o){var a=n[o];if(void 0!==a)return a.exports;var t=n[o]={exports:{}};return e[o](t,t.exports,r),t.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0});const n=r(5747),a=r(8472),t=r(6675),s=a.loadMessageBundle(r(5622).join(__dirname,"askpass-main.ts"));function i(e){console.error(s(0,null)),console.error(e),process.exit(1)}!function(e){if(!process.env.VSCODE_GIT_ASKPASS_PIPE)return i("Missing pipe");if(!process.env.VSCODE_GIT_ASKPASS_TYPE)return i("Missing type");if("https"!==process.env.VSCODE_GIT_ASKPASS_TYPE&&"ssh"!==process.env.VSCODE_GIT_ASKPASS_TYPE)return i(`Invalid type: ${process.env.VSCODE_GIT_ASKPASS_TYPE}`);if("fetch"===process.env.VSCODE_GIT_COMMAND&&process.env.VSCODE_GIT_FETCH_SILENT)return i("Skip silent fetch commands");const r=process.env.VSCODE_GIT_ASKPASS_PIPE,o=process.env.VSCODE_GIT_ASKPASS_TYPE,a="https"===o?e[2]:e[3];let s,l,c;"https"===o&&(s=e[4].replace(/^["']+|["':]+$/g,"")),"ssh"===o&&(/passphrase/i.test(a)?l=e[6].replace(/^["']+|["':]+$/g,""):(s=e[6].replace(/^["']+|["':]+$/g,""),c=e[15])),new t.IPCClient("askpass").call({askpassType:o,request:a,host:s,file:l,fingerprint:c}).then((e=>{n.writeFileSync(r,e+"\n"),setTimeout((()=>process.exit(0)),0)})).catch((e=>i(e)))}(process.argv)})();var a=exports;for(var t in o)a[t]=o[t];o.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/extensions/git/dist/askpass-main.js.map