/*!CK:134947890!*//*1456112090,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4D2nX"]); }

__d('LinkReactUnsafeHrefTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(){this.clear();}k.prototype.log=function(){i.log('logger:LinkReactUnsafeHrefLoggerConfig',this.$LinkReactUnsafeHrefTypedLogger1,h.BASIC);};k.prototype.logVital=function(){i.log('logger:LinkReactUnsafeHrefLoggerConfig',this.$LinkReactUnsafeHrefTypedLogger1,h.VITAL);};k.prototype.clear=function(){this.$LinkReactUnsafeHrefTypedLogger1={};return this;};k.prototype.updateData=function(m){this.$LinkReactUnsafeHrefTypedLogger1=babelHelpers['extends']({},this.$LinkReactUnsafeHrefTypedLogger1,m);return this;};k.prototype.setDocumentLocation=function(m){this.$LinkReactUnsafeHrefTypedLogger1.document_location=m;return this;};k.prototype.setHref=function(m){this.$LinkReactUnsafeHrefTypedLogger1.href=m;return this;};var l={document_location:true,href:true};f.exports=k;},null);
__d('isSecureInstagramDotComURI',['arrayContains'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=new RegExp('(^|\\.)instagram\\.com$','i'),j=['https'];function k(l){return (h(j,l.getProtocol())&&i.test(l.getDomain()));}f.exports=k;},null);
__d('LinkHrefChecker',['ErrorUtils','LinkReactUnsafeHrefTypedLogger','URI','ex','isSecureInstagramDotComURI','isFacebookURI','isMessengerDotComURI','isWitDotAiURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();function p(u){return (u.startsWith('#')||u.startsWith('/')&&!u.startsWith('//'));}function q(u,v){if(p(u))return true;var w=s(u),x=w?w.getProtocol():'';return (x===v||x===''||x==='http'||x==='https');}function r(u){if(p(u))return true;var v=s(u);return (v==null||m(v)||n(v)||l(v)||o(v));}function s(u){try{return new j(u);}catch(v){return null;}}var t={logIfInvalidProtocol:function(u,v){if(!q(u,v))new i().setHref(u).setDocumentLocation(document.location.toString()).log();}};f.exports=t;},null);
__d("XLinkshimLogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/si\/ajax\/l\/render_linkshim_log\/",{u:{type:"String",required:true},h:{type:"String",required:true},render_verification:{type:"Bool",defaultValue:false},enc:{type:"String"},d:{type:"String"}});},null);