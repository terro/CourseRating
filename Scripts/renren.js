﻿(function(i){var B={options:{},init:function(){this.options=r.apply(null,A([{},this.options],arguments));f.init(this.options)}},m={widget:"http://widget.renren.com/",rrstatic:"http://s.xnimg.cn/",apps:"http://apps.renren.com/",graph:"http://graph.renren.com/",graph_https:"https://graph.renren.com/",callback:"http://widget.renren.com/xd_callback.html",widgetOrigin:"http://widget.renren.com"},t=function(a){return function(b,c,d){if(c==null)return b;if(typeof c!="string")for(var e in c)a.call(b,e,c[e]);
else a.call(b,c,d);return b}},j=function(a){if(a==null)return"null";if(a instanceof String||typeof a=="string")return"string";if(a instanceof Array)return"array";if(a.nodeName){if(a.nodeType==1)return"element";if(a.nodeType==3)return/\S/.test(a.nodeValue)?"textnode":"whitespace"}else if(typeof a.length=="number"){if(a.callee)return"arguments";if("item"in a)return"collection"}return typeof a},v=function(){return(Math.random()*1073741824).toString(36).replace(".","")},x=t(function(a,b){this[a]=b}),
C=t(function(a,b){this.prototype[a]=b}),y=function(a,b,c){return function(){if(!c&&!arguments.length)return a.call(b);if(c&&arguments.length)return a.apply(b,c.concat(Array.from(arguments)));return a.apply(b,c||arguments)}},F=function(a){switch(j(a)){case "array":case "object":return u(a);default:return a}},u=function(a){if(j(a)=="array"){for(var b=a.length,c=Array(b);b--;)c[b]=F(a[b]);return c}else if(j(a)=="string")return new String(a);c={};for(b in a)c[b]=F(a[b]);return c},s=function(a,b,c){if(j(a)==
"array")for(var d=0,e=a.length;d<e;d++)d in a&&b.call(c,a[d],d,a);else for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)},D=function(a,b,c){for(var d=a.length,c=c<0?Math.max(0,d+c):c||0;c<d;c++)if(a[c]===b)return c;return-1},G=function(a,b,c){switch(j(c)){case "object":j(a[b])=="object"?r(a[b],c):a[b]=u(c);break;case "array":a[b]=u(c);break;default:a[b]=c}return a},r=function(a,b,c){if(j(b)=="string")return G(a,b,c);for(var d=1,e=arguments.length;d<e;d++){var g=arguments[d],
f;for(f in g)G(a,f,g[f])}return a},I=function(a,b,c){var d=j(a[b]);switch(j(c)){case "object":case "array":if(d=="object")H(a[b],c);else if(d=="array")for(var c=u(c),d=0,e=c.length;d<e;d++)D(a[b],c[d])==-1&&a[b].push(c[d]);else d=="null"&&(a[b]=u(c));break;default:d=="null"&&(a[b]=c)}return a},H=function(a,b,c){if(j(b)=="string")return I(a,b,c);for(var d=1,e=arguments.length;d<e;d++){var g=arguments[d],f;for(f in g)I(a,f,g[f])}return a},A=function(a){for(var b=1,c=arguments.length;b<c;b++)if(j(a)==
"array"){var d=j(arguments[b]);if(d=="array"||d=="arguments")for(var d=0,e=arguments[b].length;d<e;d++)a.push(arguments[b][d]);else d!="null"&&a.push(arguments[b])}else{var d=arguments[b]||{},g;for(g in d)a[g]=d[g]}return a},J=function(a,b,c){var d=/([^\]]*)\[([^\]]*)\](.*)?/.exec(a);if(d){var a=d[1],e=d[2],d=d[3];if(!isNaN(e)){var g=+e;e===g.toString(10)&&(e=g)}c[a]=c[a]||(typeof e=="number"?[]:{});d==null?c[a][e]=b:J(""+e+d,b,c[a])}else c[a]=b},E=function(a){for(var b={},a=a.split("&"),c,d,e=0;e<
a.length;e++)if((c=a[e].split("=",2))&&c.length==2)d=decodeURIComponent(c[1].replace(/\+/g," ")),j(d)=="string"&&(d=d.replace(/^\s+|\s+$/g,""),isNaN(d)||(numVal=+d,d===numVal.toString(10)&&(d=numVal))),J(decodeURIComponent(c[0].replace(/\+/g," ")),d,b);return b},w=function(a,b){var c=[];s(a,function(a,e){b&&(e=b+"["+e+"]");var g;switch(j(a)){case "object":g=w(a,e);break;case "array":var f={};s(a,function(a,b){f[b]=a});g=w(f,e);break;case "string":case "number":g=encodeURIComponent(e)+"="+encodeURIComponent(a)}g&&
a!=null&&c.push(g)});return c.join("&")},l=function(a){a instanceof Function&&(a={initialize:a});var b=function(){K(this);if(b.$prototyping)return this;this.$caller=null;var a=this.initialize?this.initialize.apply(this,arguments):this;this.$caller=this.caller=null;return a};l.prototype.implement.call(b,a);b.constructor=l;b.prototype.constructor=b;b.prototype.parent=M;return b},M=function(){if(!this.$caller)throw Error('The method "parent" cannot be called.');var a=this.$caller.$name,b=this.$caller.$owner.parent,
b=b?b.prototype[a]:null;if(!b)throw Error('The method "'+a+'" has no parent.');return b.apply(this,arguments)},K=function(a){for(var b in a){var c=a[b];switch(j(c)){case "object":var d=function(){};d.prototype=c;a[b]=K(new d);break;case "array":a[b]=u(c)}}return a},N=function(a,b,c){if(c.$origin)c=c.$origin;var d=function(){if(c.$protected&&this.$caller==null)throw Error('The method "'+b+'" cannot be called.');var a=this.caller,g=this.$caller;this.caller=g;this.$caller=d;var f=c.apply(this,arguments);
this.$caller=g;this.caller=a;return f};x(d,{$owner:a,$origin:c,$name:b});return d},C=function(a,b,c){if(l.Mutators.hasOwnProperty(a)&&(b=l.Mutators[a].call(this,b),b==null))return this;typeof b=="function"?this.prototype[a]=c?b:N(this,a,b):r(this.prototype,a,b);return this},z=function(a){return a.replace(/^on([A-Z])/,function(a,c){return c.toLowerCase()})};l.overloadSetter=function(a){return function(b,c){if(b==null)return this;if(typeof b!="string")for(var d in b)a.call(this,d,b[d]);else a.call(this,
b,c);return this}};l.prototype.implement=l.overloadSetter(C);l.Mutators={Extends:function(a){this.parent=a;a.$prototyping=!0;var b=new a;delete a.$prototyping;this.prototype=b},Implements:function(a){s(a,function(a){var a=new a,c;for(c in a)C.call(this,c,a[c],!0)},this)}};var t=new l({$events:{},addEvent:function(a,b,c){a=z(a);this.$events[a]=this.$events[a]||[];D(this.$events[a],b)==-1&&this.$events[a].push(b);if(c)b.internal=!0;return this},addEvents:function(a){for(var b in a)this.addEvent(b,a[b]);
return this},fireEvent:function(a,b,c){a=z(a);a=this.$events[a];if(!a)return this;var b=b||[],d=j(b);d!="array"&&d!="arguments"&&(b=[b]);s(a,function(a){if(c!=null){var d=this;i.setTimeout(function(){return a.apply(d,b)},c)}else a.apply(this,b)},this);return this},removeEvent:function(a,b){var a=z(a),c=this.$events[a];if(c&&!b.internal){var d=D(c,b);d!=-1&&delete c[d]}return this},removeEvents:function(a){var b;if(j(a)=="object"){for(b in a)this.removeEvent(b,a[b]);return this}a&&(a=z(a));for(b in this.$events)if(!(a&&
a!=b))for(var c=this.$events[b],d=c.length;d--;)d in c&&this.removeEvent(b,c[d]);return this}}),O=new l({setOptions:function(){var a=this.options=r.apply(null,A([{},this.options],arguments));if(this.addEvent)for(var b in a)typeof a[b]=="function"&&/^on[A-Z]/.test(b)&&(this.addEvent(b,a[b]),delete a[b]);return this}}),o={getBrowser:function(){if(!o.browser){var a=navigator.userAgent.toLowerCase(),b=navigator.platform.toLowerCase(),c=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||
[null,"unknown",0];o.browser={name:c[1]=="version"?c[3]:c[1],version:c[1]=="ie"&&document.documentMode||parseFloat(c[1]=="opera"&&c[4]?c[4]:c[2]),platform:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||b.match(/mac|win|linux/)||["other"])[0]}}return o.browser},getFlash:function(){if(!o.flash){var a="0 r0";try{a=navigator.plugins["Shockwave Flash"].description}catch(b){try{a=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(c){}}a=a.match(/\d+/g);
o.flash={version:Number(a[0]||"0."+a[1])||0,build:Number(a[2])||0}}return o.flash}},k={url:m.rrstatic+"connect/swf/XdComm.swf",name:"RenrenXdSwf",callbacks:[],init:function(){if(!k.inited)k.inited=!0,h.appendHidden('<object type="application/x-shockwave-flash" id="'+k.name+'" data="'+k.url+'"'+(document.attachEvent?' name="'+k.name+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':"")+' width="0" height="0"><param name="movie" value="'+k.url+'"></param><param name="allowScriptAccess" value="always"></param><param name="flashVars" value="onReady=Renren.onFlashReady"/></object>')},
onFlashReady:function(){k.XdComm=document[k.name];for(var a=0,b=k.callbacks.length;a<b;a++)k.callbacks[a]();k.callbacks=[]},hasMinVersion:function(){return o.getFlash().version>=9},onReady:function(a){k.init();k.XdComm?i.setTimeout(function(){a()},0):k.callbacks.push(a)},initPostMessage:function(a,b){return k.XdComm.postMessage_init(a,b)},postMessage:function(a,b){return k.XdComm.postMessage_send(a,b)},sendXdHttpRequest:function(a,b,c,d,e,g){return k.XdComm.sendXdHttpRequest(a,b,c,d,e,g)}},h={root:null,
hiddenRoot:null,callbacks:{},append:function(a,b){if(!b){if(!h.root&&(h.root=document.getElementById("renren-root"),!h.root))h.root=document.createElement("div"),h.root.id="renren-root",(document.body||document.getElementsByTagName("body")[0]).appendChild(h.root);b=h.root}if(typeof a=="string"){var c=document.createElement("div");b.appendChild(c).innerHTML=a;return c}else return b.appendChild(a)},appendHidden:function(a){if(!h.hiddenRoot){var b=document.createElement("div"),c=b.style;c.positon="absolute";
c.top="-10000px";c.width=c.height="0px";h.hiddenRoot=h.append(b)}return h.append(a,h.hiddenRoot)},onIframeReady:function(a){(a=h.callbacks[a])&&a()},insertIframe:function(a){a.id=a.id||v();a.name=a.name||v();var b=!1,c=!1;h.callbacks[a.id]=function(){b&&!c&&(c=!0,a.onload&&a.onload(a.root.firstChild),delete h.callbacks[a.id])};if(document.attachEvent){var d='<iframe id="'+a.id+'" name="'+a.name+'"'+(a.className?' class="'+a.className+'"':"")+' style="border:none;'+(a.width?"width:"+a.width+"px;":
"")+(a.height?"height:"+a.height+"px;":"")+'" src="'+a.url+'" frameborder="0" scrolling="no" allowtransparency="true" onload="Renren.onIframeReady(\''+a.id+"')\"></iframe>";a.root.innerHTML='<iframe src="javascript:false" frameborder="0" scrolling="no" style="height:1px;"></iframe>';b=!0;i.setTimeout(function(){a.root.innerHTML=d},0)}else{var e=document.createElement("iframe");e.id=a.id;e.name=a.name;e.onload=h.callbacks[a.id];e.style.border="none";e.style.overflow="hidden";if(a.className)e.className=
a.className;if(a.height)e.style.height=a.height+"px";if(a.width)e.style.width=a.width+"px";a.root.appendChild(e);b=!0;e.src=a.url}},postTarget:function(a){var b=document.createElement("form");b.action=a.url;b.target=a.target;b.method="POST";b.acceptCharset="utf-8";s(a.params,function(a,d){if(a!==null&&a!==void 0){var e=document.createElement("input");e.name=d;e.value=a;b.appendChild(e)}});h.appendHidden(b);try{b.submit()}finally{b.parentNode.removeChild(b)}},popupWindow:function(a){var b=typeof i.screenX!=
"undefined"?i.screenX:i.screenLeft,c=typeof i.screenY!="undefined"?i.screenY:i.screenTop,d=typeof i.outerWidth!="undefined"?i.outerWidth:document.documentElement.clientWidth,e=typeof i.outerHeight!="undefined"?i.outerHeight:document.documentElement.clientHeight-22,g=a.width,f=a.height,b=a.left!=null?a.left:parseInt(b+(d-g)/2,10),c=a.top!=null?a.top:parseInt(c+(e-f)/2.5,10);if((g=i.open(a.url,a.id,"width="+g+",height="+f+",left="+b+",top="+c))&&a.onload)a.onload(g,a.id);return g},currentWindow:function(a){i.location.href=
a.url;if(a.onload)a.onload(i);return i},createUI:function(a){if(a.display==="page")return h.currentWindow(a);if(a.display!=="hidden"&&a.display!=="iframe")return h.popupWindow(a);var b=document.createElement("div"),c=b.style;c.position="absolute";c.top="-10000px";c.zIndex="10001";c.height=a.height+"px";c.width=a.width+"px";if(a.display==="hidden")return b.className="rr_ui_hidden",a.root=b,h.insertIframe(a),h.append(b),b;b.className="rr_ui_dialog";var d=o.getBrowser();d.name=="ie"&&d.version<9?(s(["top_left",
"top_right","bottom_left","bottom_right"],function(a){var c=document.createElement("span"),d=c.style,e=a.split("_");c.className="rr_dialog_"+a;d.height=d.width="10px";d.overflow="hidden";d.position="absolute";d.background="url("+m.rrstatic+"connect/img/dialog/pop_dialog_"+a+".png) no-repeat 0 0";d[e[0]]=d[e[1]]="-10px";b.appendChild(c)}),s(["top","left","right","bottom"],function(a){var c=document.createElement("span"),d=c.style;c.className="rr_dialog_border_"+a;d.position="absolute";d.backgroundColor=
"rgb(82, 82, 82)";d.overflow="hidden";d.filter="alpha(opacity=70)";d.opacity="0.7";d[a]="-10px";a=="left"||a=="right"?(d.width="10px",d.height="100%"):(d.height="10px",d.width="100%");b.appendChild(c)})):(c.padding="10px",c.backgroundColor="rgba(82, 82, 82, 0.7)",c.MozBorderRadius="8px",c.borderRadius="8px");var e=document.createElement("div"),f=e.style;e.className="rr_dialog_content";f.backgroundColor="#fff";f.height=a.height+"px";f.width=a.width+"px";a.root=e;h.insertIframe(a);b.appendChild(e);
h.append(b);f=h.getViewportInfo();e=a.left!=null?a.left+(d.name=="ie"?10:0):f.scrollLeft+(f.width-a.width-20)/2;a=a.top!=null?a.top+(d.name=="ie"?10:0):f.scrollTop+(f.height-a.height-20)/2.5;c.left=(e>0?e:0)+"px";c.top=(a>0?a:0)+"px";return b},getViewportInfo:function(){var a=document.documentElement&&document.compatMode=="CSS1Compat"?document.documentElement:document.body;return{scrollTop:a.scrollTop,scrollLeft:a.scrollLeft,width:self.innerWidth?self.innerWidth:a.clientWidth,height:self.innerHeight?
self.innerHeight:a.clientHeight}}},f={origin:location.protocol+"//"+location.host+"/"+v(),transports:{fragment:"fragment",postMessage:i.postMessage?void 0:!1},init:function(a){if(a&&a.originPath!=void 0)f.origin=location.protocol+"//"+location.host+"/"+a.originPath;if(f.transports.postMessage==void 0)a=o.getBrowser(),a.name=="ie"&&a.version==8?f.transports.postMessage=!1:f.PostMessage.init();if(!f.transports.postMessage&&f.transports.flash==void 0)f.transports.flash=k.hasMinVersion()?0:!1,f.transports.flash===
0&&f.Flash.init()},resolveRelation:function(a){for(var b,c=a.split("."),d=i,e=0,f=c.length;e<f;e++)if(b=c[e],b=="opener"||b=="parent"||b=="top")d=d[b];else if(b=/^frames\[['"]?([a-zA-Z0-9-_]+)['"]?\]$/.exec(b))d=d.frames[b[1]];else throw new SyntaxError("Malformed value to resolve: "+a);return d},PostMessage:{init:function(){i.addEventListener?i.addEventListener("message",f.PostMessage.receiveMessage,!1):i.attachEvent("onmessage",f.PostMessage.receiveMessage);f.transports.postMessage="postMessage"},
receiveMessage:function(a){f.receiveMessage({data:a.data,origin:a.origin,source:a.source,transport:"postMessage"})},sendMessage:function(a,b,c){j(a)!="string"&&(a=w(a));c.postMessage(a,b)}},Flash:{init:function(){k.onReady(function(){f.transports.flash=k.initPostMessage("Renren.XD.Flash.receiveMessage",f.origin)?"flash":!1})},receiveMessage:function(a){f.receiveMessage(a)},sendMessage:function(a,b){return k.postMessage(a,b)}},Fragment:{magic:"rr_xd_fragment",sendMessage:function(a,b,c){b&&b.indexOf(c.location.protocol+
"//"+c.location.host+"/")==0&&c.Renren.XD.receiveMessage({data:a})}},receiveMessage:function(a){if(j(a.data)=="string")a.data=E(a.data);f.fireEvent("receivedXDMessage",a)},sendMessage:function(a,b,c,d){if(b&&c&&c.length>0){c=c.substr(0,1).toUpperCase()+c.substr(1);try{typeof d=="string"&&(d=f.resolveRelation(d)),f[c]&&f[c].sendMessage(a,b,d)}catch(e){}}},dispatchLocationFragment:function(a){a=a||location.toString();if(a.indexOf("#")!=-1){var b=a.substr(a.indexOf("#")+1),a=b.indexOf(f.Fragment.magic),
b=E(b);if(a>0)document.documentElement.style.display="none";b.origin&&f.sendMessage(b,b.origin,b.transport,b.relation)}}};f.dispatchLocationFragment();x(f,new t);var n=new l({Implements:[t,O],options:{url:"",params:{},headers:{Accept:"text/javascript, text/html, application/xml, text/xml, */*"},method:"POST",urlEncoded:!0,encoding:"utf-8",noCache:!1},initialize:function(a){this.setOptions(a);this.id=v()},check:function(){if(!this.running)return!0;return!1},abort:function(a){if(!this.running)return this;
this.running=!1;this.response=a||{error:"request_abort",error_description:"unknown reason."};this.failure(this.response)},success:function(a){this.onSuccess(a)},onSuccess:function(){this.fireEvent("complete",arguments,0).fireEvent("success",arguments,0)},failure:function(a){this.onFailure(a)},onFailure:function(){this.fireEvent("complete",arguments,0).fireEvent("failure",arguments,0)}}),q={requests:{},handleXDMessages:function(a){if(a.data&&a.data.rqid){var b=q.requests[a.data.rqid];b&&b.xd&&!(b.xd.transport!=
"fragment"&&(!a.origin||a.origin.indexOf(m.widgetOrigin)!=0))&&b.handleResponse(a.data)}},addXDRequest:function(a){q.requests[a.id]||(q.requests[a.id]=a)},removeXDRequest:function(a){q.requests[a.id]&&delete q.requests[a.id]}};f.addEvent("receivedXDMessage",q.handleXDMessages);n.Page=new l({Extends:n,options:{method:"GET",params:{display:"page"}},initialize:function(a){this.parent(a);this.options.params.display=this.constructor.prototype.options.params.display},send:function(){if(!this.check())return this;
this.running=!0;var a=this.options.params;a.redirect_uri||(a.redirect_uri=this.getRedirectUri());this.fireEvent("request");this.ui=this.createUI();if(!this.ui)throw a=Error("can't create request UI."),a.name="UICreateError",a;return this},createUI:function(){var a=this.options,b=a.method,c=b==="GET"?a.url+(a.url.indexOf("?")<0?"?":"&")+w(a.params):"about:blank";if(b==="GET"){var d=o.getBrowser().name=="ie"?2050:7600;if(c.length>d)throw c=Error("The length of request url maybe too long, use POST method instend."),
c.name="UrlTooLongError",c;}c=r({url:c,id:this.id,display:this.constructor.prototype.options.params.display,onload:function(c,d){b==="POST"&&h.postTarget({url:a.url,target:d||c.name,params:a.params})}},a.style);return L=h.createUI(c)},getRedirectUri:function(){var a=location.toString(),b=a.indexOf("#");b>0&&(a=a.substr(0,b));return a}});n.Iframe=new l({Extends:n.Page,options:{params:{display:"iframe"}},initialize:function(a){this.parent(a);var a=f.transports,b=this;this.xd={relation:"parent",transport:a.postMessage||
a.flash||"fragment",origin:f.origin};this.addEvents({request:function(){q.addXDRequest(b)},complete:function(){q.removeXDRequest(b)}})},handleResponse:function(a){this.closeUI();this.response=a;this.running=!1;a.error?this.failure(this.response):this.success(this.response)},getRedirectUri:function(){var a=r(this.xd,"rqid",this.id),b=this.xd.transport;if(b=="postMessage"||b=="flash")b=m.callback+"#";else{var b=location.toString(),c=b.indexOf("#");c>0&&(b=b.substr(0,c));b+="#"+f.Fragment.magic+"&"}return b+
w(a)},closeUI:function(){if(this.ui)this.ui.parentNode.removeChild(this.ui),this.ui=null}});n.Hidden=new l({Extends:n.Iframe,options:{params:{display:"hidden"}}});n.Popup=new l({Extends:n.Iframe,options:{params:{display:"popup"}},initialize:function(a){this.parent(a);a=f.transports;this.xd={relation:"opener",transport:a.postMessage||a.flash||"fragment",origin:f.origin}},send:function(){var a=this.parent(),b=this.options.params;this.ui&&b.redirect_uri&&b.redirect_uri.indexOf(m.callback)==0&&(this.constructor.popupReqs[this.id]=
this,this.constructor.popupMonitor());return a},handleResponse:function(a){this.closeUI();this.response=a;this.running=!1;a.error?this.failure(this.response):this.success(this.response)},closeUI:function(){if(this.ui)this.ui.close(),this.ui=null}});x(n.Popup,{popupReqs:{},popupMonitor:function(){var a,b;for(b in this.popupReqs)if(this.popupReqs.hasOwnProperty(b)&&this.popupReqs[b]instanceof this)try{var c=this.popupReqs[b];c.ui?c.ui.closed?(i.setTimeout(function(){c.abort({error:"request_abort",error_description:"user close the popup window."})},
10),c.ui=null,delete this.popupReqs[b]):a=!0:delete this.popupReqs[b]}catch(d){}if(a&&!this.monitorInterval)this.monitorInterval=i.setInterval(y(arguments.callee,this),500);else if(!a&&this.monitorInterval)i.clearInterval(this.monitorInterval),this.monitorInterval=null}});var L=function(a,b){if(!a.url)throw Error("The url argument must not be null.");var c=a.url,c=c.indexOf("http://")==0||c.indexOf("https://")==0?c:m.widget+"dialog/"+c,d=/^(https?:\/\/[^\/]*\/)([^\/\?#]*\/)*([^\/\?#]*)/.exec(c);if(!(d==
null||m.widget!=d[1]&&m.graph!=d[1]&&m.graph_https!=d[1]))return function(b){var c=b.display,d;c.length>0&&(c=c.substr(0,1).toUpperCase()+c.substr(1));n[c]&&(d=new n[c](b));if(!d)throw Error("Fail to start an ui request, the display argument may be invalid.");try{return d.send()}catch(f){if(a.fallback!==!1)if(f.name=="UrlTooLongError")return b.method="POST",arguments.callee(b);else if(f.name=="UICreateError"&&d instanceof n.Popup)return b.display="page",arguments.callee(b);throw f;}}(H({url:c,method:a.method&&
a.method.toUpperCase()==="POST"?"POST":"GET"},a,P[(d[3]||"").toLowerCase()],{display:"popup",style:{width:475,height:340},params:{app_id:m.widget==d[1]?B.options.appId:null,client_id:m.graph==d[1]||m.graph_https==d[1]?B.options.appId:null},onComplete:b}))},P={authorize:{display:"page",style:{width:570,height:340}},request:{style:{width:600,height:550}}},p={Server:new l({methods:{},initialize:function(a,b){f.addEvent("receivedXDMessage",y(this.handleXDMessages,this));a&&this.addMethods(a,b)},addMethod:function(a,
b,c){this.methods[a]||(this.methods[a]=p.proxy(a,b,c&&j(c)!="array"?[c]:c))},addMethods:function(a,b){b&&j(b)!="array"&&(b=[b]);var c=A([],b),d;for(d in a)this.addMethod(d,a[d],c)},removeMethod:function(a){this.methods[a]&&delete this.methods[a]},handleXDMessages:function(a){if(a.data&&a.data.method){var b=this.methods[a.data.method];b&&b(a)}}}),proxy:function(a,b,c){return function(a){if(!c||!(c.length>0)||p.checkOrigin(a.origin,c)){var e=b.apply(null,b.internal?a:a.data.args);a.data.cbid&&f.sendMessage({result:e,
cbid:a.data.cbid},a.origin,a.transport,a.source)}}},checkOrigin:function(a,b){if(!a)return!1;for(var c=0,d=b.length;c<d;c++)if(b[c].indexOf(a)==0||a.indexOf(b[c])==0)return!0;return!1},Client:new l({callbacks:{},initialize:function(a){f.addEvent("receivedXDMessage",y(this.handleXDMessages,this));this.server=r({},a)},handleXDMessages:function(a){if(a.data&&a.data.cbid){var b=this.callbacks[a.data.cbid];b&&this.checkOrigin(a.origin)&&(delete this.callbacks[a.data.cbid],b(a.data.result))}},checkOrigin:function(a){return p.checkOrigin(a,
[this.server.origin])},call:function(a,b,c){var d=f.transports,d=d.postMessage||d.flash,e=j(b),g;d&&(c&&(g=v(),this.callbacks[g]=c),e!="array"&&e!="arguments"&&(b=[b]),f.sendMessage({method:a,args:b,cbid:g},this.server.origin,d,this.server.relation))}})};p.EventsReceiver=new l({Extends:p.Server,Implements:[t],initialize:function(a){this.parent({fireXDEvent:y(this.fireEvent,this)},a)}});p.EventsSender=new l({Extends:p.Client,fireXDEvent:function(a,b,c){this.call("fireXDEvent",[a,b,c])}});p.CanvasClient=
new l({Extends:p.Client,initialize:function(){var a=location.search,a=a==""?{}:E(a.substr(1));this.parent({origin:m.apps+(a.xn_sig||""),relation:"parent"})}});i.Renren=x(B,{onFlashReady:k.onFlashReady,onIframeReady:h.onIframeReady,XD:f,Request:n,XDPC:p,ui:L})})(window);