"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/var _amdLoaderGlobal=this,_commonjsGlobal=typeof global=="object"?global:{},AMDLoader;(function(c){c.global=_amdLoaderGlobal;var E=function(){function g(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1,this._isElectronNodeIntegrationWebWorker=!1}return Object.defineProperty(g.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isElectronNodeIntegrationWebWorker",{get:function(){return this._detect(),this._isElectronNodeIntegrationWebWorker},enumerable:!1,configurable:!0}),g.prototype._detect=function(){this._detected||(this._detected=!0,this._isWindows=g._isWindows(),this._isNode=typeof module<"u"&&!!module.exports,this._isElectronRenderer=typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.electron<"u"&&process.type==="renderer",this._isWebWorker=typeof c.global.importScripts=="function",this._isElectronNodeIntegrationWebWorker=this._isWebWorker&&typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.electron<"u"&&process.type==="worker")},g._isWindows=function(){return typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0?!0:typeof process<"u"?process.platform==="win32":!1},g}();c.Environment=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function f(o,_,s){this.type=o,this.detail=_,this.timestamp=s}return f}();c.LoaderEvent=E;var g=function(){function f(o){this._events=[new E(1,"",o)]}return f.prototype.record=function(o,_){this._events.push(new E(o,_,c.Utilities.getHighPerformanceTimestamp()))},f.prototype.getEvents=function(){return this._events},f}();c.LoaderEventRecorder=g;var y=function(){function f(){}return f.prototype.record=function(o,_){},f.prototype.getEvents=function(){return[]},f.INSTANCE=new f,f}();c.NullLoaderEventRecorder=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function g(){}return g.fileUriToFilePath=function(y,f){if(f=decodeURI(f).replace(/%23/g,"#"),y){if(/^file:\/\/\//.test(f))return f.substr(8);if(/^file:\/\//.test(f))return f.substr(5)}else if(/^file:\/\//.test(f))return f.substr(7);return f},g.startsWith=function(y,f){return y.length>=f.length&&y.substr(0,f.length)===f},g.endsWith=function(y,f){return y.length>=f.length&&y.substr(y.length-f.length)===f},g.containsQueryString=function(y){return/^[^\#]*\?/gi.test(y)},g.isAbsolutePath=function(y){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(y)},g.forEachProperty=function(y,f){if(y){var o=void 0;for(o in y)y.hasOwnProperty(o)&&f(o,y[o])}},g.isEmpty=function(y){var f=!0;return g.forEachProperty(y,function(){f=!1}),f},g.recursiveClone=function(y){if(!y||typeof y!="object"||y instanceof RegExp||!Array.isArray(y)&&Object.getPrototypeOf(y)!==Object.prototype)return y;var f=Array.isArray(y)?[]:{};return g.forEachProperty(y,function(o,_){_&&typeof _=="object"?f[o]=g.recursiveClone(_):f[o]=_}),f},g.generateAnonymousModule=function(){return"===anonymous"+g.NEXT_ANONYMOUS_ID+++"==="},g.isAnonymousModule=function(y){return g.startsWith(y,"===anonymous")},g.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=c.global.performance&&typeof c.global.performance.now=="function"),this.HAS_PERFORMANCE_NOW?c.global.performance.now():Date.now()},g.NEXT_ANONYMOUS_ID=1,g.PERFORMANCE_NOW_PROBED=!1,g.HAS_PERFORMANCE_NOW=!1,g}();c.Utilities=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){function E(f){if(f instanceof Error)return f;var o=new Error(f.message||String(f)||"Unknown Error");return f.stack&&(o.stack=f.stack),o}c.ensureError=E;var g=function(){function f(){}return f.validateConfigurationOptions=function(o){function _(e){if(e.phase==="loading"){console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}if(e.phase==="factory"){console.error('The factory function of "'+e.moduleId+'" has thrown an exception'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}}if(o=o||{},typeof o.baseUrl!="string"&&(o.baseUrl=""),typeof o.isBuild!="boolean"&&(o.isBuild=!1),typeof o.paths!="object"&&(o.paths={}),typeof o.config!="object"&&(o.config={}),typeof o.catchError>"u"&&(o.catchError=!1),typeof o.recordStats>"u"&&(o.recordStats=!1),typeof o.urlArgs!="string"&&(o.urlArgs=""),typeof o.onError!="function"&&(o.onError=_),Array.isArray(o.ignoreDuplicateModules)||(o.ignoreDuplicateModules=[]),o.baseUrl.length>0&&(c.Utilities.endsWith(o.baseUrl,"/")||(o.baseUrl+="/")),typeof o.cspNonce!="string"&&(o.cspNonce=""),typeof o.preferScriptTags>"u"&&(o.preferScriptTags=!1),o.nodeCachedData&&typeof o.nodeCachedData=="object"&&(typeof o.nodeCachedData.seed!="string"&&(o.nodeCachedData.seed="seed"),(typeof o.nodeCachedData.writeDelay!="number"||o.nodeCachedData.writeDelay<0)&&(o.nodeCachedData.writeDelay=1e3*7),!o.nodeCachedData.path||typeof o.nodeCachedData.path!="string")){var s=E(new Error("INVALID cached data configuration, 'path' MUST be set"));s.phase="configuration",o.onError(s),o.nodeCachedData=void 0}return o},f.mergeConfigurationOptions=function(o,_){o===void 0&&(o=null),_===void 0&&(_=null);var s=c.Utilities.recursiveClone(_||{});return c.Utilities.forEachProperty(o,function(e,t){e==="ignoreDuplicateModules"&&typeof s.ignoreDuplicateModules<"u"?s.ignoreDuplicateModules=s.ignoreDuplicateModules.concat(t):e==="paths"&&typeof s.paths<"u"?c.Utilities.forEachProperty(t,function(r,n){return s.paths[r]=n}):e==="config"&&typeof s.config<"u"?c.Utilities.forEachProperty(t,function(r,n){return s.config[r]=n}):s[e]=c.Utilities.recursiveClone(t)}),f.validateConfigurationOptions(s)},f}();c.ConfigurationOptionsUtil=g;var y=function(){function f(o,_){if(this._env=o,this.options=g.mergeConfigurationOptions(_),this._createIgnoreDuplicateModulesMap(),this._createSortedPathsRules(),this.options.baseUrl===""&&this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var s=this.options.nodeRequire.main.filename,e=Math.max(s.lastIndexOf("/"),s.lastIndexOf("\\"));this.options.baseUrl=s.substring(0,e+1)}}return f.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var o=0;o<this.options.ignoreDuplicateModules.length;o++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[o]]=!0},f.prototype._createSortedPathsRules=function(){var o=this;this.sortedPathsRules=[],c.Utilities.forEachProperty(this.options.paths,function(_,s){Array.isArray(s)?o.sortedPathsRules.push({from:_,to:s}):o.sortedPathsRules.push({from:_,to:[s]})}),this.sortedPathsRules.sort(function(_,s){return s.from.length-_.from.length})},f.prototype.cloneAndMerge=function(o){return new f(this._env,g.mergeConfigurationOptions(o,this.options))},f.prototype.getOptionsLiteral=function(){return this.options},f.prototype._applyPaths=function(o){for(var _,s=0,e=this.sortedPathsRules.length;s<e;s++)if(_=this.sortedPathsRules[s],c.Utilities.startsWith(o,_.from)){for(var t=[],r=0,n=_.to.length;r<n;r++)t.push(_.to[r]+o.substr(_.from.length));return t}return[o]},f.prototype._addUrlArgsToUrl=function(o){return c.Utilities.containsQueryString(o)?o+"&"+this.options.urlArgs:o+"?"+this.options.urlArgs},f.prototype._addUrlArgsIfNecessaryToUrl=function(o){return this.options.urlArgs?this._addUrlArgsToUrl(o):o},f.prototype._addUrlArgsIfNecessaryToUrls=function(o){if(this.options.urlArgs)for(var _=0,s=o.length;_<s;_++)o[_]=this._addUrlArgsToUrl(o[_]);return o},f.prototype.moduleIdToPaths=function(o){if(this._env.isNode){var _=this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(o);if(_)return this.isBuild()?["empty:"]:["node|"+o]}var s=o,e;if(!c.Utilities.endsWith(s,".js")&&!c.Utilities.isAbsolutePath(s)){e=this._applyPaths(s);for(var t=0,r=e.length;t<r;t++)this.isBuild()&&e[t]==="empty:"||(c.Utilities.isAbsolutePath(e[t])||(e[t]=this.options.baseUrl+e[t]),!c.Utilities.endsWith(e[t],".js")&&!c.Utilities.containsQueryString(e[t])&&(e[t]=e[t]+".js"))}else!c.Utilities.endsWith(s,".js")&&!c.Utilities.containsQueryString(s)&&(s=s+".js"),e=[s];return this._addUrlArgsIfNecessaryToUrls(e)},f.prototype.requireToUrl=function(o){var _=o;return c.Utilities.isAbsolutePath(_)||(_=this._applyPaths(_)[0],c.Utilities.isAbsolutePath(_)||(_=this.options.baseUrl+_)),this._addUrlArgsIfNecessaryToUrl(_)},f.prototype.isBuild=function(){return this.options.isBuild},f.prototype.shouldInvokeFactory=function(o){return!!(!this.options.isBuild||c.Utilities.isAnonymousModule(o)||this.options.buildForceInvokeFactory&&this.options.buildForceInvokeFactory[o])},f.prototype.isDuplicateMessageIgnoredFor=function(o){return this.ignoreDuplicateModulesMap.hasOwnProperty(o)},f.prototype.getConfigForModule=function(o){if(this.options.config)return this.options.config[o]},f.prototype.shouldCatchError=function(){return this.options.catchError},f.prototype.shouldRecordStats=function(){return this.options.recordStats},f.prototype.onError=function(o){this.options.onError(o)},f}();c.Configuration=y})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function e(t){this._env=t,this._scriptLoader=null,this._callbackMap={}}return e.prototype.load=function(t,r,n,i){var u=this;if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new f;else if(this._env.isElectronRenderer){var a=t.getConfig().getOptionsLiteral().preferScriptTags;a?this._scriptLoader=new g:this._scriptLoader=new o(this._env)}else this._env.isNode?this._scriptLoader=new o(this._env):this._scriptLoader=new g;var l={callback:n,errorback:i};if(this._callbackMap.hasOwnProperty(r)){this._callbackMap[r].push(l);return}this._callbackMap[r]=[l],this._scriptLoader.load(t,r,function(){return u.triggerCallback(r)},function(d){return u.triggerErrorback(r,d)})},e.prototype.triggerCallback=function(t){var r=this._callbackMap[t];delete this._callbackMap[t];for(var n=0;n<r.length;n++)r[n].callback()},e.prototype.triggerErrorback=function(t,r){var n=this._callbackMap[t];delete this._callbackMap[t];for(var i=0;i<n.length;i++)n[i].errorback(r)},e}(),g=function(){function e(){}return e.prototype.attachListeners=function(t,r,n){var i=function(){t.removeEventListener("load",u),t.removeEventListener("error",a)},u=function(l){i(),r()},a=function(l){i(),n(l)};t.addEventListener("load",u),t.addEventListener("error",a)},e.prototype.load=function(t,r,n,i){if(/^node\|/.test(r)){var u=t.getConfig().getOptionsLiteral(),a=_(t.getRecorder(),u.nodeRequire||c.global.nodeRequire),l=r.split("|"),d=null;try{d=a(l[1])}catch(b){i(b);return}t.enqueueDefineAnonymousModule([],function(){return d}),n()}else{var p=document.createElement("script");p.setAttribute("async","async"),p.setAttribute("type","text/javascript"),this.attachListeners(p,n,i);var v=t.getConfig().getOptionsLiteral().trustedTypesPolicy;v&&(r=v.createScriptURL(r)),p.setAttribute("src",r);var h=t.getConfig().getOptionsLiteral().cspNonce;h&&p.setAttribute("nonce",h),document.getElementsByTagName("head")[0].appendChild(p)}},e}();function y(e){var t=e.getConfig().getOptionsLiteral().trustedTypesPolicy;try{var r=t?self.eval(t.createScript("","true")):new Function("true");return r.call(self),!0}catch{return!1}}var f=function(){function e(){this._cachedCanUseEval=null}return e.prototype._canUseEval=function(t){return this._cachedCanUseEval===null&&(this._cachedCanUseEval=y(t)),this._cachedCanUseEval},e.prototype.load=function(t,r,n,i){if(/^node\|/.test(r)){var u=t.getConfig().getOptionsLiteral(),a=_(t.getRecorder(),u.nodeRequire||c.global.nodeRequire),l=r.split("|"),d=null;try{d=a(l[1])}catch(h){i(h);return}t.enqueueDefineAnonymousModule([],function(){return d}),n()}else{var p=t.getConfig().getOptionsLiteral().trustedTypesPolicy,v=/^((http:)|(https:)|(file:))/.test(r)&&r.substring(0,self.origin.length)!==self.origin;if(!v&&this._canUseEval(t)){fetch(r).then(function(h){if(h.status!==200)throw new Error(h.statusText);return h.text()}).then(function(h){h=h+`
//# sourceURL=`+r;var b=p?self.eval(p.createScript("",h)):new Function(h);b.call(self),n()}).then(void 0,i);return}try{p&&(r=p.createScriptURL(r)),importScripts(r),n()}catch(h){i(h)}}},e}(),o=function(){function e(t){this._env=t,this._didInitialize=!1,this._didPatchNodeRequire=!1}return e.prototype._init=function(t){this._didInitialize||(this._didInitialize=!0,this._fs=t("fs"),this._vm=t("vm"),this._path=t("path"),this._crypto=t("crypto"))},e.prototype._initNodeRequire=function(t,r){var n=r.getConfig().getOptionsLiteral().nodeCachedData;if(!n||this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;var i=this,u=t("module");function a(l){var d=l.constructor,p=function(h){try{return l.require(h)}finally{}};return p.resolve=function(h,b){return d._resolveFilename(h,l,!1,b)},p.resolve.paths=function(h){return d._resolveLookupPaths(h,l)},p.main=process.mainModule,p.extensions=d._extensions,p.cache=d._cache,p}u.prototype._compile=function(l,d){var p=u.wrap(l.replace(/^#!.*/,"")),v=r.getRecorder(),h=i._getCachedDataPath(n,d),b={filename:d},C;try{var R=i._fs.readFileSync(h);C=R.slice(0,16),b.cachedData=R.slice(16),v.record(60,h)}catch{v.record(61,h)}var m=new i._vm.Script(p,b),I=m.runInThisContext(b),U=i._path.dirname(d),w=a(this),O=[this.exports,w,this,d,U,process,_commonjsGlobal,Buffer],P=I.apply(this.exports,O);return i._handleCachedData(m,p,h,!b.cachedData,r),i._verifyCachedData(m,p,h,C,r),P}},e.prototype.load=function(t,r,n,i){var u=this,a=t.getConfig().getOptionsLiteral(),l=_(t.getRecorder(),a.nodeRequire||c.global.nodeRequire),d=a.nodeInstrumenter||function(I){return I};this._init(l),this._initNodeRequire(l,t);var p=t.getRecorder();if(/^node\|/.test(r)){var v=r.split("|"),h=null;try{h=l(v[1])}catch(I){i(I);return}t.enqueueDefineAnonymousModule([],function(){return h}),n()}else{r=c.Utilities.fileUriToFilePath(this._env.isWindows,r);var b=this._path.normalize(r),C=this._getElectronRendererScriptPathOrUri(b),R=Boolean(a.nodeCachedData),m=R?this._getCachedDataPath(a.nodeCachedData,r):void 0;this._readSourceAndCachedData(b,m,p,function(I,U,w,O){if(I){i(I);return}var P;U.charCodeAt(0)===e._BOM?P=e._PREFIX+U.substring(1)+e._SUFFIX:P=e._PREFIX+U+e._SUFFIX,P=d(P,b);var S={filename:C,cachedData:w},D=u._createAndEvalScript(t,P,S,n,i);u._handleCachedData(D,P,m,R&&!w,t),u._verifyCachedData(D,P,m,O,t)})}},e.prototype._createAndEvalScript=function(t,r,n,i,u){var a=t.getRecorder();a.record(31,n.filename);var l=new this._vm.Script(r,n),d=l.runInThisContext(n),p=t.getGlobalAMDDefineFunc(),v=!1,h=function(){return v=!0,p.apply(null,arguments)};return h.amd=p.amd,d.call(c.global,t.getGlobalAMDRequireFunc(),h,n.filename,this._path.dirname(n.filename)),a.record(32,n.filename),v?i():u(new Error("Didn't receive define call in "+n.filename+"!")),l},e.prototype._getElectronRendererScriptPathOrUri=function(t){if(!this._env.isElectronRenderer)return t;var r=t.match(/^([a-z])\:(.*)/i);return r?"file:///"+(r[1].toUpperCase()+":"+r[2]).replace(/\\/g,"/"):"file://"+t},e.prototype._getCachedDataPath=function(t,r){var n=this._crypto.createHash("md5").update(r,"utf8").update(t.seed,"utf8").update(process.arch,"").digest("hex"),i=this._path.basename(r).replace(/\.js$/,"");return this._path.join(t.path,i+"-"+n+".code")},e.prototype._handleCachedData=function(t,r,n,i,u){var a=this;t.cachedDataRejected?this._fs.unlink(n,function(l){u.getRecorder().record(62,n),a._createAndWriteCachedData(t,r,n,u),l&&u.getConfig().onError(l)}):i&&this._createAndWriteCachedData(t,r,n,u)},e.prototype._createAndWriteCachedData=function(t,r,n,i){var u=this,a=Math.ceil(i.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),l=-1,d=0,p=void 0,v=function(){setTimeout(function(){p||(p=u._crypto.createHash("md5").update(r,"utf8").digest());var h=t.createCachedData();if(!(h.length===0||h.length===l||d>=5)){if(h.length<l){v();return}l=h.length,u._fs.writeFile(n,Buffer.concat([p,h]),function(b){b&&i.getConfig().onError(b),i.getRecorder().record(63,n),v()})}},a*Math.pow(4,d++))};v()},e.prototype._readSourceAndCachedData=function(t,r,n,i){if(!r)this._fs.readFile(t,{encoding:"utf8"},i);else{var u=void 0,a=void 0,l=void 0,d=2,p=function(v){v?i(v):--d===0&&i(void 0,u,a,l)};this._fs.readFile(t,{encoding:"utf8"},function(v,h){u=h,p(v)}),this._fs.readFile(r,function(v,h){!v&&h&&h.length>0?(l=h.slice(0,16),a=h.slice(16),n.record(60,r)):n.record(61,r),p()})}},e.prototype._verifyCachedData=function(t,r,n,i,u){var a=this;!i||t.cachedDataRejected||setTimeout(function(){var l=a._crypto.createHash("md5").update(r,"utf8").digest();i.equals(l)||(u.getConfig().onError(new Error("FAILED TO VERIFY CACHED DATA, deleting stale '"+n+"' now, but a RESTART IS REQUIRED")),a._fs.unlink(n,function(d){d&&u.getConfig().onError(d)}))},Math.ceil(5e3*(1+Math.random())))},e._BOM=65279,e._PREFIX="(function (require, define, __filename, __dirname) { ",e._SUFFIX=`
});`,e}();function _(e,t){if(t.__$__isRecorded)return t;var r=function(i){e.record(33,i);try{return t(i)}finally{e.record(34,i)}};return r.__$__isRecorded=!0,r}c.ensureRecordedNodeRequire=_;function s(e){return new E(e)}c.createScriptLoader=s})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(c){var E=function(){function s(e){var t=e.lastIndexOf("/");t!==-1?this.fromModulePath=e.substr(0,t+1):this.fromModulePath=""}return s._normalizeModuleId=function(e){var t=e,r;for(r=/\/\.\//;r.test(t);)t=t.replace(r,"/");for(t=t.replace(/^\.\//g,""),r=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;r.test(t);)t=t.replace(r,"/");return t=t.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,""),t},s.prototype.resolveModule=function(e){var t=e;return c.Utilities.isAbsolutePath(t)||(c.Utilities.startsWith(t,"./")||c.Utilities.startsWith(t,"../"))&&(t=s._normalizeModuleId(this.fromModulePath+t)),t},s.ROOT=new s(""),s}();c.ModuleIdResolver=E;var g=function(){function s(e,t,r,n,i,u){this.id=e,this.strId=t,this.dependencies=r,this._callback=n,this._errorback=i,this.moduleIdResolver=u,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}return s._safeInvokeFunction=function(e,t){try{return{returnedValue:e.apply(c.global,t),producedError:null}}catch(r){return{returnedValue:null,producedError:r}}},s._invokeFactory=function(e,t,r,n){return e.shouldInvokeFactory(t)?e.shouldCatchError()?this._safeInvokeFunction(r,n):{returnedValue:r.apply(c.global,n),producedError:null}:{returnedValue:null,producedError:null}},s.prototype.complete=function(e,t,r,n){this._isComplete=!0;var i=null;if(this._callback)if(typeof this._callback=="function"){e.record(21,this.strId);var u=s._invokeFactory(t,this.strId,this._callback,r);i=u.producedError,e.record(22,this.strId),!i&&typeof u.returnedValue<"u"&&(!this.exportsPassedIn||c.Utilities.isEmpty(this.exports))&&(this.exports=u.returnedValue)}else this.exports=this._callback;if(i){var a=c.ensureError(i);a.phase="factory",a.moduleId=this.strId,a.neededBy=n(this.id),this.error=a,t.onError(a)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null},s.prototype.onDependencyError=function(e){return this._isComplete=!0,this.error=e,this._errorback?(this._errorback(e),!0):!1},s.prototype.isComplete=function(){return this._isComplete},s}();c.Module=g;var y=function(){function s(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return s.prototype.getMaxModuleId=function(){return this._nextId},s.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return typeof t>"u"&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},s.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},s}(),f=function(){function s(e){this.id=e}return s.EXPORTS=new s(0),s.MODULE=new s(1),s.REQUIRE=new s(2),s}();c.RegularDependency=f;var o=function(){function s(e,t,r){this.id=e,this.pluginId=t,this.pluginParam=r}return s}();c.PluginDependency=o;var _=function(){function s(e,t,r,n,i){i===void 0&&(i=0),this._env=e,this._scriptLoader=t,this._loaderAvailableTimestamp=i,this._defineFunc=r,this._requireFunc=n,this._moduleIdProvider=new y,this._config=new c.Configuration(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return s.prototype.reset=function(){return new s(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},s.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},s.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},s._findRelevantLocationInStack=function(e,t){for(var r=function(b){return b.replace(/\\/g,"/")},n=r(e),i=t.split(/\n/),u=0;u<i.length;u++){var a=i[u].match(/(.*):(\d+):(\d+)\)?$/);if(a){var l=a[1],d=a[2],p=a[3],v=Math.max(l.lastIndexOf(" ")+1,l.lastIndexOf("(")+1);if(l=l.substr(v),l=r(l),l===n){var h={line:parseInt(d,10),col:parseInt(p,10)};return h.line===1&&(h.col-=53),h}}}throw new Error("Could not correlate define call site for needle "+e)},s.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,r=0,n=this._modules2.length;r<n;r++){var i=this._modules2[r];if(!!i){var u=this._buildInfoPath[i.id]||null,a=this._buildInfoDefineStack[i.id]||null,l=this._buildInfoDependencies[i.id];e[t++]={id:i.strId,path:u,defineLocation:u&&a?s._findRelevantLocationInStack(u,a):null,dependencies:l,shim:null,exports:i.exports}}}return e},s.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new c.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=c.NullLoaderEventRecorder.INSTANCE),this._recorder},s.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},s.prototype.enqueueDefineAnonymousModule=function(e,t){if(this._currentAnonymousDefineCall!==null)throw new Error("Can only have one anonymous define call per script file");var r=null;this._config.isBuild()&&(r=new Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:r,dependencies:e,callback:t}},s.prototype.defineModule=function(e,t,r,n,i,u){var a=this;u===void 0&&(u=new E(e));var l=this._moduleIdProvider.getModuleId(e);if(this._modules2[l]){this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");return}var d=new g(l,e,this._normalizeDependencies(t,u),r,n,u);this._modules2[l]=d,this._config.isBuild()&&(this._buildInfoDefineStack[l]=i,this._buildInfoDependencies[l]=(d.dependencies||[]).map(function(p){return a._moduleIdProvider.getStrModuleId(p.id)})),this._resolve(d)},s.prototype._normalizeDependency=function(e,t){if(e==="exports")return f.EXPORTS;if(e==="module")return f.MODULE;if(e==="require")return f.REQUIRE;var r=e.indexOf("!");if(r>=0){var n=t.resolveModule(e.substr(0,r)),i=t.resolveModule(e.substr(r+1)),u=this._moduleIdProvider.getModuleId(n+"!"+i),a=this._moduleIdProvider.getModuleId(n);return new o(u,a,i)}return new f(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},s.prototype._normalizeDependencies=function(e,t){for(var r=[],n=0,i=0,u=e.length;i<u;i++)r[n++]=this._normalizeDependency(e[i],t);return r},s.prototype._relativeRequire=function(e,t,r,n){if(typeof t=="string")return this.synchronousRequire(t,e);this.defineModule(c.Utilities.generateAnonymousModule(),t,r,n,null,e)},s.prototype.synchronousRequire=function(e,t){t===void 0&&(t=new E(e));var r=this._normalizeDependency(e,t),n=this._modules2[r.id];if(!n)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!n.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(n.error)throw n.error;return n.exports},s.prototype.configure=function(e,t){var r=this._config.shouldRecordStats();t?this._config=new c.Configuration(this._env,e):this._config=this._config.cloneAndMerge(e),this._config.shouldRecordStats()&&!r&&(this._recorder=null)},s.prototype.getConfig=function(){return this._config},s.prototype._onLoad=function(e){if(this._currentAnonymousDefineCall!==null){var t=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},s.prototype._createLoadError=function(e,t){var r=this,n=this._moduleIdProvider.getStrModuleId(e),i=(this._inverseDependencies2[e]||[]).map(function(a){return r._moduleIdProvider.getStrModuleId(a)}),u=c.ensureError(t);return u.phase="loading",u.moduleId=n,u.neededBy=i,u},s.prototype._onLoadError=function(e,t){var r=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new g(e,this._moduleIdProvider.getStrModuleId(e),[],function(){},null,null));for(var n=[],i=0,u=this._moduleIdProvider.getMaxModuleId();i<u;i++)n[i]=!1;var a=!1,l=[];for(l.push(e),n[e]=!0;l.length>0;){var d=l.shift(),p=this._modules2[d];p&&(a=p.onDependencyError(r)||a);var v=this._inverseDependencies2[d];if(v)for(var i=0,u=v.length;i<u;i++){var h=v[i];n[h]||(l.push(h),n[h]=!0)}}a||this._config.onError(r)},s.prototype._hasDependencyPath=function(e,t){var r=this._modules2[e];if(!r)return!1;for(var n=[],i=0,u=this._moduleIdProvider.getMaxModuleId();i<u;i++)n[i]=!1;var a=[];for(a.push(r),n[e]=!0;a.length>0;){var l=a.shift(),d=l.dependencies;if(d)for(var i=0,u=d.length;i<u;i++){var p=d[i];if(p.id===t)return!0;var v=this._modules2[p.id];v&&!n[p.id]&&(n[p.id]=!0,a.push(v))}}return!1},s.prototype._findCyclePath=function(e,t,r){if(e===t||r===50)return[e];var n=this._modules2[e];if(!n)return null;var i=n.dependencies;if(i)for(var u=0,a=i.length;u<a;u++){var l=this._findCyclePath(i[u].id,t,r+1);if(l!==null)return l.push(e),l}return null},s.prototype._createRequire=function(e){var t=this,r=function(n,i,u){return t._relativeRequire(e,n,i,u)};return r.toUrl=function(n){return t._config.requireToUrl(e.resolveModule(n))},r.getStats=function(){return t.getLoaderEvents()},r.hasDependencyCycle=function(){return t._hasDependencyCycle},r.config=function(n,i){i===void 0&&(i=!1),t.configure(n,i)},r.__$__nodeRequire=c.global.nodeRequire,r},s.prototype._loadModule=function(e){var t=this;if(!(this._modules2[e]||this._knownModules2[e])){this._knownModules2[e]=!0;var r=this._moduleIdProvider.getStrModuleId(e),n=this._config.moduleIdToPaths(r),i=/^@[^\/]+\/[^\/]+$/;this._env.isNode&&(r.indexOf("/")===-1||i.test(r))&&n.push("node|"+r);var u=-1,a=function(l){if(u++,u>=n.length)t._onLoadError(e,l);else{var d=n[u],p=t.getRecorder();if(t._config.isBuild()&&d==="empty:"){t._buildInfoPath[e]=d,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),t._onLoad(e);return}p.record(10,d),t._scriptLoader.load(t,d,function(){t._config.isBuild()&&(t._buildInfoPath[e]=d),p.record(11,d),t._onLoad(e)},function(v){p.record(12,d),a(v)})}};a(null)}},s.prototype._loadPluginDependency=function(e,t){var r=this;if(!(this._modules2[t.id]||this._knownModules2[t.id])){this._knownModules2[t.id]=!0;var n=function(i){r.defineModule(r._moduleIdProvider.getStrModuleId(t.id),[],i,null,null)};n.error=function(i){r._config.onError(r._createLoadError(t.id,i))},e.load(t.pluginParam,this._createRequire(E.ROOT),n,this._config.getOptionsLiteral())}},s.prototype._resolve=function(e){var t=this,r=e.dependencies;if(r)for(var n=0,i=r.length;n<i;n++){var u=r[n];if(u===f.EXPORTS){e.exportsPassedIn=!0,e.unresolvedDependenciesCount--;continue}if(u===f.MODULE){e.unresolvedDependenciesCount--;continue}if(u===f.REQUIRE){e.unresolvedDependenciesCount--;continue}var a=this._modules2[u.id];if(a&&a.isComplete()){if(a.error){e.onDependencyError(a.error);return}e.unresolvedDependenciesCount--;continue}if(this._hasDependencyPath(u.id,e.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(u.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var l=this._findCyclePath(u.id,e.id,0)||[];l.reverse(),l.push(u.id),console.warn(l.map(function(v){return t._moduleIdProvider.getStrModuleId(v)}).join(` => 
`)),e.unresolvedDependenciesCount--;continue}if(this._inverseDependencies2[u.id]=this._inverseDependencies2[u.id]||[],this._inverseDependencies2[u.id].push(e.id),u instanceof o){var d=this._modules2[u.pluginId];if(d&&d.isComplete()){this._loadPluginDependency(d.exports,u);continue}var p=this._inversePluginDependencies2.get(u.pluginId);p||(p=[],this._inversePluginDependencies2.set(u.pluginId,p)),p.push(u),this._loadModule(u.pluginId);continue}this._loadModule(u.id)}e.unresolvedDependenciesCount===0&&this._onModuleComplete(e)},s.prototype._onModuleComplete=function(e){var t=this,r=this.getRecorder();if(!e.isComplete()){var n=e.dependencies,i=[];if(n)for(var u=0,a=n.length;u<a;u++){var l=n[u];if(l===f.EXPORTS){i[u]=e.exports;continue}if(l===f.MODULE){i[u]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};continue}if(l===f.REQUIRE){i[u]=this._createRequire(e.moduleIdResolver);continue}var d=this._modules2[l.id];if(d){i[u]=d.exports;continue}i[u]=null}var p=function(R){return(t._inverseDependencies2[R]||[]).map(function(m){return t._moduleIdProvider.getStrModuleId(m)})};e.complete(r,this._config,i,p);var v=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,v)for(var u=0,a=v.length;u<a;u++){var h=v[u],b=this._modules2[h];b.unresolvedDependenciesCount--,b.unresolvedDependenciesCount===0&&this._onModuleComplete(b)}var C=this._inversePluginDependencies2.get(e.id);if(C){this._inversePluginDependencies2.delete(e.id);for(var u=0,a=C.length;u<a;u++)this._loadPluginDependency(e.exports,C[u])}}},s}();c.ModuleManager=_})(AMDLoader||(AMDLoader={}));var define,AMDLoader;(function(c){var E=new c.Environment,g=null,y=function(s,e,t){typeof s!="string"&&(t=e,e=s,s=null),(typeof e!="object"||!Array.isArray(e))&&(t=e,e=null),e||(e=["require","exports","module"]),s?g.defineModule(s,e,t,null,null):g.enqueueDefineAnonymousModule(e,t)};y.amd={jQuery:!0};var f=function(s,e){e===void 0&&(e=!1),g.configure(s,e)},o=function(){if(arguments.length===1){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0])){f(arguments[0]);return}if(typeof arguments[0]=="string")return g.synchronousRequire(arguments[0])}if((arguments.length===2||arguments.length===3)&&Array.isArray(arguments[0])){g.defineModule(c.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null);return}throw new Error("Unrecognized require call")};o.config=f,o.getConfig=function(){return g.getConfig().getOptionsLiteral()},o.reset=function(){g=g.reset()},o.getBuildInfo=function(){return g.getBuildInfo()},o.getStats=function(){return g.getLoaderEvents()},o.define=y;function _(){if(typeof c.global.require<"u"||typeof require<"u"){var s=c.global.require||require;if(typeof s=="function"&&typeof s.resolve=="function"){var e=c.ensureRecordedNodeRequire(g.getRecorder(),s);c.global.nodeRequire=e,o.nodeRequire=e,o.__$__nodeRequire=e}}E.isNode&&!E.isElectronRenderer&&!E.isElectronNodeIntegrationWebWorker?module.exports=o:(E.isElectronRenderer||(c.global.define=y),c.global.require=o)}c.init=_,(typeof c.global.define!="function"||!c.global.define.amd)&&(g=new c.ModuleManager(E,c.createScriptLoader(E),y,o,c.Utilities.getHighPerformanceTimestamp()),typeof c.global.require<"u"&&typeof c.global.require!="function"&&o.config(c.global.require),define=function(){return y.apply(null,arguments)},define.amd=y.amd,typeof doNotInitLoader>"u"&&_())})(AMDLoader||(AMDLoader={})),define("vs/css",["require","exports"],function(c,E){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.load=void 0;function g(s,e,t,r){if(r=r||{},(r["vs/css"]||{}).disabled){t({});return}const i=e.toUrl(s+".css");y(s,i,()=>{t({})},u=>{typeof t.error=="function"&&t.error("Could not find "+i+".")})}E.load=g;function y(s,e,t,r){if(f(s,e)){t();return}o(s,e,t,r)}function f(s,e){const t=document.getElementsByTagName("link");for(let r=0,n=t.length;r<n;r++){const i=t[r].getAttribute("data-name"),u=t[r].getAttribute("href");if(i===s||u===e)return!0}return!1}function o(s,e,t,r){const n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("data-name",s),_(s,n,t,r),n.setAttribute("href",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}function _(s,e,t,r){const n=()=>{e.removeEventListener("load",i),e.removeEventListener("error",u)},i=a=>{n(),t()},u=a=>{n(),r(a)};e.addEventListener("load",i),e.addEventListener("error",u)}}),define("vs/nls",["require","exports"],function(c,E){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.load=E.create=E.setPseudoTranslation=E.getConfiguredDefaultLocale=E.localize=void 0;let g=typeof document<"u"&&document.location&&document.location.hash.indexOf("pseudo=true")>=0;const y="i-default";function f(a,l){let d;return l.length===0?d=a:d=a.replace(/\{(\d+)\}/g,(p,v)=>{const h=v[0],b=l[h];let C=p;return typeof b=="string"?C=b:(typeof b=="number"||typeof b=="boolean"||b===void 0||b===null)&&(C=String(b)),C}),g&&(d="\uFF3B"+d.replace(/[aouei]/g,"$&$&")+"\uFF3D"),d}function o(a,l){let d=a[l];return d||(d=a["*"],d)?d:null}function _(a){return a.charAt(a.length-1)==="/"?a:a+"/"}async function s(a,l,d){const p=_(a)+_(l)+"vscode/"+_(d),v=await fetch(p);if(v.ok)return await v.json();throw new Error(`${v.status} - ${v.statusText}`)}function e(a){return function(l,d){const p=Array.prototype.slice.call(arguments,2);return f(a[l],p)}}function t(a,l,...d){return f(l,d)}E.localize=t;function r(a){}E.getConfiguredDefaultLocale=r;function n(a){g=a}E.setPseudoTranslation=n;function i(a,l){return{localize:e(l[a]),getConfiguredDefaultLocale:l.getConfiguredDefaultLocale??(d=>{})}}E.create=i;function u(a,l,d,p){const v=p["vs/nls"]??{};if(!a||a.length===0)return d({localize:t,getConfiguredDefaultLocale:()=>v.availableLanguages?.["*"]});const h=v.availableLanguages?o(v.availableLanguages,a):null,b=h===null||h===y;let C=".nls";b||(C=C+"."+h);const R=m=>{Array.isArray(m)?m.localize=e(m):m.localize=e(m[a]),m.getConfiguredDefaultLocale=()=>v.availableLanguages?.["*"],d(m)};typeof v.loadBundle=="function"?v.loadBundle(a,h,(m,I)=>{m?l([a+".nls"],R):R(I)}):v.translationServiceUrl&&!b?(async()=>{try{const m=await s(v.translationServiceUrl,h,a);return R(m)}catch(m){if(!h.includes("-"))return console.error(m),l([a+".nls"],R);try{const I=h.split("-")[0],U=await s(v.translationServiceUrl,I,a);return v.availableLanguages??={},v.availableLanguages["*"]=I,R(U)}catch(I){return console.error(I),l([a+".nls"],R)}}})():l([a+C],R,m=>{if(C===".nls"){console.error("Failed trying to load default language strings",m);return}console.error(`Failed to load message bundle for language ${h}. Falling back to the default language:`,m),l([a+".nls"],R)})}E.load=u});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/core/vs/loader.js.map
