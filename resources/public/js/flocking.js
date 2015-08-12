if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

(function e$$0(x,Q,k){function h(a,b){if(!Q[a]){if(!x[a]){var d="function"==typeof require&&require;if(!b&&d)return d(a,!0);if(m)return m(a,!0);throw Error("Cannot find module '"+a+"'");}d=Q[a]={exports:{}};x[a][0].call(d.exports,function(f){var b=x[a][1][f];return h(b?b:f)},d,d.exports,e$$0,x,Q,k)}return Q[a].exports}for(var m="function"==typeof require&&require,n=0;n<k.length;n++)h(k[n]);return h})({1:[function(D,x,Q){x={isDomPresent:!0,navigator:navigator,window:window,document:document,ajax:function(k){var h=
new XMLHttpRequest;h.open("GET",k,!1);h.overrideMimeType&&h.overrideMimeType("text/plain");h.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");h.send(null);if(200!==h.status&&0!==h.status)throw"XMLHttpRequest failed, status code "+h.status;return h.responseText}};window.Processing=D("./src/")(x)},{"./src/":27}],2:[function(D,x,Q){x.exports={name:"Processing.js",version:"1.4.8",dependencies:{argv:"~0.0.2",browserify:"~2.18.1",express:"~3.3.3","node-minify":"~0.7.3",nunjucks:"~0.1.9",
open:"0.0.3"},devDependencies:{grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3"}}},{}],3:[function(D,x,Q){x.exports=function(k){if(k instanceof Array){var h=-1;this.hasNext=function(){return++h<k.length};this.next=function(){return k[h]}}else{if(k.iterator instanceof Function)return k.iterator();throw"Unable to iterate: "+k;}}},{}],4:[function(D,x,Q){x.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,
VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1E-4,MAX_FLOAT:3.4028235E38,MIN_FLOAT:-3.4028235E38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f\u00a0",RGB:1,ARGB:2,
HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,
QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,
DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,
ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(D,x,Q){x.exports=function(k){function h(){}function m(a,d,f){if(a.hasOwnProperty(d)&&
"function"===typeof a[d]){var l=a[d];if("$overloads"in l)l.$defaultOverload=f;else if("$overloads"in f||l.length!==f.length){var p;"$overloads"in f?(p=f.$overloads.slice(0),p[l.length]=l,l=f.$defaultOverload):(p=[],p[f.length]=f,p[l.length]=l);var r=function(){return(r.$overloads[arguments.length]||("$methodArgsIndex"in r&&arguments.length>r.$methodArgsIndex?r.$overloads[r.$methodArgsIndex]:null)||r.$defaultOverload).apply(this,arguments)};r.$overloads=p;"$methodArgsIndex"in f&&(r.$methodArgsIndex=
f.$methodArgsIndex);r.$defaultOverload=l;r.name=d;a[d]=r}}else a[d]=f}function n(b,d){function f(f){a.defineProperty(b,f,{get:function(){return d[f]},set:function(c){d[f]=c},enumerable:!0})}var l=[],p;for(p in d)"function"===typeof d[p]?m(b,p,d[p]):"$"===p.charAt(0)||p in b||l.push(p);for(;0<l.length;)f(l.shift());b.$super=d}h.prototype=k.PConstants;var a=new h;Object.keys(k).forEach(function(b){a[b]=k[b]});a.defineProperty=function(a,d,f){"defineProperty"in Object?Object.defineProperty(a,d,f):(f.hasOwnProperty("get")&&
a.__defineGetter__(d,f.get),f.hasOwnProperty("set")&&a.__defineSetter__(d,f.set))};a.extendClassChain=function(a){for(var d=[a],f=a.$upcast;f;f=f.$upcast)n(f,a),d.push(f),a=f;for(;0<d.length;)d.pop().$self=a};a.extendStaticMembers=function(a,d){n(a,d)};a.extendInterfaceMembers=function(a,d){n(a,d)};a.addMethod=function(a,d,f,l){var p=a[d];if(p||l){var r=f.length;if("$overloads"in p)p.$overloads[r]=f;else{var c=function(){return(c.$overloads[arguments.length]||("$methodArgsIndex"in c&&arguments.length>
c.$methodArgsIndex?c.$overloads[c.$methodArgsIndex]:null)||c.$defaultOverload).apply(this,arguments)},h=[];p&&(h[p.length]=p);h[r]=f;c.$overloads=h;c.$defaultOverload=p||f;l&&(c.$methodArgsIndex=r);c.name=d;a[d]=c}}else a[d]=f};a.createJavaArray=function(b,d){var f=null,l=null;if("string"===typeof b)if("boolean"===b)l=!1;else{var p;p="string"!==typeof b?!1:-1!=="byte int char color float long double".split(" ").indexOf(b);p&&(l=0)}if("number"===typeof d[0])if(p=0|d[0],1>=d.length){f=[];f.length=p;
for(var r=0;r<p;++r)f[r]=l}else for(f=[],l=d.slice(1),r=0;r<p;++r)f.push(a.createJavaArray(b,l));return f};a.defineProperty(a,"screenWidth",{get:function(){return window.innerWidth}});a.defineProperty(a,"screenHeight",{get:function(){return window.innerHeight}});return a}},{}],6:[function(D,x,Q){x.exports=function(k,h){var m=h.window,n=h.document,a=m.XMLHttpRequest,b=h.noop,d=h.isDOMPresent,f=h.version;k.version=f?f:"@DEV-VERSION@";k.lib={};k.registerLibrary=function(f,c){k.lib[f]=c;c.hasOwnProperty("init")&&
c.init(defaultScope)};k.Sketch=function(f){this.attachFunction=f;this.options={pauseOnBlur:!1,globalKeyEvents:!1};this.onExit=this.onFrameEnd=this.onFrameStart=this.onLoop=this.onPause=this.onSetup=this.onLoad=b;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(c,f){if(!this.images[c]&&(d||(this.images[c]=null),f||(f=new Image,f.onload=function(c){return function(){c.pending--}}(this),this.pending++,f.src=c),this.images[c]=f,m.opera)){var a=n.createElement("div");a.appendChild(f);
a.style.position="absolute";a.style.opacity=0;a.style.width="1px";a.style.height="1px";this.operaCache[c]||(n.body.appendChild(a),this.operaCache[c]=a)}}};this.sourceCode=void 0;this.attach=function(c){if("function"===typeof this.attachFunction)this.attachFunction(c);else if(this.sourceCode){var f=(new Function("return ("+this.sourceCode+");"))();f(c);this.attachFunction=f}else throw"Unable to attach sketch to the processing instance";};this.toString=function(){var c,f;f="((function(Sketch) {\n"+
("var sketch = new Sketch(\n"+this.sourceCode+");\n");for(c in this.options)if(this.options.hasOwnProperty(c)){var a=this.options[c];f+="sketch.options."+c+" = "+("string"===typeof a?'"'+a+'"':""+a)+";\n"}for(c in this.imageCache)this.options.hasOwnProperty(c)&&(f+='sketch.imageCache.add("'+c+'");\n');return f+"return sketch;\n})(Processing.Sketch))"}};var l=k.loadSketchFromSources=function(f,c){function d(c,f){var b=new a;b.onreadystatechange=function(){if(4===b.readyState){var c;200!==b.status&&
0!==b.status?c="Invalid XHR status "+b.status:""===b.responseText&&(c="withCredentials"in new a&&!1===(new a).withCredentials&&"file:"===m.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty.");f(b.responseText,c)}};b.open("GET",c,!0);b.overrideMimeType&&
b.overrideMimeType("application/json");b.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");b.send(null)}function b(c,a){function m(d,b){l[c]=d;++v;b&&p.push(a+" ==> "+b);if(v===h)if(0===p.length)try{return new k(f,l.join("\n"))}catch(md){throw console.log("Processing.js: Unable to execute pjs sketch."),md;}else throw"Processing.js: Unable to load pjs sketch files: "+p.join("\n");}if("#"===a.charAt(0)){var ca=n.getElementById(a.substring(1));ca?m(ca.text||ca.textContent):m("","Unable to load pjs sketch: element with id '"+
a.substring(1)+"' was not found")}else d(a,m)}for(var l=[],p=[],h=c.length,v=0,ga=0;ga<h;++ga)b(ga,c[ga])},p=function(){n.removeEventListener("DOMContentLoaded",p,!1);processingInstances=[];k.instances=processingInstances;for(var f=n.getElementsByTagName("canvas"),c,a=0,d=f.length;a<d;a++){var b=f[a].getAttribute("data-processing-sources");null===b&&(b=f[a].getAttribute("data-src"),null===b&&(b=f[a].getAttribute("datasrc")));if(b){c=b.split(/\s+/g);for(b=0;b<c.length;)c[b]?b++:c.splice(b,1);l(f[a],
c)}}f=n.getElementsByTagName("script");d=[];for(a=f.length-1;0<=a;a--)d.push(f[a]);a=0;for(b=d.length;a<b;a++)if(c=d[a],c.getAttribute&&(f=c.getAttribute("type"))&&("text/processing"===f.toLowerCase()||"application/processing"===f.toLowerCase())){var h=c.getAttribute("data-processing-target"),f=void 0;if(h)f=n.getElementById(h);else{for(h=c.nextSibling;h&&1!==h.nodeType;)h=h.nextSibling;h&&"canvas"===h.nodeName.toLowerCase()&&(f=h)}f&&(c.getAttribute("src")?(c=c.getAttribute("src").split(/\s+/),l(f,
c)):(c=c.textContent||c.text,new k(f,c)))}};n.addEventListener("DOMContentLoaded",p,!1);k.reload=function(){if(0<processingInstances.length)for(var f=processingInstances.length-1;0<=f;f--)processingInstances[f]&&processingInstances[f].exit();p()};k.disableInit=function(){n.removeEventListener("DOMContentLoaded",p,!1)};return k}},{}],7:[function(D,x,Q){x.exports=function(k,h){return null===k||null===h?null===k&&null===h:"string"===typeof k||"object"!==typeof k?k===h:k.equals instanceof Function?k.equals(h):
k===h}},{}],8:[function(D,x,Q){x.exports=function(k,h){if("string"===typeof k){for(var m=0,n=0;n<k.length;++n)m=31*m+k.charCodeAt(n)&4294967295;return m}if("object"!==typeof k)return k&4294967295;if(k.hashCode instanceof Function)return k.hashCode();k.$id===h&&(k.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random()));return k.$id}},{}],9:[function(D,x,Q){x.exports=function(k){function h(a){var b=-1;this.hasNext=function(){return b+1<a.length};this.next=function(){return a[++b]};
this.remove=function(){a.splice(b--,1)}}function m(a){var b=[];a&&a.toArray&&(b=a.toArray());this.get=function(a){return b[a]};this.contains=function(a){return-1<this.indexOf(a)};this.indexOf=function(a){for(var f=0,l=b.length;f<l;++f)if(n(a,b[f]))return f;return-1};this.lastIndexOf=function(a){for(var f=b.length-1;0<=f;--f)if(n(a,b[f]))return f;return-1};this.add=function(){if(1===arguments.length)b.push(arguments[0]);else if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=
a&&a<=b.length)b.splice(a,0,arguments[1]);else throw a+" is not a valid index";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.addAll=function(a,f){var l;if("number"===typeof a){if(0>a||a>b.length)throw"Index out of bounds for addAll: "+a+" greater or equal than "+b.length;for(l=new ObjectIterator(f);l.hasNext();)b.splice(a++,0,l.next())}else for(l=new ObjectIterator(a);l.hasNext();)b.push(l.next())};this.set=function(){if(2===arguments.length){var a=
arguments[0];if("number"===typeof a)if(0<=a&&a<b.length)b.splice(a,1,arguments[1]);else throw a+" is not a valid index.";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.size=function(){return b.length};this.clear=function(){b.length=0};this.remove=function(a){if("number"===typeof a)return b.splice(a,1)[0];a=this.indexOf(a);return-1<a?(b.splice(a,1),!0):!1};this.removeAll=function(a){var f,b,p,r=new m;r.addAll(this);this.clear();for(b=f=0;f<r.size();f++)p=
r.get(f),a.contains(p)||this.add(b++,p);return this.size()<r.size()?!0:!1};this.isEmpty=function(){return!b.length};this.clone=function(){return new m(this)};this.toArray=function(){return b.slice(0)};this.iterator=function(){return new h(b)}}var n=k.virtEquals;return m}},{}],10:[function(D,x,Q){x.exports=function(k,h){var m=function(n){this.code="string"===typeof n&&1===n.length?n.charCodeAt(0):"number"===typeof n?n:n instanceof m?n:NaN;return k[this.code]===h?k[this.code]=this:k[this.code]};m.prototype.toString=
function(){return String.fromCharCode(this.code)};m.prototype.valueOf=function(){return this.code};return m}({})},{}],11:[function(D,x,Q){x.exports=function(k){function h(){function a(f){f=m(f)%c.length;return 0>f?c.length+f:f}function b(){if(!(k<=r*c.length)){for(var f=[],b=0;b<c.length;++b)void 0!==c[b]&&(f=f.concat(c[b]));b=2*c.length;c=[];c.length=b;for(b=0;b<f.length;++b){var d=a(f[b].key),l=c[d];void 0===l&&(c[d]=l=[]);l.push(f[b])}}}function d(f,a){function b(){for(;!p;)if(++l,d>=c.length)p=
!0;else if(void 0===c[d]||l>=c[d].length)l=-1,++d;else break}var d=0,l=-1,p=!1,r;this.hasNext=function(){return!p};this.next=function(){r=f(c[d][l]);b();return r};this.remove=function(){void 0!==r&&(a(r),--l,b())};b()}function f(c,f,a){this.clear=function(){ca.clear()};this.contains=function(c){return f(c)};this.containsAll=function(c){for(c=c.iterator();c.hasNext();)if(!this.contains(c.next()))return!1;return!0};this.isEmpty=function(){return ca.isEmpty()};this.iterator=function(){return new d(c,
a)};this.remove=function(c){return this.contains(c)?(a(c),!0):!1};this.removeAll=function(c){for(c=c.iterator();c.hasNext();){var f=c.next();this.contains(f)&&a(f)}return!0};this.retainAll=function(c){for(var f=this.iterator(),b=[];f.hasNext();){var d=f.next();c.contains(d)||b.push(d)}for(c=0;c<b.length;++c)a(b[c]);return 0<b.length};this.size=function(){return ca.size()};this.toArray=function(){for(var c=[],f=this.iterator();f.hasNext();)c.push(f.next());return c}}function l(c){this._isIn=function(f){return f===
ca&&void 0===c.removed};this.equals=function(f){return n(c.key,f.getKey())};this.getKey=function(){return c.key};this.getValue=function(){return c.value};this.hashCode=function(f){return m(c.key)};this.setValue=function(f){var a=c.value;c.value=f;return a}}if(1===arguments.length&&arguments[0]instanceof h)return arguments[0].clone();var p=0<arguments.length?arguments[0]:16,r=1<arguments.length?arguments[1]:0.75,c=[];c.length=p;var k=0,ca=this;this.clear=function(){k=0;c=[];c.length=p};this.clone=
function(){var c=new h;c.putAll(this);return c};this.containsKey=function(f){var b=a(f),b=c[b];if(void 0===b)return!1;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return!0;return!1};this.containsValue=function(f){for(var a=0;a<c.length;++a){var b=c[a];if(void 0!==b)for(var d=0;d<b.length;++d)if(n(b[d].value,f))return!0}return!1};this.entrySet=function(){return new f(function(c){return new l(c)},function(c){return c instanceof l&&c._isIn(ca)},function(c){return ca.remove(c.getKey())})};this.get=function(f){var b=
a(f),b=c[b];if(void 0===b)return null;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return b[d].value;return null};this.isEmpty=function(){return 0===k};this.keySet=function(){return new f(function(c){return c.key},function(c){return ca.containsKey(c)},function(c){return ca.remove(c)})};this.values=function(){return new f(function(c){return c.value},function(c){return ca.containsValue(c)},function(c){return ca.removeByValue(c)})};this.put=function(f,d){var l=a(f),p=c[l];if(void 0===p)return++k,c[l]=
[{key:f,value:d}],b(),null;for(l=0;l<p.length;++l)if(n(p[l].key,f)){var r=p[l].value;p[l].value=d;return r}++k;p.push({key:f,value:d});b();return null};this.putAll=function(c){for(c=c.entrySet().iterator();c.hasNext();){var f=c.next();this.put(f.getKey(),f.getValue())}};this.remove=function(f){var b=a(f),d=c[b];if(void 0===d)return null;for(var l=0;l<d.length;++l)if(n(d[l].key,f))return--k,f=d[l].value,d[l].removed=!0,1<d.length?d.splice(l,1):c[b]=void 0,f;return null};this.removeByValue=function(f){var a,
b,d,l;for(a in c)if(c.hasOwnProperty(a))for(b=0,d=c[a].length;b<d;b++)if(l=c[a][b],l.value===f)return c[a].splice(b,1),!0;return!1};this.size=function(){return k}}var m=k.virtHashCode,n=k.virtEquals;return h}},{}],12:[function(D,x,Q){x.exports=function(k,h){function m(b,d){b===h&&(b="");this.name=b;d===h&&(d=0);this.size=d;this.glyph=!1;this.descent=this.ascent=0;this.leading=1.2*d;var f=b.indexOf(" Italic Bold");-1!==f&&(b=b.substring(0,f));this.style="normal";f=b.indexOf(" Italic");-1!==f&&(b=b.substring(0,
f),this.style="italic");this.weight="normal";f=b.indexOf(" Bold");-1!==f&&(b=b.substring(0,f),this.weight="bold");this.family="sans-serif";if(b!==h)switch(b){case "sans-serif":case "serif":case "monospace":case "fantasy":case "cursive":this.family=b;break;default:this.family='"'+b+'", sans-serif'}var f=this.size/250,l=n.createElement("canvas");l.width=500;l.height=500;l.style.opacity=0;var p=this.getCSSDefinition("250px","normal"),r=l.getContext("2d");r.font=p;l.width=r.measureText("dbflkhyjqpg").width;
r.font=p;p=n.createElement("div");p.style.position="absolute";p.style.opacity=0;p.style.fontFamily='"'+this.name+'"';p.style.fontSize="250px";p.innerHTML="dbflkhyjqpg<br/>dbflkhyjqpg";n.body.appendChild(p);var c=l.width,k=l.height,l=k/2;r.fillStyle="white";r.fillRect(0,0,c,k);r.fillStyle="black";r.fillText("dbflkhyjqpg",0,l);for(var k=r.getImageData(0,0,c,k).data,m=0,G=4*c,A=k.length;++m<A&&255===k[m];)a();c=Math.round(m/G);for(m=A-1;0<--m&&255===k[m];)a();k=Math.round(m/G);this.ascent=f*(l-c);this.descent=
f*(k-l);n.defaultView.getComputedStyle&&(l=n.defaultView.getComputedStyle(p,null).getPropertyValue("height"),l=f*l.replace("px",""),l>=2*this.size&&(this.leading=Math.round(l/2)));n.body.removeChild(p);f=this.caching?r:void 0;this.context2d=f;this.css=this.getCSSDefinition();this.context2d&&(this.context2d.font=this.css)}var n=k.Browser.document,a=k.noop;m.prototype.caching=!0;m.prototype.getCSSDefinition=function(a,d){a===h&&(a=this.size+"px");d===h&&(d=this.leading+"px");return[this.style,"normal",
this.weight,a+"/"+d,this.family].join(" ")};m.prototype.measureTextWidth=function(a){return this.context2d.measureText(a).width};m.prototype.measureTextWidthFallback=function(a){var d=n.createElement("canvas").getContext("2d");d.font=this.css;return d.measureText(a).width};m.PFontCache={length:0};m.get=function(a,d){d=(10*d+0.5|0)/10;var f=m.PFontCache,l=a+"/"+d;if(!f[l]){f[l]=new m(a,d);f.length++;if(50===f.length){m.prototype.measureTextWidth=m.prototype.measureTextWidthFallback;m.prototype.caching=
!1;for(var p in f)"length"!==p&&(f[p].context2d=null);return new m(a,d)}if(400===f.length)return m.PFontCache={},m.get=m.getFallback,new m(a,d)}return f[l]};m.getFallback=function(a,d){return new m(a,d)};m.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};m.preloading={template:{},initialized:!1,initialize:function(){var a=n.createElement("style");a.setAttribute("type","text/css");a.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+
function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,function(a){return"AAAAAAAA".substr(~~a?7-a:6)})}()+"')\n       format('truetype');\n}";n.head.appendChild(a);a=n.createElement("span");a.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.template=a;this.initialized=!0},getElementWidth:function(a){return n.defaultView.getComputedStyle(a,"").getPropertyValue("width")},timeAttempted:0,pending:function(a){this.initialized||this.initialize();for(var d,f,l=this.getElementWidth(this.template),p=0;p<this.fontList.length;p++){d=this.fontList[p];f=this.getElementWidth(d);if(4E3>this.timeAttempted&&f===l)return this.timeAttempted+=a,!0;n.body.removeChild(d);this.fontList.splice(p--,1);this.timeAttempted=
0}return 0===this.fontList.length?!1:!0},fontList:[],addedList:{},add:function(a){this.initialized||this.initialize();var d="object"===typeof a?a.fontFace:a;a="object"===typeof a?a.url:a;if(!this.addedList[d]){var f=n.createElement("style");f.setAttribute("type","text/css");f.innerHTML="@font-face{\n  font-family: '"+d+"';\n  src:  url('"+a+"');\n}\n";n.head.appendChild(f);this.addedList[d]=!0;a=n.createElement("span");a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";a.style.fontFamily=
'"'+d+'", "PjsEmptyFont", fantasy';a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.fontList.push(a)}}};return m}},{}],13:[function(D,x,Q){x.exports=function(k,h){var m=k.p,n=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof n?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};n.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],
a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},
invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var d,f;a instanceof PVector?(d=a.x,f=a.y,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2],b[1]=this.elements[3]*d+this.elements[4]*f+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2],b.y=this.elements[3]*d+this.elements[4]*f+this.elements[5],b.z=0);return b},multX:function(a,
b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>PConstants.MIN_INT){var b=
this.elements[0],d=this.elements[1],f=this.elements[2],l=this.elements[3],p=this.elements[4],r=this.elements[5];this.elements[0]=p/a;this.elements[3]=-l/a;this.elements[1]=-d/a;this.elements[4]=b/a;this.elements[2]=(d*r-p*f)/a;this.elements[5]=(l*f-b*r)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof
n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],d=0,f=0;2>f;f++)for(var l=0;3>l;l++,d++)b[d]+=this.elements[3*f+0]*a[l+0]+this.elements[3*f+1]*a[l+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&
arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var d=this.elements[0],f=this.elements[1];this.elements[0]=
b*d+a*f;this.elements[1]=-a*d+b*f;d=this.elements[3];f=this.elements[4];this.elements[3]=b*d+a*f;this.elements[4]=-a*d+b*f},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+"\n"+m.nfs(this.elements[3],a,4)+" "+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+"\n\n";m.println(a)}};return n}},{}],14:[function(D,
x,Q){x.exports=function(k,h){var m=k.p,n=function(){this.reset()};n.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},
translate:function(a,b,d){d===h&&(d=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+d*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+d*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+d*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+d*this.elements[14]},transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=
a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var d,f,l,p;a instanceof PVector?(d=a.x,f=a.y,l=a.z,p=1,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],l=a[2],p=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof
Array&&(3===b.length?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3]*p,b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7]*p,b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+
this.elements[11]*p,b[3]=this.elements[12]*d+this.elements[13]*f+this.elements[14]*l+this.elements[15]*p));b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b.y=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b.z=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]);return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):
1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[l+0]*a[4*f+0]+this.elements[l+4]*a[4*f+1]+this.elements[l+8]*a[4*f+2]+this.elements[l+12]*a[4*f+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&
(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[4*f+0]*a[l+0]+this.elements[4*f+1]*a[l+4]+this.elements[4*f+2]*a[l+8]+this.elements[4*f+3]*a[l+12];this.elements=b.slice()},rotate:function(a,b,d,f){if(d){var l=Math.cos(a);a=Math.sin(a);var p=1-l;this.apply(p*b*b+l,p*b*d-a*f,p*b*f+a*d,0,p*b*d+a*f,p*d*d+l,p*d*f-a*b,0,p*b*f-a*d,p*d*f+a*b,p*f*f+l,0,0,0,0,1)}else this.rotateZ(a)},invApply:function(){inverseCopy===h&&(inverseCopy=new n);
var a=arguments;inverseCopy.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!inverseCopy.invert())return!1;this.preApply(inverseCopy);return!0},rotateX:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,
b,d){!a||b||d?a&&(b&&!d)&&(d=1):b=d=a;a&&(b&&d)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=d,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=d,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=d,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=d)},skewX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,
0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,d,f){return d?f?this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]*f:this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},multY:function(a,b,d,f){return d?f?this.elements[4]*a+this.elements[5]*b+this.elements[6]*d+this.elements[7]*f:this.elements[4]*a+this.elements[5]*b+this.elements[6]*
d+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,d,f){return f?this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]*f:this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]},multW:function(a,b,d,f){return f?this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]*f:this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-
this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],d=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],f=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],l=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],p=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],r=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],c=this.elements[8]*this.elements[14]-this.elements[10]*
this.elements[12],h=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],m=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],x=a*n-b*m+d*k+f*h-l*c+p*r;if(1E-9>=Math.abs(x))return!1;var v=[];v[0]=+this.elements[5]*n-this.elements[6]*m+this.elements[7]*k;v[4]=-this.elements[4]*n+this.elements[6]*h-this.elements[7]*c;
v[8]=+this.elements[4]*m-this.elements[5]*h+this.elements[7]*r;v[12]=-this.elements[4]*k+this.elements[5]*c-this.elements[6]*r;v[1]=-this.elements[1]*n+this.elements[2]*m-this.elements[3]*k;v[5]=+this.elements[0]*n-this.elements[2]*h+this.elements[3]*c;v[9]=-this.elements[0]*m+this.elements[1]*h-this.elements[3]*r;v[13]=+this.elements[0]*k-this.elements[1]*c+this.elements[2]*r;v[2]=+this.elements[13]*p-this.elements[14]*l+this.elements[15]*f;v[6]=-this.elements[12]*p+this.elements[14]*d-this.elements[15]*
b;v[10]=+this.elements[12]*l-this.elements[13]*d+this.elements[15]*a;v[14]=-this.elements[12]*f+this.elements[13]*b-this.elements[14]*a;v[3]=-this.elements[9]*p+this.elements[10]*l-this.elements[11]*f;v[7]=+this.elements[8]*p-this.elements[10]*d+this.elements[11]*b;v[11]=-this.elements[8]*l+this.elements[9]*d-this.elements[11]*a;v[15]=+this.elements[8]*f-this.elements[9]*b+this.elements[10]*a;a=1/x;v[0]*=a;v[1]*=a;v[2]*=a;v[3]*=a;v[4]*=a;v[5]*=a;v[6]*=a;v[7]*=a;v[8]*=a;v[9]*=a;v[10]*=a;v[11]*=a;v[12]*=
a;v[13]*=a;v[14]*=a;v[15]*=a;this.elements=v.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+" "+m.nfs(this.elements[3],a,4)+"\n"+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+" "+m.nfs(this.elements[6],a,4)+" "+m.nfs(this.elements[7],a,4)+"\n"+m.nfs(this.elements[8],
a,4)+" "+m.nfs(this.elements[9],a,4)+" "+m.nfs(this.elements[10],a,4)+" "+m.nfs(this.elements[11],a,4)+"\n"+m.nfs(this.elements[12],a,4)+" "+m.nfs(this.elements[13],a,4)+" "+m.nfs(this.elements[14],a,4)+" "+m.nfs(this.elements[15],a,4)+"\n\n";m.println(a)},invTranslate:function(a,b,d){this.preApply(1,0,0,-a,0,1,0,-b,0,0,1,-d,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);
this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,d){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/d,0,0,0,0,1])}};return n}},{}],15:[function(D,x,Q){x.exports=function(k){var h=k.PConstants,m=k.PMatrix2D,n=k.PMatrix3D;k=function(a){this.family=a||h.GROUP;this.style=this.visible=!0;this.children=[];this.nameTable=[];this.params=[];this.name="";this.parent=this.height=this.width=
this.close=this.kind=this.matrix=this.image=null};k.prototype={isVisible:function(){return this.visible},setVisible:function(a){this.visible=a},disableStyle:function(){this.style=!1;for(var a=0,b=this.children.length;a<b;a++)this.children[a].disableStyle()},enableStyle:function(){this.style=!0;for(var a=0,b=this.children.length;a<b;a++)this.children[a].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(a){this.name=
a},getName:function(){return this.name},draw:function(a){if(!a)throw"render context missing for draw() in PShape";this.visible&&(this.pre(a),this.drawImpl(a),this.post(a))},drawImpl:function(a){this.family===h.GROUP?this.drawGroup(a):this.family===h.PRIMITIVE?this.drawPrimitive(a):this.family===h.GEOMETRY?this.drawGeometry(a):this.family===h.PATH&&this.drawPath(a)},drawPath:function(a){var b,d;if(0!==this.vertices.length){a.beginShape();if(0===this.vertexCodes.length)if(2===this.vertices[0].length)for(b=
0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1]);else for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1],this.vertices[b][2]);else{var f=0;if(2===this.vertices[0].length)for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f].moveTo),a.breakShape=!1,f++):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+
0][1],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+2][0],this.vertices[f+2][1]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0);else for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),!0===this.vertices[f].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.vertices[f].moveTo&&(vertArray[vertArray.length-
1].moveTo=!1),a.breakShape=!1):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+0][1],this.vertices[f+0][2],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+1][2],this.vertices[f+2][0],this.vertices[f+2][1],this.vertices[f+2][2]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0)}a.endShape(this.close?h.CLOSE:h.OPEN)}},drawGeometry:function(a){var b,
d;a.beginShape(this.kind);if(this.style)for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b]);else for(b=0,d=this.vertices.length;b<d;b++){var f=this.vertices[b];0===f[2]?a.vertex(f[0],f[1]):a.vertex(f[0],f[1],f[2])}a.endShape()},drawGroup:function(a){for(var b=0,d=this.children.length;b<d;b++)this.children[b].draw(a)},drawPrimitive:function(a){if(this.kind===h.POINT)a.point(this.params[0],this.params[1]);else if(this.kind===h.LINE)4===this.params.length?a.line(this.params[0],this.params[1],
this.params[2],this.params[3]):a.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.TRIANGLE)a.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.QUAD)a.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7]);else if(this.kind===h.RECT)if(null!==this.image){var b=imageModeConvert;a.imageMode(h.CORNER);
a.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]);imageModeConvert=b}else b=a.curRectMode,a.rectMode(h.CORNER),a.rect(this.params[0],this.params[1],this.params[2],this.params[3]),a.curRectMode=b;else this.kind===h.ELLIPSE?(b=a.curEllipseMode,a.ellipseMode(h.CORNER),a.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),a.curEllipseMode=b):this.kind===h.ARC?(b=curEllipseMode,a.ellipseMode(h.CORNER),a.arc(this.params[0],this.params[1],this.params[2],this.params[3],
this.params[4],this.params[5]),curEllipseMode=b):this.kind===h.BOX?1===this.params.length?a.box(this.params[0]):a.box(this.params[0],this.params[1],this.params[2]):this.kind===h.SPHERE&&a.sphere(this.params[0])},pre:function(a){this.matrix&&(a.pushMatrix(),a.transform(this.matrix));this.style&&(a.pushStyle(),this.styles(a))},post:function(a){this.matrix&&a.popMatrix();this.style&&a.popStyle()},styles:function(a){this.stroke?(a.stroke(this.strokeColor),a.strokeWeight(this.strokeWeight),a.strokeCap(this.strokeCap),
a.strokeJoin(this.strokeJoin)):a.noStroke();this.fill?a.fill(this.fillColor):a.noFill()},getChild:function(a){var b,d;if("number"===typeof a)return this.children[a];var f;if(""===a||this.name===a)return this;if(0<this.nameTable.length){b=0;for(d=this.nameTable.length;b<d||f;b++)if(this.nameTable[b].getName===a){f=this.nameTable[b];break}if(f)return f}b=0;for(d=this.children.length;b<d;b++)if(f=this.children[b].getChild(a))return f;return null},getChildCount:function(){return this.children.length},
addChild:function(a){this.children.push(a);a.parent=this;null!==a.getName()&&this.addName(a.getName(),a)},addName:function(a,b){null!==this.parent?this.parent.addName(a,b):this.nameTable.push([a,b])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(a){null===this.matrix?this.matrix=2===a?new m:new n:3===a&&this.matrix instanceof m&&(this.matrix=
new n)},rotateX:function(a){this.rotate(a,1,0,0)},rotateY:function(a){this.rotate(a,0,1,0)},rotateZ:function(a){this.rotate(a,0,0,1)},rotate:function(){1===arguments.length?(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],
arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(a){1===arguments.length?this.applyMatrix(a.elements[0],a.elements[1],0,a.elements[2],a.elements[3],a.elements[4],0,a.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}};return k}},{}],16:[function(D,x,Q){x.exports=function(k){var h=k.CommonFunctions,m=k.PConstants,n=k.PShape,a=k.XMLElement,b=k.colors,d=function(){n.call(this);if(1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,
this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient=null,this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillName=this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">";}else 2===arguments.length&&("string"===typeof arguments[1]?-1<arguments[1].indexOf(".svg")&&
(this.element=new a(!0,arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient="",this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),
this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,
this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity));this.name=this.element.getStringAttribute("id");this.visible="none"!==this.element.getStringAttribute("display","inline");var f=this.element.getAttribute("transform");f&&(this.matrix=this.parseMatrix(f));f=this.element.getStringAttribute("viewBox");null!==f&&(f=f.split(" "),this.width=f[2],this.height=f[3]);var f=this.element.getStringAttribute("width"),
b=this.element.getStringAttribute("height");if(null!==f)this.width=this.parseUnitSize(f),this.height=this.parseUnitSize(b);else if(0===this.width||0===this.height)throw this.height=this.width=1,"The width and/or height is not readable in the <svg> tag of this file.";this.parseColors(this.element);this.parseChildren(this.element)};d.prototype=new n;d.prototype.parseMatrix=function(){function f(f){var a=[];f.replace(/\((.*?)\)/,function(){return function(f,c){a=c.replace(/,+/g," ").split(/\s+/)}}());
return a}return function(a){this.checkMatrix(2);var b=[];a.replace(/\s*(\w+)\((.*?)\)/g,function(c){b.push(h.trim(c))});if(0===b.length)return null;a=0;for(var d=b.length;a<d;a++){var c=f(b[a]);if(-1!==b[a].indexOf("matrix"))this.matrix.set(c[0],c[2],c[4],c[1],c[3],c[5]);else if(-1!==b[a].indexOf("translate"))this.matrix.translate(c[0],2===c.length?c[1]:0);else if(-1!==b[a].indexOf("scale"))this.matrix.scale(c[0],2===c.length?c[1]:c[0]);else if(-1!==b[a].indexOf("rotate")){var k=c[0];1===c.length?
this.matrix.rotate(h.radians(k)):3===c.length&&(this.matrix.translate(c[1],c[2]),this.matrix.rotate(h.radians(c[0])),this.matrix.translate(-c[1],-c[2]))}else-1!==b[a].indexOf("skewX")?this.matrix.skewX(parseFloat(c[0])):-1!==b[a].indexOf("skewY")?this.matrix.skewY(c[0]):-1!==b[a].indexOf("shearX")?this.matrix.shearX(c[0]):-1!==b[a].indexOf("shearY")&&this.matrix.shearY(c[0])}return this.matrix}}();d.prototype.parseChildren=function(f){f=f.getChildren();var a=new n,b,d;b=0;for(d=f.length;b<d;b++){var c=
this.parseChild(f[b]);c&&a.addChild(c)}b=0;for(d=a.children.length;b<d;b++)this.children.push(a.children[b])};d.prototype.getName=function(){return this.name};d.prototype.parseChild=function(f){var a=f.getName(),b;"g"===a?b=new d(this,f):"defs"===a?b=new d(this,f):"line"===a?(b=new d(this,f),b.parseLine()):"circle"===a?(b=new d(this,f),b.parseEllipse(!0)):"ellipse"===a?(b=new d(this,f),b.parseEllipse(!1)):"rect"===a?(b=new d(this,f),b.parseRect()):"polygon"===a?(b=new d(this,f),b.parsePoly(!0)):"polyline"===
a?(b=new d(this,f),b.parsePoly(!1)):"path"===a?(b=new d(this,f),b.parsePath()):"radialGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):"linearGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===a?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===a?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===a&&unimplemented("PShapeSVG.prototype.parseChild, name = mask");return b};d.prototype.parsePath=
function(){this.family=m.PATH;this.kind=0;var f=h.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(null!==f)for(var f=f.split(""),a=0,b=0,d=0,c=0,k=c=d=0,n=0,G=0,A=0,x=A=c=G=d=0,v=0,ga="",q=[],D=!1,M,nc,u;x<f.length;)if(v=f[x].charCodeAt(0),65<=v&&90>=v||97<=v&&122>=v){u=x;x++;if(x<f.length)for(q=[],v=f[x].charCodeAt(0);!(65<=v&&90>=v||97<=v&&100>=v||102<=v&&122>=v)&&!1===D;)32===v?""!==ga&&(q.push(parseFloat(ga)),ga=""):45===v?101===f[x-1].charCodeAt(0)?ga+=f[x].toString():(""!==
ga&&q.push(parseFloat(ga)),ga=f[x].toString()):ga+=f[x].toString(),x++,x===f.length?D=!0:v=f[x].charCodeAt(0);""!==ga&&(q.push(parseFloat(ga)),ga="");nc=f[u];v=nc.charCodeAt(0);if(77===v){if(2<=q.length&&0===q.length%2&&(a=q[0],b=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(109===v){if(2<=q.length&&0===q.length%2&&(a+=q[0],b+=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,
b)}else if(76===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(108===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,b)}else if(72===v)for(u=0,v=q.length;u<v;u++)a=q[u],this.parsePathLineto(a,b);else if(104===v)for(u=0,v=q.length;u<v;u++)a+=q[u],this.parsePathLineto(a,b);else if(86===v)for(u=0,v=q.length;u<v;u++)b=q[u],this.parsePathLineto(a,b);else if(118===v)for(u=0,v=q.length;u<
v;u++)b+=q[u],this.parsePathLineto(a,b);else if(67===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=q[u],k=q[u+1],c=q[u+2],n=q[u+3],G=q[u+4],A=q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(99===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=a+q[u],k=b+q[u+1],c=a+q[u+2],n=b+q[u+3],G=a+q[u+4],A=b+q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(83===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?
(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=q[u],n=q[u+1],G=q[u+2],A=q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(115===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?(d=this.vertices[this.vertices.length-
2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=a+q[u],n=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(81===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=q[u],c=q[u+1],G=q[u+2],A=q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(113===v){if(4<=
q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=a+q[u],c=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(84===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=q[u],A=q[u+1],this.parsePathQuadto(a,b,
d,c,G,A),a=G,b=A}else if(116===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=a+q[u],A=b+q[u+1],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(90===v||122===v)this.close=!0;M=nc.toString()}else x++};d.prototype.parsePathQuadto=function(a,
b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a+2*(d-a)/3,b+2*(r-b)/3),this.parsePathVertex(c+2*(d-c)/3,h+2*(r-h)/3),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathCurveto=function(a,b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a,b),this.parsePathVertex(d,r),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathLineto=function(a,b){if(0<
this.vertices.length)this.parsePathCode(m.VERTEX),this.parsePathVertex(a,b),this.vertices[this.vertices.length-1].moveTo=!1;else throw"Path must start with M/m";};d.prototype.parsePathMoveto=function(a,b){0<this.vertices.length&&this.parsePathCode(m.BREAK);this.parsePathCode(m.VERTEX);this.parsePathVertex(a,b);this.vertices[this.vertices.length-1].moveTo=!0};d.prototype.parsePathVertex=function(a,b){var d=[];d[0]=a;d[1]=b;this.vertices.push(d)};d.prototype.parsePathCode=function(a){this.vertexCodes.push(a)};
d.prototype.parsePoly=function(a){this.family=m.PATH;this.close=a;a=h.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(null!==a)if(a=a.split(" "),0===a.length%2)for(var b=0,d=a.length;b<d;b++){var r=[];r[0]=a[b];r[1]=a[++b];this.vertices.push(r)}else throw"Error parsing polygon points: odd number of coordinates provided";};d.prototype.parseRect=function(){this.kind=m.RECT;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=
this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(0>this.params[2]||0>this.params[3])throw"svg error: negative width or height found while parsing <rect>";};d.prototype.parseEllipse=function(a){this.kind=m.ELLIPSE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var b;if(a){if(a=b=this.element.getFloatAttribute("r"),
0>a)throw"svg error: negative radius found while parsing <circle>";}else if(a=this.element.getFloatAttribute("rx"),b=this.element.getFloatAttribute("ry"),0>a||0>b)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";this.params[0]-=a;this.params[1]-=b;this.params[2]=2*a;this.params[3]=2*b};d.prototype.parseLine=function(){this.kind=m.LINE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");
this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};d.prototype.parseColors=function(a){a.hasAttribute("opacity")&&this.setOpacity(a.getAttribute("opacity"));a.hasAttribute("stroke")&&this.setStroke(a.getAttribute("stroke"));a.hasAttribute("stroke-width")&&this.setStrokeWeight(a.getAttribute("stroke-width"));a.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(a.getAttribute("stroke-linejoin"));a.hasAttribute("stroke-linecap")&&this.setStrokeCap(a.getStringAttribute("stroke-linecap"));
a.hasAttribute("fill")&&this.setFill(a.getStringAttribute("fill"));if(a.hasAttribute("style")){a=a.getStringAttribute("style").toString().split(";");for(var b=0,d=a.length;b<d;b++){var r=h.trim(a[b].split(":"));"fill"===r[0]?this.setFill(r[1]):"fill-opacity"===r[0]?this.setFillOpacity(r[1]):"stroke"===r[0]?this.setStroke(r[1]):"stroke-width"===r[0]?this.setStrokeWeight(r[1]):"stroke-linecap"===r[0]?this.setStrokeCap(r[1]):"stroke-linejoin"===r[0]?this.setStrokeJoin(r[1]):"stroke-opacity"===r[0]?this.setStrokeOpacity(r[1]):
"opacity"===r[0]&&this.setOpacity(r[1])}}};d.prototype.setFillOpacity=function(a){this.fillOpacity=parseFloat(a);this.fillColor=255*this.fillOpacity<<24|this.fillColor&16777215};d.prototype.setFill=function(a){var d=this.fillColor&4278190080;"none"===a?this.fill=!1:0===a.indexOf("#")?(this.fill=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=d|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.fill=!0,this.fillColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?
this.fillName=a.substring(5,a.length-1):b[a]&&(this.fill=!0,this.fillColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setOpacity=function(a){this.strokeColor=255*parseFloat(a)<<24|this.strokeColor&16777215;this.fillColor=255*parseFloat(a)<<24|this.fillColor&16777215};d.prototype.setStroke=function(a){var d=this.strokeColor&4278190080;"none"===a?this.stroke=!1:"#"===a.charAt(0)?(this.stroke=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=d|parseInt(a.substring(1),
16)&16777215):0===a.indexOf("rgb")?(this.stroke=!0,this.strokeColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?this.strokeName=a.substring(5,a.length-1):b[a]&&(this.stroke=!0,this.strokeColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setStrokeWeight=function(a){this.strokeWeight=this.parseUnitSize(a)};d.prototype.setStrokeJoin=function(a){"miter"===a?this.strokeJoin=m.MITER:"round"===a?this.strokeJoin=m.ROUND:"bevel"===a&&(this.strokeJoin=m.BEVEL)};d.prototype.setStrokeCap=function(a){"butt"===
a?this.strokeCap=m.SQUARE:"round"===a?this.strokeCap=m.ROUND:"square"===a&&(this.strokeCap=m.PROJECT)};d.prototype.setStrokeOpacity=function(a){this.strokeOpacity=parseFloat(a);this.strokeColor=255*this.strokeOpacity<<24|this.strokeColor&16777215};d.prototype.parseRGB=function(a){a=a.substring(a.indexOf("(")+1,a.indexOf(")")).split(", ");return a[0]<<16|a[1]<<8|a[2]};d.prototype.parseUnitSize=function(a){var b=a.length-2;return 0>b?a:a.indexOf("pt")===b?1.25*parseFloat(a.substring(0,b)):a.indexOf("pc")===
b?15*parseFloat(a.substring(0,b)):a.indexOf("mm")===b?3.543307*parseFloat(a.substring(0,b)):a.indexOf("cm")===b?35.43307*parseFloat(a.substring(0,b)):a.indexOf("in")===b?90*parseFloat(a.substring(0,b)):a.indexOf("px")===b?parseFloat(a.substring(0,b)):parseFloat(a)};return d}},{}],17:[function(D,x,Q){x.exports=function(k,h){function m(a,b,l){this.x=a||0;this.y=b||0;this.z=l||0}function n(a){return function(b,l){var p=b.get();p[a](l);return p}}var a=k.PConstants;m.fromAngle=function(a,b){if(b===h||
null===b)b=new m;b.x=Math.cos(a);b.y=Math.sin(a);return b};m.random2D=function(b){return m.fromAngle(Math.random()*a.TWO_PI,b)};m.random3D=function(b){var f=Math.random()*a.TWO_PI,l=2*Math.random()-1,p=Math.sqrt(1-l*l),r=p*Math.cos(f),f=p*Math.sin(f);b===h||null===b?b=new m(r,f,l):b.set(r,f,l);return b};m.dist=function(a,b){return a.dist(b)};m.dot=function(a,b){return a.dot(b)};m.cross=function(a,b){return a.cross(b)};m.sub=function(a,b){return new m(a.x-b.x,a.y-b.y,a.z-b.z)};m.angleBetween=function(a,
b){return Math.acos(a.dot(b)/(a.mag()*b.mag()))};m.lerp=function(a,b,l){a=new m(a.x,a.y,a.z);a.lerp(b,l);return a};m.prototype={set:function(a,b,l){1===arguments.length?this.set(a.x||a[0]||0,a.y||a[1]||0,a.z||a[2]||0):(this.x=a,this.y=b,this.z=l)},get:function(){return new m(this.x,this.y,this.z)},mag:function(){var a=this.x,b=this.y,l=this.z;return Math.sqrt(a*a+b*b+l*l)},magSq:function(){var a=this.x,b=this.y,l=this.z;return a*a+b*b+l*l},setMag:function(a,b){if(b===h)b=a,this.normalize(),this.mult(b);
else return a.normalize(),a.mult(b),a},add:function(a,b,l){1===arguments.length?(this.x+=a.x,this.y+=a.y,this.z+=a.z):(this.x+=a,this.y+=b,this.z+=l)},sub:function(a,b,l){1===arguments.length?(this.x-=a.x,this.y-=a.y,this.z-=a.z):(this.x-=a,this.y-=b,this.z-=l)},mult:function(a){"number"===typeof a?(this.x*=a,this.y*=a,this.z*=a):(this.x*=a.x,this.y*=a.y,this.z*=a.z)},div:function(a){"number"===typeof a?(this.x/=a,this.y/=a,this.z/=a):(this.x/=a.x,this.y/=a.y,this.z/=a.z)},rotate:function(a){var b=
this.x,l=Math.cos(a);a=Math.sin(a);this.x=l*this.x-a*this.y;this.y=a*b+l*this.y},dist:function(a){var b=this.x-a.x,l=this.y-a.y;a=this.z-a.z;return Math.sqrt(b*b+l*l+a*a)},dot:function(a,b,l){return 1===arguments.length?this.x*a.x+this.y*a.y+this.z*a.z:this.x*a+this.y*b+this.z*l},cross:function(a){var b=this.x,l=this.y,p=this.z;return new m(l*a.z-a.y*p,p*a.x-a.z*b,b*a.y-a.x*l)},lerp:function(a,b,l,p){var r,c;2===arguments.length?(p=b,r=a.x,c=a.y,l=a.z):(r=a,c=b);this.x+=(r-this.x)*p;this.y+=(c-this.y)*
p;this.z+=(l-this.z)*p},normalize:function(){var a=this.mag();0<a&&this.div(a)},limit:function(a){this.mag()>a&&(this.normalize(),this.mult(a))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};for(var b in m.prototype)m.prototype.hasOwnProperty(b)&&!m.hasOwnProperty(b)&&(m[b]=n(b));return m}},{}],18:[function(D,x,Q){x.exports=function(){var k=
function(h,k,n,a,b){this.fullName=h||"";this.name=k||"";this.namespace=n||"";this.value=a;this.type=b};k.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(h){this.value=h}};return k}},{}],19:[function(D,x,Q){x.exports=function(k,h){var m=k.Browser,n=m.ajax,a=m.window.DOMParser,b=k.XMLAttribute,d=function(a,b,d,r){this.attributes=
[];this.children=[];this.name=this.fullName=null;this.namespace="";this.parent=this.content=null;this.systemID=this.lineNr="";this.type="ELEMENT";a&&("string"===typeof a?b===h&&-1<a.indexOf("<")?this.parse(a):(this.fullName=a,this.namespace=b,this.systemId=d,this.lineNr=r):this.parse(b))};d.prototype={parse:function(b){var d;try{var p=b.substring(b.length-4);if(".xml"===p||".svg"===p)b=n(b);d=(new a).parseFromString(b,"text/xml");var r=d.documentElement;if(r)this.parseChildrenRecursive(null,r);else throw"Error loading document";
return this}catch(c){throw c;}},parseChildrenRecursive:function(a,l){var p,r,c,h;a?(p=new d(l.nodeName),p.parent=a):(this.fullName=l.localName,this.name=l.nodeName,p=this);if(3===l.nodeType&&""!==l.textContent)return this.createPCDataElement(l.textContent);if(4===l.nodeType)return this.createCDataElement(l.textContent);if(l.attributes)for(c=0,h=l.attributes.length;c<h;c++)r=l.attributes[c],r=new b(r.getname,r.nodeName,r.namespaceURI,r.nodeValue,r.nodeType),p.attributes.push(r);if(l.childNodes)for(c=
0,h=l.childNodes.length;c<h;c++)r=p.parseChildrenRecursive(p,l.childNodes[c]),null!==r&&p.children.push(r);return p},createElement:function(a,b,p,r){return p===h?new d(a,b):new d(a,b,p,r)},createPCDataElement:function(a,b){if(""===a.replace(/^\s+$/g,""))return null;var p=new d;p.type="TEXT";p.content=a;return p},createCDataElement:function(a){var b=this.createPCDataElement(a);if(null===b)return null;b.type="CDATA";var d={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},r;for(r in d)Object.hasOwnProperty(d,
r)||(a=a.replace(RegExp(r,"g"),d[r]));b.cdata=a;return b},hasAttribute:function(){if(1===arguments.length)return null!==this.getAttribute(arguments[0]);if(2===arguments.length)return null!==this.getAttribute(arguments[0],arguments[1])},equals:function(a){if(!(a instanceof d))return!1;var b,p;if(this.fullName!==a.fullName||this.attributes.length!==a.getAttributeCount()||this.attributes.length!==a.attributes.length)return!1;var r,c;b=0;for(p=this.attributes.length;b<p;b++)if(r=this.attributes[b].getName(),
c=this.attributes[b].getNamespace(),r=a.findAttribute(r,c),null===r||this.attributes[b].getValue()!==r.getValue()||this.attributes[b].getType()!==r.getType())return!1;if(this.children.length!==a.getChildCount())return!1;if(0<this.children.length){b=0;for(p=this.children.length;b<p;b++)if(r=this.getChild(b),c=a.getChild(b),!r.equals(c))return!1;return!0}return this.content===a.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content;var a=this.children;return 1!==
a.length||"TEXT"!==a[0].type&&"CDATA"!==a[0].type?null:a[0].content},getAttribute:function(){var a;if(2===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():arguments[1];if(1===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():null;if(3===arguments.length)return(a=this.findAttribute(arguments[0],arguments[1]))?a.getValue():arguments[2]},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],
arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(a){return this.getStringAttribute(a)},getFloatAttribute:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(a){return this.getFloatAttribute(a)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):
2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(a){return this.getIntAttribute(a)},hasChildren:function(){return 0<this.children.length},addChild:function(a){null!==a&&(a.parent=this,this.children.push(a))},insertChild:function(a,b){if(a){if(null===a.getLocalName()&&!this.hasChildren()){var d=this.children[this.children.length-1];if(null===d.getLocalName()){d.setContent(d.getContent()+a.getContent());return}}a.parent=
this;this.children.splice(b,0,a)}},getChild:function(a){if("number"===typeof a)return this.children[a];if(-1!==a.indexOf("/"))return this.getChildRecursive(a.split("/"),0);for(var b,d,r=0,c=this.getChildCount();r<c;r++)if(b=this.getChild(r),d=b.getName(),null!==d&&d===a)return b;return null},getChildren:function(){if(1===arguments.length){if("number"===typeof arguments[0])return this.getChild(arguments[0]);if(-1!==arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),
0);for(var a=[],b,d,r=0,c=this.getChildCount();r<c;r++)b=this.getChild(r),d=b.getName(),null!==d&&d===arguments[0]&&a.push(b);return a}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(a,b){if(b===a.length)return this;for(var d,r,c=a[b],h=0,k=this.getChildCount();h<k;h++)if(d=this.getChild(h),r=d.getName(),null!==r&&r===c)return d.getChildRecursive(a,b+1);return null},getChildrenRecursive:function(a,b){if(b===a.length-1)return this.getChildren(a[b]);
for(var d=this.getChildren(a[b]),r=[],c=0;c<d.length;c++)r=r.concat(d[c].getChildrenRecursive(a,b+1));return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var a=[],b=0,d=this.children.length;b<d;b++)a.push(this.getChild(b).getName());return a},removeAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace){this.attributes.splice(d,1);break}},removeChild:function(a){if(a)for(var b=
0,d=this.children.length;b<d;b++)if(this.children[b].equals(a)){this.children.splice(b,1);break}},removeChildAtIndex:function(a){this.children.length>a&&this.children.splice(a,1)},findAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace)return this.attributes[d];return null},setAttribute:function(){var a;if(3===arguments.length){a=arguments[0].indexOf(":");var d=arguments[0].substring(a+
1);(a=this.findAttribute(d,arguments[1]))?a.setValue(arguments[2]):(a=new b(arguments[0],d,arguments[1],arguments[2],"CDATA"),this.attributes.push(a))}else(a=this.findAttribute(arguments[0]))?a.setValue(arguments[1]):(a=new b(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(a))},setString:function(a,b){this.setAttribute(a,b)},setInt:function(a,b){this.setAttribute(a,b)},setFloat:function(a,b){this.setAttribute(a,b)},setContent:function(a){0<this.children.length&&Processing.debug("Tried to set content for XMLElement with children");
this.content=a},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null;else{var a=arguments[0].indexOf(":");this.name=null===arguments[1]||0>a?arguments[0]:arguments[0].substring(a+1);this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content;
if("CDATA"===this.type)return this.cdata;var a=this.fullName,b="<"+a,d;for(d=0;d<this.attributes.length;d++)var r=this.attributes[d],b=b+(" "+r.getName()+'="'+r.getValue()+'"');if(0===this.children.length)b=""===this.content?b+"/>":b+(">"+this.content+"</"+a+">");else{b+=">";for(d=0;d<this.children.length;d++)b+=this.children[d].toString();b+="</"+a+">"}return b}};d.parse=function(a){var b=new d;b.parse(a);return b};return d}},{}],20:[function(D,x,Q){x.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",
aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",
darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",
hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",
linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",
palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",
tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],21:[function(D,x,Q){x.exports=function(k,h,m){return function(n,a){n.__contains=function(b,d){return"string"!==typeof b?b.contains.apply(b,a(arguments)):null!==b&&null!==d&&"string"===typeof d&&-1<b.indexOf(d)};n.__replaceAll=function(b,d,f){return"string"!==typeof b?b.replaceAll.apply(b,a(arguments)):
b.replace(RegExp(d,"g"),f)};n.__replaceFirst=function(b,d,f){return"string"!==typeof b?b.replaceFirst.apply(b,a(arguments)):b.replace(RegExp(d,""),f)};n.__replace=function(b,d,f){if("string"!==typeof b)return b.replace.apply(b,a(arguments));if(d instanceof RegExp)return b.replace(d,f);"string"!==typeof d&&(d=d.toString());if(""===d)return b;var h=b.indexOf(d);if(0>h)return b;var k=0,r="";do r+=b.substring(k,h)+f,k=h+d.length;while(0<=(h=b.indexOf(d,k)));return r+b.substring(k)};n.__equals=function(b,
d){return b.equals instanceof Function?b.equals.apply(b,a(arguments)):h(b,d)};n.__equalsIgnoreCase=function(b,d){return"string"!==typeof b?b.equalsIgnoreCase.apply(b,a(arguments)):b.toLowerCase()===d.toLowerCase()};n.__toCharArray=function(b){if("string"!==typeof b)return b.toCharArray.apply(b,a(arguments));for(var d=[],f=0,h=b.length;f<h;++f)d[f]=new Char(b.charAt(f));return d};n.__split=function(b,d,f){if("string"!==typeof b)return b.split.apply(b,a(arguments));var h=RegExp(d);if(f===m||1>f)return b.split(h);
for(var k=[],r=b,c;-1!==(c=r.search(h))&&k.length<f-1;){var n=h.exec(r).toString();k.push(r.substring(0,c));r=r.substring(c+n.length)}-1===c&&""===r||k.push(r);return k};n.__codePointAt=function(a,d){var f=a.charCodeAt(d),h;return 55296<=f&&56319>=f?(h=a.charCodeAt(d+1),1024*(f-55296)+(h-56320)+65536):f};n.__matches=function(a,d){return RegExp(d).test(a)};n.__startsWith=function(b,d,f){if("string"!==typeof b)return b.startsWith.apply(b,a(arguments));f=f||0;return 0>f||f>b.length?!1:""===d||d===b?
!0:b.indexOf(d)===f};n.__endsWith=function(b,d){if("string"!==typeof b)return b.endsWith.apply(b,a(arguments));var f=d?d.length:0;return""===d||d===b?!0:b.indexOf(d)===b.length-f};n.__hashCode=function(b){return b.hashCode instanceof Function?b.hashCode.apply(b,a(arguments)):k(b)};n.__printStackTrace=function(a){n.println("Exception: "+a.toString())}}}},{}],22:[function(D,x,Q){x.exports=function(k,h){function m(a,b){var c=a||362436069,d=b||521288629,f=function(){c=36969*(c&65535)+(c>>>16)&4294967295;
d=18E3*(d&65535)+(d>>>16)&4294967295;return((c&65535)<<16|d&65535)&4294967295};this.doubleGenerator=function(){var a=f()/4294967296;return 0>a?1+a:a};this.intGenerator=f}function n(a){function b(a,c,d,f){a&=15;var r=8>a?c:d;c=4>a?d:12===a||14===a?c:f;return(0===(a&1)?r:-r)+(0===(a&2)?c:-c)}function c(a,b,c){b=0===(a&1)?b:c;return 0===(a&2)?-b:b}function d(a,b,c){return b+a*(c-b)}a=a!==h?new m(a):m.createRandomized();var f,k,l=new Uint8Array(512);for(f=0;256>f;++f)l[f]=f;for(f=0;256>f;++f){var n=l[k=
a.intGenerator()&255];l[k]=l[f];l[f]=n}for(f=0;256>f;++f)l[f+256]=l[f];this.noise3d=function(a,c,f){var h=Math.floor(a)&255,k=Math.floor(c)&255,p=Math.floor(f)&255;a-=Math.floor(a);c-=Math.floor(c);f-=Math.floor(f);var m=(3-2*a)*a*a,n=(3-2*c)*c*c,G=l[h]+k,ca=l[G]+p,G=l[G+1]+p,k=l[h+1]+k,h=l[k]+p,p=l[k+1]+p;return d((3-2*f)*f*f,d(n,d(m,b(l[ca],a,c,f),b(l[h],a-1,c,f)),d(m,b(l[G],a,c-1,f),b(l[p],a-1,c-1,f))),d(n,d(m,b(l[ca+1],a,c,f-1),b(l[h+1],a-1,c,f-1)),d(m,b(l[G+1],a,c-1,f-1),b(l[p+1],a-1,c-1,f-1))))};
this.noise2d=function(a,b){var f=Math.floor(a)&255,r=Math.floor(b)&255;a-=Math.floor(a);b-=Math.floor(b);var h=(3-2*a)*a*a,k=l[f]+r,f=l[f+1]+r;return d((3-2*b)*b*b,d(h,c(l[k],a,b),c(l[f],a-1,b)),d(h,c(l[k+1],a,b-1),c(l[f+1],a-1,b-1)))};this.noise1d=function(a){var b=Math.floor(a)&255;a-=Math.floor(a);return d((3-2*a)*a*a,0===(l[b]&1)?-a:a,0===(l[b+1]&1)?-(a-1):a-1)}}var a=function(){return Math.random()};k.abs=Math.abs;k.ceil=Math.ceil;k.exp=Math.exp;k.floor=Math.floor;k.log=Math.log;k.pow=Math.pow;
k.round=Math.round;k.sqrt=Math.sqrt;k.acos=Math.acos;k.asin=Math.asin;k.atan=Math.atan;k.atan2=Math.atan2;k.cos=Math.cos;k.sin=Math.sin;k.tan=Math.tan;k.constrain=function(a,b,c){return a>c?c:a<b?b:a};k.dist=function(){var a,b,c;if(4===arguments.length)return a=arguments[0]-arguments[2],b=arguments[1]-arguments[3],Math.sqrt(a*a+b*b);if(6===arguments.length)return a=arguments[0]-arguments[3],b=arguments[1]-arguments[4],c=arguments[2]-arguments[5],Math.sqrt(a*a+b*b+c*c)};k.lerp=function(a,b,c){return(b-
a)*c+a};k.mag=function(a,b,c){return c?Math.sqrt(a*a+b*b+c*c):Math.sqrt(a*a+b*b)};k.map=function(a,b,c,d,f){return d+(f-d)*((a-b)/(c-b))};k.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b<a[d]&&(b=a[d]);return b};k.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:
arguments[1];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b>a[d]&&(b=a[d]);return b};k.norm=function(a,b,c){return(a-b)/(c-b)};k.sq=function(a){return a*a};k.degrees=function(a){return 180*a/Math.PI};k.random=function(){if(0===arguments.length)return a();if(1===arguments.length)return a()*arguments[0];var b=arguments[0],d=arguments[1];return a()*(d-b)+b};m.createRandomized=function(){var a=
new Date;return new m(a/6E4&4294967295,a&4294967295)};k.randomSeed=function(b){a=(new m(b)).doubleGenerator;this.haveNextNextGaussian=!1};k.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian;var b,d,c;do b=2*a()-1,d=2*a()-1,c=b*b+d*d;while(1<=c||0===c);c=Math.sqrt(-2*Math.log(c)/c);this.nextNextGaussian=d*c;this.haveNextNextGaussian=!0;return b*c};var b=h,d=4,f=0.5,l=h;k.noise=function(a,k,c){b===h&&(b=new n(l));for(var m=b,ca=1,G=1,A=
0,x=0;x<d;++x){ca*=f;switch(arguments.length){case 1:A+=ca*(1+m.noise1d(G*a))/2;break;case 2:A+=ca*(1+m.noise2d(G*a,G*k))/2;break;case 3:A+=ca*(1+m.noise3d(G*a,G*k,G*c))/2}G*=2}return A};k.noiseDetail=function(a,b){d=a;b!==h&&(f=b)};k.noiseSeed=function(a){l=a;b=h}}},{}],23:[function(D,x,Q){x.exports=function(k){var h={trim:function(h){if(h instanceof Array){for(var k=[],a=0;a<h.length;a++)k.push(h[a].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""));return k}return h.replace(/^\s*/,"").replace(/\s*$/,
"").replace(/\r*$/,"")},radians:function(h){return h/180*Math.PI},nfCoreScalar:function(h,n,a,b,d,f){n=0>h?a:n;a=0===d;d=d===k||0>d?0:d;h=Math.abs(h);if(a)for(d=1,h*=10;1E-6<Math.abs(Math.round(h)-h)&&7>d;)++d,h*=10;else 0!==d&&(h*=Math.pow(10,d));a=2*h;Math.floor(h)===h?a=h:Math.floor(a)===a?(h=Math.floor(h),a=h+h%2):a=Math.round(h);h="";for(b+=d;0<b||0<a;)b--,h=""+a%10+h,a=Math.floor(a/10);if(f!==k)for(b=h.length-3-d;0<b;)h=h.substring(0,b)+f+h.substring(b),b-=3;return 0<d?n+h.substring(0,h.length-
d)+"."+h.substring(h.length-d,h.length):n+h},nfCore:function(k,n,a,b,d,f){if(k instanceof Array){for(var l=[],p=0,r=k.length;p<r;p++)l.push(h.nfCoreScalar(k[p],n,a,b,d,f));return l}return h.nfCoreScalar(k,n,a,b,d,f)},nf:function(k,n,a){return h.nfCore(k,"","-",n,a)},nfs:function(k,n,a){return h.nfCore(k," ","-",n,a)},nfp:function(k,n,a){return h.nfCore(k,"+","-",n,a)},nfc:function(k,n){return h.nfCore(k,"","-",0,n,",")},withCommonFunctions:function(k){"trim radians nf nfs nfp nfc".split(" ").forEach(function(n){k[n]=
h[n]})}};return h}()},{}],24:[function(D,x,Q){x.exports=function(k,h,m,n,a,b){function d(a,b){var d=a,f=0,h=0;k.pmouseX=k.mouseX;k.pmouseY=k.mouseY;if(d.offsetParent){do f+=d.offsetLeft,h+=d.offsetTop;while(d=d.offsetParent)}d=a;do f-=d.scrollLeft||0,h-=d.scrollTop||0;while(d=d.parentNode);var l,p,m,x;n.defaultView&&n.defaultView.getComputedStyle&&(l=parseInt(n.defaultView.getComputedStyle(a,null).paddingLeft,10)||0,p=parseInt(n.defaultView.getComputedStyle(a,null).paddingTop,10)||0,m=parseInt(n.defaultView.getComputedStyle(a,
null).borderLeftWidth,10)||0,x=parseInt(n.defaultView.getComputedStyle(a,null).borderTopWidth,10)||0);f=f+l+m;h=h+p+x;f+=window.pageXOffset;h+=window.pageYOffset;return{X:f,Y:h}}function f(a,b){var f=d(a,b);k.mouseX=b.pageX-f.X;k.mouseY=b.pageY-f.Y}function l(a){var b=d(a.changedTouches[0].target,a.changedTouches[0]),f;for(f=0;f<a.touches.length;f++){var h=a.touches[f];h.offsetX=h.pageX-b.X;h.offsetY=h.pageY-b.Y}for(f=0;f<a.targetTouches.length;f++)h=a.targetTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=
h.pageY-b.Y;for(f=0;f<a.changedTouches.length;f++)h=a.changedTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=h.pageY-b.Y;return a}m(h,"touchstart",function(d){h.setAttribute("style","-webkit-user-select: none");h.setAttribute("onclick","void(0)");h.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var c=0,p=eventHandlers.length;c<p;c++){var n=eventHandlers[c].type;"mouseout"!==n&&"mousemove"!==n&&"mousedown"!==n&&"mouseup"!==n&&"DOMMouseScroll"!==n&&"mousewheel"!==n&&"touchstart"!==
n||detachEventHandler(eventHandlers[c])}k.touchStart!==b||k.touchMove!==b||k.touchEnd!==b||k.touchCancel!==b?(m(h,"touchstart",function(a){k.touchStart!==b&&(a=l(a),k.touchStart(a))}),m(h,"touchmove",function(a){k.touchMove!==b&&(a.preventDefault(),a=l(a),k.touchMove(a))}),m(h,"touchend",function(a){k.touchEnd!==b&&(a=l(a),k.touchEnd(a))}),m(h,"touchcancel",function(a){k.touchCancel!==b&&(a=l(a),k.touchCancel(a))})):(m(h,"touchstart",function(b){f(h,b.touches[0]);k.__mousePressed=!0;k.mouseDragging=
!1;k.mouseButton=a.LEFT;"function"===typeof k.mousePressed&&k.mousePressed()}),m(h,"touchmove",function(a){a.preventDefault();f(h,a.touches[0]);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)}),m(h,"touchend",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&k.mouseReleased()}));h.dispatchEvent(d)});
(function(){var a=!0,b=function(a){a.preventDefault();a.stopPropagation()};k.disableContextMenu=function(){a&&(m(h,"contextmenu",b),a=!1)};k.enableContextMenu=function(){a||(detachEventHandler({elem:h,type:"contextmenu",fn:b}),a=!0)}})();m(h,"mousemove",function(a){f(h,a);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)});m(h,"mouseout",function(a){"function"===typeof k.mouseOut&&k.mouseOut()});
m(h,"mouseover",function(a){f(h,a);"function"===typeof k.mouseOver&&k.mouseOver()});h.onmousedown=function(){h.focus();return!1};m(h,"mousedown",function(b){k.__mousePressed=!0;k.mouseDragging=!1;switch(b.which){case 1:k.mouseButton=a.LEFT;break;case 2:k.mouseButton=a.CENTER;break;case 3:k.mouseButton=a.RIGHT}"function"===typeof k.mousePressed&&k.mousePressed()});m(h,"mouseup",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&
k.mouseReleased()});var p=function(a){var b=0;a.wheelDelta?(b=a.wheelDelta/120,window.opera&&(b=-b)):a.detail&&(b=-a.detail/3);(k.mouseScroll=b)&&"function"===typeof k.mouseScrolled&&k.mouseScrolled()};m(n,"DOMMouseScroll",p);m(n,"mousewheel",p)}},{}],25:[function(D,x,Q){x.exports=function(k,h){function m(){var a="abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
f&&Object.keys(f).forEach(function(b){a.push(b)});var b={},d,h;d=0;for(h=a.length;d<h;++d)b[a[d]]=null;for(var l in k.lib)if(k.lib.hasOwnProperty(l)&&k.lib[l].exports){var p=k.lib[l].exports;d=0;for(h=p.length;d<h;++d)b[p[d]]=null}return b}function n(a){function c(a){var b=/^\s*/.exec(a);if(b[0].length===a.length)a={left:b[0],middle:"",right:""};else{var c=/\s*$/.exec(a);a={left:b[0],middle:a.substring(b[0].length,c.index),right:c[0]}}a.untrim=function(a){return this.left+a+this.right};return a}function f(a){return a.replace(/^\s+/,
"").replace(/\s+$/,"")}function h(a,b){for(var c=0,e=b.length;c<e;++c)a[b[c]]=null;return a}function k(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function l(a){return a.substring(2,a.length-1)}function n(a,b){var c=N.length;N.push(a);return'"'+b+c+'"'}function v(a){a=a.replace(qa,function(a){return n(a,"E")});a=a.replace(la,function(a){return n(a,"D")});return a=a.replace(jb,function(a){return n(a,"H")})}function x(a,b){return a.replace(Eb,function(a,c,e,d,f,tb){return e!==b?a:n(a,
"G")})}function q(a){this.name=a}function D(a,b){this.params=a;this.methodArgsParam=b}function M(a){var b=f(a.substring(1,a.length-1));a=[];var c=null;if(""!==b)for(var b=b.split(","),e=0;e<b.length;++e){var d=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[e]);if(e===b.length-1&&0<=b[e].indexOf("...")){c=new q(d[1]);break}a.push(new q(d[1]))}return new D(a,c)}function Q(a){function b(a,e,f,tb){a=N[tb];d=!0;a=c(a.substring(1,a.length-1));return"__"+f+(""===a.middle?n("("+e.replace(/\.\s*$/,
"")+")","B"):n("("+e.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function e(a,b,c){d=!0;return"__instanceof"+n("("+b+", "+c+")","B")}a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(a,b,c){return c});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(a,b,c){return n(a,"F")});a=a.replace(jb,function(a){return n(a,"H")});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
function(a,b,c){a=c.replace(/"C(\d+)"/g,function(a,b){return N[b]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");a="{"+a.substring(1,a.length-1)+"}";b="('"+b+"', "+n(a,"A")+")";return"$p.createJavaArray"+n(b,"B")});a=a.replace(/(\.\s*length)\s*"B\d+"/g,"$1");a=a.replace(/#([0-9A-Fa-f]{6})\b/g,function(a,b){return"0xFF"+b});a=a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(a,b,c){b=N[b];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
if(/^\(\s*int\s*\)$/.test(b))return"(int)"+c;b=b.split(/"C(\d+)"/g);return 1<b.length&&!/^\[\s*\]$/.test(N[b[1]])?a:""+c});a=a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(a,b){var e=c(b);return e.untrim("__int_cast("+e.middle+")")});a=a.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");a=a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(a,b,c){return b===c?a:""===c?"0"+b:b});a=a.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");a=
a.replace(/([^\s])%([^=\s])/g,"$1 % $2");a=a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");a=a.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(a,b){return"parse"+b.substring(0,1).toUpperCase()+b.substring(1)+'"B'});a=a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(a,b,c,e,d,f){return c?(a=N[e],d?"pixels.setPixel"+n("("+a.substring(1,a.length-1)+","+f+")","B"):"pixels.getPixel"+n("("+a.substring(1,a.length-1)+")","B")):b?"pixels.getLength"+
n("()","B"):d?"pixels.set"+n("("+f+")","B"):"pixels.toArray"+n("()","B")});var d;do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,b);while(d);do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
e);while(d);return a=a.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function u(a,b){this.baseInterfaceName=a;this.body=b;b.owner=this}function nd(a){var b=RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);a=ja;var c="class"+ ++ab;ja=c;var e=b[1]+"$"+c,b=new u(e,ea(N[b[2]],e,"","implements "+b[1]));b.classId=c;b.scopeId=a;X[c]=b;ja=a;return b}function Ia(a,b,c){this.name=a;this.params=b;this.body=c}function T(a){a=RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);
return new Ia("function"!==a[1]?a[1]:null,M(N[a[2]]),ra(N[a[3]]))}function Y(a){this.members=a}function U(a){a=a.split(",");for(var b=0;b<a.length;++b){var c=a[b].indexOf(":");a[b]=0>c?{value:ma(a[b])}:{label:f(a[b].substring(0,c)),value:ma(f(a[b].substring(c+1)))}}return new Y(a)}function Z(a){if("("===a.charAt(0)||"["===a.charAt(0))return a.charAt(0)+Z(a.substring(1,a.length-1))+a.charAt(a.length-1);if("{"===a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a)?"{"+n(a.substring(1,a.length-
1),"I")+"}":"["+Z(a.substring(1,a.length-1))+"]";a=c(a);var b=Q(a.middle),b=b.replace(/"[ABC](\d+)"/g,function(a,b){return Z(N[b])});return a.untrim(b)}function sa(a){return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(a,b,c,e,d,f){return b?a:C({name:c,member:d,callSign:!!f})+(e===p?"":e)})}function ta(a,b){this.expr=a;this.transforms=b}function $b(a,b,c){this.name=a;this.value=b;this.isDefault=c}function bb(a,b){var c=a.indexOf("="),e,d;0>c?(e=a,c=
b,d=!0):(e=a.substring(0,c),c=ma(a.substring(c+1)),d=!1);return new $b(f(e.replace(/(\s*"C\d+")+/g,"")),c,d)}function Sa(a){return"int"===a||"float"===a?"0":"boolean"===a?"false":"color"===a?"0x00000000":"null"}function cb(a,b){this.definitions=a;this.varType=b}function Fb(a){this.expression=a}function db(a){if(Gb.test(a)){var b=ub.exec(a);a=a.substring(b[0].length).split(",");for(var c=Sa(b[2]),e=0;e<a.length;++e)a[e]=bb(a[e],c);return new cb(a,b[2])}return new Fb(ma(a))}function Hb(a,b,c){this.initStatement=
a;this.condition=b;this.step=c}function Ib(a,b){this.initStatement=a;this.container=b}function wa(a,b){this.initStatement=a;this.container=b}function za(a){if(/\bin\b/.test(a))return a=a.substring(1,a.length-1).split(/\bin\b/g),new Ib(db(f(a[0])),ma(a[1]));if(0<=a.indexOf(":")&&0>a.indexOf(";"))return a=a.substring(1,a.length-1).split(":"),new wa(db(f(a[0])),ma(a[1]));a=a.substring(1,a.length-1).split(";");return new Hb(db(f(a[0])),ma(a[1]),ma(a[2]))}function Ta(a){a.sort(function(a,b){return b.weight-
a.weight})}function Ja(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Jb(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Kb(a){var b=qa.exec(a);qa.lastIndex=0;var c=0<=b[1].indexOf("static"),e=N[l(b[6])];a=ja;var d="class"+ ++ab;ja=d;b="interface"===b[2]?new Ja(b[3],eb(e,b[3],b[4]),c):new Jb(b[3],ea(e,b[3],b[4],b[5]),c);b.classId=d;b.scopeId=a;X[d]=b;ja=a;return b}function Lb(a,b,c,e){this.name=a;this.params=b;this.body=c;this.isStatic=e}function fb(a){a=
la.exec(a);la.lastIndex=0;var b=0<=a[1].indexOf("static"),c=";"!==a[6]?N[l(a[6])]:"{}";return new Lb(a[3],M(N[l(a[4])]),ra(c),b)}function Mb(a,b,c){this.definitions=a;this.fieldType=b;this.isStatic=c}function Ua(a){var b=ub.exec(a),c=0<=b[1].indexOf("static");a=a.substring(b[0].length).split(/,\s*/g);for(var e=Sa(b[2]),d=0;d<a.length;++d)a[d]=bb(a[d],e);return new Mb(a,b[2],c)}function Nb(a,b){this.params=a;this.body=b}function ac(a){a=RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);var b=M(N[a[1]]);return new Nb(b,
ra(N[a[2]]))}function Ka(a,b,c,e,d,f){this.name=a;this.interfacesNames=b;this.methodsNames=c;this.fields=e;this.innerClasses=d;this.misc=f;a=0;for(b=e.length;a<b;++a)e[a].owner=this}function H(a,b,c,e,d,f,g,h,k){this.name=a;this.baseClassName=b;this.interfacesNames=c;this.functions=e;this.methods=d;this.fields=f;this.cstrs=g;this.innerClasses=h;this.misc=k;a=0;for(b=f.length;a<b;++a)f[a].owner=this}function lb(a,b){this.name=a;this.body=b;b.owner=this}function mb(a,b){this.name=a;this.body=b;b.owner=
this}function Ob(a){var b=qa.exec(a);qa.lastIndex=0;var c=N[l(b[6])];a=ja;var e="class"+ ++ab;ja=e;b="interface"===b[2]?new lb(b[3],eb(c,b[3],b[4])):new mb(b[3],ea(c,b[3],b[4],b[5]));b.classId=e;b.scopeId=a;X[e]=b;ja=a;return b}function vb(a,b,c){this.name=a;this.params=b;this.body=c}function rc(a){a=la.exec(a);la.lastIndex=0;return new vb(a[3],M(N[l(a[4])]),ra(N[l(a[6])]))}function Pb(a,b){this.argument=a;this.misc=b}function bc(a,b){this.argument=a;this.misc=b}function S(a,b,c){this.name=a;this.argument=
b;this.misc=c}function Qb(a){this.expr=a}function wb(a){this.label=a}function e(a){for(var b=[],c=0,e=a.length;c<e;++c){var d=a[c];d instanceof cb?b=b.concat(d.getNames()):d instanceof Pb&&d.argument.initStatement instanceof cb?b=b.concat(d.argument.initStatement.getNames()):(d instanceof Ja||d instanceof Jb||d instanceof lb||d instanceof mb||d instanceof vb||d instanceof Ia)&&b.push(d.name)}return h({},b)}function g(a){this.statements=a}function da(a){this.statements=a}var ha=m(),R=[];a=a.replace(/\r\n?|\n\r/g,
"\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(a,b,c,e,d,f,g,h){return b||c?(b=R.length,R.push(a),"'"+b+"'"):e?(b=R.length,R.push(f),d+"'"+b+"'"):""!==h?" ":"\n"});a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return"__x005F_x"+b});a=a.replace(/\$/g,"__x0024");a=a.replace(/return\s*[\n\r]+/g,"return ");var ka,La=function(a,b,c,e){if(b||e)return a;ka=!0;return""};do ka=
!1,a=a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,La);while(ka);var N=function(a){var b=[];a=a.split(/([\{\[\(\)\]\}])/);for(var c=a[0],e=[],d=1;d<a.length;d+=2){var f=a[d];if("["===f||"{"===f||"("===f)e.push(c),c=
f;else if("]"===f||"}"===f||")"===f){var g="}"===f?"A":")"===f?"B":"C",h=b.length;b.push(c+f);c=e.pop()+'"'+g+(h+1)+'"'}c+=a[d+1]}b.unshift(c);return b}(a),C,X={},ja,ab=0,ea,eb,ra,Da,ma,qa=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
la=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Gb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
Eb=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,ub=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,jb=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;q.prototype.toString=function(){return this.name};
D.prototype.getNames=function(){for(var a=[],b=0,c=this.params.length;b<c;++b)a.push(this.params[b].name);return a};D.prototype.prependMethodArgs=function(a){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+a.substring(1):a};D.prototype.toString=function(){if(0===this.params.length)return"()";for(var a="(",b=0,c=this.params.length;b<c;++b)a+=this.params[b]+", ";return a.substring(0,a.length-2)+")"};u.prototype.toString=
function(){return"new ("+this.body+")"};Ia.prototype.toString=function(){var a=C,b=h({"this":null},this.params.getNames());C=function(c){return b.hasOwnProperty(c.name)?c.name:a(c)};var c="function";this.name&&(c+=" "+this.name);var e=this.params.prependMethodArgs(this.body.toString()),c=c+(this.params+" "+e);C=a;return c};Y.prototype.toString=function(){var a=C;C=function(b){return"this"===b.name?"this":a(b)};for(var b="",c=0,e=this.members.length;c<e;++c)this.members[c].label&&(b+=this.members[c].label+
": "),b+=this.members[c].value.toString()+", ";C=a;return b.substring(0,b.length-2)};ta.prototype.toString=function(){var a=this.transforms;return sa(this.expr).replace(/"!(\d+)"/g,function(b,c){return a[c].toString()})};ma=function(a){var b=[];a=Z(a);a=a.replace(/"H(\d+)"/g,function(a,c){b.push(T(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"F(\d+)"/g,function(a,c){b.push(nd(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"I(\d+)"/g,function(a,c){b.push(U(N[c]));return'"!'+(b.length-1)+'"'});
return new ta(a,b)};$b.prototype.toString=function(){return this.name+" = "+this.value};cb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};cb.prototype.toString=function(){return"var "+this.definitions.join(",")};Fb.prototype.toString=function(){return this.expression.toString()};Hb.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};Ib.prototype.toString=function(){var a=this.initStatement.toString();
0<=a.indexOf("=")&&(a=a.substring(0,a.indexOf("=")));return"("+a+" in "+this.container+")"};wa.iteratorId=0;wa.prototype.toString=function(){var a=this.initStatement.toString(),b="$it"+wa.iteratorId++,a=a.replace(/^\s*var\s*/,"").split("=")[0];return"("+("var "+b+" = new $p.ObjectIterator("+this.container+"), "+a+" = void(0)")+"; "+(b+".hasNext() && (("+a+" = "+b+".next()) || true)")+";)"};Ja.prototype.toString=function(){return""+this.body};Jb.prototype.toString=function(){return""+this.body};Lb.prototype.toString=
function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.methodId+this.params+" "+c+"\n";C=b;return c};Mb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};Mb.prototype.toString=function(){var a=C({name:"[this]"});if(this.isStatic){for(var b=this.owner.name,c=[],e=0,d=this.definitions.length;e<d;++e){var f=
this.definitions[e],g=f.name,h=b+"."+g;c.push("if("+h+" === void(0)) {\n "+h+" = "+f.value+"; }\n$p.defineProperty("+a+", '"+g+"', { get: function(){return "+h+";}, set: function(val){"+h+" = val;} });\n")}return c.join("")}return a+"."+this.definitions.join("; "+a+".")};Nb.prototype.toString=function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function $constr_"+this.params.params.length+this.params.toString(),e=this.params.prependMethodArgs(this.body.toString());
/\$(superCstr|constr)\b/.test(e)||(e="{\n$superCstr();\n"+e.substring(1));C=b;return c+e+"\n"};Ka.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methodsNames.length;e<f;++e)b[this.methodsNames[e]]=!0;e=0;for(f=this.innerClasses.length;e<f;++e)a=this.innerClasses[e],c[a.name]=a};Ka.prototype.toString=function(){for(var a=
this.owner,b=0;a;)++b,a=a.scope;var a=this.name,c=b="";this.getMembers({},{},{});var e,d;if(this.owner.interfaces){var f=[],g;e=0;for(d=this.interfacesNames.length;e<d;++e)this.owner.interfaces[e]&&(g=C({name:this.interfacesNames[e]}),f.push(g),b+="$p.extendInterfaceMembers("+a+", "+g+");\n");c+=a+".$interfaces = ["+f.join(", ")+"];\n"}c=c+(a+".$isInterface = true;\n")+(a+".$methods = ['"+this.methodsNames.join("', '")+"'];\n");Ta(this.innerClasses);e=0;for(d=this.innerClasses.length;e<d;++e)f=this.innerClasses[e],
f.isStatic&&(b+=a+"."+f.name+" = "+f+";\n");e=0;for(d=this.fields.length;e<d;++e)f=this.fields[e],f.isStatic&&(b+=a+"."+f.definitions.join(";\n"+a+".")+";\n");return"(function() {\nfunction "+a+"() { throw 'Unable to create the interface'; }\n"+b+c+"return "+a+";\n})()"};eb=function(a,b,e){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var d=[],f=[];a=a.replace(/"([DE])(\d+)"/g,function(a,b,c){"D"===b?d.push(c):"E"===b&&f.push(c);return""});a=a.split(/;(?:\s*;)*/g);var g,h;e!==p&&(g=e.replace(/^\s*extends\s+(.+?)\s*$/g,
"$1").split(/\s*,\s*/g));e=0;for(h=d.length;e<h;++e){var k=fb(N[d[e]]);d[e]=k.name}e=0;for(h=a.length-1;e<h;++e)k=c(a[e]),a[e]=Ua(k.middle);k=a.pop();e=0;for(h=f.length;e<h;++e)f[e]=Kb(N[f[e]]);return new Ka(b,g,d,a,f,{tail:k})};H.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methods.length;e<f;++e)a=this.methods[e],
b[a.name]=a;e=0;for(f=this.innerClasses.length;e<f;++e)b=this.innerClasses[e],c[b.name]=b};H.prototype.toString=function(){var a="$this_"+function(a){for(var b=0;a;)++b,a=a.scope;return b}(this.owner),b=this.name,c="var "+a+" = this;\n",e="",d="",g={},h={},k={};this.getMembers(g,h,k);var l=C;C=function(c){var e=c.name;return"this"===e?c.callSign||!c.member?a+".$self":a:g.hasOwnProperty(e)?g[e].isStatic?b+"."+e:a+"."+e:k.hasOwnProperty(e)?a+"."+e:h.hasOwnProperty(e)?h[e].isStatic?b+"."+e:a+".$self."+
e:l(c)};var p;this.baseClassName?(p=l({name:this.baseClassName}),c=c+("var $super = { $upcast: "+a+" };\n")+("function $superCstr(){"+p+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"),d+=b+".$base = "+p+";\n"):c+="function $superCstr(){$p.extendClassChain("+a+")}\n";this.owner.base&&(e+="$p.extendStaticMembers("+b+", "+p+");\n");var r,n,m;if(this.owner.interfaces){n=[];p=0;for(r=this.interfacesNames.length;p<r;++p)this.owner.interfaces[p]&&(m=l({name:this.interfacesNames[p]}),
n.push(m),e+="$p.extendInterfaceMembers("+b+", "+m+");\n");d+=b+".$interfaces = ["+n.join(", ")+"];\n"}0<this.functions.length&&(c+=this.functions.join("\n")+"\n");Ta(this.innerClasses);p=0;for(r=this.innerClasses.length;p<r;++p)n=this.innerClasses[p],n.isStatic?(e+=b+"."+n.name+" = "+n+";\n",c+=a+"."+n.name+" = "+b+"."+n.name+";\n"):c+=a+"."+n.name+" = "+n+";\n";p=0;for(r=this.fields.length;p<r;++p){var v=this.fields[p];if(v.isStatic)for(e+=b+"."+v.definitions.join(";\n"+b+".")+";\n",n=0,m=v.definitions.length;n<
m;++n)var u=v.definitions[n].name,q=b+"."+u,c=c+("$p.defineProperty("+a+", '"+u+"', {get: function(){return "+q+"}, set: function(val){"+q+" = val}});\n");else c+=a+"."+v.definitions.join(";\n"+a+".")+";\n"}n={};p=0;for(r=this.methods.length;p<r;++p)m=this.methods[p],v=n[m.name],u=m.name+"$"+m.params.params.length,q=!!m.params.methodArgsParam,v?(++v,u+="_"+v):v=1,m.methodId=u,n[m.name]=v,m.isStatic?(e+=m,e+="$p.addMethod("+b+", '"+m.name+"', "+u+", "+q+");\n"):c+=m,c+="$p.addMethod("+a+", '"+m.name+
"', "+u+", "+q+");\n";c+=f(this.misc.tail);0<this.cstrs.length&&(c+=this.cstrs.join("\n")+"\n");c+="function $constr() {\n";n=[];p=0;for(r=this.cstrs.length;p<r;++p)m=this.cstrs[p].params.params.length,n.push("if(arguments.length "+(this.cstrs[p].params.methodArgsParam?">=":"===")+" "+m+") { $constr_"+m+".apply("+a+", arguments); }");0<n.length&&(c+=n.join(" else ")+" else ");c+="$superCstr();\n}\n";c+="$constr.apply(null, arguments);\n";C=l;return"(function() {\nfunction "+b+"() {\n"+c+"}\n"+e+d+
"return "+b+";\n})()"};ea=function(a,b,e,d){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var f=[],g=[],h=[],k=[];a=a.replace(/"([DEGH])(\d+)"/g,function(a,b,c){"D"===b?f.push(c):"E"===b?g.push(c):"H"===b?k.push(c):h.push(c);return""});a=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var l,n;e!==p&&(l=e.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1"));d!==p&&(n=d.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));for(e=0;e<k.length;++e)k[e]=T(N[k[e]]);
for(e=0;e<f.length;++e)f[e]=fb(N[f[e]]);for(e=0;e<a.length-1;++e)d=c(a[e]),a[e]=Ua(d.middle);d=a.pop();for(e=0;e<h.length;++e)h[e]=ac(N[h[e]]);for(e=0;e<g.length;++e)g[e]=Kb(N[g[e]]);return new H(b,l,n,k,f,a,h,g,{tail:d})};lb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};mb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};vb.prototype.toString=function(){var a=h({},this.params.getNames()),
b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.name+this.params+" "+c+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);";C=b;return c};Pb.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};bc.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};S.prototype.toString=function(){var a=this.misc.prefix;this.argument!==p&&(a+=this.argument.toString());
return a};Qb.prototype.toString=function(){return"case "+this.expr+":"};wb.prototype.toString=function(){return this.label};Da=function(a,b,e){var d=RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),g=[];a=a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");for(var h=0,k,l;null!==(k=d.exec(a));){if(k[1]!==p)l=a.lastIndexOf('"B',d.lastIndex),h=a.substring(h,
l),"for"===k[1]?g.push(new Pb(za(N[k[2]]),{prefix:h})):"catch"===k[1]?g.push(new bc(M(N[k[2]]),{prefix:h})):g.push(new S(k[1],ma(N[k[2]]),{prefix:h}));else if(k[3]!==p)g.push(new S(k[3],p,{prefix:a.substring(h,d.lastIndex)}));else if(k[4]!==p){l=a.substring(h,d.lastIndex-k[4].length);if(0!==f(l).length)continue;g.push(l);h=k[4].charAt(1);k=k[5];"D"===h?g.push(b(N[k])):"E"===h?g.push(e(N[k])):"H"===h?g.push(T(N[k])):g.push(ra(N[k]))}else if(k[6]!==p)g.push(new Qb(ma(f(k[7]))));else if(k[8]!==p){l=
a.substring(h,d.lastIndex-k[8].length);if(0!==f(l).length)continue;g.push(new wb(a.substring(h,d.lastIndex)))}else k=c(a.substring(h,d.lastIndex-1)),g.push(k.left),g.push(db(k.middle)),g.push(k.right+";");h=d.lastIndex}b=c(a.substring(h));g.push(b.left);""!==b.middle&&(g.push(db(b.middle)),g.push(";"+b.right));return g};g.prototype.toString=function(){var a=e(this.statements),b=C;k(a)||(C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)});var c="{\n"+this.statements.join("")+"\n}";C=b;return c};
ra=function(a){a=c(a.substring(1,a.length-1));return new g(Da(a.middle))};da.prototype.toString=function(){for(var a=[],c=[],f,g=0,h=this.statements.length;g<h;++g)f=this.statements[g],f instanceof mb||f instanceof lb?a.push(f):c.push(f);Ta(a);var k=e(this.statements);C=function(a){a=a.name;return k.hasOwnProperty(a)?a:ha.hasOwnProperty(a)||d.hasOwnProperty(a)||b.hasOwnProperty(a)?"$p."+a:a};a="// this code was autogenerated from PJS\n(function($p) {\n"+a.join("")+"\n"+c.join("")+"\n})";C=null;return a};
a=function(){var a=v(N[0]),a=a.replace(/\bimport\s+[^;]+;/g,"");return new da(Da(a,rc,Ob))}();(function(a){function b(a,e){for(var d=e.split("."),f=a.scope,g;f;){if(f.hasOwnProperty(d[0])){g=f[d[0]];break}f=f.scope}g===p&&(g=c[d[0]]);for(var f=1,h=d.length;f<h&&g;++f)g=g.inScope[d[f]];return g}var c={},e;for(e in X)if(X.hasOwnProperty(e)){a=X[e];var d=a.scopeId,f=a.name;d?(d=X[d],a.scope=d,d.inScope===p&&(d.inScope={}),d.inScope[f]=a):c[f]=a}for(e in X)if(X.hasOwnProperty(e)){a=X[e];if(f=a.body.baseClassName)if(f=
b(a,f))a.base=f,f.derived||(f.derived=[]),f.derived.push(a);var f=a.body.interfacesNames,d=[],g,h;if(f&&0<f.length){g=0;for(h=f.length;g<h;++g){var k=b(a,f[g]);d.push(k);k&&(k.derived||(k.derived=[]),k.derived.push(a))}0<d.length&&(a.interfaces=d)}}})(a);(function(a){function b(a,e){var d=c[a];if(!d)return!1;var f=d.indexOf(e);if(0>f)return!1;d.splice(f,1);if(0<d.length)return!1;delete c[a];return!0}a=[];var c={},e,d,f;for(e in X)if(X.hasOwnProperty(e))if(f=X[e],f.inScope||f.derived){var g=[];if(f.inScope)for(d in f.inScope)f.inScope.hasOwnProperty(d)&&
g.push(f.inScope[d]);f.derived&&(g=g.concat(f.derived));c[e]=g}else a.push(e),f.weight=0;for(;0<a.length;)if(e=a.shift(),f=X[e],f.scopeId&&b(f.scopeId,f)&&(a.push(f.scopeId),X[f.scopeId].weight=f.weight+1),f.base&&b(f.base.classId,f)&&(a.push(f.base.classId),f.base.weight=f.weight+1),f.interfaces)for(e=0,d=f.interfaces.length;e<d;++e)f.interfaces[e]&&b(f.interfaces[e].classId,f)&&(a.push(f.interfaces[e].classId),f.interfaces[e].weight=f.weight+1)})(a);a=a.toString();a=a.replace(/\s*\n(?:[\t ]*\n)+/g,
"\n\n");a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return String.fromCharCode(parseInt(b,16))});return function(a,b){return a.replace(/'(\d+)'/g,function(a,c){var e=b[c];return"/"===e.charAt(0)?e:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(e)?"(new $p.Character("+e+"))":e})}(a,R)}function a(a,b){var d=RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);if(d&&2===d.length)for(var f=[],d=d.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(a,b){f.push(b);return"{"+(f.length-
1)+"}"}}()).replace("\n","").replace("\r","").split(";"),h=function(a){return a.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},k=0,l=d.length;k<l;k++){var p=d[k].split("=");if(p&&2===p.length){var n=h(p[0]),m=h(p[1]),p=[];if("preload"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]);b.imageCache.add(x)}else if("font"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]),D=/^\{(\d*?)\}$/.exec(x);PFont.preloading.add(D?JSON.parse("{"+f[D[1]]+"}"):x)}else"pauseOnBlur"===n?b.options.pauseOnBlur=
"true"===m:"globalKeyEvents"===n?b.options.globalKeyEvents="true"===m:"param-"===n.substring(0,6)?b.params[n.substring(6)]=m:b.options[n]=m}}return a}var b=h.defaultScope,d=b.PConstants,f=h.aFunctions,l=h.Browser.document,p;k.compile=function(b){var c=new k.Sketch;b=a(b,c);b=n(b);c.sourceCode=b;return c};k.logger=new function(a){var b={BufferMax:200};b.wrapper=a.createElement("div");b.wrapper.setAttribute("style","opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa");
b.dragger=a.createElement("div");b.dragger.setAttribute("style","display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333");b.closer=a.createElement("div");b.closer.onmouseover=function(){b.closer.style.setProperty("background-color","#ccc")};b.closer.onmouseout=function(){b.closer.style.setProperty("background-color","#ddd")};b.closer.innerHTML="&#10006;";b.closer.setAttribute("style","opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;");
b.javaconsole=a.createElement("div");b.javaconsole.setAttribute("style","overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");b.wrapper.appendChild(b.dragger);b.wrapper.appendChild(b.javaconsole);b.wrapper.appendChild(b.closer);b.dragger.onmousedown=function(d){b.divheight=b.wrapper.style.height;a.selection?a.selection.empty():window.getSelection().removeAllRanges();var f=d.screenY;window.onmousemove=function(a){b.wrapper.style.height=
parseFloat(b.divheight)+(f-a.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-a.screenY)-10+"px"};window.onmouseup=function(d){a.selection?a.selection.empty():window.getSelection().removeAllRanges();b.wrapper.style.height=parseFloat(b.divheight)+(f-d.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-d.screenY)-10+"px";window.onmousemove=null;window.onmouseup=null}};b.BufferArray=[];b.print=b.log=function(a){b.BufferArray[b.BufferArray.length-1]?b.BufferArray[b.BufferArray.length-
1]+=a+"":b.BufferArray.push(a);b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.println=function(d){a.body.appendChild(b.wrapper);b.print(d);b.BufferArray.push("<br/>");b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");b.BufferArray.length>b.BufferMax?b.BufferArray.splice(0,
1):b.javaconsole.scrollTop=b.javaconsole.scrollHeight;"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.showconsole=function(){b.wrapper.style.visibility="visible"};b.hideconsole=function(){b.wrapper.style.visibility="hidden"};b.closer.onclick=function(){b.hideconsole()};b.hideconsole();return b}(l);return k}},{}],26:[function(D,x,Q){x.exports=function(k,h){function m(a,b){return a in l?l[a]:"function"===typeof l[b]?l[b]:function(a){if(a instanceof Array)return a;if("number"===
typeof a){var b=[];b.length=a;return b}}}var n=k.defaultScope,a=k.extend,b=k.Browser,d=b.ajax,f=b.navigator,l=b.window,p=b.document,r=k.noop,c=n.PConstants;PFont=n.PFont;PShapeSVG=n.PShapeSVG;PVector=n.PVector;Char=Character=n.Char;ObjectIterator=n.ObjectIterator;XMLElement=n.XMLElement;XML=n.XML;var x=l.HTMLCanvasElement,D=l.HTMLImageElement,G=l.localStorage;p.head||(p.head=p.getElementsByTagName("head")[0]);var A=m("Float32Array","WebGLFloatArray"),Q=m("Int32Array","WebGLIntArray"),v=m("Uint16Array",
"WebGLUnsignedShortArray"),ga=m("Uint8Array","WebGLUnsignedByteArray");if(9<=p.documentMode&&!p.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";var q=[],Zb={},M=this.Processing=function(b,k,m){function Ia(a,b,z){a.addEventListener?a.addEventListener(b,z,!1):a.attachEvent("on"+b,z);wb.push({elem:a,type:b,fn:z})}function T(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&
(4===c.length?g.uniform4fv(e,c):3===c.length?g.uniform3fv(e,c):2===c.length?g.uniform2fv(e,c):g.uniform1f(e,c))}function Y(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&(4===c.length?g.uniform4iv(e,c):3===c.length?g.uniform3iv(e,c):2===c.length?g.uniform2iv(e,c):g.uniform1i(e,c))}function U(a,b,z,c,e){var d=Fa.locations[a];d===h&&(d=g.getUniformLocation(b,z),Fa.locations[a]=d);-1!==d&&(16===e.length?g.uniformMatrix4fv(d,c,e):9===e.length?g.uniformMatrix3fv(d,
c,e):g.uniformMatrix2fv(d,c,e))}function Z(a,b,z,c,e){var d=Fa.attributes[a];d===h&&(d=g.getAttribLocation(b,z),Fa.attributes[a]=d);-1!==d&&(g.bindBuffer(g.ARRAY_BUFFER,e),g.vertexAttribPointer(d,c,g.FLOAT,!1,0,0),g.enableVertexAttribArray(d))}function sa(a,b,z){var c=Fa.attributes[a];c===h&&(c=g.getAttribLocation(b,z),Fa.attributes[a]=c);-1!==c&&g.disableVertexAttribArray(c)}function ta(a,b,z,$){Va===c.HSB?(z=e.color.toRGB(a,b,z),a=z[0],b=z[1],z=z[2]):(a=Math.round(255*(a/xa)),b=Math.round(255*(b/
Ea)),z=Math.round(255*(z/ya)));$=Math.round(255*($/ia));a=0>a?0:a;b=0>b?0:b;z=0>z?0:z;$=0>$?0:$;return(255<$?255:$)<<24&c.ALPHA_MASK|(255<a?255:a)<<16&c.RED_MASK|(255<b?255:b)<<8&c.GREEN_MASK|(255<z?255:z)&c.BLUE_MASK}function $b(a){if(a<=xa&&0<=a){if(Va===c.RGB)return ta(a,a,a,ia);if(Va===c.HSB)return ta(0,0,a/xa*ya,ia)}if(a)return 2147483647<a&&(a-=4294967296),a}function bb(a){var b,z,$;b=((a&c.RED_MASK)>>>16)/255;z=((a&c.GREEN_MASK)>>>8)/255;$=(a&c.BLUE_MASK)/255;a=e.max(e.max(b,z),$);var d=e.min(e.min(b,
z),$);if(d===a)return[0,0,a*ya];b=(b===a?(z-$)/(a-d):z===a?2+($-b)/(a-d):4+(b-z)/(a-d))/6;0>b?b+=1:1<b&&(b-=1);return[b*xa,(a-d)/a*Ea,a*ya]}function Sa(){g.restore();N=ab=!0}function cb(){var a=(Date.now()-tc)/1E3;ec++;var b=ec/a;0.5<a&&(tc=Date.now(),ec=0,e.__frameRate=b);e.frameCount++}function Fb(a){a=parseInt("0x"+a,16);2147483647<a&&(a-=4294967296);return a}function db(a){if("number"===typeof a)return 0!==a;if("boolean"===typeof a)return a;if("string"===typeof a)return"true"===a.toLowerCase();
if(a instanceof Char)return 49===a.code||84===a.code||116===a.code}function Hb(a){if("number"===typeof a)return a;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseFloat(a);if(a instanceof Char)return a.code}function Ib(a,b){if("number"===typeof a)return a&4294967295;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseInt(a,b||10)&4294967295;if(a instanceof Char)return a.code}function wa(){R&&(N&&(g.fillStyle=e.color.toString(La),N=!1),g.fill())}function za(){C&&
(ab&&(g.strokeStyle=e.color.toString(ja),ab=!1),g.stroke())}function Ta(){wa();za();g.closePath()}function Ja(a,b,z){var c=Mc.shift();c===h&&(c={},c.canvas=p.createElement("canvas"),c.context=c.canvas.getContext("2d"));Mc.push(c);var e=c.canvas,d=c.context;b=b||a.width;z=z||a.height;e.width=b;e.height=z;a?"data"in a?d.putImageData(a,0,0):(d.clearRect(0,0,b,z),d.drawImage(a,0,0,b,z)):d.clearRect(0,0,b,z);return c}function Jb(a){return{getLength:function(a){return function(){if(a.isRemote)throw"Image is loaded remotely. Cannot get length.";
return a.imageData.data.length?a.imageData.data.length/4:0}}(a),getPixel:function(a){return function(L){L*=4;var b=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";return b[L+3]<<24&c.ALPHA_MASK|b[L]<<16&c.RED_MASK|b[L+1]<<8&c.GREEN_MASK|b[L+2]&c.BLUE_MASK}}(a),setPixel:function(a){return function(L,b){var e=4*L,d=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot set pixel.";d[e+0]=(b&c.RED_MASK)>>>16;d[e+1]=(b&c.GREEN_MASK)>>>8;d[e+2]=b&c.BLUE_MASK;
d[e+3]=(b&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a),toArray:function(a){return function(){var L=[],b=a.imageData.data,e=a.width*a.height;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";for(var d=0,f=0;d<e;d++,f+=4)L.push(b[f+3]<<24&c.ALPHA_MASK|b[f]<<16&c.RED_MASK|b[f+1]<<8&c.GREEN_MASK|b[f+2]&c.BLUE_MASK);return L}}(a),set:function(a){return function(L){var b,e,d;if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels.";e=a.imageData.data;for(var f=0,g=L.length;f<g;f++)d=
L[f],b=4*f,e[b+0]=(d&c.RED_MASK)>>>16,e[b+1]=(d&c.GREEN_MASK)>>>8,e[b+2]=d&c.BLUE_MASK,e[b+3]=(d&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a)}}function Kb(a,b,z,$){var d=new Ga(z,$,c.ARGB);d.fromImageData(e.toImageData(a,b,z,$));return d}function Lb(a,b,z,e,d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h.";var f=new Ga(z,e,c.ARGB),g=f.imageData.data,h=d.width,s=d.height;d=d.imageData.data;var k=Math.max(0,-b),l=Math.max(0,-a);e=Math.min(e,s-b);for(s=Math.min(z,h-a);k<e;++k)for(var n=
4*((b+k)*h+(a+l)),p=4*(k*z+l),m=l;m<s;++m)g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++];f.__isDirty=!0;return f}function fb(){Rb&&(g=Nc,Rb=!1,e.updatePixels())}function Mb(){function a(L,b){L[b]=function(){fb();g[b].apply(g,arguments)}}function b(a,L){e.defineProperty(a,L,{get:function(){fb();return g[L]},set:function(a){fb();g[L]=a}})}for(var z in g)"function"===typeof g[z]?a(this,z):b(this,z)}function Ua(a){return a instanceof String?a:"number"===typeof a?a===(0|a)?a.toString():e.nf(a,
0,3):null===a||a===h?"":a.toString()}function Nb(a,b,z,e){var d;0>a.indexOf("\n")?(a=[a],d=1):(a=a.split(/\r?\n/g),d=a.length);var f=0;Wa===c.TOP?f=Xa+Ma:Wa===c.CENTER?f=Xa/2-(d-1)*Aa/2:Wa===c.BOTTOM&&(f=-(Ma+(d-1)*Aa));for(var g=0;g<d;++g)ha.text$line(a[g],b,z+f,e,nb),f+=Aa}function ac(a,b,z,e,d,f){if(0!==a.length&&(0!==e&&0!==d)&&!(Na>d)){for(var g=-1,h=0,s=0,k=[],l=0,n=a.length;l<n;l++){var p=a[l],m=" "===p,r=ba.measureTextWidth(p);if("\n"!==p&&s+r<=e)m&&(g=l),s+=r;else{if(g+1===h)if(0<l)g=l;else return;
"\n"===p?(k.push({text:a.substring(h,l),width:s}),h=l+1):(k.push({text:a.substring(h,g+1),width:s}),h=g+1);s=0;l=h-1}}h<n&&k.push({text:a.substring(h),width:s});a=1;g=Xa;nb===c.CENTER?a=e/2:nb===c.RIGHT&&(a=e);e=k.length;h=Math.min(e,Math.floor(d/Aa));Wa===c.TOP?g=Xa+Ma:Wa===c.CENTER?g=d/2-Aa*(h/2-1):Wa===c.BOTTOM&&(g=Ma+Aa);for(h=0;h<e;h++){l=h*Aa;if(g+l>d-Ma)break;s=k[h];ha.text$line(s.text,b+a,z+g+l,f,nb)}}}function Ka(a){ha="3D"===a?new B:"2D"===a?new E:new F;for(var b in F.prototype)F.prototype.hasOwnProperty(b)&&
0>b.indexOf("$")&&(e[b]=ha[b]);ha.$init()}function H(a){return function(){Ka("2D");return ha[a].apply(this,arguments)}}function lb(a){a=a.which||a.keyCode;switch(a){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return a}function mb(a){"function"===typeof a.preventDefault?a.preventDefault():"function"===typeof a.stopPropagation&&a.stopPropagation();return!1}function Ob(){for(var a in hb)if(hb.hasOwnProperty(a)){e.__keyPressed=!0;return}e.__keyPressed=
!1}function vb(a,b){hb[a]=b;ob=null;e.key=b;e.keyCode=a;e.keyPressed();e.keyCode=0;e.keyTyped();Ob()}function rc(a){var b=lb(a);if(b===c.DELETE)vb(b,new Char(127));else if(0>qd.indexOf(b))ob=b;else{var z=new Char(c.CODED);e.key=z;e.keyCode=b;hb[b]=z;e.keyPressed();ob=null;Ob();return mb(a)}}function Pb(a){if(null!==ob){var b=ob,z;z=a.which||a.keyCode;var c=a.shiftKey||a.ctrlKey||a.altKey||a.metaKey;switch(z){case 13:z=c?13:10;break;case 8:z=c?127:8}z=new Char(z);vb(b,z);return mb(a)}}function bc(a){a=
lb(a);var b=hb[a];b!==h&&(e.key=b,e.keyCode=a,e.keyReleased(),delete hb[a],Ob())}if(!(this instanceof M))throw"called Processing constructor as if it were a function: missing 'new'.";var S={},Qb=b===h&&k===h,S=Qb?p.createElement("canvas"):"string"===typeof b?p.getElementById(b):b;if(!("getContext"in S))throw"called Processing constructor without passing canvas element reference or id.";var wb=[],e=this;e.Char=e.Character=Char;a.withCommonFunctions(e);a.withMath(e);a.withProxyFunctions(e,function(a){return Array.prototype.slice.call(a,
1)});a.withTouch(e,S,Ia,p,c);m&&Object.keys(m).forEach(function(a){e[a]=m[a]});e.externals={canvas:S,context:h,sketch:h,window:l};e.name="Processing.js Instance";e.use3DContext=!1;e.focused=!1;e.breakShape=!1;e.glyphTable={};e.pmouseX=0;e.pmouseY=0;e.mouseX=0;e.mouseY=0;e.mouseButton=0;e.mouseScroll=0;e.mouseClicked=h;e.mouseDragged=h;e.mouseMoved=h;e.mousePressed=h;e.mouseReleased=h;e.mouseScrolled=h;e.mouseOver=h;e.mouseOut=h;e.touchStart=h;e.touchEnd=h;e.touchMove=h;e.touchCancel=h;e.key=h;e.keyCode=
h;e.keyPressed=r;e.keyReleased=r;e.keyTyped=r;e.draw=h;e.setup=h;e.__mousePressed=!1;e.__keyPressed=!1;e.__frameRate=60;e.frameCount=0;e.width=100;e.height=100;var g,da,ha,R=!0,ka=[1,1,1,1],La=4294967295,N=!0,C=!0,X=[0,0,0,1],ja=4278190080,ab=!0,ea=1,eb=!1,ra=!1,Da=!0,ma=0,qa=c.CORNER,la=c.CENTER,Gb=0,Eb=0,ub=0,jb=c.NORMAL_MODE_AUTO,tb=60,Kc=1E3/tb,od=S.style.cursor,aa=c.POLYGON,oc=0,pc=20,Lc=!1,kb=-3355444,qc=20,ia=255,xa=255,Ea=255,ya=255,cc=0,dc=0,Va=c.RGB,gb=null,sc=null,Oc=Date.now(),tc=Oc,ec=
0,Ba,Sb,fc,xb,yb,uc,vc,Fa={attributes:{},locations:{}},y,J,na,wc,xc,yc,gc,zc,Tb,Ac,Pc,Bc,Qc,hc,Rc,Sc,Tc,Uc=0,Vc=0,Wc=c.IMAGE,ua=!1,Cc,Dc,Ec,nb=c.LEFT,Wa=c.BASELINE,ic=c.MODEL,zb="Arial",Na=12,Xa=9,Ma=2,Aa=14,ba=PFont.get(zb,Na),Nc,Fc=null,Rb=!1,Xc,Yc=1E3,hb=[],ob=null,qd=[c.SHIFT,c.CONTROL,c.ALT,c.CAPSLK,c.PGUP,c.PGDN,c.END,c.HOME,c.LEFT,c.UP,c.RIGHT,c.DOWN,c.NUMLK,c.INSERT,c.F1,c.F2,c.F3,c.F4,c.F5,c.F6,c.F7,c.F8,c.F9,c.F10,c.F11,c.F12,c.META],O=0,jc=0,pb=0,Oa=[],Pa=[],Qa=[],Ub=new A(c.SINCOS_LENGTH),
Vb=new A(c.SINCOS_LENGTH),P,qb,Ra,K,fa,Ab,Bb,Wb,Ha,kc=!1,lc=60*(Math.PI/180),Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,t=[],va=[],oa=0,Cb=!1,Db=!1,ib=!0,Xb=c.CORNER,bd=[],cd=new A([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,
0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]),dd=new A([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,
-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]),rd=new A([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Hc=new A([0,0,0,0,1,0,1,1,0,1,0,0]),sd=new A([0,0,1,0,0,1,0,0,1,0,0,1]),td="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+
(/Windows/.test(f.userAgent)?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
Ic=function(a,b,z){var c=a.createShader(a.VERTEX_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw a.getShaderInfoLog(c);b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,z);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw a.getShaderInfoLog(b);z=a.createProgram();a.attachShader(z,c);a.attachShader(z,b);a.linkProgram(z);if(!a.getProgramParameter(z,a.LINK_STATUS))throw"Error linking shaders.";return z},ed=function(a,b,z,c,e){return{x:a,
y:b,w:z,h:c}},mc=ed,ud=function(a,b,z,c,e){return{x:a,y:b,w:e?z:z-a,h:e?c:c-b}},vd=function(a,b,z,c,e){return{x:a-z/2,y:b-c/2,w:z,h:c}},W=function(){},E=function(){},B=function(){},F=function(){};E.prototype=new W;E.prototype.constructor=E;B.prototype=new W;B.prototype.constructor=B;F.prototype=new W;F.prototype.constructor=F;W.prototype.a3DOnlyFunction=r;e.shape=function(a,b,z,$,d){1<=arguments.length&&null!==arguments[0]&&a.isVisible()&&(e.pushMatrix(),Xb===c.CENTER?5===arguments.length?(e.translate(b-
$/2,z-d/2),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length?e.translate(b-a.getWidth()/2,-a.getHeight()/2):e.translate(-a.getWidth()/2,-a.getHeight()/2):Xb===c.CORNER?5===arguments.length?(e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z):Xb===c.CORNERS&&(5===arguments.length?($-=b,d-=z,e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z)),a.draw(e),(1===arguments.length&&Xb===c.CENTER||1<arguments.length)&&
e.popMatrix())};e.shapeMode=function(a){Xb=a};e.loadShape=function(a){return 1===arguments.length&&-1<a.indexOf(".svg")?new PShapeSVG(null,a):null};e.loadXML=function(a){return new XML(e,a)};var fd=function(a){for(var b=0,z=0;z<a.length;z++)b=0!==z?Math.max(b,Math.abs(a[z])):Math.abs(a[z]);a=(b+"").indexOf(".");0===a?a=1:-1===a&&(a=(b+"").length);return a},Ya=e.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof Ya?this.set(arguments[0].array()):6===
arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};Ya.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof Ya?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new Ya;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},
translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var z,c;a instanceof PVector?(z=a.x,c=a.y,b||(b=new PVector)):a instanceof Array&&(z=a[0],c=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*z+this.elements[1]*c+this.elements[2],b[1]=this.elements[3]*z+this.elements[4]*c+this.elements[5]):
b instanceof PVector&&(b.x=this.elements[0]*z+this.elements[1]*c+this.elements[2],b.y=this.elements[3]*z+this.elements[4]*c+this.elements[5],b.z=0);return b},multX:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,
Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>c.MIN_INT){var b=this.elements[0],z=this.elements[1],e=this.elements[2],d=this.elements[3],f=this.elements[4],g=this.elements[5];this.elements[0]=f/a;this.elements[3]=-d/a;this.elements[1]=-z/a;this.elements[4]=b/a;this.elements[2]=(z*g-f*e)/a;this.elements[5]=(d*e-b*g)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&
b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],z=0,c=0;2>c;c++)for(var e=0;3>e;e++,z++)b[z]+=this.elements[3*c+0]*a[e+0]+this.elements[3*
c+1]*a[e+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=
this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],e=this.elements[1];this.elements[0]=b*c+a*e;this.elements[1]=-a*c+b*e;c=this.elements[3];e=this.elements[4];this.elements[3]=b*c+a*e;this.elements[4]=-a*c+b*e},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],
a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+"\n"+e.nfs(this.elements[3],a,4)+" "+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+"\n\n";e.println(a)}};var I=e.PMatrix3D=function(){this.reset()};I.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof I?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},
get:function(){var a=new I;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(a,b,c){c===h&&(c=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+c*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+c*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+c*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+c*this.elements[14]},
transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var c,e,d,f;a instanceof
PVector?(c=a.x,e=a.y,d=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],e=a[1],d=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3]*
f,b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*e+this.elements[14]*d+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]);
return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[d+0]*a[4*e+0]+this.elements[d+4]*a[4*e+1]+this.elements[d+8]*a[4*e+2]+this.elements[d+12]*a[4*e+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&
arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[4*e+0]*a[d+0]+this.elements[4*e+1]*a[d+4]+this.elements[4*e+2]*a[d+8]+this.elements[4*e+3]*a[d+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(4>arguments.length)this.rotateZ(a);else{var f=new PVector(b,c,d),g=
f.mag();if(0!==g){1!=g&&(f.normalize(),b=f.x,c=f.y,d=f.z);var f=e.cos(a),g=e.sin(a),h=1-f;this.apply(h*b*b+f,h*b*c-g*d,h*b*d+g*c,0,h*b*c+g*d,h*c*c+f,h*c*d-g*b,0,h*b*d-g*c,h*c*d+g*b,h*d*d+f,0,0,0,0,1)}}},invApply:function(){Wb===h&&(Wb=new I);var a=arguments;Wb.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!Wb.invert())return!1;this.preApply(Wb);return!0},rotateX:function(a){var b=e.cos(a);a=e.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=
e.cos(a);a=e.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&(b&&!c)&&(c=1):b=c=a;a&&(b&&c)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},skewX:function(a){a=
Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,c,e){return c?e?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*e:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*
b+this.elements[3]},multY:function(a,b,c,e){return c?e?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*e:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,c,e){return e?this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]*e:this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]},multW:function(a,b,c,e){return e?this.elements[12]*a+
this.elements[13]*b+this.elements[14]*c+this.elements[15]*e:this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],e=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],d=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],
f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],h=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],s=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],l=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],
p=a*n-b*l+c*k+e*s-d*h+f*g;if(1E-9>=Math.abs(p))return!1;var m=[];m[0]=+this.elements[5]*n-this.elements[6]*l+this.elements[7]*k;m[4]=-this.elements[4]*n+this.elements[6]*s-this.elements[7]*h;m[8]=+this.elements[4]*l-this.elements[5]*s+this.elements[7]*g;m[12]=-this.elements[4]*k+this.elements[5]*h-this.elements[6]*g;m[1]=-this.elements[1]*n+this.elements[2]*l-this.elements[3]*k;m[5]=+this.elements[0]*n-this.elements[2]*s+this.elements[3]*h;m[9]=-this.elements[0]*l+this.elements[1]*s-this.elements[3]*
g;m[13]=+this.elements[0]*k-this.elements[1]*h+this.elements[2]*g;m[2]=+this.elements[13]*f-this.elements[14]*d+this.elements[15]*e;m[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;m[10]=+this.elements[12]*d-this.elements[13]*c+this.elements[15]*a;m[14]=-this.elements[12]*e+this.elements[13]*b-this.elements[14]*a;m[3]=-this.elements[9]*f+this.elements[10]*d-this.elements[11]*e;m[7]=+this.elements[8]*f-this.elements[10]*c+this.elements[11]*b;m[11]=-this.elements[8]*d+this.elements[9]*
c-this.elements[11]*a;m[15]=+this.elements[8]*e-this.elements[9]*b+this.elements[10]*a;a=1/p;m[0]*=a;m[1]*=a;m[2]*=a;m[3]*=a;m[4]*=a;m[5]*=a;m[6]*=a;m[7]*=a;m[8]*=a;m[9]*=a;m[10]*=a;m[11]*=a;m[12]*=a;m[13]*=a;m[14]*=a;m[15]*=a;this.elements=m.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+" "+
e.nfs(this.elements[3],a,4)+"\n"+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+" "+e.nfs(this.elements[6],a,4)+" "+e.nfs(this.elements[7],a,4)+"\n"+e.nfs(this.elements[8],a,4)+" "+e.nfs(this.elements[9],a,4)+" "+e.nfs(this.elements[10],a,4)+" "+e.nfs(this.elements[11],a,4)+"\n"+e.nfs(this.elements[12],a,4)+" "+e.nfs(this.elements[13],a,4)+" "+e.nfs(this.elements[14],a,4)+" "+e.nfs(this.elements[15],a,4)+"\n\n";e.println(a)},invTranslate:function(a,b,c){this.preApply(1,0,0,-a,0,1,0,-b,
0,0,1,-c,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,c){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};var Za=e.PMatrixStack=function(){this.matrixStack=[]};Za.prototype.load=function(){var a=
ha.$newPMatrix();1===arguments.length?a.set(arguments[0]):a.set(arguments);this.matrixStack.push(a)};E.prototype.$newPMatrix=function(){return new Ya};B.prototype.$newPMatrix=function(){return new I};Za.prototype.push=function(){this.matrixStack.push(this.peek())};Za.prototype.pop=function(){return this.matrixStack.pop()};Za.prototype.peek=function(){var a=ha.$newPMatrix();a.set(this.matrixStack[this.matrixStack.length-1]);return a};Za.prototype.mult=function(a){this.matrixStack[this.matrixStack.length-
1].apply(a)};e.split=function(a,b){return a.split(b)};e.splitTokens=function(a,b){if(b===h)return a.split(/\s+/g);var c=b.split(/()/g),e="",d=a.length,f,g,k=[];for(f=0;f<d;f++)g=a[f],-1<c.indexOf(g)?(""!==e&&k.push(e),e=""):e+=g;""!==e&&k.push(e);return k};e.append=function(a,b){a[a.length]=b;return a};e.concat=function(a,b){return a.concat(b)};e.sort=function(a,b){var c=[];if(0<a.length){for(var e=0<b?b:a.length,d=0;d<e;d++)c.push(a[d]);"string"===typeof a[0]?c.sort():c.sort(function(a,b){return a-
b});if(0<b)for(e=c.length;e<a.length;e++)c.push(a[e])}return c};e.splice=function(a,b,c){if(0===b.length)return a;if(b instanceof Array)for(var e=0;e<b.length;c++,e++)a.splice(c,0,b[e]);else a.splice(c,0,b);return a};e.subset=function(a,b,c){return a.slice(b,c!==h?b+c:a.length)};e.join=function(a,b){return a.join(b)};e.shorten=function(a){for(var b=[],c=a.length,e=0;e<c;e++)b[e]=a[e];b.pop();return b};e.expand=function(a,b){var c=a.slice(0);c.length=b||2*a.length;return c};e.arrayCopy=function(){var a,
b=0,c,e=0,d;2===arguments.length?(a=arguments[0],c=arguments[1],d=a.length):3===arguments.length?(a=arguments[0],c=arguments[1],d=arguments[2]):5===arguments.length&&(a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],d=arguments[4]);for(var f=b;f<d+b;f++,e++)if(c[e]!==h)c[e]=a[f];else throw"array index out of bounds exception";};e.reverse=function(a){return a.reverse()};e.mix=function(a,b,c){return a+((b-a)*c>>8)};e.peg=function(a){return 0>a?0:255<a?255:a};e.modes=function(){function a(b,
L,c,e,d,yd,z,f,$,h,pd){b=g(((b&4278190080)>>>24)+L,255)<<24;c+=($-c)*L>>8;e+=(h-e)*L>>8;L=d+((pd-d)*L>>8);return b|(0>c?0:255<c?255:c)<<16|(0>e?0:255<e?255:e)<<8|(0>L?0:255<L?255:L)}var b=c.ALPHA_MASK,e=c.RED_MASK,d=c.GREEN_MASK,f=c.BLUE_MASK,g=Math.min,h=Math.max;return{replace:function(a,b){return b},blend:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=L&e,m=L&d,n=L&f;return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},add:function(a,L){var c=(L&b)>>>24;return g(((a&
b)>>>24)+c,255)<<24|g((a&e)+((L&e)>>8)*c,e)&e|g((a&d)+((L&d)>>8)*c,d)&d|g((a&f)+((L&f)*c>>8),f)},subtract:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h((a&e)-((L&e)>>8)*c,d)&e|h((a&d)-((L&d)>>8)*c,f)&d|h((a&f)-((L&f)*c>>8),0)},lightest:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h(a&e,((L&e)>>8)*c)&e|h(a&d,((L&d)>>8)*c)&d|h(a&f,(L&f)*c>>8)},darkest:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=g(a&e,((L&e)>>8)*c),m=g(a&d,((L&d)>>8)*c),n=g(a&f,(L&f)*c>>
8);return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},difference:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h>V?h-V:V-h,k>l?k-l:l-k,w>m?w-m:m-w)},exclusion:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h+V-(h*V>>7),k+l-(k*l>>7),w+m-(w*m>>7))},multiply:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,
(g&b)>>>24,h,k,w,V,l,m,h*V>>8,k*l>>8,w*m>>8)},screen:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,255-((255-h)*(255-V)>>8),255-((255-k)*(255-l)>>8),255-((255-w)*(255-m)>>8))},hard_light:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>V?h*V>>7:255-((255-h)*(255-V)>>7),128>l?k*l>>7:255-((255-k)*(255-l)>>7),128>m?w*m>>7:255-((255-w)*(255-m)>>7))},soft_light:function(c,g){var h=
(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,(h*V>>7)+(h*h>>8)-(h*h*V>>15),(k*l>>7)+(k*k>>8)-(k*k*l>>15),(w*m>>7)+(w*w>>8)-(w*w*m>>15))},overlay:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>h?h*V>>7:255-((255-h)*(255-V)>>7),128>k?k*l>>7:255-((255-k)*(255-l)>>7),128>w?w*m>>7:255-((255-w)*(255-m)>>7))},dodge:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>
8,n=g&f,p=255;255!==l&&(p=(k<<8)/(255-l),p=0>p?0:255<p?255:p);var r=255;255!==m&&(r=(w<<8)/(255-m),r=0>r?0:255<r?255:r);var t=255;255!==n&&(t=(V<<8)/(255-n),t=0>t?0:255<t?255:t);return a(c,h,k,w,V,l,m,n,p,r,t)},burn:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>8,n=g&f,p=0;0!==l&&(p=(255-k<<8)/l,p=255-(0>p?0:255<p?255:p));var r=0;0!==m&&(r=(255-w<<8)/m,r=255-(0>r?0:255<r?255:r));var t=0;0!==n&&(t=(255-V<<8)/n,t=255-(0>t?0:255<t?255:t));return a(c,h,k,w,V,l,m,n,p,
r,t)}}}();e.color=function(a,b,e,d){return a!==h&&b!==h&&e!==h&&d!==h?ta(a,b,e,d):a!==h&&b!==h&&e!==h?ta(a,b,e,ia):a!==h&&b!==h?(a&c.ALPHA_MASK?(b=Math.round(255*(b/ia)),b=255<b?255:b,a=a-(a&c.ALPHA_MASK)+((0>b?0:b)<<24&c.ALPHA_MASK)):a=Va===c.RGB?ta(a,a,a,b):Va===c.HSB?ta(0,0,a/xa*ya,b):void 0,a):"number"===typeof a?$b(a):ta(xa,Ea,ya,ia)};e.color.toString=function(a){return"rgba("+((a&c.RED_MASK)>>>16)+","+((a&c.GREEN_MASK)>>>8)+","+(a&c.BLUE_MASK)+","+((a&c.ALPHA_MASK)>>>24)/255+")"};e.color.toInt=
function(a,b,e,d){return d<<24&c.ALPHA_MASK|a<<16&c.RED_MASK|b<<8&c.GREEN_MASK|e&c.BLUE_MASK};e.color.toArray=function(a){return[(a&c.RED_MASK)>>>16,(a&c.GREEN_MASK)>>>8,a&c.BLUE_MASK,(a&c.ALPHA_MASK)>>>24]};e.color.toGLArray=function(a){return[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255,((a&c.ALPHA_MASK)>>>24)/255]};e.color.toRGB=function(a,b,c){a=a>xa?xa:a;b=b>Ea?Ea:b;c=c>ya?ya:c;a=360*(a/xa);b=100*(b/Ea);c=100*(c/ya);var e=Math.round(255*(c/100));if(0===b)return[e,
e,e];a%=360;var d=a%60,f=Math.round(255*(c*(100-b)/1E4)),g=Math.round(255*(c*(6E3-b*d)/6E5));b=Math.round(255*(c*(6E3-b*(60-d))/6E5));switch(Math.floor(a/60)){case 0:return[e,b,f];case 1:return[g,e,f];case 2:return[f,e,b];case 3:return[f,g,e];case 4:return[b,f,e];case 5:return[e,f,g]}};e.brightness=function(a){return bb(a)[2]};e.saturation=function(a){return bb(a)[1]};e.hue=function(a){return bb(a)[0]};e.red=function(a){return((a&c.RED_MASK)>>>16)/255*xa};e.green=function(a){return((a&c.GREEN_MASK)>>>
8)/255*Ea};e.blue=function(a){return(a&c.BLUE_MASK)/255*ya};e.alpha=function(a){return((a&c.ALPHA_MASK)>>>24)/255*ia};e.lerpColor=function(a,b,d){var f,g,h,k,l,s;a=e.color(a);b=e.color(b);if(Va===c.HSB)return h=bb(a),a=((a&c.ALPHA_MASK)>>>24)/ia,g=bb(b),b=((b&c.ALPHA_MASK)>>>24)/ia,s=e.lerp(h[0],g[0],d),f=e.lerp(h[1],g[1],d),h=e.lerp(h[2],g[2],d),h=e.color.toRGB(s,f,h),d=e.lerp(a,b,d)*ia,d<<24&c.ALPHA_MASK|h[0]<<16&c.RED_MASK|h[1]<<8&c.GREEN_MASK|h[2]&c.BLUE_MASK;f=(a&c.RED_MASK)>>>16;g=(a&c.GREEN_MASK)>>>
8;h=a&c.BLUE_MASK;a=((a&c.ALPHA_MASK)>>>24)/ia;k=(b&c.RED_MASK)>>>16;l=(b&c.GREEN_MASK)>>>8;s=b&c.BLUE_MASK;b=((b&c.ALPHA_MASK)>>>24)/ia;f=e.lerp(f,k,d)|0;g=e.lerp(g,l,d)|0;h=e.lerp(h,s,d)|0;d=e.lerp(a,b,d)*ia;return d<<24&c.ALPHA_MASK|f<<16&c.RED_MASK|g<<8&c.GREEN_MASK|h&c.BLUE_MASK};e.colorMode=function(){Va=arguments[0];1<arguments.length&&(xa=arguments[1],Ea=arguments[2]||arguments[1],ya=arguments[3]||arguments[1],ia=arguments[4]||arguments[1])};e.blendColor=function(a,b,d){if(d===c.REPLACE)return e.modes.replace(a,
b);if(d===c.BLEND)return e.modes.blend(a,b);if(d===c.ADD)return e.modes.add(a,b);if(d===c.SUBTRACT)return e.modes.subtract(a,b);if(d===c.LIGHTEST)return e.modes.lightest(a,b);if(d===c.DARKEST)return e.modes.darkest(a,b);if(d===c.DIFFERENCE)return e.modes.difference(a,b);if(d===c.EXCLUSION)return e.modes.exclusion(a,b);if(d===c.MULTIPLY)return e.modes.multiply(a,b);if(d===c.SCREEN)return e.modes.screen(a,b);if(d===c.HARD_LIGHT)return e.modes.hard_light(a,b);if(d===c.SOFT_LIGHT)return e.modes.soft_light(a,
b);if(d===c.OVERLAY)return e.modes.overlay(a,b);if(d===c.DODGE)return e.modes.dodge(a,b);if(d===c.BURN)return e.modes.burn(a,b)};e.printMatrix=function(){K.print()};E.prototype.translate=function(a,b){K.translate(a,b);fa.invTranslate(a,b);g.translate(a,b)};B.prototype.translate=function(a,b,c){K.translate(a,b,c);fa.invTranslate(a,b,c)};E.prototype.scale=function(a,b){K.scale(a,b);fa.invScale(a,b);g.scale(a,b||a)};B.prototype.scale=function(a,b,c){K.scale(a,b,c);fa.invScale(a,b,c)};E.prototype.transform=
function(a){a=a.array();g.transform(a[0],a[3],a[1],a[4],a[2],a[5])};B.prototype.transformm=function(a){throw"p.transform is currently not supported in 3D mode";};E.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa);g.save()};B.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa)};E.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop());Sa()};B.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop())};E.prototype.resetMatrix=function(){K.reset();fa.reset();g.setTransform(1,0,
0,1,0,0)};B.prototype.resetMatrix=function(){K.reset();fa.reset()};W.prototype.applyMatrix=function(){var a=arguments;K.apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);fa.invApply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])};E.prototype.applyMatrix=function(){for(var a=arguments,b=a.length;16>b;b++)a[b]=0;a[10]=a[15]=1;W.prototype.applyMatrix.apply(this,a)};e.rotateX=function(a){K.rotateX(a);fa.invRotateX(a)};
E.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";};B.prototype.rotateZ=function(a){K.rotateZ(a);fa.invRotateZ(a)};e.rotateY=function(a){K.rotateY(a);fa.invRotateY(a)};E.prototype.rotate=function(a){K.rotateZ(a);fa.invRotateZ(a);g.rotate(a)};B.prototype.rotate=function(a){4>arguments.length?e.rotateZ(a):(K.rotate(a,arguments[1],arguments[2],arguments[3]),fa.rotate(-a,arguments[1],arguments[2],arguments[3]))};E.prototype.shearX=function(a){K.shearX(a);
g.transform(1,0,a,1,0,0)};B.prototype.shearX=function(a){K.shearX(a)};E.prototype.shearY=function(a){K.shearY(a);g.transform(1,a,0,1,0,0)};B.prototype.shearY=function(a){K.shearY(a)};e.pushStyle=function(){g.save();e.pushMatrix();bd.push({doFill:R,currentFillColor:La,doStroke:C,currentStrokeColor:ja,curTint:gb,curRectMode:qa,curColorMode:Va,colorModeX:xa,colorModeZ:ya,colorModeY:Ea,colorModeA:ia,curTextFont:ba,horizontalTextAlignment:nb,verticalTextAlignment:Wa,textMode:ic,curFontName:zb,curTextSize:Na,
curTextAscent:Xa,curTextDescent:Ma,curTextLeading:Aa})};e.popStyle=function(){var a=bd.pop();if(a)Sa(),e.popMatrix(),R=a.doFill,La=a.currentFillColor,C=a.doStroke,ja=a.currentStrokeColor,gb=a.curTint,qa=a.curRectMode,Va=a.curColorMode,xa=a.colorModeX,ya=a.colorModeZ,Ea=a.colorModeY,ia=a.colorModeA,ba=a.curTextFont,zb=a.curFontName,Na=a.curTextSize,nb=a.horizontalTextAlignment,Wa=a.verticalTextAlignment,ic=a.textMode,Xa=a.curTextAscent,Ma=a.curTextDescent,Aa=a.curTextLeading;else throw"Too many popStyle() without enough pushStyle()";
};e.year=function(){return(new Date).getFullYear()};e.month=function(){return(new Date).getMonth()+1};e.day=function(){return(new Date).getDate()};e.hour=function(){return(new Date).getHours()};e.minute=function(){return(new Date).getMinutes()};e.second=function(){return(new Date).getSeconds()};e.millis=function(){return Date.now()-Oc};E.prototype.redraw=function(){cb();g.lineWidth=ea;var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.save();e.draw();Sa();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;
e.pmouseY=b};B.prototype.redraw=function(){cb();var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.clear(g.DEPTH_BUFFER_BIT);Fa={attributes:{},locations:{}};e.noLights();e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);e.camera();e.draw();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;e.pmouseY=b};e.noLoop=function(){eb=Da=!1;clearInterval(ma);da.onPause()};e.loop=function(){eb||(tc=Date.now(),ec=0,ma=l.setInterval(function(){try{da.onFrameStart(),e.redraw(),
da.onFrameEnd()}catch(a){throw l.clearInterval(ma),a;}},Kc),eb=Da=!0,da.onLoop())};e.frameRate=function(a){tb=a;Kc=1E3/tb;Da&&(e.noLoop(),e.loop())};e.exit=function(){l.clearInterval(ma);var a=e.externals.canvas.id;q.splice(Zb[a],1);delete Zb[a];delete S.onmousedown;for(var b in M.lib)M.lib.hasOwnProperty(b)&&M.lib[b].hasOwnProperty("detach")&&M.lib[b].detach(e);for(a=wb.length;a--;){var c=wb[a];b=c.elem;var d=c.type,c=c.fn;b.removeEventListener?b.removeEventListener(d,c,!1):b.detachEvent&&b.detachEvent("on"+
d,c)}da.onExit()};e.cursor=function(){if(1<arguments.length||1===arguments.length&&arguments[0]instanceof e.PImage){var a=arguments[0],b,c;if(3<=arguments.length){if(b=arguments[1],c=arguments[2],0>b||0>c||c>=a.height||b>=a.width)throw"x and y must be non-negative and less than the dimensions of the image";}else b=a.width>>>1,c=a.height>>>1;a='url("'+a.toDataURL()+'") '+b+" "+c+", default";S.style.cursor=a}else S.style.cursor=1===arguments.length?arguments[0]:od};e.noCursor=function(){S.style.cursor=
c.NOCURSOR};e.link=function(a,b){b!==h?l.open(a,b):l.location=a};e.beginDraw=r;e.endDraw=r;E.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;return g.getImageData(a,b,c,d)};B.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;var f=p.createElement("canvas").getContext("2d").createImageData(c,d),k=new ga(4*c*d);g.readPixels(a,b,c,d,g.RGBA,g.UNSIGNED_BYTE,k);a=0;b=k.length;for(var w=f.data;a<b;a++)w[a]=
k[4*(d-1-Math.floor(a/4/c))*c+a%(4*c)];return f};e.status=function(a){l.status=a};e.binary=function(a,b){var c;if(0<b)c=b;else if(a instanceof Char)c=16,a|=0;else for(c=32;1<c&&!(a>>>c-1&1);)c--;for(var e="";0<c;)e+=a>>>--c&1?"1":"0";return e};e.unbinary=function(a){for(var b=a.length-1,c=1,e=0;0<=b;){var d=a[b--];if("0"!==d&&"1"!==d)throw"the value passed into unbinary was not an 8 bit binary number";"1"===d&&(e+=c);c<<=1}return e};e.hex=function(a,b){1===arguments.length&&(b=a instanceof Char?4:
8);var c=a,e=b,e=e===h||null===e?e=8:e;0>c&&(c=4294967295+c+1);for(c=Number(c).toString(16).toUpperCase();c.length<e;)c="0"+c;c.length>=e&&(c=c.substring(c.length-e,c.length));return c};e.unhex=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Fb(a[c]));return b}return Fb(a)};e.loadStrings=function(a){if(G[a])return G[a].split("\n");a=d(a);if("string"!==typeof a||""===a)return[];a=a.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return a.split("\n")};e.saveStrings=function(a,b){G[a]=
b.join("\n")};e.loadBytes=function(a){a=d(a);for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};e.matchAll=function(a,b){for(var c=[],e,d=RegExp(b,"g");null!==(e=d.exec(a));)c.push(e),0===e[0].length&&++d.lastIndex;return 0<c.length?c:null};e.match=function(a,b){return a.match(b)};e.println=function(a){M.logger.println(a)};e.print=function(a){M.logger.print(a)};e.str=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString()+"");return b}return a.toString()+
""};e.parseBoolean=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(db(a[c]));return b}return db(a)};e.parseByte=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(0-(a[c]&128)|a[c]&127);return b}return 0-(a&128)|a&127};e.parseChar=function(a){if("number"===typeof a)return new Char(String.fromCharCode(a&65535));if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(new Char(String.fromCharCode(a[c]&65535)));return b}throw"char() may receive only one argument of type int, byte, int[], or byte[].";
};e.parseFloat=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Hb(a[c]));return b}return Hb(a)};e.parseInt=function(a,b){if(a instanceof Array){for(var c=[],e=0;e<a.length;e++)"string"!==typeof a[e]||/^\s*[+\-]?\d+\s*$/.test(a[e])?c.push(Ib(a[e],b)):c.push(0);return c}return Ib(a,b)};e.__int_cast=function(a){return 0|a};e.__instanceof=function(a,b){if("function"!==typeof b)throw"Function is expected as type argument for instanceof operator";if("string"===typeof a)return b===
Object||b===String;if(a instanceof b)return!0;if("object"!==typeof a||null===a)return!1;var c=a.constructor;if(b.$isInterface){for(var e=[];c;)c.$interfaces&&(e=e.concat(c.$interfaces)),c=c.$base;for(;0<e.length;){c=e.shift();if(c===b)return!0;c.$interfaces&&(e=e.concat(c.$interfaces))}return!1}for(;c.hasOwnProperty("$base");)if(c=c.$base,c===b)return!0;return!1};W.prototype.size=function(a,b,d){C&&e.stroke(0);R&&e.fill(255);d={fillStyle:g.fillStyle,strokeStyle:g.strokeStyle,lineCap:g.lineCap,lineJoin:g.lineJoin};
0<S.style.length&&(S.style.removeProperty("width"),S.style.removeProperty("height"));S.width=e.width=a||100;S.height=e.height=b||100;for(var f in d)d.hasOwnProperty(f)&&(g[f]=d[f]);e.textFont(ba);e.background();Yc=Math.max(1E3,0.05*a*b);e.externals.context=g;for(a=0;a<c.SINCOS_LENGTH;a++)Ub[a]=e.sin(0.5*a*(c.PI/180)),Vb[a]=e.cos(0.5*a*(c.PI/180))};E.prototype.size=function(a,b,c){g===h&&(g=S.getContext("2d"),Ab=new Za,Bb=new Za,K=new Ya,fa=new Ya);W.prototype.size.apply(this,arguments)};B.prototype.size=
function(){var a=!1;return function(b,c,d){if(a)throw"Multiple calls to size() for 3D renders are not allowed.";a=!0;try{S.width=e.width=b||100;S.height=e.height=c||100;for(var f=S,h=["experimental-webgl","webgl","webkit-3d"],k,l=0,s=h.length;l<s&&!(k=f.getContext(h[l],{antialias:!1,preserveDrawingBuffer:!0}));l++);g=k;Sc=g.createTexture();Tc=g.createTexture()}catch(m){M.debug(m)}if(!g)throw"WebGL context is not supported on this browser.";g.viewport(0,0,S.width,S.height);g.enable(g.DEPTH_TEST);g.enable(g.BLEND);
g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);J=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}");
na=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}");
e.strokeWeight(1);y=Ic(g,td,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}");g.useProgram(y);Y("usingTexture3d",y,"usingTexture",ua);e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);wc=g.createBuffer();
g.bindBuffer(g.ARRAY_BUFFER,wc);g.bufferData(g.ARRAY_BUFFER,cd,g.STATIC_DRAW);xc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,xc);g.bufferData(g.ARRAY_BUFFER,rd,g.STATIC_DRAW);yc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,yc);g.bufferData(g.ARRAY_BUFFER,dd,g.STATIC_DRAW);gc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,gc);g.bufferData(g.ARRAY_BUFFER,Hc,g.STATIC_DRAW);zc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,zc);g.bufferData(g.ARRAY_BUFFER,sd,g.STATIC_DRAW);Tb=g.createBuffer();Ac=g.createBuffer();
Pc=g.createBuffer();Bc=g.createBuffer();Qc=g.createBuffer();Rc=g.createBuffer();hc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,hc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,0]),g.STATIC_DRAW);Cc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Cc);g.bufferData(g.ARRAY_BUFFER,new A([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),g.STATIC_DRAW);Dc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Dc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,1,0,1,1,0,1]),g.STATIC_DRAW);Ec=g.createBuffer();g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,Ec);
g.bufferData(g.ELEMENT_ARRAY_BUFFER,new v([0,1,2,2,3,0]),g.STATIC_DRAW);qb=new I;Ra=new I;K=new I;fa=new I;Ha=new I;e.camera();e.perspective();Ab=new Za;Bb=new Za;Sb=new I;fc=new I;xb=new I;yb=new I;uc=new I;vc=new I;vc.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);W.prototype.size.apply(this,arguments)}}();E.prototype.ambientLight=W.prototype.a3DOnlyFunction;B.prototype.ambientLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,
-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",0);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.directionalLight=W.prototype.a3DOnlyFunction;B.prototype.directionalLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+
" lights";g.useProgram(y);var k=new I;k.scale(1,-1,1);k.apply(K.array());k=k.array();d=[k[0]*d+k[4]*f+k[8]*h,k[1]*d+k[5]*f+k[9]*h,k[2]*d+k[6]*f+k[10]*h];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d);Y("uLights.type.3d."+O,y,"uLights"+O+".type",1);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.lightFalloff=W.prototype.a3DOnlyFunction;B.prototype.lightFalloff=
function(a,b,c){g.useProgram(y);T("uFalloff3d",y,"uFalloff",[a,b,c])};E.prototype.lightSpecular=W.prototype.a3DOnlyFunction;B.prototype.lightSpecular=function(a,b,e){a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uSpecular3d",y,"uSpecular",a)};e.lights=function(){e.ambientLight(128,128,128);e.directionalLight(128,128,128,0,0,-1);e.lightFalloff(1,0,0);e.lightSpecular(0,0,0)};E.prototype.pointLight=W.prototype.a3DOnlyFunction;B.prototype.pointLight=
function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",2);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.noLights=W.prototype.a3DOnlyFunction;
B.prototype.noLights=function(){O=0;g.useProgram(y);Y("uLightCount3d",y,"uLightCount",O)};E.prototype.spotLight=W.prototype.a3DOnlyFunction;B.prototype.spotLight=function(a,b,e,d,f,h,k,l,s,m,n){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";g.useProgram(y);d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);f=f.array();k=[f[0]*k+f[4]*l+f[8]*s,f[1]*k+f[5]*l+f[9]*s,f[2]*k+f[6]*l+f[10]*s];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>
16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());T("uLights.direction.3d."+O,y,"uLights"+O+".direction",k);T("uLights.concentration.3d."+O,y,"uLights"+O+".concentration",n);T("uLights.angle.3d."+O,y,"uLights"+O+".angle",m);Y("uLights.type.3d."+O,y,"uLights"+O+".type",3);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode";};B.prototype.beginCamera=function(){if(kc)throw"You cannot call beginCamera() again before calling endCamera()";
kc=!0;K=Ra;fa=qb};E.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode";};B.prototype.endCamera=function(){if(!kc)throw"You cannot call endCamera() before calling beginCamera()";K.set(qb);fa.set(Ra);kc=!1};e.camera=function(a,b,c,d,f,g,k,l,s){a===h&&(Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),a=Gc,b=rb,c=sb,d=Gc,f=rb,k=g=0,l=1,s=0);d=new PVector(a-d,b-f,c-g);var m=new PVector(k,l,s);d.normalize();s=PVector.cross(m,d);m=PVector.cross(d,s);s.normalize();m.normalize();
k=s.x;l=s.y;s=s.z;f=m.x;g=m.y;var m=m.z,n=d.x,p=d.y;d=d.z;qb.set(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);qb.translate(-a,-b,-c);Ra.reset();Ra.invApply(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);Ra.translate(a,b,c);K.set(qb);fa.set(Ra)};e.perspective=function(a,b,c,d){0===arguments.length&&(rb=S.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,a=lc,b=ad,c=Zc,d=$c);var f,g;f=c*Math.tan(a/2);g=-f;e.frustum(g*b,f*b,g,f,c,d)};E.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode";
};B.prototype.frustum=function(a,b,c,e,d,f){Ha=new I;Ha.set(2*d/(b-a),0,(b+a)/(b-a),0,0,2*d/(e-c),(e+c)/(e-c),0,0,0,-(f+d)/(f-d),-(2*f*d)/(f-d),0,0,-1,0);a=new I;a.set(Ha);a.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,a.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,a.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,a.array())};e.ortho=function(a,b,c,d,f,h){0===arguments.length&&(a=0,b=e.width,c=0,d=e.height,f=-10,h=10);var k=2/(b-a),l=2/(d-c),s=-2/
(h-f),m=-(b+a)/(b-a),n=-(d+c)/(d-c),p=-(h+f)/(h-f);Ha=new I;Ha.set(k,0,0,m,0,l,0,n,0,0,s,p,0,0,0,1);k=new I;k.set(Ha);k.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,k.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,k.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,k.array())};e.printProjection=function(){Ha.print()};e.printCamera=function(){qb.print()};E.prototype.box=W.prototype.a3DOnlyFunction;B.prototype.box=function(a,b,c){b&&c||(b=c=a);var e=new I;
e.scale(a,b,c);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();R&&(g.useProgram(y),U("model3d",y,"uModel",!1,e.array()),U("view3d",y,"uView",!1,a.array()),g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(b=new I,b.set(a),c=new I,c.set(e),b.mult(c),c=new I,c.set(b),c.invert(),c.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,c.array()),Z("aNormal3d",y,"aNormal",3,xc)):sa("aNormal3d",y,"aNormal"),Z("aVertex3d",y,"aVertex",3,wc),sa("aColor3d",y,
"aColor"),sa("aTexture3d",y,"aTexture"),g.drawArrays(g.TRIANGLES,0,cd.length/3),g.disable(g.POLYGON_OFFSET_FILL));0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,e.array()),U("uView2d",J,"uView",!1,a.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("vertex2d",J,"aVertex",3,yc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINES,0,dd.length/3))};e.sphereDetail=function(a,b){var e;1===arguments.length&&(a=b=arguments[0]);3>a&&(a=3);2>b&&(b=2);if(a!==pb||
b!==jc){var d=c.SINCOS_LENGTH/a,f=new A(a),h=new A(a);for(e=0;e<a;e++)f[e]=Vb[e*d%c.SINCOS_LENGTH|0],h[e]=Ub[e*d%c.SINCOS_LENGTH|0];e=a*(b-1)+2;d=0;Oa=new A(e);Pa=new A(e);Qa=new A(e);var k=0.5*c.SINCOS_LENGTH/b,l=k;for(e=1;e<b;e++){for(var s=Ub[l%c.SINCOS_LENGTH|0],m=-Vb[l%c.SINCOS_LENGTH|0],n=0;n<a;n++)Oa[d]=f[n]*s,Pa[d]=m,Qa[d++]=h[n]*s;l+=k}pb=a;jc=b;P=[];for(f=0;f<pb;f++)P.push(0),P.push(-1),P.push(0),P.push(Oa[f]),P.push(Pa[f]),P.push(Qa[f]);P.push(0);P.push(-1);P.push(0);P.push(Oa[0]);P.push(Pa[0]);
P.push(Qa[0]);k=0;for(f=2;f<jc;f++){h=e=k;d=k+=pb;for(l=0;l<pb;l++)P.push(Oa[h]),P.push(Pa[h]),P.push(Qa[h++]),P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d++]);h=e;d=k;P.push(Oa[h]);P.push(Pa[h]);P.push(Qa[h]);P.push(Oa[d]);P.push(Pa[d]);P.push(Qa[d])}for(f=0;f<pb;f++)d=k+f,P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d]),P.push(0),P.push(1),P.push(0);P.push(Oa[k]);P.push(Pa[k]);P.push(Qa[k]);P.push(0);P.push(1);P.push(0);g.bindBuffer(g.ARRAY_BUFFER,Tb);g.bufferData(g.ARRAY_BUFFER,new A(P),g.STATIC_DRAW)}};E.prototype.sphere=
W.prototype.a3DOnlyFunction;B.prototype.sphere=function(a){(3>pb||2>jc)&&e.sphereDetail(30);var b=new I;b.scale(a,a,a);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();if(R){if(0<O){var c=new I;c.set(a);var d=new I;d.set(b);c.mult(d);d=new I;d.set(c);d.invert();d.transpose();U("uNormalTransform3d",y,"uNormalTransform",!1,d.array());Z("aNormal3d",y,"aNormal",3,Tb)}else sa("aNormal3d",y,"aNormal");g.useProgram(y);sa("aTexture3d",y,"aTexture");U("uModel3d",y,"uModel",!1,b.array());U("uView3d",
y,"uView",!1,a.array());Z("aVertex3d",y,"aVertex",3,Tb);sa("aColor3d",y,"aColor");g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("uColor3d",y,"uColor",ka);g.drawArrays(g.TRIANGLE_STRIP,0,P.length/3);g.disable(g.POLYGON_OFFSET_FILL)}0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,b.array()),U("uView2d",J,"uView",!1,a.array()),Z("aVertex2d",J,"aVertex",3,Tb),sa("aTextureCoord2d",J,"aTextureCoord"),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),g.drawArrays(g.LINE_STRIP,
0,P.length/3))};e.modelX=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[0]*f+d[1]*g+d[2]*h+d[3]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};e.modelY=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[4]*f+d[5]*g+d[6]*h+d[7]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*
b;return 0!==d?a/d:a};e.modelZ=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};E.prototype.ambient=W.prototype.a3DOnlyFunction;B.prototype.ambient=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialAmbient3d",y,"uMaterialAmbient",e.color.toGLArray(a).slice(0,
3))};E.prototype.emissive=W.prototype.a3DOnlyFunction;B.prototype.emissive=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialEmissive3d",y,"uMaterialEmissive",e.color.toGLArray(a).slice(0,3))};E.prototype.shininess=W.prototype.a3DOnlyFunction;B.prototype.shininess=function(a){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);T("uShininess3d",y,"uShininess",a)};E.prototype.specular=W.prototype.a3DOnlyFunction;B.prototype.specular=function(a,b,c){g.useProgram(y);
Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialSpecular3d",y,"uMaterialSpecular",e.color.toGLArray(a).slice(0,3))};e.screenX=function(a,b,c){var d=K.array();if(16===d.length){var f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[0]*f+c[1]*g+c[2]*h+c[3]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.width*(1+a)/2}return K.multX(a,b)};e.screenY=function(a,b,c){var d=K.array();if(16===d.length){var f=
d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[4]*f+c[5]*g+c[6]*h+c[7]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.height*(1+a)/2}return K.multY(a,b)};e.screenZ=function(a,b,c){var e=K.array();if(16!==e.length)return 0;var d=Ha.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*
g+d[14]*h+d[15]*b;0!==d&&(a/=d);return(a+1)/2};W.prototype.fill=function(){var a=e.color.apply(this,arguments);a===La&&R||(R=!0,La=a)};E.prototype.fill=function(){W.prototype.fill.apply(this,arguments);N=!0};B.prototype.fill=function(){W.prototype.fill.apply(this,arguments);ka=e.color.toGLArray(La)};e.noFill=function(){R=!1};W.prototype.stroke=function(){var a=e.color.apply(this,arguments);a===ja&&C||(C=!0,ja=a)};E.prototype.stroke=function(){W.prototype.stroke.apply(this,arguments);ab=!0};B.prototype.stroke=
function(){W.prototype.stroke.apply(this,arguments);X=e.color.toGLArray(ja)};e.noStroke=function(){C=!1};W.prototype.strokeWeight=function(a){ea=a};E.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.lineWidth=a};B.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.useProgram(J);T("pointSize2d",J,"uPointSize",a);g.useProgram(na);T("pointSizeUnlitShape",na,"uPointSize",a);g.lineWidth(a)};e.strokeCap=function(a){ha.$ensureContext().lineCap=
a};e.strokeJoin=function(a){ha.$ensureContext().lineJoin=a};E.prototype.smooth=function(){ra=!0;var a=S.style;a.setProperty("image-rendering","optimizeQuality","important");a.setProperty("-ms-interpolation-mode","bicubic","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!0)};B.prototype.smooth=function(){ra=!0};E.prototype.noSmooth=function(){ra=!1;var a=S.style;a.setProperty("image-rendering","optimizeSpeed","important");a.setProperty("image-rendering","-moz-crisp-edges",
"important");a.setProperty("image-rendering","-webkit-optimize-contrast","important");a.setProperty("image-rendering","optimize-contrast","important");a.setProperty("-ms-interpolation-mode","nearest-neighbor","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!1)};B.prototype.noSmooth=function(){ra=!1};E.prototype.point=function(a,b){C&&(a=Math.round(a),b=Math.round(b),g.fillStyle=e.color.toString(ja),N=!0,1<ea?(g.beginPath(),g.arc(a,b,ea/2,0,c.TWO_PI,!1),g.fill()):
g.fillRect(a,b,1,1))};B.prototype.point=function(a,b,c){var e=new I;e.translate(a,b,c||0);e.transpose();a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();g.useProgram(J);U("uModel2d",J,"uModel",!1,e.array());U("uView2d",J,"uView",!1,a.array());0<ea&&C&&(T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Y("uSmooth2d",J,"uSmooth",ra),Z("aVertex2d",J,"aVertex",3,hc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.POINTS,0,1))};e.beginShape=function(a){aa=a;t=[]};E.prototype.vertex=
function(a,b,c){var e=[];ib&&(ib=!1);e.isVert=!0;e[0]=a;e[1]=b;e[2]=0;e[3]=0;e[4]=0;e[5]=La;e[6]=ja;t.push(e);c&&(t[t.length-1].moveTo=c)};B.prototype.vertex=function(a,b,e,d,f){var g=[];ib&&(ib=!1);g.isVert=!0;f===h&&ua&&(f=d,d=e,e=0);d!==h&&f!==h&&(Wc===c.IMAGE&&(d/=Uc,f/=Vc),d=1<d?1:d,d=0>d?0:d,f=1<f?1:f,f=0>f?0:f);g[0]=a;g[1]=b;g[2]=e||0;g[3]=d||0;g[4]=f||0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.push(g)};var gd=function(a,
b){var c=new I;c.scale(1,-1,1);c.apply(K.array());c.transpose();g.useProgram(na);U("uViewUS",na,"uView",!1,c.array());Y("uSmoothUS",na,"uSmooth",ra);Z("aVertexUS",na,"aVertex",3,hc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(b),g.STREAM_DRAW);g.drawArrays(g.POINTS,0,a.length/3)},Ca=function(a,b,c){b="LINES"===b?g.LINES:"LINE_LOOP"===b?g.LINE_LOOP:g.LINE_STRIP;var e=new I;e.scale(1,-1,1);e.apply(K.array());e.transpose();g.useProgram(na);
U("uViewUS",na,"uView",!1,e.array());Z("aVertexUS",na,"aVertex",3,Ac);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Qc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);g.drawArrays(b,0,a.length/3)},$a=function(a,b,c,e){b="TRIANGLES"===b?g.TRIANGLES:"TRIANGLE_FAN"===b?g.TRIANGLE_FAN:g.TRIANGLE_STRIP;var d=new I;d.scale(1,-1,1);d.apply(K.array());d.transpose();g.useProgram(y);U("model3d",y,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);U("view3d",y,"uView",!1,d.array());
g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("color3d",y,"uColor",[-1,0,0,0]);Z("vertex3d",y,"aVertex",3,Pc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);ua&&null!==gb&&sc(c);Z("aColor3d",y,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);sa("aNormal3d",y,"aNormal");ua&&(Y("uUsingTexture3d",y,"uUsingTexture",ua),Z("aTexture3d",y,"aTexture",2,Rc),g.bufferData(g.ARRAY_BUFFER,new A(e),g.STREAM_DRAW));g.drawArrays(b,0,a.length/3);g.disable(g.POLYGON_OFFSET_FILL)};E.prototype.endShape=
function(a){if(0!==t.length){(a=a===c.CLOSE)&&t.push(t[0]);var b=[],d=[],f=[],k=[],l;ib=!0;var w,m,s=t.length;for(w=0;w<s;w++)for(l=t[w],m=0;3>m;m++)b.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=5;9>m;m++)d.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=9;13>m;m++)f.push(l[m]);for(w=0;w<s;w++)l=t[w],k.push(l[3]),k.push(l[4]);if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h)if(aa===c.POINTS)for(w=0;w<s;w++)l=t[w],C&&e.stroke(l[6]),e.point(l[0],l[1]);else if(aa===c.LINES)for(w=0;w+1<s;w+=2)l=t[w],
C&&e.stroke(t[w+1][6]),e.line(l[0],l[1],t[w+1][0],t[w+1][1]);else if(aa===c.TRIANGLES)for(w=0;w+2<s;w+=3)l=t[w],g.beginPath(),g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),R&&(e.fill(t[w+2][5]),wa()),C&&(e.stroke(t[w+2][6]),za()),g.closePath();else if(aa===c.TRIANGLE_STRIP)for(w=0;w+1<s;w++)l=t[w],g.beginPath(),g.moveTo(t[w+1][0],t[w+1][1]),g.lineTo(l[0],l[1]),C&&e.stroke(t[w+1][6]),R&&e.fill(t[w+1][5]),w+2<s&&(g.lineTo(t[w+2][0],t[w+2][1]),C&&
e.stroke(t[w+2][6]),R&&e.fill(t[w+2][5])),Ta();else if(aa===c.TRIANGLE_FAN){if(2<s)for(g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[1][0],t[1][1]),g.lineTo(t[2][0],t[2][1]),R&&(e.fill(t[2][5]),wa()),C&&(e.stroke(t[2][6]),za()),g.closePath(),w=3;w<s;w++)l=t[w],g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[w-1][0],t[w-1][1]),g.lineTo(l[0],l[1]),R&&(e.fill(l[5]),wa()),C&&(e.stroke(l[6]),za()),g.closePath()}else if(aa===c.QUADS)for(w=0;w+3<s;w+=4){l=t[w];g.beginPath();g.moveTo(l[0],l[1]);for(m=
1;4>m;m++)g.lineTo(t[w+m][0],t[w+m][1]);g.lineTo(l[0],l[1]);R&&(e.fill(t[w+3][5]),wa());C&&(e.stroke(t[w+3][6]),za());g.closePath()}else if(aa===c.QUAD_STRIP){if(3<s)for(w=0;w+1<s;w+=2)l=t[w],g.beginPath(),w+3<s?(g.moveTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+3][0],t[w+3][1]),R&&e.fill(t[w+3][5]),C&&e.stroke(t[w+3][6])):(g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1])),Ta()}else{g.beginPath();g.moveTo(t[0][0],t[0][1]);for(w=1;w<s;w++)l=t[w],l.isVert&&
(l.moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]));Ta()}else{g.beginPath();for(w=0;w<s;w++)l=t[w],t[w].isVert?t[w].moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]):g.bezierCurveTo(t[w][0],t[w][1],t[w][2],t[w][3],t[w][4],t[w][5]);Ta()}else if(3<s){b=[];d=1-oc;g.beginPath();g.moveTo(t[1][0],t[1][1]);for(w=1;w+2<s;w++)l=t[w],b[0]=[l[0],l[1]],b[1]=[l[0]+(d*t[w+1][0]-d*t[w-1][0])/6,l[1]+(d*t[w+1][1]-d*t[w-1][1])/6],b[2]=[t[w+1][0]+(d*t[w][0]-d*t[w+2][0])/6,t[w+1][1]+(d*t[w][1]-d*t[w+2][1])/6],b[3]=[t[w+
1][0],t[w+1][1]],g.bezierCurveTo(b[1][0],b[1][1],b[2][0],b[2][1],b[3][0],b[3][1]);Ta()}Db=Cb=!1;va=[];oa=0;a&&t.pop()}};B.prototype.endShape=function(a){if(0!==t.length){var b=a===c.CLOSE;a=[];var e=[],d=[],f=[],k=[],l;ib=!0;var m,s,n=t.length;for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)e.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);for(m=0;m<n;m++)l=t[m],k.push(l[3]),k.push(l[4]);if(b){e.push(t[0][0]);e.push(t[0][1]);e.push(t[0][2]);
for(m=5;9>m;m++)d.push(t[0][m]);for(m=9;13>m;m++)f.push(t[0][m]);k.push(t[0][3]);k.push(t[0][4])}if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h){if(aa===c.POINTS){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);gd(a,f)}else if(aa===c.LINES){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);Ca(a,"LINES",f)}else if(aa===c.TRIANGLES){if(2<n)for(m=0;m+2<n;m+=3){e=[];k=[];a=[];d=[];f=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+
s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)d.push(t[m+s][b]),f.push(t[m+s][b+4]);C&&Ca(a,"LINE_LOOP",f);(R||ua)&&$a(e,"TRIANGLES",d,k)}}else if(aa===c.TRIANGLE_STRIP){if(2<n)for(m=0;m+2<n;m++){a=[];e=[];f=[];d=[];k=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)f.push(t[m+s][b+4]),d.push(t[m+s][b]);(R||ua)&&$a(e,"TRIANGLE_STRIP",
d,k);C&&Ca(a,"LINE_LOOP",f)}}else if(aa===c.TRIANGLE_FAN){if(2<n){for(m=0;3>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;3>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);C&&Ca(a,"LINE_LOOP",f);for(m=2;m+1<n;m++){a=[];f=[];a.push(t[0][0]);a.push(t[0][1]);a.push(t[0][2]);f.push(t[0][9]);f.push(t[0][10]);f.push(t[0][11]);f.push(t[0][12]);for(s=0;2>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]);for(s=0;2>s;s++)for(b=9;13>b;b++)f.push(t[m+s][b]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}}else if(aa===
c.QUADS)for(m=0;m+3<n;m+=4){a=[];for(s=0;4>s;s++)for(l=t[m+s],b=0;3>b;b++)a.push(l[b]);C&&Ca(a,"LINE_LOOP",f);if(R){e=[];d=[];k=[];for(s=0;3>s;s++)e.push(t[m][s]);for(s=5;9>s;s++)d.push(t[m][s]);for(s=0;3>s;s++)e.push(t[m+1][s]);for(s=5;9>s;s++)d.push(t[m+1][s]);for(s=0;3>s;s++)e.push(t[m+3][s]);for(s=5;9>s;s++)d.push(t[m+3][s]);for(s=0;3>s;s++)e.push(t[m+2][s]);for(s=5;9>s;s++)d.push(t[m+2][s]);ua&&(k.push(t[m+0][3]),k.push(t[m+0][4]),k.push(t[m+1][3]),k.push(t[m+1][4]),k.push(t[m+3][3]),k.push(t[m+
3][4]),k.push(t[m+2][3]),k.push(t[m+2][4]));$a(e,"TRIANGLE_STRIP",d,k)}}else if(aa===c.QUAD_STRIP){if(3<n){for(m=0;2>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;2>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);Ca(a,"LINE_STRIP",f);4<n&&0<n%2&&(e.splice(e.length-3),t.pop());for(m=0;m+3<n;m+=2){a=[];f=[];for(s=0;3>s;s++)a.push(t[m+1][s]);for(s=0;3>s;s++)a.push(t[m+3][s]);for(s=0;3>s;s++)a.push(t[m+2][s]);for(s=0;3>s;s++)a.push(t[m+0][s]);for(s=9;13>s;s++)f.push(t[m+1][s]);for(s=9;13>s;s++)f.push(t[m+
3][s]);for(s=9;13>s;s++)f.push(t[m+2][s]);for(s=9;13>s;s++)f.push(t[m+0][s]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_LIST",d,k)}}else if(1===n){for(s=0;3>s;s++)a.push(t[0][s]);for(s=9;13>s;s++)f.push(t[0][s]);gd(a,f)}else{for(m=0;m<n;m++){l=t[m];for(s=0;3>s;s++)a.push(l[s]);for(s=5;9>s;s++)f.push(l[s])}C&&b?Ca(a,"LINE_LOOP",f):C&&!b&&Ca(a,"LINE_STRIP",f);(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}ua=!1;g.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)}else a=e,a.splice(a.length-3),f.splice(f.length-
4),C&&Ca(a,null,f),R&&$a(e,"TRIANGLES",d);else C&&Ca(e,null,f),R&&$a(e,null,d);Db=Cb=!1;va=[];oa=0}};var hd=function(a,b){var c=1/a,e=c*c,d=e*c;b.set(0,0,0,1,d,e,c,0,6*d,2*e,0,0,6*d,0,0,0)},id=function(){xb||(Sb=new I,xb=new I,Lc=!0);var a=oc;Sb.set((a-1)/2,(a+3)/2,(-3-a)/2,(1-a)/2,1-a,(-5-a)/2,a+2,(a-1)/2,(a-1)/2,0,(1-a)/2,0,0,1,0,0);hd(pc,xb);uc||(fc=new I);fc.set(Sb);fc.preApply(uc);xb.apply(Sb)};E.prototype.bezierVertex=function(){Db=!0;var a=[];if(ib)throw"vertex() must be used at least once before calling bezierVertex()";
for(var b=0;b<arguments.length;b++)a[b]=arguments[b];t.push(a);t[t.length-1].isVert=!1};B.prototype.bezierVertex=function(){Db=!0;if(ib)throw"vertex() must be used at least once before calling bezierVertex()";if(9===arguments.length){yb===h&&(yb=new I);var a=t.length-1;hd(qc,yb);yb.apply(vc);for(var b=yb.array(),c=t[a][0],d=t[a][1],a=t[a][2],f=b[4]*c+b[5]*arguments[0]+b[6]*arguments[3]+b[7]*arguments[6],g=b[8]*c+b[9]*arguments[0]+b[10]*arguments[3]+b[11]*arguments[6],k=b[12]*c+b[13]*arguments[0]+
b[14]*arguments[3]+b[15]*arguments[6],l=b[4]*d+b[5]*arguments[1]+b[6]*arguments[4]+b[7]*arguments[7],m=b[8]*d+b[9]*arguments[1]+b[10]*arguments[4]+b[11]*arguments[7],n=b[12]*d+b[13]*arguments[1]+b[14]*arguments[4]+b[15]*arguments[7],p=b[4]*a+b[5]*arguments[2]+b[6]*arguments[5]+b[7]*arguments[8],r=b[8]*a+b[9]*arguments[2]+b[10]*arguments[5]+b[11]*arguments[8],b=b[12]*a+b[13]*arguments[2]+b[14]*arguments[5]+b[15]*arguments[8],v=0;v<qc;v++)c+=f,f+=g,g+=k,d+=l,l+=m,m+=n,a+=p,p+=r,r+=b,e.vertex(c,d,a);
e.vertex(arguments[6],arguments[7],arguments[8])}};e.texture=function(a){var b=ha.$ensureContext();if(a.__texture)b.bindTexture(b.TEXTURE_2D,a.__texture);else{if("canvas"===a.localName)b.bindTexture(b.TEXTURE_2D,Sc),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.generateMipmap(b.TEXTURE_2D);else{var c=b.createTexture(),e=p.createElement("canvas"),d=e.getContext("2d"),
f;if(a.width&0===a.width-1)e.width=a.width;else{for(f=1;f<a.width;)f*=2;e.width=f}if(a.height&0===a.height-1)e.height=a.height;else{for(f=1;f<a.height;)f*=2;e.height=f}d.drawImage(a.sourceImg,0,0,a.width,a.height,0,0,e.width,e.height);b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR_MIPMAP_LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,
b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,e);b.generateMipmap(b.TEXTURE_2D);a.__texture=c}Uc=a.width;Vc=a.height}ua=!0;b.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)};e.textureMode=function(a){Wc=a};E.prototype.curveVertex=function(a,b){Cb=!0;e.vertex(a,b)};B.prototype.curveVertex=function(a,b,c){Cb=!0;Lc||id();var d=[];d[0]=a;d[1]=b;d[2]=c;va.push(d);oa++;if(3<oa){var f=va[oa-4][0],g=va[oa-4][1],h=va[oa-4][2],k=va[oa-3][0],l=va[oa-3][1],m=va[oa-3][2],n=
va[oa-2][0],p=va[oa-2][1],r=va[oa-2][2],t=va[oa-1][0],v=va[oa-1][1],u=va[oa-1][2];a=k;b=l;c=m;var q=xb.array(),d=q[4]*f+q[5]*k+q[6]*n+q[7]*t,x=q[8]*f+q[9]*k+q[10]*n+q[11]*t,f=q[12]*f+q[13]*k+q[14]*n+q[15]*t,k=q[4]*g+q[5]*l+q[6]*p+q[7]*v,n=q[8]*g+q[9]*l+q[10]*p+q[11]*v,g=q[12]*g+q[13]*l+q[14]*p+q[15]*v,l=q[4]*h+q[5]*m+q[6]*r+q[7]*u,p=q[8]*h+q[9]*m+q[10]*r+q[11]*u,h=q[12]*h+q[13]*m+q[14]*r+q[15]*u;e.vertex(a,b,c);for(m=0;m<pc;m++)a+=d,d+=x,x+=f,b+=k,k+=n,n+=g,c+=l,l+=p,p+=h,e.vertex(a,b,c)}};E.prototype.curve=
function(a,b,c,d,f,g,h,k){e.beginShape();e.curveVertex(a,b);e.curveVertex(c,d);e.curveVertex(f,g);e.curveVertex(h,k);e.endShape()};B.prototype.curve=function(a,b,c,d,f,g,k,l,m,n,p,r){r!==h?(e.beginShape(),e.curveVertex(a,b,c),e.curveVertex(d,f,g),e.curveVertex(k,l,m),e.curveVertex(n,p,r)):(e.beginShape(),e.curveVertex(a,b),e.curveVertex(c,d),e.curveVertex(f,g),e.curveVertex(k,l));e.endShape()};e.curveTightness=function(a){oc=a};e.curveDetail=function(a){pc=a;id()};e.rectMode=function(a){qa=a};e.imageMode=
function(a){switch(a){case c.CORNER:mc=ed;break;case c.CORNERS:mc=ud;break;case c.CENTER:mc=vd;break;default:throw"Invalid imageMode";}};e.ellipseMode=function(a){la=a};e.arc=function(a,b,d,f,g,h){if(!(0>=d||h<g)){la===c.CORNERS?(d-=a,f-=b):la===c.RADIUS?(a-=d,b-=f,d*=2,f*=2):la===c.CENTER&&(a-=d/2,b-=f/2);for(;0>g;)g+=c.TWO_PI,h+=c.TWO_PI;h-g>c.TWO_PI&&(g=0,h=c.TWO_PI);d/=2;f/=2;a+=d;b+=f;g=0|0.5+2*g*e.RAD_TO_DEG;h=0|0.5+2*h*e.RAD_TO_DEG;var k,l;if(R){var m=C;C=!1;e.beginShape();e.vertex(a,b);for(k=
g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape(c.CLOSE);C=m}if(C){m=R;R=!1;e.beginShape();for(k=g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape();R=m}}};E.prototype.line=function(a,b,c,d){if(C)if(a=Math.round(a),c=Math.round(c),b=Math.round(b),d=Math.round(d),a===c&&b===d)e.point(a,b);else{for(var f=h,k=h,l=!0,f=K.array(),m=[1,0,0,0,1,0],s=0;6>s&&l;s++)l=f[s]===m[s];l&&(a===c?(b>d&&(f=b,b=d,d=f),d++,1===ea%2&&g.translate(0.5,0)):b===d&&(a>c&&(f=a,a=
c,c=f),c++,1===ea%2&&g.translate(0,0.5)),1===ea&&(k=g.lineCap,g.lineCap="butt"));g.beginPath();g.moveTo(a||0,b||0);g.lineTo(c||0,d||0);za();l&&(a===c&&1===ea%2?g.translate(-0.5,0):b===d&&1===ea%2&&g.translate(0,-0.5),1===ea&&(g.lineCap=k))}};B.prototype.line=function(a,b,c,d,f,k){if(f===h||k===h)k=0,f=d,d=c,c=0;a===d&&b===f&&c===k?e.point(a,b,c):(a=[a,b,c,d,f,k],b=new I,b.scale(1,-1,1),b.apply(K.array()),b.transpose(),0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,
0,0,1]),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,Ac),sa("aTextureCoord2d",J,"aTextureCoord"),g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW),g.drawArrays(g.LINES,0,2)))};E.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode";e.beginShape();e.vertex(arguments[0],arguments[1]);e.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],
arguments[7]);e.endShape()};B.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode";e.beginShape();e.vertex(arguments[0],arguments[1],arguments[2]);e.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);e.endShape()};e.bezierDetail=function(a){qc=a};e.bezierPoint=function(a,b,c,e,d){return(1-d)*(1-d)*(1-d)*a+3*(1-d)*(1-d)*d*b+3*(1-d)*d*d*c+d*d*d*e};e.bezierTangent=
function(a,b,c,e,d){return 3*d*d*(-a+3*b-3*c+e)+6*d*(a-2*b+c)+3*(-a+b)};e.curvePoint=function(a,b,c,e,d){return 0.5*(2*b+(-a+c)*d+(2*a-5*b+4*c-e)*d*d+(-a+3*b-3*c+e)*d*d*d)};e.curveTangent=function(a,b,c,e,d){return 0.5*(-a+c+2*(2*a-5*b+4*c-e)*d+3*(-a+3*b-3*c+e)*d*d)};e.triangle=function(a,b,d,f,g,h){e.beginShape(c.TRIANGLES);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.endShape()};e.quad=function(a,b,d,f,g,h,k,l){e.beginShape(c.QUADS);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.vertex(k,
l,0);e.endShape()};E.prototype.rect=function(a,b,e,d,f,k,l,m){if(e||d)if(qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=e/2,b-=d/2),a=Math.round(a),b=Math.round(b),e=Math.round(e),d=Math.round(d),f!==h){m===h&&(m=l=k=f);var s=e/2,n=d/2;if(f>s||f>n)f=Math.min(s,n);if(k>s||k>n)k=Math.min(s,n);if(l>s||l>n)l=Math.min(s,n);if(m>s||m>n)m=Math.min(s,n);R&&!C||g.translate(0.5,0.5);g.beginPath();g.moveTo(a+f,b);g.lineTo(a+e-k,b);g.quadraticCurveTo(a+e,b,a+e,b+k);g.lineTo(a+
e,b+d-l);g.quadraticCurveTo(a+e,b+d,a+e-l,b+d);g.lineTo(a+m,b+d);g.quadraticCurveTo(a,b+d,a,b+d-m);g.lineTo(a,b+f);g.quadraticCurveTo(a,b,a+f,b);R&&!C||g.translate(-0.5,-0.5);wa();za()}else C&&1===ea%2&&g.translate(0.5,0.5),g.beginPath(),g.rect(a,b,e,d),wa(),za(),C&&1===ea%2&&g.translate(-0.5,-0.5)};B.prototype.rect=function(a,b,e,d,f,k,l,m){if(f!==h)throw"rect() with rounded corners is not supported in 3D mode";qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=
e/2,b-=d/2);f=new I;f.translate(a,b,0);f.scale(e,d,1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,f.array()),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,gc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINE_LOOP,0,Hc.length/3));R&&(g.useProgram(y),U("uModel3d",y,"uModel",!1,f.array()),U("uView3d",y,"uView",!1,b.array()),
g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(a=new I,a.set(b),b=new I,b.set(f),a.mult(b),b=new I,b.set(a),b.invert(),b.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,b.array()),Z("aNormal3d",y,"aNormal",3,zc)):sa("normal3d",y,"aNormal"),Z("vertex3d",y,"aVertex",3,gc),g.drawArrays(g.TRIANGLE_FAN,0,Hc.length/3),g.disable(g.POLYGON_OFFSET_FILL))};E.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f))if(la===c.RADIUS?(d*=2,f*=2):la===
c.CORNERS?(d-=a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2),d===f)g.beginPath(),g.arc(a,b,d/2,0,c.TWO_PI,!1),wa(),za();else{d/=2;f/=2;var h=0.5522847498307933*d,k=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-k,a+h,b-f,a,b-f);e.bezierVertex(a-h,b-f,a-d,b-k,a-d,b);e.bezierVertex(a-d,b+k,a-h,b+f,a,b+f);e.bezierVertex(a+h,b+f,a+d,b+k,a+d,b);e.endShape()}};B.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f)){la===c.RADIUS?(d*=2,f*=2):la===c.CORNERS?(d-=
a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2);d/=2;f/=2;var g=0.5522847498307933*d,h=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-h,0,a+g,b-f,0,a,b-f,0);e.bezierVertex(a-g,b-f,0,a-d,b-h,0,a-d,b,0);e.bezierVertex(a-d,b+h,0,a-g,b+f,0,a,b+f,0);e.bezierVertex(a+g,b+f,0,a+d,b+h,0,a+d,b,0);e.endShape();if(R){for(g=f=d=0;g<t.length;g++)d+=t[g][0],f+=t[g][1];d/=t.length;f/=t.length;g=[];a=[];b=[];g[0]=d;g[1]=f;g[2]=0;g[3]=0;g[4]=0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];
g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.unshift(g);for(g=0;g<t.length;g++){for(d=0;3>d;d++)a.push(t[g][d]);for(d=5;9>d;d++)b.push(t[g][d])}$a(a,"TRIANGLE_FAN",b)}}};e.normal=function(a,b,d){if(3!==arguments.length||"number"!==typeof a||"number"!==typeof b||"number"!==typeof d)throw"normal() requires three numeric arguments.";Gb=a;Eb=b;ub=d;0!==aa&&(jb===c.NORMAL_MODE_AUTO?jb=c.NORMAL_MODE_SHAPE:jb===c.NORMAL_MODE_SHAPE&&(jb=c.NORMAL_MODE_VERTEX))};e.save=function(a,
b){return b!==h?l.open(b.toDataURL(),"_blank"):l.open(e.externals.canvas.toDataURL(),"_blank")};var wd=0;e.saveFrame=function(a){a===h&&(a="screen-####.png");a=a.replace(/#+/,function(a){for(var b=""+wd++;b.length<a.length;)b="0"+b;return b});e.save(a)};var xd=p.createElement("canvas").getContext("2d"),Mc=[h,h,h],Ga=function(a,b,d){this.__isDirty=!1;if(a instanceof D)this.fromHTMLImageData(a);else if(b||d){this.width=a||1;this.height=b||1;a=this.sourceImg=p.createElement("canvas");a.width=this.width;
a.height=this.height;this.imageData=a.getContext("2d").createImageData(this.width,this.height);this.format=d===c.ARGB||d===c.ALPHA?d:c.RGB;if(this.format===c.RGB)for(d=3,a=this.imageData.data,b=a.length;d<b;d+=4)a[d]=255;this.__isDirty=!0;this.updatePixels()}else this.height=this.width=0,this.imageData=xd.createImageData(1,1),this.format=c.ARGB;this.pixels=Jb(this)};Ga.prototype={__isPImage:!0,updatePixels:function(){var a=this.sourceImg;a&&(a instanceof x&&this.__isDirty)&&a.getContext("2d").putImageData(this.imageData,
0,0);this.__isDirty=!1},fromHTMLImageData:function(a){var b=Ja(a);try{var c=b.context.getImageData(0,0,a.width,a.height);this.fromImageData(c)}catch(d){a.width&&a.height&&(this.isRemote=!0,this.width=a.width,this.height=a.height)}this.sourceImg=a},get:function(a,b,c,d){if(!arguments.length)return e.get(this);if(2===arguments.length)return e.get(a,b,this);if(4===arguments.length)return e.get(a,b,c,d,this)},set:function(a,b,c){e.set(a,b,c,this);this.__isDirty=!0},blend:function(a,b,c,d,f,g,h,k,l,m){9===
arguments.length?e.blend(this,a,b,c,d,f,g,h,k,l,this):10===arguments.length&&e.blend(a,b,c,d,f,g,h,k,l,m,this);delete this.sourceImg},copy:function(a,b,d,f,g,h,k,l,m){8===arguments.length?e.blend(this,a,b,d,f,g,h,k,l,c.REPLACE,this):9===arguments.length&&e.blend(a,b,d,f,g,h,k,l,m,c.REPLACE,this);delete this.sourceImg},filter:function(a,b){2===arguments.length?e.filter(a,b,this):1===arguments.length&&e.filter(a,null,this);delete this.sourceImg},save:function(a){e.save(a,this)},resize:function(a,b){if(this.isRemote)throw"Image is loaded remotely. Cannot resize.";
if(0!==this.width||0!==this.height){0===a&&0!==b?a=Math.floor(this.width/this.height*b):0===b&&0!==a&&(b=Math.floor(this.height/this.width*a));var c=Ja(this.imageData).canvas,c=Ja(c,a,b).context.getImageData(0,0,a,b);this.fromImageData(c)}},mask:function(a){var b=this.toImageData(),c,d;if(a instanceof Ga||a.__isPImage)if(a.width===this.width&&a.height===this.height)for(a=a.toImageData(),c=2,d=4*this.width*this.height;c<d;c+=4)b.data[c+1]=a.data[c];else throw"mask must have the same dimensions as PImage.";
else if(a instanceof Array)if(this.width*this.height===a.length)for(c=0,d=a.length;c<d;++c)b.data[4*c+3]=a[c];else throw"mask array must be the same length as PImage pixels array.";this.fromImageData(b)},loadPixels:r,toImageData:function(){return this.isRemote?this.sourceImg:this.__isDirty?Ja(this.sourceImg).context.getImageData(0,0,this.width,this.height):this.imageData},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI.";return Ja(this.imageData).canvas.toDataURL()},
fromImageData:function(a){var b=a.width,d=a.height,e=p.createElement("canvas"),f=e.getContext("2d");this.width=e.width=b;this.height=e.height=d;f.putImageData(a,0,0);this.format=c.ARGB;this.imageData=a;this.sourceImg=e}};e.PImage=Ga;e.createImage=function(a,b,c){return new Ga(a,b,c)};e.loadImage=function(a,b,c){if(da.imageCache.images[a])return b=new Ga(da.imageCache.images[a]),b.loaded=!0,b;b=new Ga;var d=p.createElement("img");b.sourceImg=d;d.onload=function(a,b,c){return function(){b.fromHTMLImageData(a);
b.loaded=!0;c&&c()}}(d,b,c);d.src=a;return b};e.requestImage=e.loadImage;e.get=function(a,b,d,f,g){if(void 0!==g)return Lb(a,b,d,f,g);if(void 0!==f)return Kb(a,b,d,f);if(void 0!==d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y.";a=4*b*d.width+4*a;d=d.imageData.data;return d[a+3]<<24&c.ALPHA_MASK|d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK}return void 0!==b?(a>=e.width||0>a||0>b||b>=e.height?d=0:Rb?(a=4*((0|a)+e.width*(0|b)),d=e.imageData.data,d=d[a+3]<<24&c.ALPHA_MASK|
d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK):(d=e.toImageData(0|a,0|b,1,1).data,d=d[3]<<24&c.ALPHA_MASK|d[0]<<16&c.RED_MASK|d[1]<<8&c.GREEN_MASK|d[2]&c.BLUE_MASK),d):void 0!==a?Lb(0,0,a.width,a.height,a):Kb(0,0,e.width,e.height)};e.createGraphics=function(a,b,c){var d=new M;d.size(a,b,c);d.background(0,0);return d};e.set=function(a,b,c,d){if(3===arguments.length)"number"===typeof c?a<e.width&&(0<=a&&0<=b&&b<e.height)&&(Rb||(e.loadPixels(),null===Fc&&(Nc=g,Fc=new Mb),Rb=!0,g=Fc,Xc=
0),e.pixels.setPixel((0|a)+e.width*(0|b),c),++Xc>Yc&&fb()):(c instanceof Ga||c.__isPImage)&&e.image(c,a,b);else if(4===arguments.length){if(d.isRemote)throw"Image is loaded remotely. Cannot set x,y.";var f=e.color.toArray(c),h=4*b*d.width+4*a,k=d.imageData.data;k[h]=f[0];k[h+1]=f[1];k[h+2]=f[2];k[h+3]=f[3]}};e.imageData={};e.pixels={getLength:function(){return e.imageData.data.length?e.imageData.data.length/4:0},getPixel:function(a){a*=4;var b=e.imageData.data;return b[a+3]<<24&4278190080|b[a+0]<<
16&16711680|b[a+1]<<8&65280|b[a+2]&255},setPixel:function(a,b){var c=4*a,d=e.imageData.data;d[c+0]=(b&16711680)>>>16;d[c+1]=(b&65280)>>>8;d[c+2]=b&255;d[c+3]=(b&4278190080)>>>24},toArray:function(){for(var a=[],b=e.imageData.width*e.imageData.height,c=e.imageData.data,d=0,f=0;d<b;d++,f+=4)a.push(c[f+3]<<24&4278190080|c[f+0]<<16&16711680|c[f+1]<<8&65280|c[f+2]&255);return a},set:function(a){for(var b=0,c=a.length;b<c;b++)this.setPixel(b,a[b])}};e.loadPixels=function(){e.imageData=ha.$ensureContext().getImageData(0,
0,e.width,e.height)};e.updatePixels=function(){e.imageData&&ha.$ensureContext().putImageData(e.imageData,0,0)};e.hint=function(a){var b=ha.$ensureContext();a===c.DISABLE_DEPTH_TEST?(b.disable(b.DEPTH_TEST),b.depthMask(!1),b.clear(b.DEPTH_BUFFER_BIT)):a===c.ENABLE_DEPTH_TEST?(b.enable(b.DEPTH_TEST),b.depthMask(!0)):a===c.ENABLE_OPENGL_2X_SMOOTH||a===c.ENABLE_OPENGL_4X_SMOOTH?ra=!0:a===c.DISABLE_OPENGL_2X_SMOOTH&&(ra=!1)};var jd=function(a,b,c,d){if(a instanceof Ga||a.__isPImage){if(!a.loaded)throw"Error using image in background(): PImage not loaded.";
if(a.width!==e.width||a.height!==e.height)throw"Background image must be the same dimensions as the canvas.";}else a=e.color(a,b,c,d);kb=a};E.prototype.background=function(a,b,c,d){a!==h&&jd(a,b,c,d);kb instanceof Ga||kb.__isPImage?(g.save(),g.setTransform(1,0,0,1,0,0),e.image(kb,0,0)):(g.save(),g.setTransform(1,0,0,1,0,0),e.alpha(kb)!==ia&&g.clearRect(0,0,e.width,e.height),g.fillStyle=e.color.toString(kb),g.fillRect(0,0,e.width,e.height),N=!0);Sa()};B.prototype.background=function(a,b,c,d){0<arguments.length&&
jd(a,b,c,d);var f=e.color.toGLArray(kb);g.clearColor(f[0],f[1],f[2],f[3]);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT)};E.prototype.image=function(a,b,c,d,e){b=Math.round(b);c=Math.round(c);if(0<a.width){var f=mc(b||0,c||0,d||a.width,e||a.height,4>arguments.length);if(a.sourceImg&&null===gb){var h=a.sourceImg;a.__isDirty&&a.updatePixels();g.drawImage(h,0,0,h.width,h.height,f.x,f.y,f.w,f.h)}else h=a.toImageData(),null!==gb&&(gb(h),a.__isDirty=!0),g.drawImage(Ja(h).canvas,0,0,a.width,a.height,f.x,
f.y,f.w,f.h)}};B.prototype.image=function(a,b,c,d,f){0<a.width&&(b=Math.round(b),c=Math.round(c),d=d||a.width,f=f||a.height,e.beginShape(e.QUADS),e.texture(a),e.vertex(b,c,0,0,0),e.vertex(b,c+f,0,0,f),e.vertex(b+d,c+f,0,d,f),e.vertex(b+d,c,0,d,0),e.endShape())};e.tint=function(a,b,c,d){a=e.color(a,b,c,d);var f=e.red(a)/xa,g=e.green(a)/Ea,h=e.blue(a)/ya,k=e.alpha(a)/ia;gb=function(a){var b=a.data;a=4*a.width*a.height;for(var c=0;c<a;)b[c++]*=f,b[c++]*=g,b[c++]*=h,b[c++]*=k};sc=function(a){for(var b=
0;b<a.length;)a[b++]=f,a[b++]=g,a[b++]=h,a[b++]=k}};e.noTint=function(){sc=gb=null};e.copy=function(a,b,d,f,g,k,l,m,n){n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=b,b=a,a=e);e.blend(a,b,d,f,g,k,l,m,n,c.REPLACE)};e.blend=function(a,b,c,d,f,g,k,l,m,n,p){if(a.isRemote)throw"Image is loaded remotely. Cannot blend image.";n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=c,c=b,b=a,a=e);d=b+d;f=c+f;l=g+l;m=k+m;var r=p||e;p!==h&&n!==h||e.loadPixels();a.loadPixels();a===e&&e.intersect(b,c,d,f,g,k,l,m)?e.blit_resize(e.get(b,c,d-b,
f-c),0,0,d-b-1,f-c-1,r.imageData.data,r.width,r.height,g,k,l,m,n):e.blit_resize(a,b,c,d,f,r.imageData.data,r.width,r.height,g,k,l,m,n);p===h&&e.updatePixels()};var kd=function(a,b){var c=0,d=b.pixels.getLength(),e=new Q(d),f,g,h,k,l,m,n,p,r,t,q,v;if(a)for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),h=77*(h>>16&255)+
151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t<h&&(k=m,h=t),r<h&&(k=l,h=r),q<h&&(k=n,h=q),v<h&&(k=p),e[c++]=k;else for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),
h=77*(h>>16&255)+151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t>h&&(k=m,h=t),r>h&&(k=l,h=r),q>h&&(k=n,h=q),v>h&&(k=p),e[c++]=k;b.pixels.set(e)};e.filter=function(a,b,d){var f,g,k,l;3===arguments.length?(d.loadPixels(),f=d):(e.loadPixels(),f=e);b===h&&(b=null);if(f.isRemote)throw"Image is loaded remotely. Cannot filter image.";var m=f.pixels.getLength();
switch(a){case c.BLUR:var n=b||1,p=f,r,t,q,v,u,x,y,C,D;k=p.pixels.getLength();l=new A(k);m=new A(k);g=new A(k);k=new A(k);var F=0,G,E,H,n=e.floor(3.5*n),B,n=1>n?1:248>n?n:248;if(e.shared.blurRadius!==n){e.shared.blurRadius=n;e.shared.blurKernelSize=1+(e.shared.blurRadius<<1);e.shared.blurKernel=new A(e.shared.blurKernelSize);var I=e.shared.blurKernel,J=e.shared.blurKernelSize;for(B=0;B<J;B++)I[B]=0;J=(n-1)*(n-1);for(B=1;B<n;B++)I[n+B]=I[void 0]=J;I[n]=n*n}n=p.height;B=p.width;I=e.shared.blurKernelSize;
C=e.shared.blurRadius;var J=e.shared.blurKernel,K=p.imageData.data;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;x=G-C;if(0>x)u=-x,x=0;else{if(x>=B)break;u=0}for(H=u;H<I&&!(x>=B);H++)y=4*(x+F),u=J[H],v+=u*K[y+3],r+=u*K[y],t+=u*K[y+1],q+=u*K[y+2],p+=u,x++;y=F+G;k[y]=v/p;l[y]=r/p;m[y]=t/p;g[y]=q/p}F+=B}F=0;C=-C;D=C*B;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;if(0>C)u=y=-C,x=G;else{if(C>=n)break;u=0;y=C;x=G+D}for(H=u;H<I&&!(y>=n);H++)u=J[H],v+=u*k[x],r+=u*l[x],t+=u*m[x],q+=u*g[x],p+=u,y++,x+=B;y=
4*(G+F);K[y]=r/p;K[y+1]=t/p;K[y+2]=q/p;K[y+3]=v/p}F+=B;D+=B;C++}break;case c.GRAY:if(f.format===c.ALPHA){for(l=0;l<m;l++)g=255-f.pixels.getPixel(l),f.pixels.setPixel(l,4278190080|g<<16|g<<8|g);f.format=c.RGB}else for(l=0;l<m;l++)g=f.pixels.getPixel(l),k=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)>>8,f.pixels.setPixel(l,g&c.ALPHA_MASK|k<<16|k<<8|k);break;case c.INVERT:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)^16777215);break;case c.POSTERIZE:if(null===b)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
g=e.floor(b);if(2>g||255<g)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";k=g-1;for(l=0;l<m;l++)F=f.pixels.getPixel(l)>>16&255,n=f.pixels.getPixel(l)>>8&255,B=f.pixels.getPixel(l)&255,F=255*(F*g>>8)/k,n=255*(n*g>>8)/k,B=255*(B*g>>8)/k,f.pixels.setPixel(l,4278190080&f.pixels.getPixel(l)|F<<16|n<<8|B);break;case c.OPAQUE:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)|4278190080);f.format=c.RGB;break;case c.THRESHOLD:null===b&&(b=0.5);if(0>b||1<b)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";
g=e.floor(255*b);for(l=0;l<m;l++)k=e.max((f.pixels.getPixel(l)&c.RED_MASK)>>16,e.max((f.pixels.getPixel(l)&c.GREEN_MASK)>>8,f.pixels.getPixel(l)&c.BLUE_MASK)),f.pixels.setPixel(l,f.pixels.getPixel(l)&c.ALPHA_MASK|(k<g?0:16777215));break;case c.ERODE:kd(!0,f);break;case c.DILATE:kd(!1,f)}f.updatePixels()};e.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,
blurKernelSize:0,blurKernel:null};e.intersect=function(a,b,c,d,e,f,g,h){c=c-a+1;d=d-b+1;g=g-e+1;h=h-f+1;e<a?(g+=e-a,g>c&&(g=c)):(a=c+a-e,g>a&&(g=a));f<b?(h+=f-b,h>d&&(h=d)):(b=d+b-f,h>b&&(h=b));return!(0>=g||0>=h)};var pa={};pa[c.BLEND]=e.modes.blend;pa[c.ADD]=e.modes.add;pa[c.SUBTRACT]=e.modes.subtract;pa[c.LIGHTEST]=e.modes.lightest;pa[c.DARKEST]=e.modes.darkest;pa[c.REPLACE]=e.modes.replace;pa[c.DIFFERENCE]=e.modes.difference;pa[c.EXCLUSION]=e.modes.exclusion;pa[c.MULTIPLY]=e.modes.multiply;pa[c.SCREEN]=
e.modes.screen;pa[c.OVERLAY]=e.modes.overlay;pa[c.HARD_LIGHT]=e.modes.hard_light;pa[c.SOFT_LIGHT]=e.modes.soft_light;pa[c.DODGE]=e.modes.dodge;pa[c.BURN]=e.modes.burn;e.blit_resize=function(a,b,d,f,g,h,k,l,m,n,p,r,t){0>b&&(b=0);0>d&&(d=0);f>=a.width&&(f=a.width-1);g>=a.height&&(g=a.height-1);f-=b;g-=d;p-=m;r-=n;if(!(0>=p||0>=r||0>=f||0>=g||m>=k||n>=l||b>=a.width||d>=a.height)){f=Math.floor(f/p*c.PRECISIONF);g=Math.floor(g/r*c.PRECISIONF);var q=e.shared;q.srcXOffset=Math.floor(0>m?-m*f:b*c.PRECISIONF);
q.srcYOffset=Math.floor(0>n?-n*g:d*c.PRECISIONF);0>m&&(p+=m,m=0);0>n&&(r+=n,n=0);p=Math.min(p,k-m);r=Math.min(r,l-n);b=n*k+m;var v;q.srcBuffer=a.imageData.data;q.iw=a.width;q.iw1=a.width-1;q.ih1=a.height-1;d=pa[t];var u,x,y,C;m=c.ALPHA_MASK;n=c.RED_MASK;var A=c.GREEN_MASK,B=c.BLUE_MASK,F=c.PREC_MAXVAL,D=c.PRECISIONB,G=c.PREC_RED_SHIFT,H=c.PREC_ALPHA_SHIFT,E=q.srcBuffer,I=Math.min;for(t=0;t<r;t++){q.sX=q.srcXOffset;q.fracV=q.srcYOffset&F;q.ifV=F-q.fracV;q.v1=(q.srcYOffset>>D)*q.iw;q.v2=I((q.srcYOffset>>
D)+1,q.ih1)*q.iw;for(a=0;a<p;a++)l=4*(b+a),v=h[l+3]<<24&m|h[l]<<16&n|h[l+1]<<8&A|h[l+2]&B,q.fracU=q.sX&F,q.ifU=F-q.fracU,q.ul=q.ifU*q.ifV>>D,q.ll=q.ifU*q.fracV>>D,q.ur=q.fracU*q.ifV>>D,q.lr=q.fracU*q.fracV>>D,q.u1=q.sX>>D,q.u2=I(q.u1+1,q.iw1),u=4*(q.v1+q.u1),x=4*(q.v1+q.u2),y=4*(q.v2+q.u1),C=4*(q.v2+q.u2),q.cUL=E[u+3]<<24&m|E[u]<<16&n|E[u+1]<<8&A|E[u+2]&B,q.cUR=E[x+3]<<24&m|E[x]<<16&n|E[x+1]<<8&A|E[x+2]&B,q.cLL=E[y+3]<<24&m|E[y]<<16&n|E[y+1]<<8&A|E[y+2]&B,q.cLR=E[C+3]<<24&m|E[C]<<16&n|E[C+1]<<8&A|
E[C+2]&B,q.r=q.ul*((q.cUL&n)>>16)+q.ll*((q.cLL&n)>>16)+q.ur*((q.cUR&n)>>16)+q.lr*((q.cLR&n)>>16)<<G&n,q.g=q.ul*(q.cUL&A)+q.ll*(q.cLL&A)+q.ur*(q.cUR&A)+q.lr*(q.cLR&A)>>>D&A,q.b=q.ul*(q.cUL&B)+q.ll*(q.cLL&B)+q.ur*(q.cUR&B)+q.lr*(q.cLR&B)>>>D,q.a=q.ul*((q.cUL&m)>>>24)+q.ll*((q.cLL&m)>>>24)+q.ur*((q.cUR&m)>>>24)+q.lr*((q.cLR&m)>>>24)<<H&m,v=d(v,q.a|q.r|q.g|q.b),h[l]=(v&n)>>>16,h[l+1]=(v&A)>>>8,h[l+2]=v&B,h[l+3]=(v&m)>>>24,q.sX+=f;b+=k;q.srcYOffset+=g}}};e.loadFont=function(a,b){if(a===h)throw"font name required in loadFont.";
if(-1===a.indexOf(".svg"))return b===h&&(b=ba.size),PFont.get(a,b);var c=e.loadGlyphs(a);return{name:a,css:"12px sans-serif",glyph:!0,units_per_em:c.units_per_em,horiz_adv_x:1/c.units_per_em*c.horiz_adv_x,ascent:c.ascent,descent:c.descent,width:function(b){for(var c=0,d=b.length,f=0;f<d;f++)try{c+=parseFloat(e.glyphLook(e.glyphTable[a],b[f]).horiz_adv_x)}catch(g){M.debug(g)}return c/e.glyphTable[a].units_per_em}}};e.createFont=function(a,b){return e.loadFont(a,b)};e.textFont=function(a,b){b!==h&&
(a.glyph||(a=PFont.get(a.name,b)),Na=b);ba=a;zb=ba.name;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textSize=function(a){ba=PFont.get(zb,a);Na=a;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textAscent=function(){return Xa};e.textDescent=function(){return Ma};e.textLeading=function(a){Aa=a};e.textAlign=function(a,b){nb=a;Wa=b||c.BASELINE};E.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;g.font=ba.css;for(c=
0;c<d;++c)b=Math.max(b,ba.measureTextWidth(a[c]));return b|0};B.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;Ba===h&&(Ba=p.createElement("canvas"));var e=Ba.getContext("2d");e.font=ba.css;for(c=0;c<d;++c)b=Math.max(b,e.measureText(a[c]).width);return b|0};e.glyphLook=function(a,b){try{switch(b){case "1":return a.one;case "2":return a.two;case "3":return a.three;case "4":return a.four;case "5":return a.five;case "6":return a.six;case "7":return a.seven;case "8":return a.eight;
case "9":return a.nine;case "0":return a.zero;case " ":return a.space;case "$":return a.dollar;case "!":return a.exclam;case '"':return a.quotedbl;case "#":return a.numbersign;case "%":return a.percent;case "&":return a.ampersand;case "'":return a.quotesingle;case "(":return a.parenleft;case ")":return a.parenright;case "*":return a.asterisk;case "+":return a.plus;case ",":return a.comma;case "-":return a.hyphen;case ".":return a.period;case "/":return a.slash;case "_":return a.underscore;case ":":return a.colon;
case ";":return a.semicolon;case "<":return a.less;case "=":return a.equal;case ">":return a.greater;case "?":return a.question;case "@":return a.at;case "[":return a.bracketleft;case "\\":return a.backslash;case "]":return a.bracketright;case "^":return a.asciicircum;case "`":return a.grave;case "{":return a.braceleft;case "|":return a.bar;case "}":return a.braceright;case "~":return a.asciitilde;default:return a[b]}}catch(c){M.debug(c)}};E.prototype.text$line=function(a,b,d,f,h){f=f=0;if(ba.glyph){f=
e.glyphTable[zb];g.save();g.translate(b,d+Na);h!==c.RIGHT&&h!==c.CENTER||f.width(a);b=1/f.units_per_em*Na;g.scale(b,b);b=0;for(d=a.length;b<d;b++)try{e.glyphLook(f,a[b]).draw()}catch(k){M.debug(k)}Sa()}else if(a&&"fillText"in g){N&&(g.fillStyle=e.color.toString(La),N=!1);if(h===c.RIGHT||h===c.CENTER)f=ba.measureTextWidth(a),f=h===c.RIGHT?-f:-f/2;g.fillText(a,b+f,d)}};B.prototype.text$line=function(a,b,d,e,f){Ba===h&&(Ba=p.createElement("canvas"));var k=g;g=Ba.getContext("2d");g.font=ba.css;var l=
ba.measureTextWidth(a);Ba.width=l;Ba.height=Na;g=Ba.getContext("2d");g.font=ba.css;g.textBaseline="top";E.prototype.text$line(a,0,0,0,c.LEFT);a=Ba.width/Ba.height;g=k;g.bindTexture(g.TEXTURE_2D,Tc);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,Ba);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE);
k=0;f===c.RIGHT?k=-l:f===c.CENTER&&(k=-l/2);f=new I;l=0.5*Na;f.translate(b+k-l/2,d-l,e);f.scale(-a*l,-l,l);f.translate(-1,-1,-1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();g.useProgram(J);Z("aVertex2d",J,"aVertex",3,Cc);Z("aTextureCoord2d",J,"aTextureCoord",2,Dc);Y("uSampler2d",J,"uSampler",[0]);Y("uIsDrawingText2d",J,"uIsDrawingText",!0);U("uModel2d",J,"uModel",!1,f.array());U("uView2d",J,"uView",!1,b.array());T("uColor2d",J,"uColor",ka);g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,
Ec);g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0)};e.text=function(){ic!==c.SHAPE&&(3===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))};e.textMode=function(a){ic=a};e.loadGlyphs=function(a){var b,
c,d,f,k,m,n,q,r,t,v,u,x=function(a,b){var c=0,d=[],e,f=RegExp(a,"g");for(e=d[c]=f.exec(b);e;)c++,e=d[c]=f.exec(b);return d},y=function(a){var e=x("[A-Za-z][0-9\\- ]+|Z",a);u="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";q=a=m=k=f=d=c=b=0;r="";t=e.length-1;for(var h=0;h<t;h++){var l=e[h][0];a=x("[0-9\\-]+",l);switch(l[0]){case "M":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);u+="curContext.moveTo("+b+","+-c+");";break;case "L":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);
u+="curContext.lineTo("+b+","+-c+");";break;case "H":b=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "V":c=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "T":k=parseFloat(a[0][0]);m=parseFloat(a[1][0]);"Q"===r||"T"===r?(a=Math.sqrt(Math.pow(b-d,2)+Math.pow(f-c,2)),q=Math.PI+Math.atan2(d-b,f-c),d=b+Math.sin(q)*a,f=c+Math.cos(q)*a):(d=b,f=c);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Q":d=parseFloat(a[0][0]);f=parseFloat(a[1][0]);
k=parseFloat(a[2][0]);m=parseFloat(a[3][0]);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Z":u+="curContext.closePath();"}r=l[0]}u+="afterPathDraw();";u+="curContext.translate("+v+",0);";u+="}}";return(new Function("beforePathDraw","afterPathDraw",u))(function(){g.save();return ha.$ensureContext()},function(){wa();za();Sa()})},A=function(b){var c=b.getElementsByTagName("font");e.glyphTable[a].horiz_adv_x=c[0].getAttribute("horiz-adv-x");c=b.getElementsByTagName("font-face")[0];
e.glyphTable[a].units_per_em=parseFloat(c.getAttribute("units-per-em"));e.glyphTable[a].ascent=parseFloat(c.getAttribute("ascent"));e.glyphTable[a].descent=parseFloat(c.getAttribute("descent"));b=b.getElementsByTagName("glyph");for(var c=b.length,d=0;d<c;d++){var f=b[d].getAttribute("unicode"),g=b[d].getAttribute("glyph-name");v=b[d].getAttribute("horiz-adv-x");null===v&&(v=e.glyphTable[a].horiz_adv_x);n=b[d].getAttribute("d");n!==h&&(u=y(n),e.glyphTable[a][g]={name:g,unicode:f,horiz_adv_x:v,draw:u.draw})}};
e.glyphTable[a]={};(function(){var b;try{b=p.implementation.createDocument("","",null)}catch(c){M.debug(c.message);return}try{b.async=!1,b.load(a),A(b.getElementsByTagName("svg")[0])}catch(d){M.debug(d);try{var e=new l.XMLHttpRequest;e.open("GET",a,!1);e.send(null);A(e.responseXML.documentElement)}catch(f){M.debug(d)}}})(a);return e.glyphTable[a]};e.param=function(a){var b="data-processing-"+a;if(S.hasAttribute(b))return S.getAttribute(b);for(var b=0,c=S.childNodes.length;b<c;++b){var d=S.childNodes.item(b);
if(1===d.nodeType&&"param"===d.tagName.toLowerCase()&&d.getAttribute("name")===a)return d.getAttribute("value")}return da.params.hasOwnProperty(a)?da.params[a]:null};F.prototype.translate=H("translate");F.prototype.transform=H("transform");F.prototype.scale=H("scale");F.prototype.pushMatrix=H("pushMatrix");F.prototype.popMatrix=H("popMatrix");F.prototype.resetMatrix=H("resetMatrix");F.prototype.applyMatrix=H("applyMatrix");F.prototype.rotate=H("rotate");F.prototype.rotateZ=H("rotateZ");F.prototype.shearX=
H("shearX");F.prototype.shearY=H("shearY");F.prototype.redraw=H("redraw");F.prototype.toImageData=H("toImageData");F.prototype.ambientLight=H("ambientLight");F.prototype.directionalLight=H("directionalLight");F.prototype.lightFalloff=H("lightFalloff");F.prototype.lightSpecular=H("lightSpecular");F.prototype.pointLight=H("pointLight");F.prototype.noLights=H("noLights");F.prototype.spotLight=H("spotLight");F.prototype.beginCamera=H("beginCamera");F.prototype.endCamera=H("endCamera");F.prototype.frustum=
H("frustum");F.prototype.box=H("box");F.prototype.sphere=H("sphere");F.prototype.ambient=H("ambient");F.prototype.emissive=H("emissive");F.prototype.shininess=H("shininess");F.prototype.specular=H("specular");F.prototype.fill=H("fill");F.prototype.stroke=H("stroke");F.prototype.strokeWeight=H("strokeWeight");F.prototype.smooth=H("smooth");F.prototype.noSmooth=H("noSmooth");F.prototype.point=H("point");F.prototype.vertex=H("vertex");F.prototype.endShape=H("endShape");F.prototype.bezierVertex=H("bezierVertex");
F.prototype.curveVertex=H("curveVertex");F.prototype.curve=H("curve");F.prototype.line=H("line");F.prototype.bezier=H("bezier");F.prototype.rect=H("rect");F.prototype.ellipse=H("ellipse");F.prototype.background=H("background");F.prototype.image=H("image");F.prototype.textWidth=H("textWidth");F.prototype.text$line=H("text$line");F.prototype.$ensureContext=H("$ensureContext");F.prototype.$newPMatrix=H("$newPMatrix");F.prototype.size=function(a,b,d){Ka(d===c.WEBGL?"3D":"2D");e.size(a,b,d)};F.prototype.$init=
r;E.prototype.$init=function(){e.size(e.width,e.height);g.lineCap="round";e.noSmooth();e.disableContextMenu()};B.prototype.$init=function(){e.use3DContext=!0;e.disableContextMenu()};W.prototype.$ensureContext=function(){return g};S.getAttribute("tabindex")||S.setAttribute("tabindex",0);if(Qb)da=new M.Sketch,Ka(),e.size=function(a,b,d){d&&d===c.WEBGL?Ka("3D"):Ka("2D");e.size(a,b,d)};else{da=k instanceof M.Sketch?k:"function"===typeof k?new M.Sketch(k):k?M.compile(k):new M.Sketch(function(){});e.externals.sketch=
da;Ka();S.onfocus=function(){e.focused=!0};S.onblur=function(){e.focused=!1;da.options.globalKeyEvents||(e.__keyPressed=!1,hb=[],ob=null)};da.options.pauseOnBlur&&(Ia(l,"focus",function(){Da&&e.loop()}),Ia(l,"blur",function(){Da&&eb&&(e.noLoop(),Da=!0);e.__keyPressed=!1;hb=[];ob=null}));var Jc=da.options.globalKeyEvents?l:S;Ia(Jc,"keydown",rc);Ia(Jc,"keypress",Pb);Ia(Jc,"keyup",bc);for(var Yb in M.lib)M.lib.hasOwnProperty(Yb)&&(M.lib[Yb].hasOwnProperty("attach")?M.lib[Yb].attach(e):M.lib[Yb]instanceof
Function&&M.lib[Yb].call(this));var ld=function(a){if(da.imageCache.pending||PFont.preloading.pending(100))l.setTimeout(function(){ld(a)},100);else{if(l.opera){var b,c,d=da.imageCache.operaCache;for(b in d)d.hasOwnProperty(b)&&(c=d[b],null!==c&&p.body.removeChild(c),delete d[b])}da.attach(a,n);da.onLoad(a);a.setup&&(a.setup(),a.resetMatrix(),da.onSetup());fb();a.draw&&(Da?a.loop():a.redraw())}};this.externals.canvas.id!==h&&this.externals.canvas.id.length||(this.externals.canvas.id="__processing"+
q.length);Zb[this.externals.canvas.id]=q.length;q.push(this);ld(e)}};M.debug=function(){return"console"in l?function(a){l.console.log("Processing.js: "+a)}:r}();M.prototype=n;M.instances=q;M.getInstanceById=function(a){return q[Zb[a]]};(function(a){function b(a){return function(){throw"Processing.js does not support "+a+".";}}for(var c="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),
d=c.length,f,h;d--;)f=c[d],h=f.replace("()",""),a[h]=b(f)})(n);return M}},{}],27:[function(D,x,Q){var k={virtEquals:D("./Helpers/virtEquals"),virtHashCode:D("./Helpers/virtHashCode"),ObjectIterator:D("./Helpers/ObjectIterator"),PConstants:D("./Helpers/PConstants"),ArrayList:D("./Objects/ArrayList"),HashMap:D("./Objects/HashMap"),PVector:D("./Objects/PVector"),PFont:D("./Objects/PFont"),Char:D("./Objects/Char"),XMLAttribute:D("./Objects/XMLAttribute"),XMLElement:D("./Objects/XMLElement"),PMatrix2D:D("./Objects/PMatrix2D"),
PMatrix3D:D("./Objects/PMatrix3D"),PShape:D("./Objects/PShape"),colors:D("./Objects/webcolors"),PShapeSVG:D("./Objects/PShapeSVG"),CommonFunctions:D("./P5Functions/commonFunctions"),defaultScope:D("./Helpers/defaultScope"),Processing:D("./Processing"),setupParser:D("./Parser/Parser"),finalize:D("./Helpers/finalizeProcessing")};k.extend={withMath:D("./P5Functions/Math.js"),withProxyFunctions:D("./P5Functions/JavaProxyFunctions")(k.virtHashCode,k.virtEquals),withTouch:D("./P5Functions/touchmouse"),
withCommonFunctions:k.CommonFunctions.withCommonFunctions};x.exports=function(h,m){var n=function(){},a=k.virtEquals,b=k.virtHashCode,d=k.PConstants,f=k.CommonFunctions,l=k.ObjectIterator,p=k.Char,r=k.XMLAttribute(),c=k.ArrayList({virtHashCode:b,virtEquals:a}),a=k.HashMap({virtHashCode:b,virtEquals:a}),b=k.PVector({PConstants:d}),x=k.PFont({Browser:h,noop:n}),r=k.XMLElement({Browser:h,XMLAttribute:r}),Q=k.PMatrix2D({p:f}),G=k.PMatrix3D({p:f}),Q=k.PShape({PConstants:d,PMatrix2D:Q,PMatrix3D:G}),f=k.PShapeSVG({CommonFunctions:f,
PConstants:d,PShape:Q,XMLElement:r,colors:k.colors}),d=k.defaultScope({ArrayList:c,HashMap:a,PVector:b,PFont:x,PShapeSVG:f,ObjectIterator:l,PConstants:d,Char:p,XMLElement:r,XML:r}),l=k.Processing({defaultScope:d,Browser:h,extend:k.extend,noop:n}),l=k.setupParser(l,{Browser:h,aFunctions:m,defaultScope:d});return l=k.finalize(l,{version:D("../package.json").version,isDomPresent:h.isDomPresent,window:h.window,document:h.document,noop:n})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,
"./Helpers/defaultScope":5,"./Helpers/finalizeProcessing":6,"./Helpers/virtEquals":7,"./Helpers/virtHashCode":8,"./Objects/ArrayList":9,"./Objects/Char":10,"./Objects/HashMap":11,"./Objects/PFont":12,"./Objects/PMatrix2D":13,"./Objects/PMatrix3D":14,"./Objects/PShape":15,"./Objects/PShapeSVG":16,"./Objects/PVector":17,"./Objects/XMLAttribute":18,"./Objects/XMLElement":19,"./Objects/webcolors":20,"./P5Functions/JavaProxyFunctions":21,"./P5Functions/Math.js":22,"./P5Functions/commonFunctions":23,"./P5Functions/touchmouse":24,
"./Parser/Parser":25,"./Processing":26}]},{},[1]);

;(function(){
var g, aa = this;
function p(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
function ca(a) {
  return "function" == p(a);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
var fa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function ga(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
Math.random();
function ia(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function ja(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
function la(a) {
  var b = arguments.length;
  if (1 == b && "array" == p(arguments[0])) {
    return la.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
;function na(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = na.prototype;
g.Pa = "";
g.set = function(a) {
  this.Pa = "" + a;
};
g.append = function(a, b, c) {
  this.Pa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Pa += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.Pa = "";
};
g.toString = function() {
  return this.Pa;
};
var oa = Array.prototype, pa = oa.indexOf ? function(a, b, c) {
  return oa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
function qa(a, b) {
  a.sort(b || ra);
}
function ua(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || ra;
  qa(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function ra(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var va;
if ("undefined" === typeof xa) {
  var xa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
if ("undefined" === typeof ya) {
  var ya = function() {
    throw Error("No *print-err-fn* fn set for evaluation environment");
  }
}
var za = null;
if ("undefined" === typeof Aa) {
  var Aa = null
}
function Ca() {
  return new q(null, 5, [Da, !0, Ea, !0, Fa, !1, Ga, !1, Ia, null], null);
}
function u(a) {
  return null != a && !1 !== a;
}
function Ja(a) {
  return null == a;
}
function Ka(a) {
  return a instanceof Array;
}
function La(a) {
  return null == a ? !0 : !1 === a ? !0 : !1;
}
function w(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function y(a, b) {
  var c = null == b ? null : b.constructor, c = u(u(c) ? c.Lb : c) ? c.ob : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ma(a) {
  var b = a.ob;
  return u(b) ? b : "" + z(a);
}
var Na = "undefined" !== typeof Symbol && "function" === p(Symbol) ? Symbol.iterator : "@@iterator";
function Oa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Qa = {}, Ra = function Ra(b) {
  if (null != b && null != b.U) {
    return b.U(b);
  }
  var c = Ra[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Ra._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("ICounted.-count", b);
}, Sa = function Sa(b) {
  if (null != b && null != b.V) {
    return b.V(b);
  }
  var c = Sa[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Sa._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IEmptyableCollection.-empty", b);
}, Ta = function Ta(b, c) {
  if (null != b && null != b.P) {
    return b.P(b, c);
  }
  var d = Ta[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Ta._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("ICollection.-conj", b);
}, Va = {}, B = function B() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return B.a(arguments[0], arguments[1]);
    case 3:
      return B.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
B.a = function(a, b) {
  if (null != a && null != a.N) {
    return a.N(a, b);
  }
  var c = B[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = B._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw y("IIndexed.-nth", a);
};
B.f = function(a, b, c) {
  if (null != a && null != a.ja) {
    return a.ja(a, b, c);
  }
  var d = B[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = B._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw y("IIndexed.-nth", a);
};
B.v = 3;
var Wa = function Wa(b) {
  if (null != b && null != b.W) {
    return b.W(b);
  }
  var c = Wa[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Wa._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("ISeq.-first", b);
}, Xa = function Xa(b) {
  if (null != b && null != b.fa) {
    return b.fa(b);
  }
  var c = Xa[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Xa._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("ISeq.-rest", b);
}, Ya = {}, Za = {}, $a = function $a() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return $a.a(arguments[0], arguments[1]);
    case 3:
      return $a.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
$a.a = function(a, b) {
  if (null != a && null != a.L) {
    return a.L(a, b);
  }
  var c = $a[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = $a._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw y("ILookup.-lookup", a);
};
$a.f = function(a, b, c) {
  if (null != a && null != a.H) {
    return a.H(a, b, c);
  }
  var d = $a[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = $a._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw y("ILookup.-lookup", a);
};
$a.v = 3;
var bb = function bb(b, c) {
  if (null != b && null != b.tb) {
    return b.tb(b, c);
  }
  var d = bb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = bb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("IAssociative.-contains-key?", b);
}, cb = function cb(b, c, d) {
  if (null != b && null != b.Za) {
    return b.Za(b, c, d);
  }
  var e = cb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = cb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw y("IAssociative.-assoc", b);
}, db = {}, eb = function eb(b, c) {
  if (null != b && null != b.xb) {
    return b.xb(b, c);
  }
  var d = eb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = eb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("IMap.-dissoc", b);
}, fb = {}, gb = function gb(b) {
  if (null != b && null != b.yb) {
    return b.yb();
  }
  var c = gb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = gb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IMapEntry.-key", b);
}, ib = function ib(b) {
  if (null != b && null != b.zb) {
    return b.zb();
  }
  var c = ib[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = ib._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IMapEntry.-val", b);
}, jb = {}, kb = function kb(b, c) {
  if (null != b && null != b.Hb) {
    return b.Hb(0, c);
  }
  var d = kb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = kb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("ISet.-disjoin", b);
}, lb = {}, mb = function mb(b, c, d) {
  if (null != b && null != b.Ab) {
    return b.Ab(b, c, d);
  }
  var e = mb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = mb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw y("IVector.-assoc-n", b);
}, nb = function nb(b) {
  if (null != b && null != b.Rb) {
    return b.state;
  }
  var c = nb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = nb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IDeref.-deref", b);
}, ob = {}, pb = function pb(b) {
  if (null != b && null != b.M) {
    return b.M(b);
  }
  var c = pb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = pb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IMeta.-meta", b);
}, rb = function rb(b, c) {
  if (null != b && null != b.O) {
    return b.O(b, c);
  }
  var d = rb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = rb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("IWithMeta.-with-meta", b);
}, sb = {}, tb = function tb() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return tb.a(arguments[0], arguments[1]);
    case 3:
      return tb.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
tb.a = function(a, b) {
  if (null != a && null != a.X) {
    return a.X(a, b);
  }
  var c = tb[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = tb._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw y("IReduce.-reduce", a);
};
tb.f = function(a, b, c) {
  if (null != a && null != a.Y) {
    return a.Y(a, b, c);
  }
  var d = tb[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = tb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw y("IReduce.-reduce", a);
};
tb.v = 3;
var ub = function ub(b, c) {
  if (null != b && null != b.u) {
    return b.u(b, c);
  }
  var d = ub[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = ub._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("IEquiv.-equiv", b);
}, vb = function vb(b) {
  if (null != b && null != b.K) {
    return b.K(b);
  }
  var c = vb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = vb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IHash.-hash", b);
}, wb = {}, xb = function xb(b) {
  if (null != b && null != b.S) {
    return b.S(b);
  }
  var c = xb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = xb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("ISeqable.-seq", b);
}, yb = {}, zb = {}, Ab = {}, Bb = function Bb(b) {
  if (null != b && null != b.nb) {
    return b.nb(b);
  }
  var c = Bb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Bb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IReversible.-rseq", b);
}, E = function E(b, c) {
  if (null != b && null != b.Kb) {
    return b.Kb(0, c);
  }
  var d = E[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = E._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("IWriter.-write", b);
}, Cb = function Cb(b, c, d) {
  if (null != b && null != b.J) {
    return b.J(b, c, d);
  }
  var e = Cb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Cb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw y("IPrintWithWriter.-pr-writer", b);
}, Db = function Db(b, c, d) {
  if (null != b && null != b.Jb) {
    return b.Jb(0, c, d);
  }
  var e = Db[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Db._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw y("IWatchable.-notify-watches", b);
}, Fb = function Fb(b) {
  if (null != b && null != b.Va) {
    return b.Va(b);
  }
  var c = Fb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Fb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IEditableCollection.-as-transient", b);
}, Gb = function Gb(b, c) {
  if (null != b && null != b.Qa) {
    return b.Qa(b, c);
  }
  var d = Gb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Gb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("ITransientCollection.-conj!", b);
}, Hb = function Hb(b) {
  if (null != b && null != b.Wa) {
    return b.Wa(b);
  }
  var c = Hb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Hb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("ITransientCollection.-persistent!", b);
}, Ib = function Ib(b, c, d) {
  if (null != b && null != b.ab) {
    return b.ab(b, c, d);
  }
  var e = Ib[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Ib._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw y("ITransientAssociative.-assoc!", b);
}, Jb = function Jb(b, c, d) {
  if (null != b && null != b.Ib) {
    return b.Ib(0, c, d);
  }
  var e = Jb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Jb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw y("ITransientVector.-assoc-n!", b);
}, Kb = {}, Lb = function Lb(b, c) {
  if (null != b && null != b.Ua) {
    return b.Ua(b, c);
  }
  var d = Lb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Lb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("IComparable.-compare", b);
}, Ob = function Ob(b) {
  if (null != b && null != b.Fb) {
    return b.Fb();
  }
  var c = Ob[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Ob._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IChunk.-drop-first", b);
}, Pb = function Pb(b) {
  if (null != b && null != b.vb) {
    return b.vb(b);
  }
  var c = Pb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Pb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IChunkedSeq.-chunked-first", b);
}, Qb = function Qb(b) {
  if (null != b && null != b.wb) {
    return b.wb(b);
  }
  var c = Qb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Qb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IChunkedSeq.-chunked-rest", b);
}, Rb = function Rb(b) {
  if (null != b && null != b.ub) {
    return b.ub(b);
  }
  var c = Rb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Rb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IChunkedNext.-chunked-next", b);
}, Sb = function Sb(b, c) {
  if (null != b && null != b.$b) {
    return b.$b(b, c);
  }
  var d = Sb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Sb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw y("IReset.-reset!", b);
}, Tb = function Tb() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Tb.a(arguments[0], arguments[1]);
    case 3:
      return Tb.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Tb.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Tb.I(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
Tb.a = function(a, b) {
  if (null != a && null != a.bc) {
    return a.bc(a, b);
  }
  var c = Tb[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = Tb._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw y("ISwap.-swap!", a);
};
Tb.f = function(a, b, c) {
  if (null != a && null != a.cc) {
    return a.cc(a, b, c);
  }
  var d = Tb[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = Tb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw y("ISwap.-swap!", a);
};
Tb.D = function(a, b, c, d) {
  if (null != a && null != a.dc) {
    return a.dc(a, b, c, d);
  }
  var e = Tb[p(null == a ? null : a)];
  if (null != e) {
    return e.D ? e.D(a, b, c, d) : e.call(null, a, b, c, d);
  }
  e = Tb._;
  if (null != e) {
    return e.D ? e.D(a, b, c, d) : e.call(null, a, b, c, d);
  }
  throw y("ISwap.-swap!", a);
};
Tb.I = function(a, b, c, d, e) {
  if (null != a && null != a.ec) {
    return a.ec(a, b, c, d, e);
  }
  var f = Tb[p(null == a ? null : a)];
  if (null != f) {
    return f.I ? f.I(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  f = Tb._;
  if (null != f) {
    return f.I ? f.I(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  throw y("ISwap.-swap!", a);
};
Tb.v = 5;
var Ub = function Ub(b) {
  if (null != b && null != b.Ia) {
    return b.Ia(b);
  }
  var c = Ub[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Ub._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw y("IIterable.-iterator", b);
};
function Vb(a) {
  this.ic = a;
  this.h = 1073741824;
  this.B = 0;
}
Vb.prototype.Kb = function(a, b) {
  return this.ic.append(b);
};
function Wb(a) {
  var b = new na;
  a.J(null, new Vb(b), Ca());
  return "" + z(b);
}
var Xb = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Yb(a) {
  a = Xb(a | 0, -862048943);
  return Xb(a << 15 | a >>> -15, 461845907);
}
function Zb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Xb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function $b(a, b) {
  var c = (a | 0) ^ b, c = Xb(c ^ c >>> 16, -2048144789), c = Xb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function ac(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Zb(c, Yb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Yb(a.charCodeAt(a.length - 1)) : b;
  return $b(b, Xb(2, a.length));
}
var bc = {}, cc = 0;
function dc(a) {
  255 < cc && (bc = {}, cc = 0);
  var b = bc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Xb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    bc[a] = b;
    cc += 1;
  }
  return a = b;
}
function ec(a) {
  null != a && (a.h & 4194304 || a.mc) ? a = a.K(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = dc(a), 0 !== a && (a = Yb(a), a = Zb(0, a), a = $b(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : vb(a);
  return a;
}
function gc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function hc(a, b) {
  if (a.ra === b.ra) {
    return 0;
  }
  var c = La(a.ba);
  if (u(c ? b.ba : c)) {
    return -1;
  }
  if (u(a.ba)) {
    if (La(b.ba)) {
      return 1;
    }
    c = ra(a.ba, b.ba);
    return 0 === c ? ra(a.name, b.name) : c;
  }
  return ra(a.name, b.name);
}
function ic(a, b, c, d, e) {
  this.ba = a;
  this.name = b;
  this.ra = c;
  this.Ta = d;
  this.ca = e;
  this.h = 2154168321;
  this.B = 4096;
}
g = ic.prototype;
g.toString = function() {
  return this.ra;
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.u = function(a, b) {
  return b instanceof ic ? this.ra === b.ra : !1;
};
g.call = function() {
  function a(a, b, c) {
    return jc ? jc(b, this, c) : kc.call(null, b, this, c);
  }
  function b(a, b) {
    return F ? F(b, this) : kc.call(null, b, this);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, 0, e);
      case 3:
        return a.call(this, 0, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return F ? F(a, this) : kc.call(null, a, this);
};
g.a = function(a, b) {
  return jc ? jc(a, this, b) : kc.call(null, a, this, b);
};
g.M = function() {
  return this.ca;
};
g.O = function(a, b) {
  return new ic(this.ba, this.name, this.ra, this.Ta, b);
};
g.K = function() {
  var a = this.Ta;
  return null != a ? a : this.Ta = a = gc(ac(this.name), dc(this.ba));
};
g.J = function(a, b) {
  return E(b, this.ra);
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.h & 8388608 || a.ac)) {
    return a.S(null);
  }
  if (Ka(a) || "string" === typeof a) {
    return 0 === a.length ? null : new I(a, 0);
  }
  if (w(wb, a)) {
    return xb(a);
  }
  throw Error([z(a), z(" is not ISeqable")].join(""));
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.h & 64 || a.Z)) {
    return a.W(null);
  }
  a = G(a);
  return null == a ? null : Wa(a);
}
function lc(a) {
  return null != a ? null != a && (a.h & 64 || a.Z) ? a.fa(null) : (a = G(a)) ? Xa(a) : K : K;
}
function L(a) {
  return null == a ? null : null != a && (a.h & 128 || a.mb) ? a.da(null) : G(lc(a));
}
var M = function M() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return M.b(arguments[0]);
    case 2:
      return M.a(arguments[0], arguments[1]);
    default:
      return M.l(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
M.b = function() {
  return !0;
};
M.a = function(a, b) {
  return null == a ? null == b : a === b || ub(a, b);
};
M.l = function(a, b, c) {
  for (;;) {
    if (M.a(a, b)) {
      if (L(c)) {
        a = b, b = J(c), c = L(c);
      } else {
        return M.a(b, J(c));
      }
    } else {
      return !1;
    }
  }
};
M.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return M.l(b, a, c);
};
M.v = 2;
function mc(a) {
  this.A = a;
}
mc.prototype.next = function() {
  if (null != this.A) {
    var a = J(this.A);
    this.A = L(this.A);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function nc(a) {
  return new mc(G(a));
}
function oc(a, b) {
  var c = Yb(a), c = Zb(0, c);
  return $b(c, b);
}
function pc(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = Xb(31, c) + ec(J(a)) | 0, a = L(a);
    } else {
      return oc(c, b);
    }
  }
}
var qc = oc(1, 0);
function rc(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + ec(J(a)) | 0, a = L(a);
    } else {
      return oc(c, b);
    }
  }
}
var tc = oc(0, 0);
Qa["null"] = !0;
Ra["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.$a = !0;
Date.prototype.Ua = function(a, b) {
  if (b instanceof Date) {
    return ra(this.valueOf(), b.valueOf());
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
ub.number = function(a, b) {
  return a === b;
};
ob["function"] = !0;
pb["function"] = function() {
  return null;
};
vb._ = function(a) {
  return a[da] || (a[da] = ++ea);
};
function uc(a) {
  return nb(a);
}
function vc(a, b) {
  var c = Ra(a);
  if (0 === c) {
    return b.o ? b.o() : b.call(null);
  }
  for (var d = B.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function wc(a, b, c) {
  var d = Ra(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = B.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function xc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.o ? b.o() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function yc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function zc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function Ac(a) {
  return null != a ? a.h & 2 || a.Qb ? !0 : a.h ? !1 : w(Qa, a) : w(Qa, a);
}
function Bc(a) {
  return null != a ? a.h & 16 || a.Gb ? !0 : a.h ? !1 : w(Va, a) : w(Va, a);
}
function Cc(a, b) {
  this.c = a;
  this.j = b;
}
Cc.prototype.ga = function() {
  return this.j < this.c.length;
};
Cc.prototype.next = function() {
  var a = this.c[this.j];
  this.j += 1;
  return a;
};
function I(a, b) {
  this.c = a;
  this.j = b;
  this.h = 166199550;
  this.B = 8192;
}
g = I.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.N = function(a, b) {
  var c = b + this.j;
  return c < this.c.length ? this.c[c] : null;
};
g.ja = function(a, b, c) {
  a = b + this.j;
  return a < this.c.length ? this.c[a] : c;
};
g.Ia = function() {
  return new Cc(this.c, this.j);
};
g.da = function() {
  return this.j + 1 < this.c.length ? new I(this.c, this.j + 1) : null;
};
g.U = function() {
  var a = this.c.length - this.j;
  return 0 > a ? 0 : a;
};
g.nb = function() {
  var a = Ra(this);
  return 0 < a ? new Dc(this, a - 1, null) : null;
};
g.K = function() {
  return pc(this);
};
g.u = function(a, b) {
  return Ec.a ? Ec.a(this, b) : Ec.call(null, this, b);
};
g.V = function() {
  return K;
};
g.X = function(a, b) {
  return zc(this.c, b, this.c[this.j], this.j + 1);
};
g.Y = function(a, b, c) {
  return zc(this.c, b, c, this.j);
};
g.W = function() {
  return this.c[this.j];
};
g.fa = function() {
  return this.j + 1 < this.c.length ? new I(this.c, this.j + 1) : K;
};
g.S = function() {
  return this.j < this.c.length ? this : null;
};
g.P = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
I.prototype[Na] = function() {
  return nc(this);
};
function Fc(a, b) {
  return b < a.length ? new I(a, b) : null;
}
function Gc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return Fc(arguments[0], 0);
    case 2:
      return Fc(arguments[0], arguments[1]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function Dc(a, b, c) {
  this.kb = a;
  this.j = b;
  this.m = c;
  this.h = 32374990;
  this.B = 8192;
}
g = Dc.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.da = function() {
  return 0 < this.j ? new Dc(this.kb, this.j - 1, null) : null;
};
g.U = function() {
  return this.j + 1;
};
g.K = function() {
  return pc(this);
};
g.u = function(a, b) {
  return Ec.a ? Ec.a(this, b) : Ec.call(null, this, b);
};
g.V = function() {
  var a = this.m;
  return Hc.a ? Hc.a(K, a) : Hc.call(null, K, a);
};
g.X = function(a, b) {
  return Ic ? Ic(b, this) : Jc.call(null, b, this);
};
g.Y = function(a, b, c) {
  return Kc ? Kc(b, c, this) : Jc.call(null, b, c, this);
};
g.W = function() {
  return B.a(this.kb, this.j);
};
g.fa = function() {
  return 0 < this.j ? new Dc(this.kb, this.j - 1, null) : K;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Dc(this.kb, this.j, b);
};
g.P = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
Dc.prototype[Na] = function() {
  return nc(this);
};
ub._ = function(a, b) {
  return a === b;
};
var Lc = function Lc() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return Lc.o();
    case 1:
      return Lc.b(arguments[0]);
    case 2:
      return Lc.a(arguments[0], arguments[1]);
    default:
      return Lc.l(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Lc.o = function() {
  return Mc;
};
Lc.b = function(a) {
  return a;
};
Lc.a = function(a, b) {
  return null != a ? Ta(a, b) : Ta(K, b);
};
Lc.l = function(a, b, c) {
  for (;;) {
    if (u(c)) {
      a = Lc.a(a, b), b = J(c), c = L(c);
    } else {
      return Lc.a(a, b);
    }
  }
};
Lc.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Lc.l(b, a, c);
};
Lc.v = 2;
function P(a) {
  if (null != a) {
    if (null != a && (a.h & 2 || a.Qb)) {
      a = a.U(null);
    } else {
      if (Ka(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (null != a && (a.h & 8388608 || a.ac)) {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (Ac(a)) {
                  a = b + Ra(a);
                  break a;
                }
                a = L(a);
                b += 1;
              }
            }
          } else {
            a = Ra(a);
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Nc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return G(a) ? J(a) : c;
    }
    if (Bc(a)) {
      return B.f(a, b, c);
    }
    if (G(a)) {
      var d = L(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Oc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (null != a && (a.h & 16 || a.Gb)) {
    return a.N(null, b);
  }
  if (Ka(a)) {
    return b < a.length ? a[b] : null;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : null;
  }
  if (null != a && (a.h & 64 || a.Z)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (G(c)) {
            c = J(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Bc(c)) {
          c = B.a(c, d);
          break a;
        }
        if (G(c)) {
          c = L(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  if (w(Va, a)) {
    return B.a(a, b);
  }
  throw Error([z("nth not supported on this type "), z(Ma(null == a ? null : a.constructor))].join(""));
}
function Q(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (null != a && (a.h & 16 || a.Gb)) {
    return a.ja(null, b, null);
  }
  if (Ka(a)) {
    return b < a.length ? a[b] : null;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : null;
  }
  if (null != a && (a.h & 64 || a.Z)) {
    return Nc(a, b);
  }
  if (w(Va, a)) {
    return B.a(a, b);
  }
  throw Error([z("nth not supported on this type "), z(Ma(null == a ? null : a.constructor))].join(""));
}
function kc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return F(arguments[0], arguments[1]);
    case 3:
      return jc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function F(a, b) {
  return null == a ? null : null != a && (a.h & 256 || a.Ub) ? a.L(null, b) : Ka(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : w(Za, a) ? $a.a(a, b) : null;
}
function jc(a, b, c) {
  return null != a ? null != a && (a.h & 256 || a.Ub) ? a.H(null, b, c) : Ka(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : w(Za, a) ? $a.f(a, b, c) : c : c;
}
var R = function R() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 3:
      return R.f(arguments[0], arguments[1], arguments[2]);
    default:
      return R.l(arguments[0], arguments[1], arguments[2], new I(b.slice(3), 0));
  }
};
R.f = function(a, b, c) {
  return null != a ? cb(a, b, c) : Pc([b], [c]);
};
R.l = function(a, b, c, d) {
  for (;;) {
    if (a = R.f(a, b, c), u(d)) {
      b = J(d), c = J(L(d)), d = L(L(d));
    } else {
      return a;
    }
  }
};
R.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), d = L(d);
  return R.l(b, a, c, d);
};
R.v = 3;
var Qc = function Qc() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Qc.b(arguments[0]);
    case 2:
      return Qc.a(arguments[0], arguments[1]);
    default:
      return Qc.l(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Qc.b = function(a) {
  return a;
};
Qc.a = function(a, b) {
  return null == a ? null : eb(a, b);
};
Qc.l = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Qc.a(a, b);
    if (u(c)) {
      b = J(c), c = L(c);
    } else {
      return a;
    }
  }
};
Qc.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Qc.l(b, a, c);
};
Qc.v = 2;
function Rc(a, b) {
  this.g = a;
  this.m = b;
  this.h = 393217;
  this.B = 0;
}
g = Rc.prototype;
g.M = function() {
  return this.m;
};
g.O = function(a, b) {
  return new Rc(this.g, b);
};
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D, Y, ta) {
    a = this;
    return Sc.lb ? Sc.lb(a.g, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D, Y, ta) : Sc.call(null, a.g, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D, Y, ta);
  }
  function b(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D, Y) {
    a = this;
    return a.g.Ea ? a.g.Ea(b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D, Y) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D, Y);
  }
  function c(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D) {
    a = this;
    return a.g.Da ? a.g.Da(b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, D);
  }
  function d(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O) {
    a = this;
    return a.g.Ca ? a.g.Ca(b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O);
  }
  function e(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H) {
    a = this;
    return a.g.Ba ? a.g.Ba(b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H);
  }
  function f(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C) {
    a = this;
    return a.g.Aa ? a.g.Aa(b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C);
  }
  function h(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A) {
    a = this;
    return a.g.za ? a.g.za(b, c, d, e, f, h, k, l, m, n, r, t, v, x, A) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A);
  }
  function k(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x) {
    a = this;
    return a.g.ya ? a.g.ya(b, c, d, e, f, h, k, l, m, n, r, t, v, x) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v, x);
  }
  function l(a, b, c, d, e, f, h, k, l, m, n, r, t, v) {
    a = this;
    return a.g.xa ? a.g.xa(b, c, d, e, f, h, k, l, m, n, r, t, v) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t, v);
  }
  function m(a, b, c, d, e, f, h, k, l, m, n, r, t) {
    a = this;
    return a.g.wa ? a.g.wa(b, c, d, e, f, h, k, l, m, n, r, t) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, t);
  }
  function n(a, b, c, d, e, f, h, k, l, m, n, r) {
    a = this;
    return a.g.va ? a.g.va(b, c, d, e, f, h, k, l, m, n, r) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r);
  }
  function r(a, b, c, d, e, f, h, k, l, m, n) {
    a = this;
    return a.g.ua ? a.g.ua(b, c, d, e, f, h, k, l, m, n) : a.g.call(null, b, c, d, e, f, h, k, l, m, n);
  }
  function t(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.g.Ha ? a.g.Ha(b, c, d, e, f, h, k, l, m) : a.g.call(null, b, c, d, e, f, h, k, l, m);
  }
  function v(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.g.Ga ? a.g.Ga(b, c, d, e, f, h, k, l) : a.g.call(null, b, c, d, e, f, h, k, l);
  }
  function x(a, b, c, d, e, f, h, k) {
    a = this;
    return a.g.Fa ? a.g.Fa(b, c, d, e, f, h, k) : a.g.call(null, b, c, d, e, f, h, k);
  }
  function A(a, b, c, d, e, f, h) {
    a = this;
    return a.g.ha ? a.g.ha(b, c, d, e, f, h) : a.g.call(null, b, c, d, e, f, h);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    return a.g.I ? a.g.I(b, c, d, e, f) : a.g.call(null, b, c, d, e, f);
  }
  function H(a, b, c, d, e) {
    a = this;
    return a.g.D ? a.g.D(b, c, d, e) : a.g.call(null, b, c, d, e);
  }
  function O(a, b, c, d) {
    a = this;
    return a.g.f ? a.g.f(b, c, d) : a.g.call(null, b, c, d);
  }
  function Y(a, b, c) {
    a = this;
    return a.g.a ? a.g.a(b, c) : a.g.call(null, b, c);
  }
  function ta(a, b) {
    a = this;
    return a.g.b ? a.g.b(b) : a.g.call(null, b);
  }
  function Nb(a) {
    a = this;
    return a.g.o ? a.g.o() : a.g.call(null);
  }
  var D = null, D = function(D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc, sc, Vc, Jd, ue, Of, qh) {
    switch(arguments.length) {
      case 1:
        return Nb.call(this, D);
      case 2:
        return ta.call(this, D, ha);
      case 3:
        return Y.call(this, D, ha, ka);
      case 4:
        return O.call(this, D, ha, ka, ma);
      case 5:
        return H.call(this, D, ha, ka, ma, sa);
      case 6:
        return C.call(this, D, ha, ka, ma, sa, wa);
      case 7:
        return A.call(this, D, ha, ka, ma, sa, wa, Ba);
      case 8:
        return x.call(this, D, ha, ka, ma, sa, wa, Ba, Ha);
      case 9:
        return v.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa);
      case 10:
        return t.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua);
      case 11:
        return r.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab);
      case 12:
        return n.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb);
      case 13:
        return m.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb);
      case 14:
        return l.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb);
      case 15:
        return k.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb);
      case 16:
        return h.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc);
      case 17:
        return f.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc, sc);
      case 18:
        return e.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc, sc, Vc);
      case 19:
        return d.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc, sc, Vc, Jd);
      case 20:
        return c.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc, sc, Vc, Jd, ue);
      case 21:
        return b.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc, sc, Vc, Jd, ue, Of);
      case 22:
        return a.call(this, D, ha, ka, ma, sa, wa, Ba, Ha, Pa, Ua, ab, hb, qb, Eb, Mb, fc, sc, Vc, Jd, ue, Of, qh);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.b = Nb;
  D.a = ta;
  D.f = Y;
  D.D = O;
  D.I = H;
  D.ha = C;
  D.Fa = A;
  D.Ga = x;
  D.Ha = v;
  D.ua = t;
  D.va = r;
  D.wa = n;
  D.xa = m;
  D.ya = l;
  D.za = k;
  D.Aa = h;
  D.Ba = f;
  D.Ca = e;
  D.Da = d;
  D.Ea = c;
  D.Tb = b;
  D.lb = a;
  return D;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.o = function() {
  return this.g.o ? this.g.o() : this.g.call(null);
};
g.b = function(a) {
  return this.g.b ? this.g.b(a) : this.g.call(null, a);
};
g.a = function(a, b) {
  return this.g.a ? this.g.a(a, b) : this.g.call(null, a, b);
};
g.f = function(a, b, c) {
  return this.g.f ? this.g.f(a, b, c) : this.g.call(null, a, b, c);
};
g.D = function(a, b, c, d) {
  return this.g.D ? this.g.D(a, b, c, d) : this.g.call(null, a, b, c, d);
};
g.I = function(a, b, c, d, e) {
  return this.g.I ? this.g.I(a, b, c, d, e) : this.g.call(null, a, b, c, d, e);
};
g.ha = function(a, b, c, d, e, f) {
  return this.g.ha ? this.g.ha(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f);
};
g.Fa = function(a, b, c, d, e, f, h) {
  return this.g.Fa ? this.g.Fa(a, b, c, d, e, f, h) : this.g.call(null, a, b, c, d, e, f, h);
};
g.Ga = function(a, b, c, d, e, f, h, k) {
  return this.g.Ga ? this.g.Ga(a, b, c, d, e, f, h, k) : this.g.call(null, a, b, c, d, e, f, h, k);
};
g.Ha = function(a, b, c, d, e, f, h, k, l) {
  return this.g.Ha ? this.g.Ha(a, b, c, d, e, f, h, k, l) : this.g.call(null, a, b, c, d, e, f, h, k, l);
};
g.ua = function(a, b, c, d, e, f, h, k, l, m) {
  return this.g.ua ? this.g.ua(a, b, c, d, e, f, h, k, l, m) : this.g.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.va = function(a, b, c, d, e, f, h, k, l, m, n) {
  return this.g.va ? this.g.va(a, b, c, d, e, f, h, k, l, m, n) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n);
};
g.wa = function(a, b, c, d, e, f, h, k, l, m, n, r) {
  return this.g.wa ? this.g.wa(a, b, c, d, e, f, h, k, l, m, n, r) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r);
};
g.xa = function(a, b, c, d, e, f, h, k, l, m, n, r, t) {
  return this.g.xa ? this.g.xa(a, b, c, d, e, f, h, k, l, m, n, r, t) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t);
};
g.ya = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v) {
  return this.g.ya ? this.g.ya(a, b, c, d, e, f, h, k, l, m, n, r, t, v) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v);
};
g.za = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x) {
  return this.g.za ? this.g.za(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x);
};
g.Aa = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A) {
  return this.g.Aa ? this.g.Aa(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C) {
  return this.g.Ba ? this.g.Ba(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H) {
  return this.g.Ca ? this.g.Ca(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H);
};
g.Da = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O) {
  return this.g.Da ? this.g.Da(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y) {
  return this.g.Ea ? this.g.Ea(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y);
};
g.Tb = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta) {
  return Sc.lb ? Sc.lb(this.g, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta) : Sc.call(null, this.g, a, b, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta);
};
function Hc(a, b) {
  return ca(a) ? new Rc(a, b) : null == a ? null : rb(a, b);
}
function Tc(a) {
  var b = null != a;
  return (b ? null != a ? a.h & 131072 || a.Xb || (a.h ? 0 : w(ob, a)) : w(ob, a) : b) ? pb(a) : null;
}
function Uc(a) {
  return null == a ? !1 : null != a ? a.h & 4096 || a.qc ? !0 : a.h ? !1 : w(jb, a) : w(jb, a);
}
function Wc(a) {
  return null != a ? a.h & 16777216 || a.pc ? !0 : a.h ? !1 : w(yb, a) : w(yb, a);
}
function Xc(a) {
  return null == a ? !1 : null != a ? a.h & 1024 || a.Vb ? !0 : a.h ? !1 : w(db, a) : w(db, a);
}
function Yc(a) {
  return null != a ? a.h & 16384 || a.rc ? !0 : a.h ? !1 : w(lb, a) : w(lb, a);
}
function Zc(a) {
  return null != a ? a.B & 512 || a.lc ? !0 : !1 : !1;
}
function $c(a) {
  var b = [];
  ia(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function ad(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var bd = {};
function cd(a) {
  return null == a ? !1 : !1 === a ? !1 : !0;
}
function dd(a, b) {
  return jc(a, b, bd) === bd ? !1 : !0;
}
function ed(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return ra(a, b);
    }
    throw Error([z("Cannot compare "), z(a), z(" to "), z(b)].join(""));
  }
  if (null != a ? a.B & 2048 || a.$a || (a.B ? 0 : w(Kb, a)) : w(Kb, a)) {
    return Lb(a, b);
  }
  if ("string" !== typeof a && !Ka(a) && !0 !== a && !1 !== a || (null == a ? null : a.constructor) !== (null == b ? null : b.constructor)) {
    throw Error([z("Cannot compare "), z(a), z(" to "), z(b)].join(""));
  }
  return ra(a, b);
}
function fd(a, b) {
  var c = P(a), d = P(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = ed(Oc(a, d), Oc(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function gd() {
  return M.a(ed, ed) ? ed : function(a, b) {
    var c = ed.a ? ed.a(a, b) : ed.call(null, a, b);
    return "number" === typeof c ? c : u(c) ? -1 : u(ed.a ? ed.a(b, a) : ed.call(null, b, a)) ? 1 : 0;
  };
}
function hd(a) {
  if (G(a)) {
    a = id.b ? id.b(a) : id.call(null, a);
    var b = gd();
    ua(a, b);
    a = G(a);
  } else {
    a = K;
  }
  return a;
}
function Jc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return Ic(arguments[0], arguments[1]);
    case 3:
      return Kc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function Ic(a, b) {
  var c = G(b);
  if (c) {
    var d = J(c), c = L(c);
    return jd ? jd(a, d, c) : kd.call(null, a, d, c);
  }
  return a.o ? a.o() : a.call(null);
}
function Kc(a, b, c) {
  for (c = G(c);;) {
    if (c) {
      var d = J(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      c = L(c);
    } else {
      return b;
    }
  }
}
function kd() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return ld(arguments[0], arguments[1]);
    case 3:
      return jd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function ld(a, b) {
  return null != b && (b.h & 524288 || b.Zb) ? b.X(null, a) : Ka(b) ? xc(b, a) : "string" === typeof b ? xc(b, a) : w(sb, b) ? tb.a(b, a) : Ic(a, b);
}
function jd(a, b, c) {
  return null != c && (c.h & 524288 || c.Zb) ? c.Y(null, a, b) : Ka(c) ? yc(c, a, b) : "string" === typeof c ? yc(c, a, b) : w(sb, c) ? tb.f(c, a, b) : Kc(a, b, c);
}
function md(a) {
  return a;
}
function nd(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = jd(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
var od = function od() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return od.o();
    case 1:
      return od.b(arguments[0]);
    case 2:
      return od.a(arguments[0], arguments[1]);
    default:
      return od.l(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
od.o = function() {
  return 0;
};
od.b = function(a) {
  return a;
};
od.a = function(a, b) {
  return a + b;
};
od.l = function(a, b, c) {
  return jd(od, a + b, c);
};
od.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return od.l(b, a, c);
};
od.v = 2;
var pd = function pd() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return pd.o();
    case 1:
      return pd.b(arguments[0]);
    case 2:
      return pd.a(arguments[0], arguments[1]);
    default:
      return pd.l(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
pd.o = function() {
  return 1;
};
pd.b = function(a) {
  return a;
};
pd.a = function(a, b) {
  return a * b;
};
pd.l = function(a, b, c) {
  return jd(pd, a * b, c);
};
pd.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return pd.l(b, a, c);
};
pd.v = 2;
function qd(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function rd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function sd(a) {
  var b = 1;
  for (a = G(a);;) {
    if (a && 0 < b) {
      --b, a = L(a);
    } else {
      return a;
    }
  }
}
var z = function z() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return z.o();
    case 1:
      return z.b(arguments[0]);
    default:
      return z.l(arguments[0], new I(b.slice(1), 0));
  }
};
z.o = function() {
  return "";
};
z.b = function(a) {
  return null == a ? "" : "" + a;
};
z.l = function(a, b) {
  for (var c = new na("" + z(a)), d = b;;) {
    if (u(d)) {
      c = c.append("" + z(J(d))), d = L(d);
    } else {
      return c.toString();
    }
  }
};
z.w = function(a) {
  var b = J(a);
  a = L(a);
  return z.l(b, a);
};
z.v = 1;
function Ec(a, b) {
  var c;
  if (Wc(b)) {
    if (Ac(a) && Ac(b) && P(a) !== P(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && M.a(J(c), J(d))) {
            c = L(c), d = L(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return cd(c);
}
function td(a, b, c, d, e) {
  this.m = a;
  this.first = b;
  this.Ka = c;
  this.count = d;
  this.s = e;
  this.h = 65937646;
  this.B = 8192;
}
g = td.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.da = function() {
  return 1 === this.count ? null : this.Ka;
};
g.U = function() {
  return this.count;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return rb(K, this.m);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return this.first;
};
g.fa = function() {
  return 1 === this.count ? K : this.Ka;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new td(b, this.first, this.Ka, this.count, this.s);
};
g.P = function(a, b) {
  return new td(this.m, b, this, this.count + 1, null);
};
td.prototype[Na] = function() {
  return nc(this);
};
function ud(a) {
  this.m = a;
  this.h = 65937614;
  this.B = 8192;
}
g = ud.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.da = function() {
  return null;
};
g.U = function() {
  return 0;
};
g.K = function() {
  return qc;
};
g.u = function(a, b) {
  return (null != b ? b.h & 33554432 || b.nc || (b.h ? 0 : w(zb, b)) : w(zb, b)) || Wc(b) ? null == G(b) : !1;
};
g.V = function() {
  return this;
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return null;
};
g.fa = function() {
  return K;
};
g.S = function() {
  return null;
};
g.O = function(a, b) {
  return new ud(b);
};
g.P = function(a, b) {
  return new td(this.m, b, null, 1, null);
};
var K = new ud(null);
ud.prototype[Na] = function() {
  return nc(this);
};
function vd(a) {
  return (null != a ? a.h & 134217728 || a.oc || (a.h ? 0 : w(Ab, a)) : w(Ab, a)) ? Bb(a) : jd(Lc, K, a);
}
function wd() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  a: {
    b = 0 < a.length ? new I(a.slice(0), 0) : null;
    if (b instanceof I && 0 === b.j) {
      a = b.c;
    } else {
      b: {
        for (a = [];;) {
          if (null != b) {
            a.push(b.W(null)), b = b.da(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var b = a.length, d = K;;) {
      if (0 < b) {
        c = b - 1, d = d.P(null, a[b - 1]), b = c;
      } else {
        break a;
      }
    }
  }
  return d;
}
function xd(a, b, c, d) {
  this.m = a;
  this.first = b;
  this.Ka = c;
  this.s = d;
  this.h = 65929452;
  this.B = 8192;
}
g = xd.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.da = function() {
  return null == this.Ka ? null : G(this.Ka);
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.m);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return this.first;
};
g.fa = function() {
  return null == this.Ka ? K : this.Ka;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new xd(b, this.first, this.Ka, this.s);
};
g.P = function(a, b) {
  return new xd(null, b, this, this.s);
};
xd.prototype[Na] = function() {
  return nc(this);
};
function N(a, b) {
  var c = null == b;
  return (c ? c : null != b && (b.h & 64 || b.Z)) ? new xd(null, a, b, null) : new xd(null, a, G(b), null);
}
function yd(a, b) {
  if (a.pa === b.pa) {
    return 0;
  }
  var c = La(a.ba);
  if (u(c ? b.ba : c)) {
    return -1;
  }
  if (u(a.ba)) {
    if (La(b.ba)) {
      return 1;
    }
    c = ra(a.ba, b.ba);
    return 0 === c ? ra(a.name, b.name) : c;
  }
  return ra(a.name, b.name);
}
function S(a, b, c, d) {
  this.ba = a;
  this.name = b;
  this.pa = c;
  this.Ta = d;
  this.h = 2153775105;
  this.B = 4096;
}
g = S.prototype;
g.toString = function() {
  return [z(":"), z(this.pa)].join("");
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.u = function(a, b) {
  return b instanceof S ? this.pa === b.pa : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return F(c, this);
      case 3:
        return jc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return F(c, this);
  };
  a.f = function(a, c, d) {
    return jc(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return F(a, this);
};
g.a = function(a, b) {
  return jc(a, this, b);
};
g.K = function() {
  var a = this.Ta;
  return null != a ? a : this.Ta = a = gc(ac(this.name), dc(this.ba)) + 2654435769 | 0;
};
g.J = function(a, b) {
  return E(b, [z(":"), z(this.pa)].join(""));
};
var zd = function zd() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return zd.b(arguments[0]);
    case 2:
      return zd.a(arguments[0], arguments[1]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
zd.b = function(a) {
  if (a instanceof S) {
    return a;
  }
  if (a instanceof ic) {
    var b;
    if (null != a && (a.B & 4096 || a.Yb)) {
      b = a.ba;
    } else {
      throw Error([z("Doesn't support namespace: "), z(a)].join(""));
    }
    return new S(b, Ad.b ? Ad.b(a) : Ad.call(null, a), a.ra, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new S(b[0], b[1], a, null) : new S(null, b[0], a, null)) : null;
};
zd.a = function(a, b) {
  return new S(a, b, [z(u(a) ? [z(a), z("/")].join("") : null), z(b)].join(""), null);
};
zd.v = 2;
function Bd(a, b, c, d) {
  this.m = a;
  this.Ya = b;
  this.A = c;
  this.s = d;
  this.h = 32374988;
  this.B = 0;
}
g = Bd.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
function Cd(a) {
  null != a.Ya && (a.A = a.Ya.o ? a.Ya.o() : a.Ya.call(null), a.Ya = null);
  return a.A;
}
g.M = function() {
  return this.m;
};
g.da = function() {
  xb(this);
  return null == this.A ? null : L(this.A);
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.m);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  xb(this);
  return null == this.A ? null : J(this.A);
};
g.fa = function() {
  xb(this);
  return null != this.A ? lc(this.A) : K;
};
g.S = function() {
  Cd(this);
  if (null == this.A) {
    return null;
  }
  for (var a = this.A;;) {
    if (a instanceof Bd) {
      a = Cd(a);
    } else {
      return this.A = a, G(this.A);
    }
  }
};
g.O = function(a, b) {
  return new Bd(b, this.Ya, this.A, this.s);
};
g.P = function(a, b) {
  return N(b, this);
};
Bd.prototype[Na] = function() {
  return nc(this);
};
function Dd(a, b) {
  this.rb = a;
  this.end = b;
  this.h = 2;
  this.B = 0;
}
Dd.prototype.add = function(a) {
  this.rb[this.end] = a;
  return this.end += 1;
};
Dd.prototype.ka = function() {
  var a = new Ed(this.rb, 0, this.end);
  this.rb = null;
  return a;
};
Dd.prototype.U = function() {
  return this.end;
};
function Ed(a, b, c) {
  this.c = a;
  this.T = b;
  this.end = c;
  this.h = 524306;
  this.B = 0;
}
g = Ed.prototype;
g.U = function() {
  return this.end - this.T;
};
g.N = function(a, b) {
  return this.c[this.T + b];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.end - this.T ? this.c[this.T + b] : c;
};
g.Fb = function() {
  if (this.T === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ed(this.c, this.T + 1, this.end);
};
g.X = function(a, b) {
  return zc(this.c, b, this.c[this.T], this.T + 1);
};
g.Y = function(a, b, c) {
  return zc(this.c, b, c, this.T);
};
function Fd(a, b, c, d) {
  this.ka = a;
  this.qa = b;
  this.m = c;
  this.s = d;
  this.h = 31850732;
  this.B = 1536;
}
g = Fd.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.da = function() {
  if (1 < Ra(this.ka)) {
    return new Fd(Ob(this.ka), this.qa, this.m, null);
  }
  var a = xb(this.qa);
  return null == a ? null : a;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.m);
};
g.W = function() {
  return B.a(this.ka, 0);
};
g.fa = function() {
  return 1 < Ra(this.ka) ? new Fd(Ob(this.ka), this.qa, this.m, null) : null == this.qa ? K : this.qa;
};
g.S = function() {
  return this;
};
g.vb = function() {
  return this.ka;
};
g.wb = function() {
  return null == this.qa ? K : this.qa;
};
g.O = function(a, b) {
  return new Fd(this.ka, this.qa, b, this.s);
};
g.P = function(a, b) {
  return N(b, this);
};
g.ub = function() {
  return null == this.qa ? null : this.qa;
};
Fd.prototype[Na] = function() {
  return nc(this);
};
function Gd(a, b) {
  return 0 === Ra(a) ? b : new Fd(a, b, null, null);
}
function Hd(a, b) {
  a.add(b);
}
function id(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(J(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function Id(a, b) {
  if (Ac(a)) {
    return P(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = L(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Kd = function Kd(b) {
  return null == b ? null : null == L(b) ? G(J(b)) : N(J(b), Kd(L(b)));
}, Ld = function Ld() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return Ld.o();
    case 1:
      return Ld.b(arguments[0]);
    case 2:
      return Ld.a(arguments[0], arguments[1]);
    default:
      return Ld.l(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Ld.o = function() {
  return new Bd(null, function() {
    return null;
  }, null, null);
};
Ld.b = function(a) {
  return new Bd(null, function() {
    return a;
  }, null, null);
};
Ld.a = function(a, b) {
  return new Bd(null, function() {
    var c = G(a);
    return c ? Zc(c) ? Gd(Pb(c), Ld.a(Qb(c), b)) : N(J(c), Ld.a(lc(c), b)) : b;
  }, null, null);
};
Ld.l = function(a, b, c) {
  return function e(a, b) {
    return new Bd(null, function() {
      var c = G(a);
      return c ? Zc(c) ? Gd(Pb(c), e(Qb(c), b)) : N(J(c), e(lc(c), b)) : u(b) ? e(J(b), L(b)) : null;
    }, null, null);
  }(Ld.a(a, b), c);
};
Ld.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Ld.l(b, a, c);
};
Ld.v = 2;
var Md = function Md() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return Md.o();
    case 1:
      return Md.b(arguments[0]);
    case 2:
      return Md.a(arguments[0], arguments[1]);
    default:
      return Md.l(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Md.o = function() {
  return Fb(Mc);
};
Md.b = function(a) {
  return a;
};
Md.a = function(a, b) {
  return Gb(a, b);
};
Md.l = function(a, b, c) {
  for (;;) {
    if (a = Gb(a, b), u(c)) {
      b = J(c), c = L(c);
    } else {
      return a;
    }
  }
};
Md.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Md.l(b, a, c);
};
Md.v = 2;
function Nd(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.o ? a.o() : a.call(null);
  }
  c = Wa(d);
  var e = Xa(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Wa(e), f = Xa(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Wa(f), h = Xa(f);
  if (3 === b) {
    return a.f ? a.f(c, d, e) : a.f ? a.f(c, d, e) : a.call(null, c, d, e);
  }
  var f = Wa(h), k = Xa(h);
  if (4 === b) {
    return a.D ? a.D(c, d, e, f) : a.D ? a.D(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Wa(k), l = Xa(k);
  if (5 === b) {
    return a.I ? a.I(c, d, e, f, h) : a.I ? a.I(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Wa(l), m = Xa(l);
  if (6 === b) {
    return a.ha ? a.ha(c, d, e, f, h, k) : a.ha ? a.ha(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Wa(m), n = Xa(m);
  if (7 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l) : a.Fa ? a.Fa(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Wa(n), r = Xa(n);
  if (8 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = Wa(r), t = Xa(r);
  if (9 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n) : a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var r = Wa(t), v = Xa(t);
  if (10 === b) {
    return a.ua ? a.ua(c, d, e, f, h, k, l, m, n, r) : a.ua ? a.ua(c, d, e, f, h, k, l, m, n, r) : a.call(null, c, d, e, f, h, k, l, m, n, r);
  }
  var t = Wa(v), x = Xa(v);
  if (11 === b) {
    return a.va ? a.va(c, d, e, f, h, k, l, m, n, r, t) : a.va ? a.va(c, d, e, f, h, k, l, m, n, r, t) : a.call(null, c, d, e, f, h, k, l, m, n, r, t);
  }
  var v = Wa(x), A = Xa(x);
  if (12 === b) {
    return a.wa ? a.wa(c, d, e, f, h, k, l, m, n, r, t, v) : a.wa ? a.wa(c, d, e, f, h, k, l, m, n, r, t, v) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v);
  }
  var x = Wa(A), C = Xa(A);
  if (13 === b) {
    return a.xa ? a.xa(c, d, e, f, h, k, l, m, n, r, t, v, x) : a.xa ? a.xa(c, d, e, f, h, k, l, m, n, r, t, v, x) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x);
  }
  var A = Wa(C), H = Xa(C);
  if (14 === b) {
    return a.ya ? a.ya(c, d, e, f, h, k, l, m, n, r, t, v, x, A) : a.ya ? a.ya(c, d, e, f, h, k, l, m, n, r, t, v, x, A) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x, A);
  }
  var C = Wa(H), O = Xa(H);
  if (15 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C) : a.za ? a.za(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C);
  }
  var H = Wa(O), Y = Xa(O);
  if (16 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H);
  }
  var O = Wa(Y), ta = Xa(Y);
  if (17 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O);
  }
  var Y = Wa(ta), Nb = Xa(ta);
  if (18 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y);
  }
  ta = Wa(Nb);
  Nb = Xa(Nb);
  if (19 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta) : a.Da ? a.Da(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta);
  }
  var D = Wa(Nb);
  Xa(Nb);
  if (20 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta, D) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta, D) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, x, A, C, H, O, Y, ta, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Sc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return Od(arguments[0], arguments[1]);
    case 3:
      return Pd(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Qd(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Rd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Sd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new I(a.slice(5), 0));
  }
}
function Od(a, b) {
  var c = a.v;
  if (a.w) {
    var d = Id(b, c + 1);
    return d <= c ? Nd(a, d, b) : a.w(b);
  }
  return a.apply(a, id(b));
}
function Pd(a, b, c) {
  b = N(b, c);
  c = a.v;
  if (a.w) {
    var d = Id(b, c + 1);
    return d <= c ? Nd(a, d, b) : a.w(b);
  }
  return a.apply(a, id(b));
}
function Qd(a, b, c, d) {
  b = N(b, N(c, d));
  c = a.v;
  return a.w ? (d = Id(b, c + 1), d <= c ? Nd(a, d, b) : a.w(b)) : a.apply(a, id(b));
}
function Rd(a, b, c, d, e) {
  b = N(b, N(c, N(d, e)));
  c = a.v;
  return a.w ? (d = Id(b, c + 1), d <= c ? Nd(a, d, b) : a.w(b)) : a.apply(a, id(b));
}
function Sd(a, b, c, d, e, f) {
  b = N(b, N(c, N(d, N(e, Kd(f)))));
  c = a.v;
  return a.w ? (d = Id(b, c + 1), d <= c ? Nd(a, d, b) : a.w(b)) : a.apply(a, id(b));
}
var Td = function Td() {
  "undefined" === typeof va && (va = function(b, c) {
    this.hc = b;
    this.gc = c;
    this.h = 393216;
    this.B = 0;
  }, va.prototype.O = function(b, c) {
    return new va(this.hc, c);
  }, va.prototype.M = function() {
    return this.gc;
  }, va.prototype.ga = function() {
    return !1;
  }, va.prototype.next = function() {
    return Error("No such element");
  }, va.prototype.remove = function() {
    return Error("Unsupported operation");
  }, va.sc = function() {
    return new T(null, 2, 5, U, [Hc(Ud, new q(null, 1, [Vd, wd(Wd, wd(Mc))], null)), Xd], null);
  }, va.Lb = !0, va.ob = "cljs.core/t_cljs$core10514", va.fc = function(b) {
    return E(b, "cljs.core/t_cljs$core10514");
  });
  return new va(Td, Yd);
};
function Zd(a, b) {
  for (;;) {
    if (null == G(b)) {
      return !0;
    }
    var c;
    c = J(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (u(c)) {
      c = a;
      var d = L(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function $d(a, b) {
  for (;;) {
    if (G(b)) {
      var c;
      c = J(b);
      c = a.b ? a.b(c) : a.call(null, c);
      if (u(c)) {
        return c;
      }
      c = a;
      var d = L(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function ae(a) {
  return function() {
    function b(b, c) {
      return La(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return La(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return La(a.o ? a.o() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        if (2 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
            h[f] = arguments[f + 2], ++f;
          }
          f = new I(h, 0);
        }
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return La(Qd(a, b, d, e));
      }
      b.v = 2;
      b.w = function(a) {
        var b = J(a);
        a = L(a);
        var d = J(a);
        a = lc(a);
        return c(b, d, a);
      };
      b.l = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var m = null;
          if (2 < arguments.length) {
            for (var m = 0, n = Array(arguments.length - 2);m < n.length;) {
              n[m] = arguments[m + 2], ++m;
            }
            m = new I(n, 0);
          }
          return f.l(a, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.v = 2;
    e.w = f.w;
    e.o = d;
    e.b = c;
    e.a = b;
    e.l = f.l;
    return e;
  }();
}
var be = function be() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return be.o();
    case 1:
      return be.b(arguments[0]);
    case 2:
      return be.a(arguments[0], arguments[1]);
    case 3:
      return be.f(arguments[0], arguments[1], arguments[2]);
    default:
      return be.l(arguments[0], arguments[1], arguments[2], new I(b.slice(3), 0));
  }
};
be.o = function() {
  return md;
};
be.b = function(a) {
  return a;
};
be.a = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.f ? b.f(c, d, e) : b.call(null, c, d, e);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.a ? b.a(c, d) : b.call(null, c, d);
      return a.b ? a.b(e) : a.call(null, e);
    }
    function e(c) {
      c = b.b ? b.b(c) : b.call(null, c);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function f() {
      var c = b.o ? b.o() : b.call(null);
      return a.b ? a.b(c) : a.call(null, c);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new I(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        c = Rd(b, c, e, f, h);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.v = 3;
      c.w = function(a) {
        var b = J(a);
        a = L(a);
        var c = J(a);
        a = L(a);
        var e = J(a);
        a = lc(a);
        return d(b, c, e, a);
      };
      c.l = d;
      return c;
    }(), h = function(a, b, h, r) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var t = null;
          if (3 < arguments.length) {
            for (var t = 0, v = Array(arguments.length - 3);t < v.length;) {
              v[t] = arguments[t + 3], ++t;
            }
            t = new I(v, 0);
          }
          return k.l(a, b, h, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.w = k.w;
    h.o = f;
    h.b = e;
    h.a = d;
    h.f = c;
    h.l = k.l;
    return h;
  }();
};
be.f = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.f ? c.f(d, e, f) : c.call(null, d, e, f);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.a ? c.a(d, e) : c.call(null, d, e);
      f = b.b ? b.b(f) : b.call(null, f);
      return a.b ? a.b(f) : a.call(null, f);
    }
    function f(d) {
      d = c.b ? c.b(d) : c.call(null, d);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function h() {
      var d;
      d = c.o ? c.o() : c.call(null);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new I(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, f, h, k) {
        d = Rd(c, d, f, h, k);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      d.v = 3;
      d.w = function(a) {
        var b = J(a);
        a = L(a);
        var c = J(a);
        a = L(a);
        var d = J(a);
        a = lc(a);
        return e(b, c, d, a);
      };
      d.l = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var v = null;
          if (3 < arguments.length) {
            for (var v = 0, x = Array(arguments.length - 3);v < x.length;) {
              x[v] = arguments[v + 3], ++v;
            }
            v = new I(x, 0);
          }
          return l.l(a, b, c, v);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.v = 3;
    k.w = l.w;
    k.o = h;
    k.b = f;
    k.a = e;
    k.f = d;
    k.l = l.l;
    return k;
  }();
};
be.l = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new I(e, 0);
        }
        return c.call(this, d);
      }
      function c(b) {
        b = Od(J(a), b);
        for (var d = L(a);;) {
          if (d) {
            b = J(d).call(null, b), d = L(d);
          } else {
            return b;
          }
        }
      }
      b.v = 0;
      b.w = function(a) {
        a = G(a);
        return c(a);
      };
      b.l = c;
      return b;
    }();
  }(vd(N(a, N(b, N(c, d)))));
};
be.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), d = L(d);
  return be.l(b, a, c, d);
};
be.v = 3;
function ce(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.kc = c;
  this.Pb = d;
  this.B = 16386;
  this.h = 6455296;
}
g = ce.prototype;
g.equiv = function(a) {
  return this.u(null, a);
};
g.u = function(a, b) {
  return this === b;
};
g.Rb = function() {
  return this.state;
};
g.M = function() {
  return this.m;
};
g.Jb = function(a, b, c) {
  a = G(this.Pb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.N(null, f), k = Q(h, 0), h = Q(h, 1);
      h.D ? h.D(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = G(a)) {
        Zc(a) ? (d = Pb(a), a = Qb(a), k = d, e = P(d), d = k) : (d = J(a), k = Q(d, 0), h = Q(d, 1), h.D ? h.D(k, this, b, c) : h.call(null, k, this, b, c), a = L(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.K = function() {
  return this[da] || (this[da] = ++ea);
};
function de() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return ee(arguments[0]);
    default:
      return b = arguments[0], a = new I(a.slice(1), 0), c = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a, a = F(c, Fa), c = F(c, ge), new ce(b, a, c, null);
  }
}
function ee(a) {
  return new ce(a, null, null, null);
}
function he(a, b) {
  if (a instanceof ce) {
    var c = a.kc;
    if (null != c && !u(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([z("Assert failed: "), z("Validator rejected reference state"), z("\n"), z(function() {
        var a = wd(ie, je);
        return ke.b ? ke.b(a) : ke.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Pb && Db(a, c, b);
    return b;
  }
  return Sb(a, b);
}
var le = function le() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return le.a(arguments[0], arguments[1]);
    case 3:
      return le.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return le.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return le.l(arguments[0], arguments[1], arguments[2], arguments[3], new I(b.slice(4), 0));
  }
};
le.a = function(a, b) {
  var c;
  a instanceof ce ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = he(a, c)) : c = Tb.a(a, b);
  return c;
};
le.f = function(a, b, c) {
  if (a instanceof ce) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = he(a, b);
  } else {
    a = Tb.f(a, b, c);
  }
  return a;
};
le.D = function(a, b, c, d) {
  if (a instanceof ce) {
    var e = a.state;
    b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
    a = he(a, b);
  } else {
    a = Tb.D(a, b, c, d);
  }
  return a;
};
le.l = function(a, b, c, d, e) {
  return a instanceof ce ? he(a, Rd(b, a.state, c, d, e)) : Tb.I(a, b, c, d, e);
};
le.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), e = L(d), d = J(e), e = L(e);
  return le.l(b, a, c, d, e);
};
le.v = 4;
var V = function V() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return V.b(arguments[0]);
    case 2:
      return V.a(arguments[0], arguments[1]);
    case 3:
      return V.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return V.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return V.l(arguments[0], arguments[1], arguments[2], arguments[3], new I(b.slice(4), 0));
  }
};
V.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
      }
      function e() {
        return b.o ? b.o() : b.call(null);
      }
      var f = null, h = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
              h[f] = arguments[f + 2], ++f;
            }
            f = new I(h, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Pd(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.v = 2;
        c.w = function(a) {
          var b = J(a);
          a = L(a);
          var c = J(a);
          a = lc(a);
          return d(b, c, a);
        };
        c.l = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, r = Array(arguments.length - 2);n < r.length;) {
                r[n] = arguments[n + 2], ++n;
              }
              n = new I(r, 0);
            }
            return h.l(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.v = 2;
      f.w = h.w;
      f.o = e;
      f.b = d;
      f.a = c;
      f.l = h.l;
      return f;
    }();
  };
};
V.a = function(a, b) {
  return new Bd(null, function() {
    var c = G(b);
    if (c) {
      if (Zc(c)) {
        for (var d = Pb(c), e = P(d), f = new Dd(Array(e), 0), h = 0;;) {
          if (h < e) {
            Hd(f, function() {
              var b = B.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Gd(f.ka(), V.a(a, Qb(c)));
      }
      return N(function() {
        var b = J(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), V.a(a, lc(c)));
    }
    return null;
  }, null, null);
};
V.f = function(a, b, c) {
  return new Bd(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = N, h;
      h = J(d);
      var k = J(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = f(h, V.f(a, lc(d), lc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
V.D = function(a, b, c, d) {
  return new Bd(null, function() {
    var e = G(b), f = G(c), h = G(d);
    if (e && f && h) {
      var k = N, l;
      l = J(e);
      var m = J(f), n = J(h);
      l = a.f ? a.f(l, m, n) : a.call(null, l, m, n);
      e = k(l, V.D(a, lc(e), lc(f), lc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
V.l = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Bd(null, function() {
      var b = V.a(G, a);
      return Zd(md, b) ? N(V.a(J, b), k(V.a(lc, b))) : null;
    }, null, null);
  };
  return V.a(function() {
    return function(b) {
      return Od(a, b);
    };
  }(f), f(Lc.l(e, d, Gc([c, b], 0))));
};
V.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), e = L(d), d = J(e), e = L(e);
  return V.l(b, a, c, d, e);
};
V.v = 4;
function me(a, b) {
  return new Bd(null, function() {
    var c = G(b);
    if (c) {
      if (Zc(c)) {
        for (var d = Pb(c), e = P(d), f = new Dd(Array(e), 0), h = 0;;) {
          if (h < e) {
            var k;
            k = B.a(d, h);
            k = a.b ? a.b(k) : a.call(null, k);
            u(k) && (k = B.a(d, h), f.add(k));
            h += 1;
          } else {
            break;
          }
        }
        return Gd(f.ka(), me(a, Qb(c)));
      }
      d = J(c);
      c = lc(c);
      return u(a.b ? a.b(d) : a.call(null, d)) ? N(d, me(a, c)) : me(a, c);
    }
    return null;
  }, null, null);
}
function ne(a, b) {
  return me(ae(a), b);
}
var oe = function oe() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return oe.a(arguments[0], arguments[1]);
    case 3:
      return oe.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
oe.a = function(a, b) {
  var c;
  null != a ? null != a && (a.B & 4 || a.Sb) ? (c = jd(Gb, Fb(a), b), c = Hb(c), c = Hc(c, Tc(a))) : c = jd(Ta, a, b) : c = jd(Lc, K, b);
  return c;
};
oe.f = function(a, b, c) {
  null != a && (a.B & 4 || a.Sb) ? (b = nd(b, Md, Fb(a), c), b = Hb(b), a = Hc(b, Tc(a))) : a = nd(b, Lc, a, c);
  return a;
};
oe.v = 3;
var pe = function pe(b, c, d) {
  var e = Q(c, 0);
  c = sd(c);
  return u(c) ? R.f(b, e, pe(F(b, e), c, d)) : R.f(b, e, d);
}, qe = function qe() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 3:
      return qe.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return qe.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return qe.I(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return qe.ha(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return qe.l(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new I(b.slice(6), 0));
  }
};
qe.f = function(a, b, c) {
  var d = Q(b, 0);
  b = sd(b);
  return u(b) ? R.f(a, d, qe.f(F(a, d), b, c)) : R.f(a, d, function() {
    var b = F(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
qe.D = function(a, b, c, d) {
  var e = Q(b, 0);
  b = sd(b);
  return u(b) ? R.f(a, e, qe.D(F(a, e), b, c, d)) : R.f(a, e, function() {
    var b = F(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
qe.I = function(a, b, c, d, e) {
  var f = Q(b, 0);
  b = sd(b);
  return u(b) ? R.f(a, f, qe.I(F(a, f), b, c, d, e)) : R.f(a, f, function() {
    var b = F(a, f);
    return c.f ? c.f(b, d, e) : c.call(null, b, d, e);
  }());
};
qe.ha = function(a, b, c, d, e, f) {
  var h = Q(b, 0);
  b = sd(b);
  return u(b) ? R.f(a, h, qe.ha(F(a, h), b, c, d, e, f)) : R.f(a, h, function() {
    var b = F(a, h);
    return c.D ? c.D(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
qe.l = function(a, b, c, d, e, f, h) {
  var k = Q(b, 0);
  b = sd(b);
  return u(b) ? R.f(a, k, Sd(qe, F(a, k), b, c, d, Gc([e, f, h], 0))) : R.f(a, k, Sd(c, F(a, k), d, e, f, Gc([h], 0)));
};
qe.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), e = L(d), d = J(e), f = L(e), e = J(f), h = L(f), f = J(h), h = L(h);
  return qe.l(b, a, c, d, e, f, h);
};
qe.v = 6;
function re(a, b) {
  var c = se;
  return R.f(a, c, function() {
    var d = F(a, c);
    return b.b ? b.b(d) : b.call(null, d);
  }());
}
function te(a, b) {
  this.F = a;
  this.c = b;
}
function ve(a) {
  return new te(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function we(a) {
  a = a.i;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function xe(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ve(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var ye = function ye(b, c, d, e) {
  var f = new te(d.F, Oa(d.c)), h = b.i - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? ye(b, c - 5, d, e) : xe(null, c - 5, e), f.c[h] = b);
  return f;
};
function ze(a, b) {
  throw Error([z("No item "), z(a), z(" in vector of length "), z(b)].join(""));
}
function Ae(a, b) {
  if (b >= we(a)) {
    return a.$;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function Be(a, b) {
  return 0 <= b && b < a.i ? Ae(a, b) : ze(b, a.i);
}
var Ce = function Ce(b, c, d, e, f) {
  var h = new te(d.F, Oa(d.c));
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Ce(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
};
function De(a, b, c, d, e, f) {
  this.j = a;
  this.ib = b;
  this.c = c;
  this.sa = d;
  this.start = e;
  this.end = f;
}
De.prototype.ga = function() {
  return this.j < this.end;
};
De.prototype.next = function() {
  32 === this.j - this.ib && (this.c = Ae(this.sa, this.j), this.ib += 32);
  var a = this.c[this.j & 31];
  this.j += 1;
  return a;
};
function T(a, b, c, d, e, f) {
  this.m = a;
  this.i = b;
  this.shift = c;
  this.root = d;
  this.$ = e;
  this.s = f;
  this.h = 167668511;
  this.B = 8196;
}
g = T.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? B.f(this, b, c) : c;
};
g.N = function(a, b) {
  return Be(this, b)[b & 31];
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.i ? Ae(this, b)[b & 31] : c;
};
g.Ab = function(a, b, c) {
  if (0 <= b && b < this.i) {
    return we(this) <= b ? (a = Oa(this.$), a[b & 31] = c, new T(this.m, this.i, this.shift, this.root, a, null)) : new T(this.m, this.i, this.shift, Ce(this, this.shift, this.root, b, c), this.$, null);
  }
  if (b === this.i) {
    return Ta(this, c);
  }
  throw Error([z("Index "), z(b), z(" out of bounds  [0,"), z(this.i), z("]")].join(""));
};
g.Ia = function() {
  var a = this.i;
  return new De(0, 0, 0 < P(this) ? Ae(this, 0) : null, this, 0, a);
};
g.M = function() {
  return this.m;
};
g.U = function() {
  return this.i;
};
g.yb = function() {
  return B.a(this, 0);
};
g.zb = function() {
  return B.a(this, 1);
};
g.nb = function() {
  return 0 < this.i ? new Dc(this, this.i - 1, null) : null;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  if (b instanceof T) {
    if (this.i === P(b)) {
      for (var c = Ub(this), d = Ub(b);;) {
        if (u(c.ga())) {
          var e = c.next(), f = d.next();
          if (!M.a(e, f)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Ec(this, b);
  }
};
g.Va = function() {
  return new Ee(this.i, this.shift, Fe.b ? Fe.b(this.root) : Fe.call(null, this.root), Ge.b ? Ge.b(this.$) : Ge.call(null, this.$));
};
g.V = function() {
  return Hc(Mc, this.m);
};
g.X = function(a, b) {
  return vc(this, b);
};
g.Y = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.i) {
      var e = Ae(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.a ? b.a(d, h) : b.call(null, d, h), f = f + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.Za = function(a, b, c) {
  if ("number" === typeof b) {
    return mb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.S = function() {
  if (0 === this.i) {
    return null;
  }
  if (32 >= this.i) {
    return new I(this.$, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return He ? He(this, a, 0, 0) : Ie.call(null, this, a, 0, 0);
};
g.O = function(a, b) {
  return new T(b, this.i, this.shift, this.root, this.$, this.s);
};
g.P = function(a, b) {
  if (32 > this.i - we(this)) {
    for (var c = this.$.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.$[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new T(this.m, this.i + 1, this.shift, this.root, d, null);
  }
  c = (d = this.i >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = ve(null), d.c[0] = this.root, e = xe(null, this.shift, new te(null, this.$)), d.c[1] = e) : d = ye(this, this.shift, this.root, new te(null, this.$));
  return new T(this.m, this.i + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.N(null, c);
  };
  a.f = function(a, c, d) {
    return this.ja(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.ja(null, a, b);
};
var U = new te(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Mc = new T(null, 0, 5, U, [], qc);
T.prototype[Na] = function() {
  return nc(this);
};
function Je(a) {
  if (Ka(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new T(null, b, 5, U, a, null);
      } else {
        for (var c = 32, d = (new T(null, 32, 5, U, a.slice(0, 32), null)).Va(null);;) {
          if (c < b) {
            var e = c + 1, d = Md.a(d, a[c]), c = e
          } else {
            a = Hb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = Hb(jd(Gb, Fb(Mc), a));
  }
  return a;
}
function Ke(a, b, c, d, e, f) {
  this.ia = a;
  this.node = b;
  this.j = c;
  this.T = d;
  this.m = e;
  this.s = f;
  this.h = 32375020;
  this.B = 1536;
}
g = Ke.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.da = function() {
  if (this.T + 1 < this.node.length) {
    var a;
    a = this.ia;
    var b = this.node, c = this.j, d = this.T + 1;
    a = He ? He(a, b, c, d) : Ie.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Rb(this);
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(Mc, this.m);
};
g.X = function(a, b) {
  var c;
  c = this.ia;
  var d = this.j + this.T, e = P(this.ia);
  c = Le ? Le(c, d, e) : Me.call(null, c, d, e);
  return vc(c, b);
};
g.Y = function(a, b, c) {
  a = this.ia;
  var d = this.j + this.T, e = P(this.ia);
  a = Le ? Le(a, d, e) : Me.call(null, a, d, e);
  return wc(a, b, c);
};
g.W = function() {
  return this.node[this.T];
};
g.fa = function() {
  if (this.T + 1 < this.node.length) {
    var a;
    a = this.ia;
    var b = this.node, c = this.j, d = this.T + 1;
    a = He ? He(a, b, c, d) : Ie.call(null, a, b, c, d);
    return null == a ? K : a;
  }
  return Qb(this);
};
g.S = function() {
  return this;
};
g.vb = function() {
  var a = this.node;
  return new Ed(a, this.T, a.length);
};
g.wb = function() {
  var a = this.j + this.node.length;
  if (a < Ra(this.ia)) {
    var b = this.ia, c = Ae(this.ia, a);
    return He ? He(b, c, a, 0) : Ie.call(null, b, c, a, 0);
  }
  return K;
};
g.O = function(a, b) {
  return Ne ? Ne(this.ia, this.node, this.j, this.T, b) : Ie.call(null, this.ia, this.node, this.j, this.T, b);
};
g.P = function(a, b) {
  return N(b, this);
};
g.ub = function() {
  var a = this.j + this.node.length;
  if (a < Ra(this.ia)) {
    var b = this.ia, c = Ae(this.ia, a);
    return He ? He(b, c, a, 0) : Ie.call(null, b, c, a, 0);
  }
  return null;
};
Ke.prototype[Na] = function() {
  return nc(this);
};
function Ie() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 3:
      return a = arguments[0], b = arguments[1], c = arguments[2], new Ke(a, Be(a, b), b, c, null, null);
    case 4:
      return He(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ne(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function He(a, b, c, d) {
  return new Ke(a, b, c, d, null, null);
}
function Ne(a, b, c, d, e) {
  return new Ke(a, b, c, d, e, null);
}
function Oe(a, b, c, d, e) {
  this.m = a;
  this.sa = b;
  this.start = c;
  this.end = d;
  this.s = e;
  this.h = 167666463;
  this.B = 8192;
}
g = Oe.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? B.f(this, b, c) : c;
};
g.N = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ze(b, this.end - this.start) : B.a(this.sa, this.start + b);
};
g.ja = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.f(this.sa, this.start + b, c);
};
g.Ab = function(a, b, c) {
  var d = this.start + b;
  a = this.m;
  c = R.f(this.sa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Pe.I ? Pe.I(a, c, b, d, null) : Pe.call(null, a, c, b, d, null);
};
g.M = function() {
  return this.m;
};
g.U = function() {
  return this.end - this.start;
};
g.nb = function() {
  return this.start !== this.end ? new Dc(this, this.end - this.start - 1, null) : null;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(Mc, this.m);
};
g.X = function(a, b) {
  return vc(this, b);
};
g.Y = function(a, b, c) {
  return wc(this, b, c);
};
g.Za = function(a, b, c) {
  if ("number" === typeof b) {
    return mb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.S = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : N(B.a(a.sa, e), new Bd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.O = function(a, b) {
  return Pe.I ? Pe.I(b, this.sa, this.start, this.end, this.s) : Pe.call(null, b, this.sa, this.start, this.end, this.s);
};
g.P = function(a, b) {
  var c = this.m, d = mb(this.sa, this.end, b), e = this.start, f = this.end + 1;
  return Pe.I ? Pe.I(c, d, e, f, null) : Pe.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.N(null, c);
  };
  a.f = function(a, c, d) {
    return this.ja(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.ja(null, a, b);
};
Oe.prototype[Na] = function() {
  return nc(this);
};
function Pe(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Oe) {
      c = b.start + c, d = b.start + d, b = b.sa;
    } else {
      var f = P(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Oe(a, b, c, d, e);
    }
  }
}
function Me() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return a = arguments[0], Le(a, arguments[1], P(a));
    case 3:
      return Le(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function Le(a, b, c) {
  return Pe(null, a, b, c, null);
}
function Qe(a, b) {
  return a === b.F ? b : new te(a, Oa(b.c));
}
function Fe(a) {
  return new te({}, Oa(a.c));
}
function Ge(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  ad(a, 0, b, 0, a.length);
  return b;
}
var Re = function Re(b, c, d, e) {
  d = Qe(b.root.F, d);
  var f = b.i - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? Re(b, c - 5, h, e) : xe(b.root.F, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Ee(a, b, c, d) {
  this.i = a;
  this.shift = b;
  this.root = c;
  this.$ = d;
  this.B = 88;
  this.h = 275;
}
g = Ee.prototype;
g.Qa = function(a, b) {
  if (this.root.F) {
    if (32 > this.i - we(this)) {
      this.$[this.i & 31] = b;
    } else {
      var c = new te(this.root.F, this.$), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.$ = d;
      if (this.i >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = xe(this.root.F, this.shift, c);
        this.root = new te(this.root.F, d);
        this.shift = e;
      } else {
        this.root = Re(this, this.shift, this.root, c);
      }
    }
    this.i += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Wa = function() {
  if (this.root.F) {
    this.root.F = null;
    var a = this.i - we(this), b = Array(a);
    ad(this.$, 0, b, 0, a);
    return new T(null, this.i, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.ab = function(a, b, c) {
  if ("number" === typeof b) {
    return Jb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Ib = function(a, b, c) {
  var d = this;
  if (d.root.F) {
    if (0 <= b && b < d.i) {
      return we(this) <= b ? d.$[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = Qe(d.root.F, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.i) {
      return Gb(this, c);
    }
    throw Error([z("Index "), z(b), z(" out of bounds for TransientVector of length"), z(d.i)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.U = function() {
  if (this.root.F) {
    return this.i;
  }
  throw Error("count after persistent!");
};
g.N = function(a, b) {
  if (this.root.F) {
    return Be(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ja = function(a, b, c) {
  return 0 <= b && b < this.i ? B.a(this, b) : c;
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  return "number" === typeof b ? B.f(this, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.H(null, a, b);
};
function Se() {
  this.h = 2097152;
  this.B = 0;
}
Se.prototype.equiv = function(a) {
  return this.u(null, a);
};
Se.prototype.u = function() {
  return !1;
};
var Te = new Se;
function Ue(a, b) {
  return cd(Xc(b) ? P(a) === P(b) ? Zd(md, V.a(function(a) {
    return M.a(jc(b, J(a), Te), J(L(a)));
  }, a)) : null : null);
}
function Ve(a) {
  this.A = a;
}
Ve.prototype.next = function() {
  if (null != this.A) {
    var a = J(this.A), b = Q(a, 0), a = Q(a, 1);
    this.A = L(this.A);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function We(a) {
  return new Ve(G(a));
}
function Xe(a) {
  this.A = a;
}
Xe.prototype.next = function() {
  if (null != this.A) {
    var a = J(this.A);
    this.A = L(this.A);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function Ye(a, b) {
  var c;
  if (b instanceof S) {
    a: {
      c = a.length;
      for (var d = b.pa, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        if (a[e] instanceof S && d === a[e].pa) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (ba(b) || "number" === typeof b) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof ic) {
        a: {
          for (c = a.length, d = b.ra, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            if (a[e] instanceof ic && d === a[e].ra) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (M.a(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function Ze(a, b, c) {
  this.c = a;
  this.j = b;
  this.ca = c;
  this.h = 32374990;
  this.B = 0;
}
g = Ze.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.ca;
};
g.da = function() {
  return this.j < this.c.length - 2 ? new Ze(this.c, this.j + 2, this.ca) : null;
};
g.U = function() {
  return (this.c.length - this.j) / 2;
};
g.K = function() {
  return pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.ca);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return new T(null, 2, 5, U, [this.c[this.j], this.c[this.j + 1]], null);
};
g.fa = function() {
  return this.j < this.c.length - 2 ? new Ze(this.c, this.j + 2, this.ca) : K;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Ze(this.c, this.j, b);
};
g.P = function(a, b) {
  return N(b, this);
};
Ze.prototype[Na] = function() {
  return nc(this);
};
function $e(a, b, c) {
  this.c = a;
  this.j = b;
  this.i = c;
}
$e.prototype.ga = function() {
  return this.j < this.i;
};
$e.prototype.next = function() {
  var a = new T(null, 2, 5, U, [this.c[this.j], this.c[this.j + 1]], null);
  this.j += 2;
  return a;
};
function q(a, b, c, d) {
  this.m = a;
  this.i = b;
  this.c = c;
  this.s = d;
  this.h = 16647951;
  this.B = 8196;
}
g = q.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.keys = function() {
  return nc(af.b ? af.b(this) : af.call(null, this));
};
g.entries = function() {
  return We(G(this));
};
g.values = function() {
  return nc(bf.b ? bf.b(this) : bf.call(null, this));
};
g.has = function(a) {
  return dd(this, a);
};
g.get = function(a, b) {
  return this.H(null, a, b);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = Q(f, 0), f = Q(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        Zc(b) ? (c = Pb(b), b = Qb(b), h = c, d = P(c), c = h) : (c = J(b), h = Q(c, 0), f = Q(c, 1), a.a ? a.a(f, h) : a.call(null, f, h), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  a = Ye(this.c, b);
  return -1 === a ? c : this.c[a + 1];
};
g.Ia = function() {
  return new $e(this.c, 0, 2 * this.i);
};
g.M = function() {
  return this.m;
};
g.U = function() {
  return this.i;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = rc(this);
};
g.u = function(a, b) {
  if (null != b && (b.h & 1024 || b.Vb)) {
    var c = this.c.length;
    if (this.i === b.U(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.H(null, this.c[d], bd);
          if (e !== bd) {
            if (M.a(this.c[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Ue(this, b);
  }
};
g.Va = function() {
  return new cf({}, this.c.length, Oa(this.c));
};
g.V = function() {
  return rb(Yd, this.m);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.xb = function(a, b) {
  if (0 <= Ye(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return Sa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new q(this.m, this.i - 1, d, null);
      }
      M.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.Za = function(a, b, c) {
  a = Ye(this.c, b);
  if (-1 === a) {
    if (this.i < df) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new q(this.m, this.i + 1, e, null);
    }
    return rb(cb(oe.a(ef, this), b, c), this.m);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Oa(this.c);
  b[a + 1] = c;
  return new q(this.m, this.i, b, null);
};
g.tb = function(a, b) {
  return -1 !== Ye(this.c, b);
};
g.S = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Ze(a, 0, null) : null;
};
g.O = function(a, b) {
  return new q(b, this.i, this.c, this.s);
};
g.P = function(a, b) {
  if (Yc(b)) {
    return cb(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (Yc(e)) {
      c = cb(c, B.a(e, 0), B.a(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.H(null, a, b);
};
var Yd = new q(null, 0, [], tc), df = 8;
q.prototype[Na] = function() {
  return nc(this);
};
function cf(a, b, c) {
  this.Xa = a;
  this.Sa = b;
  this.c = c;
  this.h = 258;
  this.B = 56;
}
g = cf.prototype;
g.U = function() {
  if (u(this.Xa)) {
    return qd(this.Sa);
  }
  throw Error("count after persistent!");
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  if (u(this.Xa)) {
    return a = Ye(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.Qa = function(a, b) {
  if (u(this.Xa)) {
    if (null != b ? b.h & 2048 || b.Wb || (b.h ? 0 : w(fb, b)) : w(fb, b)) {
      return Ib(this, ff.b ? ff.b(b) : ff.call(null, b), gf.b ? gf.b(b) : gf.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (u(e)) {
        c = L(c), d = Ib(d, ff.b ? ff.b(e) : ff.call(null, e), gf.b ? gf.b(e) : gf.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Wa = function() {
  if (u(this.Xa)) {
    return this.Xa = !1, new q(null, qd(this.Sa), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.ab = function(a, b, c) {
  if (u(this.Xa)) {
    a = Ye(this.c, b);
    if (-1 === a) {
      if (this.Sa + 2 <= 2 * df) {
        return this.Sa += 2, this.c.push(b), this.c.push(c), this;
      }
      a = hf.a ? hf.a(this.Sa, this.c) : hf.call(null, this.Sa, this.c);
      return Ib(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function hf(a, b) {
  for (var c = Fb(ef), d = 0;;) {
    if (d < a) {
      c = Ib(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function jf() {
  this.ta = !1;
}
function kf(a, b) {
  return a === b ? !0 : a === b || a instanceof S && b instanceof S && a.pa === b.pa ? !0 : M.a(a, b);
}
function lf(a, b, c) {
  a = Oa(a);
  a[b] = c;
  return a;
}
function mf(a, b) {
  var c = Array(a.length - 2);
  ad(a, 0, c, 0, 2 * b);
  ad(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function nf(a, b, c, d) {
  a = a.Ra(b);
  a.c[c] = d;
  return a;
}
function of(a, b, c, d) {
  this.c = a;
  this.j = b;
  this.fb = c;
  this.oa = d;
}
of.prototype.advance = function() {
  for (var a = this.c.length;;) {
    if (this.j < a) {
      var b = this.c[this.j], c = this.c[this.j + 1];
      null != b ? b = this.fb = new T(null, 2, 5, U, [b, c], null) : null != c ? (b = Ub(c), b = b.ga() ? this.oa = b : !1) : b = !1;
      this.j += 2;
      if (b) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
of.prototype.ga = function() {
  var a = null != this.fb;
  return a ? a : (a = null != this.oa) ? a : this.advance();
};
of.prototype.next = function() {
  if (null != this.fb) {
    var a = this.fb;
    this.fb = null;
    return a;
  }
  if (null != this.oa) {
    return a = this.oa.next(), this.oa.ga() || (this.oa = null), a;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
of.prototype.remove = function() {
  return Error("Unsupported operation");
};
function pf(a, b, c) {
  this.F = a;
  this.G = b;
  this.c = c;
}
g = pf.prototype;
g.Ra = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = rd(this.G), c = Array(0 > b ? 4 : 2 * (b + 1));
  ad(this.c, 0, c, 0, 2 * b);
  return new pf(a, this.G, c);
};
g.cb = function() {
  return qf ? qf(this.c) : rf.call(null, this.c);
};
g.Na = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.G & e)) {
    return d;
  }
  var f = rd(this.G & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Na(a + 5, b, c, d) : kf(c, e) ? f : d;
};
g.ma = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = rd(this.G & h - 1);
  if (0 === (this.G & h)) {
    var l = rd(this.G);
    if (2 * l < this.c.length) {
      a = this.Ra(a);
      b = a.c;
      f.ta = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.G |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = sf.ma(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.G >>> d & 1) && (k[d] = null != this.c[e] ? sf.ma(a, b + 5, ec(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new tf(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    ad(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    ad(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.ta = !0;
    a = this.Ra(a);
    a.c = b;
    a.G |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.ma(a, b + 5, c, d, e, f), l === h ? this : nf(this, a, 2 * k + 1, l);
  }
  if (kf(d, l)) {
    return e === h ? this : nf(this, a, 2 * k + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = uf ? uf(a, f, l, h, c, d, e) : vf.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ra(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.la = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = rd(this.G & f - 1);
  if (0 === (this.G & f)) {
    var k = rd(this.G);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = sf.la(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.G >>> c & 1) && (h[c] = null != this.c[d] ? sf.la(a + 5, ec(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new tf(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    ad(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    ad(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ta = !0;
    return new pf(null, this.G | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.la(a + 5, b, c, d, e), k === f ? this : new pf(null, this.G, lf(this.c, 2 * h + 1, k));
  }
  if (kf(c, l)) {
    return d === f ? this : new pf(null, this.G, lf(this.c, 2 * h + 1, d));
  }
  e.ta = !0;
  e = this.G;
  k = this.c;
  a += 5;
  a = wf ? wf(a, l, f, b, c, d) : vf.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = Oa(k);
  d[c] = null;
  d[h] = a;
  return new pf(null, e, d);
};
g.eb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.G & d)) {
    return this;
  }
  var e = rd(this.G & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.eb(a + 5, b, c), a === h ? this : null != a ? new pf(null, this.G, lf(this.c, 2 * e + 1, a)) : this.G === d ? null : new pf(null, this.G ^ d, mf(this.c, e))) : kf(c, f) ? new pf(null, this.G ^ d, mf(this.c, e)) : this;
};
g.Ia = function() {
  return new of(this.c, 0, null, null);
};
var sf = new pf(null, 0, []);
function xf(a, b, c) {
  this.c = a;
  this.j = b;
  this.oa = c;
}
xf.prototype.ga = function() {
  for (var a = this.c.length;;) {
    if (null != this.oa && this.oa.ga()) {
      return !0;
    }
    if (this.j < a) {
      var b = this.c[this.j];
      this.j += 1;
      null != b && (this.oa = Ub(b));
    } else {
      return !1;
    }
  }
};
xf.prototype.next = function() {
  if (this.ga()) {
    return this.oa.next();
  }
  throw Error("No such element");
};
xf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function tf(a, b, c) {
  this.F = a;
  this.i = b;
  this.c = c;
}
g = tf.prototype;
g.Ra = function(a) {
  return a === this.F ? this : new tf(a, this.i, Oa(this.c));
};
g.cb = function() {
  return yf ? yf(this.c) : zf.call(null, this.c);
};
g.Na = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Na(a + 5, b, c, d) : d;
};
g.ma = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = nf(this, a, h, sf.ma(a, b + 5, c, d, e, f)), a.i += 1, a;
  }
  b = k.ma(a, b + 5, c, d, e, f);
  return b === k ? this : nf(this, a, h, b);
};
g.la = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new tf(null, this.i + 1, lf(this.c, f, sf.la(a + 5, b, c, d, e)));
  }
  a = h.la(a + 5, b, c, d, e);
  return a === h ? this : new tf(null, this.i, lf(this.c, f, a));
};
g.eb = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.eb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.i) {
          a: {
            e = this.c;
            a = e.length;
            b = Array(2 * (this.i - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new pf(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new tf(null, this.i - 1, lf(this.c, d, a));
        }
      } else {
        d = new tf(null, this.i, lf(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
g.Ia = function() {
  return new xf(this.c, 0, null);
};
function Af(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (kf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function Bf(a, b, c, d) {
  this.F = a;
  this.Ja = b;
  this.i = c;
  this.c = d;
}
g = Bf.prototype;
g.Ra = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = Array(2 * (this.i + 1));
  ad(this.c, 0, b, 0, 2 * this.i);
  return new Bf(a, this.Ja, this.i, b);
};
g.cb = function() {
  return qf ? qf(this.c) : rf.call(null, this.c);
};
g.Na = function(a, b, c, d) {
  a = Af(this.c, this.i, c);
  return 0 > a ? d : kf(c, this.c[a]) ? this.c[a + 1] : d;
};
g.ma = function(a, b, c, d, e, f) {
  if (c === this.Ja) {
    b = Af(this.c, this.i, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.i) {
        return b = 2 * this.i, c = 2 * this.i + 1, a = this.Ra(a), a.c[b] = d, a.c[c] = e, f.ta = !0, a.i += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      ad(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ta = !0;
      d = this.i + 1;
      a === this.F ? (this.c = b, this.i = d, a = this) : a = new Bf(this.F, this.Ja, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : nf(this, a, b + 1, e);
  }
  return (new pf(a, 1 << (this.Ja >>> b & 31), [null, this, null, null])).ma(a, b, c, d, e, f);
};
g.la = function(a, b, c, d, e) {
  return b === this.Ja ? (a = Af(this.c, this.i, c), -1 === a ? (a = 2 * this.i, b = Array(a + 2), ad(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new Bf(null, this.Ja, this.i + 1, b)) : M.a(this.c[a], d) ? this : new Bf(null, this.Ja, this.i, lf(this.c, a + 1, d))) : (new pf(null, 1 << (this.Ja >>> a & 31), [null, this])).la(a, b, c, d, e);
};
g.eb = function(a, b, c) {
  a = Af(this.c, this.i, c);
  return -1 === a ? this : 1 === this.i ? null : new Bf(null, this.Ja, this.i - 1, mf(this.c, qd(a)));
};
g.Ia = function() {
  return new of(this.c, 0, null, null);
};
function vf() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 6:
      return wf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return uf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function wf(a, b, c, d, e, f) {
  var h = ec(b);
  if (h === d) {
    return new Bf(null, h, 2, [b, c, e, f]);
  }
  var k = new jf;
  return sf.la(a, h, b, c, k).la(a, d, e, f, k);
}
function uf(a, b, c, d, e, f, h) {
  var k = ec(c);
  if (k === e) {
    return new Bf(null, k, 2, [c, d, f, h]);
  }
  var l = new jf;
  return sf.ma(a, b, k, c, d, l).ma(a, b, e, f, h, l);
}
function Cf(a, b, c, d, e) {
  this.m = a;
  this.Oa = b;
  this.j = c;
  this.A = d;
  this.s = e;
  this.h = 32374860;
  this.B = 0;
}
g = Cf.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.m);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return null == this.A ? new T(null, 2, 5, U, [this.Oa[this.j], this.Oa[this.j + 1]], null) : J(this.A);
};
g.fa = function() {
  if (null == this.A) {
    var a = this.Oa, b = this.j + 2;
    return Df ? Df(a, b, null) : rf.call(null, a, b, null);
  }
  var a = this.Oa, b = this.j, c = L(this.A);
  return Df ? Df(a, b, c) : rf.call(null, a, b, c);
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Cf(b, this.Oa, this.j, this.A, this.s);
};
g.P = function(a, b) {
  return N(b, this);
};
Cf.prototype[Na] = function() {
  return nc(this);
};
function rf() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return qf(arguments[0]);
    case 3:
      return Df(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function qf(a) {
  return Df(a, 0, null);
}
function Df(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Cf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (u(d) && (d = d.cb(), u(d))) {
          return new Cf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Cf(null, a, b, c, null);
  }
}
function Ef(a, b, c, d, e) {
  this.m = a;
  this.Oa = b;
  this.j = c;
  this.A = d;
  this.s = e;
  this.h = 32374860;
  this.B = 0;
}
g = Ef.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.m;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.m);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return J(this.A);
};
g.fa = function() {
  var a = this.Oa, b = this.j, c = L(this.A);
  return Ff ? Ff(null, a, b, c) : zf.call(null, null, a, b, c);
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Ef(b, this.Oa, this.j, this.A, this.s);
};
g.P = function(a, b) {
  return N(b, this);
};
Ef.prototype[Na] = function() {
  return nc(this);
};
function zf() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return yf(arguments[0]);
    case 4:
      return Ff(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([z("Invalid arity: "), z(a.length)].join(""));;
  }
}
function yf(a) {
  return Ff(null, a, 0, null);
}
function Ff(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (u(e) && (e = e.cb(), u(e))) {
          return new Ef(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Ef(a, b, c, d, null);
  }
}
function Gf(a, b, c) {
  this.ea = a;
  this.Nb = b;
  this.Eb = c;
}
Gf.prototype.ga = function() {
  return this.Eb && this.Nb.ga();
};
Gf.prototype.next = function() {
  if (this.Eb) {
    return this.Nb.next();
  }
  this.Eb = !0;
  return this.ea;
};
Gf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Hf(a, b, c, d, e, f) {
  this.m = a;
  this.i = b;
  this.root = c;
  this.aa = d;
  this.ea = e;
  this.s = f;
  this.h = 16123663;
  this.B = 8196;
}
g = Hf.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.keys = function() {
  return nc(af.b ? af.b(this) : af.call(null, this));
};
g.entries = function() {
  return We(G(this));
};
g.values = function() {
  return nc(bf.b ? bf.b(this) : bf.call(null, this));
};
g.has = function(a) {
  return dd(this, a);
};
g.get = function(a, b) {
  return this.H(null, a, b);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = Q(f, 0), f = Q(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        Zc(b) ? (c = Pb(b), b = Qb(b), h = c, d = P(c), c = h) : (c = J(b), h = Q(c, 0), f = Q(c, 1), a.a ? a.a(f, h) : a.call(null, f, h), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  return null == b ? this.aa ? this.ea : c : null == this.root ? c : this.root.Na(0, ec(b), b, c);
};
g.Ia = function() {
  var a = this.root ? Ub(this.root) : Td;
  return this.aa ? new Gf(this.ea, a, !1) : a;
};
g.M = function() {
  return this.m;
};
g.U = function() {
  return this.i;
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = rc(this);
};
g.u = function(a, b) {
  return Ue(this, b);
};
g.Va = function() {
  return new If({}, this.root, this.i, this.aa, this.ea);
};
g.V = function() {
  return rb(ef, this.m);
};
g.xb = function(a, b) {
  if (null == b) {
    return this.aa ? new Hf(this.m, this.i - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.eb(0, ec(b), b);
  return c === this.root ? this : new Hf(this.m, this.i - 1, c, this.aa, this.ea, null);
};
g.Za = function(a, b, c) {
  if (null == b) {
    return this.aa && c === this.ea ? this : new Hf(this.m, this.aa ? this.i : this.i + 1, this.root, !0, c, null);
  }
  a = new jf;
  b = (null == this.root ? sf : this.root).la(0, ec(b), b, c, a);
  return b === this.root ? this : new Hf(this.m, a.ta ? this.i + 1 : this.i, b, this.aa, this.ea, null);
};
g.tb = function(a, b) {
  return null == b ? this.aa : null == this.root ? !1 : this.root.Na(0, ec(b), b, bd) !== bd;
};
g.S = function() {
  if (0 < this.i) {
    var a = null != this.root ? this.root.cb() : null;
    return this.aa ? N(new T(null, 2, 5, U, [null, this.ea], null), a) : a;
  }
  return null;
};
g.O = function(a, b) {
  return new Hf(b, this.i, this.root, this.aa, this.ea, this.s);
};
g.P = function(a, b) {
  if (Yc(b)) {
    return cb(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (Yc(e)) {
      c = cb(c, B.a(e, 0), B.a(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.H(null, a, b);
};
var ef = new Hf(null, 0, null, !1, null, tc);
function Pc(a, b) {
  for (var c = a.length, d = 0, e = Fb(ef);;) {
    if (d < c) {
      var f = d + 1, e = e.ab(null, a[d], b[d]), d = f
    } else {
      return Hb(e);
    }
  }
}
Hf.prototype[Na] = function() {
  return nc(this);
};
function If(a, b, c, d, e) {
  this.F = a;
  this.root = b;
  this.count = c;
  this.aa = d;
  this.ea = e;
  this.h = 258;
  this.B = 56;
}
function Jf(a, b, c) {
  if (a.F) {
    if (null == b) {
      a.ea !== c && (a.ea = c), a.aa || (a.count += 1, a.aa = !0);
    } else {
      var d = new jf;
      b = (null == a.root ? sf : a.root).ma(a.F, 0, ec(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = If.prototype;
g.U = function() {
  if (this.F) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.L = function(a, b) {
  return null == b ? this.aa ? this.ea : null : null == this.root ? null : this.root.Na(0, ec(b), b);
};
g.H = function(a, b, c) {
  return null == b ? this.aa ? this.ea : c : null == this.root ? c : this.root.Na(0, ec(b), b, c);
};
g.Qa = function(a, b) {
  var c;
  a: {
    if (this.F) {
      if (null != b ? b.h & 2048 || b.Wb || (b.h ? 0 : w(fb, b)) : w(fb, b)) {
        c = Jf(this, ff.b ? ff.b(b) : ff.call(null, b), gf.b ? gf.b(b) : gf.call(null, b));
      } else {
        c = G(b);
        for (var d = this;;) {
          var e = J(c);
          if (u(e)) {
            c = L(c), d = Jf(d, ff.b ? ff.b(e) : ff.call(null, e), gf.b ? gf.b(e) : gf.call(null, e));
          } else {
            c = d;
            break a;
          }
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
  }
  return c;
};
g.Wa = function() {
  var a;
  if (this.F) {
    this.F = null, a = new Hf(null, this.count, this.root, this.aa, this.ea, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.ab = function(a, b, c) {
  return Jf(this, b, c);
};
var fe = function fe() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  return fe.l(0 < b.length ? new I(b.slice(0), 0) : null);
};
fe.l = function(a) {
  for (var b = G(a), c = Fb(ef);;) {
    if (b) {
      a = L(L(b));
      var d = J(b), b = J(L(b)), c = Ib(c, d, b), b = a;
    } else {
      return Hb(c);
    }
  }
};
fe.v = 0;
fe.w = function(a) {
  return fe.l(G(a));
};
function Kf(a, b) {
  this.C = a;
  this.ca = b;
  this.h = 32374988;
  this.B = 0;
}
g = Kf.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.ca;
};
g.da = function() {
  var a = (null != this.C ? this.C.h & 128 || this.C.mb || (this.C.h ? 0 : w(Ya, this.C)) : w(Ya, this.C)) ? this.C.da(null) : L(this.C);
  return null == a ? null : new Kf(a, this.ca);
};
g.K = function() {
  return pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.ca);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return this.C.W(null).yb();
};
g.fa = function() {
  var a = (null != this.C ? this.C.h & 128 || this.C.mb || (this.C.h ? 0 : w(Ya, this.C)) : w(Ya, this.C)) ? this.C.da(null) : L(this.C);
  return null != a ? new Kf(a, this.ca) : K;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Kf(this.C, b);
};
g.P = function(a, b) {
  return N(b, this);
};
Kf.prototype[Na] = function() {
  return nc(this);
};
function af(a) {
  return (a = G(a)) ? new Kf(a, null) : null;
}
function ff(a) {
  return gb(a);
}
function Lf(a, b) {
  this.C = a;
  this.ca = b;
  this.h = 32374988;
  this.B = 0;
}
g = Lf.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.M = function() {
  return this.ca;
};
g.da = function() {
  var a = (null != this.C ? this.C.h & 128 || this.C.mb || (this.C.h ? 0 : w(Ya, this.C)) : w(Ya, this.C)) ? this.C.da(null) : L(this.C);
  return null == a ? null : new Lf(a, this.ca);
};
g.K = function() {
  return pc(this);
};
g.u = function(a, b) {
  return Ec(this, b);
};
g.V = function() {
  return Hc(K, this.ca);
};
g.X = function(a, b) {
  return Ic(b, this);
};
g.Y = function(a, b, c) {
  return Kc(b, c, this);
};
g.W = function() {
  return this.C.W(null).zb();
};
g.fa = function() {
  var a = (null != this.C ? this.C.h & 128 || this.C.mb || (this.C.h ? 0 : w(Ya, this.C)) : w(Ya, this.C)) ? this.C.da(null) : L(this.C);
  return null != a ? new Lf(a, this.ca) : K;
};
g.S = function() {
  return this;
};
g.O = function(a, b) {
  return new Lf(this.C, b);
};
g.P = function(a, b) {
  return N(b, this);
};
Lf.prototype[Na] = function() {
  return nc(this);
};
function bf(a) {
  return (a = G(a)) ? new Lf(a, null) : null;
}
function gf(a) {
  return ib(a);
}
function Mf(a) {
  return u($d(md, a)) ? ld(function(a, c) {
    return Lc.a(u(a) ? a : Yd, c);
  }, a) : null;
}
function Nf(a) {
  this.Cb = a;
}
Nf.prototype.ga = function() {
  return this.Cb.ga();
};
Nf.prototype.next = function() {
  if (this.Cb.ga()) {
    return this.Cb.next().$[0];
  }
  throw Error("No such element");
};
Nf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Pf(a, b, c) {
  this.m = a;
  this.Ma = b;
  this.s = c;
  this.h = 15077647;
  this.B = 8196;
}
g = Pf.prototype;
g.toString = function() {
  return Wb(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.keys = function() {
  return nc(G(this));
};
g.entries = function() {
  var a = G(this);
  return new Xe(G(a));
};
g.values = function() {
  return nc(G(this));
};
g.has = function(a) {
  return dd(this, a);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = Q(f, 0), f = Q(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        Zc(b) ? (c = Pb(b), b = Qb(b), h = c, d = P(c), c = h) : (c = J(b), h = Q(c, 0), f = Q(c, 1), a.a ? a.a(f, h) : a.call(null, f, h), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  return bb(this.Ma, b) ? b : c;
};
g.Ia = function() {
  return new Nf(Ub(this.Ma));
};
g.M = function() {
  return this.m;
};
g.U = function() {
  return Ra(this.Ma);
};
g.K = function() {
  var a = this.s;
  return null != a ? a : this.s = a = rc(this);
};
g.u = function(a, b) {
  return Uc(b) && P(this) === P(b) && Zd(function(a) {
    return function(b) {
      return dd(a, b);
    };
  }(this), b);
};
g.Va = function() {
  return new Qf(Fb(this.Ma));
};
g.V = function() {
  return Hc(Rf, this.m);
};
g.Hb = function(a, b) {
  return new Pf(this.m, eb(this.Ma, b), null);
};
g.S = function() {
  return af(this.Ma);
};
g.O = function(a, b) {
  return new Pf(b, this.Ma, this.s);
};
g.P = function(a, b) {
  return new Pf(this.m, R.f(this.Ma, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.H(null, a, b);
};
var Rf = new Pf(null, Yd, tc);
Pf.prototype[Na] = function() {
  return nc(this);
};
function Qf(a) {
  this.La = a;
  this.B = 136;
  this.h = 259;
}
g = Qf.prototype;
g.Qa = function(a, b) {
  this.La = Ib(this.La, b, null);
  return this;
};
g.Wa = function() {
  return new Pf(null, Hb(this.La), null);
};
g.U = function() {
  return P(this.La);
};
g.L = function(a, b) {
  return $a.f(this, b, null);
};
g.H = function(a, b, c) {
  return $a.f(this.La, b, bd) === bd ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return $a.f(this.La, b, bd) === bd ? c : b;
  }
  function b(a, b) {
    return $a.f(this.La, b, bd) === bd ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Oa(b)));
};
g.b = function(a) {
  return $a.f(this.La, a, bd) === bd ? null : a;
};
g.a = function(a, b) {
  return $a.f(this.La, a, bd) === bd ? b : a;
};
function Sf(a) {
  a = G(a);
  if (null == a) {
    return Rf;
  }
  if (a instanceof I && 0 === a.j) {
    a = a.c;
    a: {
      for (var b = 0, c = Fb(Rf);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Qa(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.Wa(null);
  }
  for (d = Fb(Rf);;) {
    if (null != a) {
      b = L(a), d = d.Qa(null, a.W(null)), a = b;
    } else {
      return Hb(d);
    }
  }
}
function Ad(a) {
  if (null != a && (a.B & 4096 || a.Yb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([z("Doesn't support name: "), z(a)].join(""));
}
function Tf(a, b) {
  return function() {
    function c(c, d, e) {
      return new T(null, 2, 5, U, [a.f ? a.f(c, d, e) : a.call(null, c, d, e), b.f ? b.f(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new T(null, 2, 5, U, [a.a ? a.a(c, d) : a.call(null, c, d), b.a ? b.a(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new T(null, 2, 5, U, [a.b ? a.b(c) : a.call(null, c), b.b ? b.b(c) : b.call(null, c)], null);
    }
    function f() {
      return new T(null, 2, 5, U, [a.o ? a.o() : a.call(null), b.o ? b.o() : b.call(null)], null);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new I(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        return new T(null, 2, 5, U, [Rd(a, c, e, f, h), Rd(b, c, e, f, h)], null);
      }
      c.v = 3;
      c.w = function(a) {
        var b = J(a);
        a = L(a);
        var c = J(a);
        a = L(a);
        var e = J(a);
        a = lc(a);
        return d(b, c, e, a);
      };
      c.l = d;
      return c;
    }(), h = function(a, b, h, r) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var t = null;
          if (3 < arguments.length) {
            for (var t = 0, v = Array(arguments.length - 3);t < v.length;) {
              v[t] = arguments[t + 3], ++t;
            }
            t = new I(v, 0);
          }
          return k.l(a, b, h, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.w = k.w;
    h.o = f;
    h.b = e;
    h.a = d;
    h.f = c;
    h.l = k.l;
    return h;
  }();
}
function Uf(a, b, c, d, e, f, h) {
  var k = za;
  za = null == za ? null : za - 1;
  try {
    if (null != za && 0 > za) {
      return E(a, "#");
    }
    E(a, c);
    if (0 === Ia.b(f)) {
      G(h) && E(a, function() {
        var a = Vf.b(f);
        return u(a) ? a : "...";
      }());
    } else {
      if (G(h)) {
        var l = J(h);
        b.f ? b.f(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = L(h), n = Ia.b(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          G(m) && 0 === n && (E(a, d), E(a, function() {
            var a = Vf.b(f);
            return u(a) ? a : "...";
          }()));
          break;
        } else {
          E(a, d);
          var r = J(m);
          c = a;
          h = f;
          b.f ? b.f(r, c, h) : b.call(null, r, c, h);
          var t = L(m);
          c = n - 1;
          m = t;
          n = c;
        }
      }
    }
    return E(a, e);
  } finally {
    za = k;
  }
}
function Wf(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.N(null, f);
      E(a, h);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, Zc(d) ? (c = Pb(d), e = Qb(d), d = c, h = P(c), c = e, e = h) : (h = J(d), E(a, h), c = L(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Xf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Yf(a) {
  return [z('"'), z(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Xf[a];
  })), z('"')].join("");
}
function Zf(a, b) {
  var c = cd(F(a, Fa));
  return c ? (c = null != b ? b.h & 131072 || b.Xb ? !0 : !1 : !1) ? null != Tc(b) : c : c;
}
function $f(a, b, c) {
  if (null == a) {
    return E(b, "nil");
  }
  if (Zf(c, a)) {
    E(b, "^");
    var d = Tc(a);
    W.f ? W.f(d, b, c) : W.call(null, d, b, c);
    E(b, " ");
  }
  if (a.Lb) {
    return a.fc(b);
  }
  if (null != a && (a.h & 2147483648 || a.R)) {
    return a.J(null, b, c);
  }
  if (!0 === a || !1 === a || "number" === typeof a) {
    return E(b, "" + z(a));
  }
  if (null != a && a.constructor === Object) {
    return E(b, "#js "), d = V.a(function(b) {
      return new T(null, 2, 5, U, [zd.b(b), a[b]], null);
    }, $c(a)), ag.D ? ag.D(d, W, b, c) : ag.call(null, d, W, b, c);
  }
  if (Ka(a)) {
    return Uf(b, W, "#js [", " ", "]", c, a);
  }
  if (ba(a)) {
    return u(Ea.b(c)) ? E(b, Yf(a)) : E(b, a);
  }
  if (ca(a)) {
    var e = a.name;
    c = u(function() {
      var a = null == e;
      return a ? a : /^[\s\xa0]*$/.test(e);
    }()) ? "Function" : e;
    return Wf(b, Gc(["#object[", c, ' "', "" + z(a), '"]'], 0));
  }
  if (a instanceof Date) {
    return c = function(a, b) {
      for (var c = "" + z(a);;) {
        if (P(c) < b) {
          c = [z("0"), z(c)].join("");
        } else {
          return c;
        }
      }
    }, Wf(b, Gc(['#inst "', "" + z(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  if (a instanceof RegExp) {
    return Wf(b, Gc(['#"', a.source, '"'], 0));
  }
  if (null != a && (a.h & 2147483648 || a.R)) {
    return Cb(a, b, c);
  }
  if (u(a.constructor.ob)) {
    return Wf(b, Gc(["#object[", a.constructor.ob.replace(RegExp("/", "g"), "."), "]"], 0));
  }
  e = a.constructor.name;
  c = u(function() {
    var a = null == e;
    return a ? a : /^[\s\xa0]*$/.test(e);
  }()) ? "Object" : e;
  return Wf(b, Gc(["#object[", c, " ", "" + z(a), "]"], 0));
}
function W(a, b, c) {
  var d = bg.b(c);
  return u(d) ? (c = R.f(c, cg, $f), d.f ? d.f(a, b, c) : d.call(null, a, b, c)) : $f(a, b, c);
}
function dg(a, b) {
  var c;
  if (null == a || La(G(a))) {
    c = "";
  } else {
    c = z;
    var d = new na;
    a: {
      var e = new Vb(d);
      W(J(a), e, b);
      for (var f = G(L(a)), h = null, k = 0, l = 0;;) {
        if (l < k) {
          var m = h.N(null, l);
          E(e, " ");
          W(m, e, b);
          l += 1;
        } else {
          if (f = G(f)) {
            h = f, Zc(h) ? (f = Pb(h), k = Qb(h), h = f, m = P(f), f = k, k = m) : (m = J(h), E(e, " "), W(m, e, b), f = L(h), h = null, k = 0), l = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(d);
  }
  return c;
}
function ke() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  return dg(0 < a.length ? new I(a.slice(0), 0) : null, Ca());
}
function eg(a) {
  var b = R.f(Ca(), Ea, !1);
  a = dg(a, b);
  xa.b ? xa.b(a) : xa.call(null);
  u(!0) && (a = Ca(), xa.b ? xa.b("\n") : xa.call(null), F(a, Da));
}
function ag(a, b, c, d) {
  return Uf(c, function(a, c, d) {
    var k = gb(a);
    b.f ? b.f(k, c, d) : b.call(null, k, c, d);
    E(c, " ");
    a = ib(a);
    return b.f ? b.f(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
I.prototype.R = !0;
I.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
Bd.prototype.R = !0;
Bd.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
Cf.prototype.R = !0;
Cf.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
Ze.prototype.R = !0;
Ze.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
Ke.prototype.R = !0;
Ke.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
xd.prototype.R = !0;
xd.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
Dc.prototype.R = !0;
Dc.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
Hf.prototype.R = !0;
Hf.prototype.J = function(a, b, c) {
  return ag(this, W, b, c);
};
Ef.prototype.R = !0;
Ef.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
Oe.prototype.R = !0;
Oe.prototype.J = function(a, b, c) {
  return Uf(b, W, "[", " ", "]", c, this);
};
Pf.prototype.R = !0;
Pf.prototype.J = function(a, b, c) {
  return Uf(b, W, "#{", " ", "}", c, this);
};
Fd.prototype.R = !0;
Fd.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
ce.prototype.R = !0;
ce.prototype.J = function(a, b, c) {
  E(b, "#object [cljs.core.Atom ");
  W(new q(null, 1, [fg, this.state], null), b, c);
  return E(b, "]");
};
Lf.prototype.R = !0;
Lf.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
T.prototype.R = !0;
T.prototype.J = function(a, b, c) {
  return Uf(b, W, "[", " ", "]", c, this);
};
ud.prototype.R = !0;
ud.prototype.J = function(a, b) {
  return E(b, "()");
};
q.prototype.R = !0;
q.prototype.J = function(a, b, c) {
  return ag(this, W, b, c);
};
Kf.prototype.R = !0;
Kf.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
td.prototype.R = !0;
td.prototype.J = function(a, b, c) {
  return Uf(b, W, "(", " ", ")", c, this);
};
ic.prototype.$a = !0;
ic.prototype.Ua = function(a, b) {
  if (b instanceof ic) {
    return hc(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
S.prototype.$a = !0;
S.prototype.Ua = function(a, b) {
  if (b instanceof S) {
    return yd(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
Oe.prototype.$a = !0;
Oe.prototype.Ua = function(a, b) {
  if (Yc(b)) {
    return fd(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
T.prototype.$a = !0;
T.prototype.Ua = function(a, b) {
  if (Yc(b)) {
    return fd(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
var gg;
a: {
  var hg = aa.navigator;
  if (hg) {
    var ig = hg.userAgent;
    if (ig) {
      gg = ig;
      break a;
    }
  }
  gg = "";
}
;var jg = -1 != gg.indexOf("Opera") || -1 != gg.indexOf("OPR"), kg = -1 != gg.indexOf("Trident") || -1 != gg.indexOf("MSIE"), lg = -1 != gg.indexOf("Edge"), mg = -1 != gg.indexOf("Gecko") && !(-1 != gg.toLowerCase().indexOf("webkit") && -1 == gg.indexOf("Edge")) && !(-1 != gg.indexOf("Trident") || -1 != gg.indexOf("MSIE")) && -1 == gg.indexOf("Edge"), ng = -1 != gg.toLowerCase().indexOf("webkit") && -1 == gg.indexOf("Edge");
function og() {
  var a = gg;
  if (mg) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (lg) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (kg) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (ng) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function pg() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var qg = function() {
  if (jg && aa.opera) {
    var a = aa.opera.version;
    return ca(a) ? a() : a;
  }
  var a = "", b = og();
  b && (a = b ? b[1] : "");
  return kg && (b = pg(), b > parseFloat(a)) ? String(b) : a;
}(), rg = {};
function sg(a) {
  var b;
  if (!(b = rg[a])) {
    b = 0;
    for (var c = fa(String(qg)).split("."), d = fa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], r = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == r[0].length) {
          break;
        }
        b = ga(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ga(0 == n[2].length, 0 == r[2].length) || ga(n[2], r[2]);
      } while (0 == b);
    }
    b = rg[a] = 0 <= b;
  }
  return b;
}
var tg = aa.document, ug = tg && kg ? pg() || ("CSS1Compat" == tg.compatMode ? parseInt(qg, 10) : 5) : void 0;
!mg && !kg || kg && 9 <= ug || mg && sg("1.9.1");
kg && sg("9");
la("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var vg = new S(null, "y", "y", -1757859776), wg = new S(null, "key-code", "key-code", -1732114304), xg = new S(null, "shift", "shift", 997140064), yg = new S(null, "features", "features", -1146962336), zg = new S(null, "disable-stroke-perspective", "disable-stroke-perspective", 479198433), Ag = new S(null, "down", "down", 1565245570), Bg = new S(null, "enable-retina-pixels", "enable-retina-pixels", 1018316034), Cg = new S(null, "disable-depth-mask", "disable-depth-mask", 3298562), Dg = new S(null, 
"p-y", "p-y", -530704830), Eg = new S(null, "burn", "burn", -458179293), Fg = new S(null, "key-typed", "key-typed", -876037597), Gg = new S(null, "mouse-clicked", "mouse-clicked", -199339421), Hg = new S(null, "mouse-released", "mouse-released", -664480061), Ig = new S(null, "fn", "fn", -1175266204), Jg = new S(null, "f8", "f8", -2141475484), Fa = new S(null, "meta", "meta", 1499536964), Kg = new S(null, "screen", "screen", 1990059748), Lg = new S(null, "enable-depth-test", "enable-depth-test", 1519326084), 
Mg = new S(null, "mouse-exited", "mouse-exited", -483205244), Ng = new S(null, "enable-depth-sort", "enable-depth-sort", -383089627), Og = new S(null, "f1", "f1", 1714532389), Ga = new S(null, "dup", "dup", 556298533), Pg = new S(null, "java2d", "java2d", 166099237), Qg = new S(null, "disable-texture-mipmaps", "disable-texture-mipmaps", 1697917541), Rg = new S(null, "key", "key", -1516042587), Sg = new S(null, "darkest", "darkest", 68197253), Tg = new S(null, "f10", "f10", 627525541), Ug = new S(null, 
"dodge", "dodge", -1556666427), Vg = new S(null, "on-close", "on-close", -761178394), Wg = new S(null, "disable-stroke-pure", "disable-stroke-pure", 735493926), Xg = new S(null, "replace", "replace", -786587770), Yg = new S(null, "alt", "alt", -3214426), Zg = new S(null, "button", "button", 1456579943), je = new ic(null, "new-value", "new-value", -1567397401, null), $g = new S(null, "mouse-wheel", "mouse-wheel", 1811662439), ge = new S(null, "validator", "validator", -1966190681), ah = new S(null, 
"disable-depth-test", "disable-depth-test", 284606407), bh = new S(null, "keyPressed", "keyPressed", 1791025256), ch = new S(null, "wander-strength", "wander-strength", 941925801), dh = new S(null, "enable-stroke-perspective", "enable-stroke-perspective", -259923319), eh = new S(null, "maxx", "maxx", 23572233), fh = new S(null, "minx", "minx", 1094774569), gh = new S(null, "opengl", "opengl", -614998103), hh = new S(null, "time", "time", 1385887882), ih = new S(null, "mouse-moved", "mouse-moved", 
-1918152310), jh = new S(null, "width", "width", -384071477), kh = new S(null, "enable-native-fonts", "enable-native-fonts", -1989072693), lh = new S(null, "mouseOut", "mouseOut", -386669045), mh = new S(null, "f5", "f5", 1587057387), nh = new S(null, "command", "command", -894540724), oh = new S(null, "mouseScrolled", "mouseScrolled", 31878252), fg = new S(null, "val", "val", 128701612), ph = new S(null, "update", "update", 1045576396), ie = new ic(null, "validate", "validate", 1439230700, null), 
rh = new S(null, "state", "state", -1988618099), sh = new S(null, "behaviors", "behaviors", 120724909), cg = new S(null, "fallback-impl", "fallback-impl", -1501286995), Da = new S(null, "flush-on-newline", "flush-on-newline", -151457939), th = new S(null, "mouseDragged", "mouseDragged", 129975181), uh = new S(null, "up", "up", -269712113), vh = new S(null, "renderer", "renderer", 336841071), wh = new S(null, "size", "size", 1098693007), xh = new S(null, "title", "title", 636505583), yh = new S(null, 
"center", "center", -748944368), zh = new S(null, "setup", "setup", 1987730512), Ah = new S(null, "mouse-pressed", "mouse-pressed", 736955536), Bh = new S(null, "middleware", "middleware", 1462115504), Ch = new S(null, "disable-optimized-stroke", "disable-optimized-stroke", 74038544), Dh = new S(null, "focus-gained", "focus-gained", -857086384), Ea = new S(null, "readably", "readably", 1129599760), Eh = new S(null, "global-key-events", "global-key-events", 335064944), Vf = new S(null, "more-marker", 
"more-marker", -14717935), Fh = new S(null, "world", "world", -418292623), Gh = new S(null, "f11", "f11", -1417398799), Hh = new S(null, "host", "host", -1558485167), Ih = new S(null, "wander", "wander", 1245626610), Jh = new S(null, "overlay", "overlay", -139131598), Kh = new S(null, "mouse-entered", "mouse-entered", 811350322), Lh = new S(null, "enable-opengl-errors", "enable-opengl-errors", 89998962), Mh = new S(null, "enable-stroke-pure", "enable-stroke-pure", 881345587), Nh = new S(null, "no-safe-draw", 
"no-safe-draw", -1157778157), Oh = new S(null, "focus-lost", "focus-lost", -554849613), Ph = new S(null, "f3", "f3", 1954829043), Qh = new S(null, "enable-depth-mask", "enable-depth-mask", 872785875), Rh = new S(null, "key-pressed", "key-pressed", -757100364), Sh = new S(null, "key-released", "key-released", 215919828), Ia = new S(null, "print-length", "print-length", 1931866356), Th = new S(null, "f2", "f2", 396168596), Uh = new S(null, "boid", "boid", -1588406796), Vh = new S(null, "keyReleased", 
"keyReleased", 541714964), Wh = new S(null, "control", "control", 1892578036), Xh = new S(null, "difference", "difference", 1916101396), Yh = new S(null, "mouseClicked", "mouseClicked", 1764302965), Zh = new S(null, "enable-optimized-stroke", "enable-optimized-stroke", 1537575253), $h = new S(null, "p-x", "p-x", -1721211211), ai = new S(null, "p2d", "p2d", -2106175755), bi = new S(null, "mouseReleased", "mouseReleased", 1116234838), ci = new S(null, "mousePressed", "mousePressed", 1776186454), di = 
new S(null, "mouseMoved", "mouseMoved", -1936954058), ei = new S(null, "f12", "f12", 853352790), fi = new S(null, "mouseOver", "mouseOver", -1334461930), gi = new S(null, "exclusion", "exclusion", 531897910), hi = new S(null, "disable-opengl-errors", "disable-opengl-errors", 506822839), ii = new S(null, "unknown-key", "unknown-key", 255305911), ji = new S(null, "right", "right", -452581833), ki = new S(null, "host-id", "host-id", 742376279), li = new S(null, "hard-light", "hard-light", -37591145), 
mi = new S(null, "disable-retina-pixels", "disable-retina-pixels", -2049264713), ni = new S(null, "keyTyped", "keyTyped", 1437329399), oi = new S(null, "multiply", "multiply", -1036907048), pi = new S(null, "lightest", "lightest", -2043115912), qi = new S(null, "f7", "f7", 356150168), ri = new S(null, "x", "x", 2099068185), si = new S(null, "blend", "blend", 249565561), ti = new S(null, "disable-depth-sort", "disable-depth-sort", -1568352839), ui = new S(null, "raw-key", "raw-key", -162482279), Wd = 
new ic(null, "quote", "quote", 1377916282, null), Xd = new ic(null, "meta10515", "meta10515", 1090587066, null), vi = new S(null, "f9", "f9", 704633338), wi = new S(null, "maxy", "maxy", 726027898), xi = new S(null, "draw", "draw", 1358331674), Vd = new S(null, "arglists", "arglists", 1661989754), Ud = new ic(null, "nil-iter", "nil-iter", 1101030523, null), yi = new S(null, "add", "add", 235287739), zi = new S(null, "wander-rate", "wander-rate", -1437152069), Ai = new S(null, "soft-light", "soft-light", 
513207899), bg = new S(null, "alt-impl", "alt-impl", 670969595), Bi = new S(null, "subtract", "subtract", 2136988635), se = new S(null, "wander-direction", "wander-direction", 1481156668), Ci = new S(null, "f6", "f6", 2103080604), Di = new S(null, "f4", "f4", 990968764), Ei = new S(null, "miny", "miny", -1513078883), Fi = new S(null, "p3d", "p3d", -850380194), Gi = new S(null, "height", "height", 1025178622), Hi = new S(null, "mouse-dragged", "mouse-dragged", -1220073441), Ii = new S(null, "left", 
"left", -399115937), Ji = new S(null, "enable-texture-mipmaps", "enable-texture-mipmaps", 1241892671), Ki = new S(null, "disable-native-fonts", "disable-native-fonts", -931436705);
var Li = new q(null, 3, [new S(null, "decor", "decor", -1730969431), new T(null, 2, 5, U, ["2.0", "Try :features [:present] for similar effect"], null), new S(null, "target", "target", 253001721), new T(null, 2, 5, U, ["2.0", "Use :features [:keep-on-top] instead."], null), new S(null, "safe-draw-fn", "safe-draw-fn", 1454900202), new T(null, 2, 5, U, ["2.0", "Use :features [:no-safe-fns] instead."], null)], null);
function Mi(a) {
  a = Sf(a);
  u(a.b ? a.b(Nh) : a.call(null, Nh)) && eg(Gc(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.", "Use :feature [:no-safe-fns] now."], 0));
  return null == a ? null : kb(a, Nh);
}
function Ni(a) {
  var b = qe.f(a, new T(null, 1, 5, U, [yg], null), Mi);
  return oe.a(Yd, ne(Ja, function() {
    return function(a) {
      return function e(b) {
        return new Bd(null, function() {
          return function() {
            for (;;) {
              var a = G(b);
              if (a) {
                if (Zc(a)) {
                  var c = Pb(a), l = P(c), m = new Dd(Array(l), 0);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = B.a(c, a), e = Q(b, 0), f = Q(b, 1), b = m;
                        var h = Li.b ? Li.b(e) : Li.call(null, e);
                        u(h) ? (f = Q(h, 0), h = Q(h, 1), eg(Gc([e, "option was removed in Quil", f, ".", h], 0)), e = null) : e = new T(null, 2, 5, U, [e, f], null);
                        b.add(e);
                        a += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Gd(m.ka(), e(Qb(a))) : Gd(m.ka(), null);
                }
                var n = J(a), r = Q(n, 0), t = Q(n, 1);
                return N(function() {
                  var a = Li.b ? Li.b(r) : Li.call(null, r);
                  if (u(a)) {
                    var b = Q(a, 0), a = Q(a, 1);
                    eg(Gc([r, "option was removed in Quil", b, ".", a], 0));
                    return null;
                  }
                  return new T(null, 2, 5, U, [r, t], null);
                }(), e(lc(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()));
}
;var Oi = !kg || 9 <= ug, Pi = kg && !sg("9");
!ng || sg("528");
mg && sg("1.9b") || kg && sg("8") || jg && sg("9.5") || ng && sg("528");
mg && !sg("8") || kg && sg("9");
function Qi(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Db = !1;
}
Qi.prototype.stopPropagation = function() {
  this.Db = !0;
};
Qi.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Ri(a) {
  Ri[" "](a);
  return a;
}
Ri[" "] = function() {
};
function Si(a, b) {
  Qi.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.bb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (mg) {
        var e;
        a: {
          try {
            Ri(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = ng || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = ng || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.bb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = Qi.prototype;
  Si.Ob = Qi.prototype;
  Si.prototype = new a;
  Si.prototype.constructor = Si;
  Si.ib = function(a, c, d) {
    for (var e = Array(arguments.length - 2), f = 2;f < arguments.length;f++) {
      e[f - 2] = arguments[f];
    }
    return Qi.prototype[c].apply(a, e);
  };
})();
Si.prototype.stopPropagation = function() {
  Si.Ob.stopPropagation.call(this);
  this.bb.stopPropagation ? this.bb.stopPropagation() : this.bb.cancelBubble = !0;
};
Si.prototype.preventDefault = function() {
  Si.Ob.preventDefault.call(this);
  var a = this.bb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Pi) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Ti = "closure_listenable_" + (1E6 * Math.random() | 0), Ui = 0;
function Vi(a, b, c, d, e) {
  this.listener = a;
  this.pb = null;
  this.src = b;
  this.type = c;
  this.jb = !!d;
  this.Bb = e;
  this.key = ++Ui;
  this.hb = this.sb = !1;
}
function Wi(a) {
  a.hb = !0;
  a.listener = null;
  a.pb = null;
  a.src = null;
  a.Bb = null;
}
;function Xi(a) {
  this.src = a;
  this.na = {};
  this.qb = 0;
}
Xi.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.na[f];
  a || (a = this.na[f] = [], this.qb++);
  var h = Yi(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.sb = !1)) : (b = new Vi(b, this.src, f, !!d, e), b.sb = c, a.push(b));
  return b;
};
Xi.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.na)) {
    return !1;
  }
  var e = this.na[a];
  b = Yi(e, b, c, d);
  return -1 < b ? (Wi(e[b]), oa.splice.call(e, b, 1), 0 == e.length && (delete this.na[a], this.qb--), !0) : !1;
};
Xi.prototype.hasListener = function(a, b) {
  var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
  return ja(this.na, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].jb != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function Yi(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.hb && f.listener == b && f.jb == !!c && f.Bb == d) {
      return e;
    }
  }
  return -1;
}
;var Zi = "closure_lm_" + (1E6 * Math.random() | 0), $i = {}, aj = 0;
function bj() {
  var a = cj, b = Oi ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function dj(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var f = 0;f < b.length;f++) {
      dj(a, b[f], c, d, e);
    }
  } else {
    if (c = ej(c), a && a[Ti]) {
      a.tc(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = fj(a);
      h || (a[Zi] = h = new Xi(a));
      c = h.add(b, c, !0, d, e);
      if (!c.pb) {
        d = bj();
        c.pb = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) {
          a.addEventListener(b.toString(), d, f);
        } else {
          if (a.attachEvent) {
            a.attachEvent(gj(b.toString()), d);
          } else {
            throw Error("addEventListener and attachEvent are unavailable.");
          }
        }
        aj++;
      }
    }
  }
}
function gj(a) {
  return a in $i ? $i[a] : $i[a] = "on" + a;
}
function hj(a, b, c, d) {
  var e = !0;
  if (a = fj(a)) {
    if (b = a.na[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.jb == c && !f.hb && (f = ij(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function ij(a, b) {
  var c = a.listener, d = a.Bb || a.src;
  if (a.sb && "number" != typeof a && a && !a.hb) {
    var e = a.src;
    if (e && e[Ti]) {
      e.uc(a);
    } else {
      var f = a.type, h = a.pb;
      e.removeEventListener ? e.removeEventListener(f, h, a.jb) : e.detachEvent && e.detachEvent(gj(f), h);
      aj--;
      if (f = fj(e)) {
        var h = a.type, k;
        if (k = h in f.na) {
          k = f.na[h];
          var l = pa(k, a), m;
          (m = 0 <= l) && oa.splice.call(k, l, 1);
          k = m;
        }
        k && (Wi(a), 0 == f.na[h].length && (delete f.na[h], f.qb--));
        0 == f.qb && (f.src = null, e[Zi] = null);
      } else {
        Wi(a);
      }
    }
  }
  return c.call(d, b);
}
function cj(a, b) {
  if (a.hb) {
    return !0;
  }
  if (!Oi) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Si(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, k = e.length - 1;!c.Db && 0 <= k;k--) {
        c.currentTarget = e[k];
        var l = hj(e[k], f, !0, c), d = d && l;
      }
      for (k = 0;!c.Db && k < e.length;k++) {
        c.currentTarget = e[k], l = hj(e[k], f, !1, c), d = d && l;
      }
    }
    return d;
  }
  return ij(a, new Si(b, this));
}
function fj(a) {
  a = a[Zi];
  return a instanceof Xi ? a : null;
}
var jj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function ej(a) {
  if (ca(a)) {
    return a;
  }
  a[jj] || (a[jj] = function(b) {
    return a.handleEvent(b);
  });
  return a[jj];
}
;function kj(a) {
  var b = lj;
  if (u(F(b, a))) {
    return F(b, a);
  }
  var c;
  a: {
    c = [a];
    var d = c.length;
    if (d <= df) {
      for (var e = 0, f = Fb(Yd);;) {
        if (e < d) {
          var h = e + 1, f = Ib(f, c[e], null), e = h
        } else {
          c = new Pf(null, Hb(f), null);
          break a;
        }
      }
    } else {
      for (e = 0, f = Fb(Rf);;) {
        if (e < d) {
          h = e + 1, f = Gb(f, c[e]), e = h;
        } else {
          c = Hb(f);
          break a;
        }
      }
    }
  }
  if (u($d(c, bf(b)))) {
    return a;
  }
  throw Error([z("Expecting a keyword, got: "), z(a), z(". Expected one of: "), z(Je(hd(af(b))))].join(""));
}
;var X = null, lj = new q(null, 4, [Pg, Processing.prototype.PConstants.JAVA2D, ai, Processing.prototype.PConstants.P2D, Fi, Processing.prototype.PConstants.P3D, gh, Processing.prototype.PConstants.OPENGL], null), mj = function mj() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return mj.a(arguments[0], arguments[1]);
    case 3:
      return mj.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
mj.a = function(a, b) {
  return X.size(a | 0, b | 0);
};
mj.f = function(a, b, c) {
  return X.size(a | 0, b | 0, kj(c));
};
mj.v = 3;
function nj(a, b) {
  for (var c = G(Pc([bh, lh, oh, th, zh, Vh, Yh, bi, ci, di, fi, ni, xi], [Rh, Mg, $g, Hi, zh, Sh, Gg, Hg, Ah, ih, Kh, Fg, xi])), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.N(null, f), k = Q(h, 0), l = Q(h, 1), m = b.b ? b.b(l) : b.call(null, l);
      if (u(m)) {
        var n = m;
        a[Ad(k)] = function(b, c, d, e, f) {
          return function() {
            var b = X;
            X = a;
            try {
              return f.o ? f.o() : f.call(null);
            } finally {
              X = b;
            }
          };
        }(c, d, e, f, n, m, h, k, l);
      }
      f += 1;
    } else {
      if (m = G(c)) {
        h = m;
        if (Zc(h)) {
          c = Pb(h), f = Qb(h), d = c, e = P(c), c = f;
        } else {
          var n = J(h), k = Q(n, 0), l = Q(n, 1), r = b.b ? b.b(l) : b.call(null, l);
          if (u(r)) {
            var t = r;
            a[Ad(k)] = function(b, c, d, e, f) {
              return function() {
                var b = X;
                X = a;
                try {
                  return f.o ? f.o() : f.call(null);
                } finally {
                  X = b;
                }
              };
            }(c, d, e, f, t, r, n, k, l, h, m);
          }
          c = L(h);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
}
function oj(a) {
  var b = Mf(Gc([new q(null, 1, [wh, new T(null, 2, 5, U, [500, 300], null)], null), function(b) {
    return b.b ? b.b(a) : b.call(null, a);
  }.call(null, Od(be, N(Ni, Bh.a(a, Mc))))], 0)), c = function() {
    var a = wh.b(b);
    return u(a) ? a : new T(null, 2, 5, U, [200, 200], null);
  }(), d = vh.b(b), e = Sf(yg.b(b)), f = qe.f(qe.f(b, new T(null, 1, 5, U, [zh], null), function(a, b, c, d) {
    return function(e) {
      return function(a, b, c) {
        return function() {
          Od(mj, Ld.a(b, u(c) ? new T(null, 1, 5, U, [c], null) : Mc));
          return u(e) ? e.o ? e.o() : e.call(null) : null;
        };
      }(a, b, c, d);
    };
  }(b, c, d, e)), new T(null, 1, 5, U, [$g], null), function(a, b, c, d) {
    return function(e) {
      return u(e) ? function() {
        return function() {
          var a = -1 * X.mouseScroll;
          return e.b ? e.b(a) : e.call(null, a);
        };
      }(a, b, c, d) : null;
    };
  }(b, c, d, e)), c = new Processing.Sketch(function(a, b, c, d, e) {
    return function(a) {
      nj(a, e);
      a.gb = ee ? ee(null) : de.call(null, null);
      return a.jc = ee ? ee(60) : de.call(null, 60);
    };
  }(b, c, d, e, f));
  dd(e, Eh) && (c.options.globalKeyEvents = !0);
  return c;
}
var pj = function pj() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  return pj.l(0 < b.length ? new I(b.slice(0), 0) : null);
};
pj.l = function(a) {
  var b = Od(fe, a);
  a = function() {
    var a = Hh.b(b), c = document;
    return ba(a) ? c.getElementById(a) : a;
  }();
  var c = function() {
    var a = vh.b(b);
    return u(a) ? a : ai;
  }();
  return u(a) ? (u(a.Mb) ? M.a(c, a.Mb) || console.warn("WARNING: Using different context on one canvas!") : a.Mb = c, new Processing(a, oj(b))) : console.warn("WARNING: Cannot create sketch. :host is not specified.");
};
pj.v = 0;
pj.w = function(a) {
  return pj.l(G(a));
};
var qj = ee ? ee(K) : de.call(null, K);
function rj(a) {
  var b = document.createElement("canvas");
  b.setAttribute("id", a);
  document.body.appendChild(b);
}
dj(window, "load", function() {
  for (var a = 1 >= document.body.childNodes.length, b = G(uc.b ? uc.b(qj) : uc.call(null, qj)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e);
      u(a) && rj(ki.b(f));
      Ig.b(f).call(null);
      e += 1;
    } else {
      if (b = G(b)) {
        c = b, Zc(c) ? (b = Pb(c), d = Qb(c), c = b, f = P(b), b = d, d = f) : (f = J(c), u(a) && rj(ki.b(f)), Ig.b(f).call(null), b = L(c), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
});
function Z() {
  return u(null) ? null : X;
}
Pc([Eg, Kg, Sg, Ug, Xg, Jh, Xh, gi, li, oi, pi, si, yi, Ai, Bi], [Processing.prototype.PConstants.BURN, Processing.prototype.PConstants.SCREEN, Processing.prototype.PConstants.DARKEST, Processing.prototype.PConstants.DODGE, Processing.prototype.PConstants.REPLACE, Processing.prototype.PConstants.OVERLAY, Processing.prototype.PConstants.DIFFERENCE, Processing.prototype.PConstants.EXCLUSION, Processing.prototype.PConstants.HARD_LIGHT, Processing.prototype.PConstants.MULTIPLY, Processing.prototype.PConstants.LIGHTEST, 
Processing.prototype.PConstants.BLEND, Processing.prototype.PConstants.ADD, Processing.prototype.PConstants.SOFT_LIGHT, Processing.prototype.PConstants.SUBTRACT]);
Pc([zg, Bg, Cg, Lg, Ng, Qg, Wg, ah, dh, kh, Ch, Lh, Mh, Qh, Zh, hi, mi, ti, Ji, Ki], [Processing.prototype.PConstants.DISABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.ENABLE_RETINA_PIXELS, Processing.prototype.PConstants.DISABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_DEPTH_SORT, Processing.prototype.PConstants.DISABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_STROKE_PURE, Processing.prototype.PConstants.DISABLE_DEPTH_TEST, 
Processing.prototype.PConstants.ENABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.ENABLE_NATIVE_FONTS, Processing.prototype.PConstants.DISABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.ENABLE_OPENGL_ERRORS, Processing.prototype.PConstants.ENABLE_STROKE_PURE, Processing.prototype.PConstants.ENABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.DISABLE_OPENGL_ERRORS, Processing.prototype.PConstants.DISABLE_RETINA_PIXELS, Processing.prototype.PConstants.DISABLE_DEPTH_SORT, 
Processing.prototype.PConstants.ENABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_NATIVE_FONTS]);
var sj = Pc([121, 39, 157, 119, 116, 113, 40, 117, 118, 122, 17, 115, 112, 123, 16, 120, 38, 18, 114, 37], [Tg, ji, nh, Jg, mh, Th, Ag, Ci, qi, Gh, Wh, Di, Og, ei, xg, vi, uh, Yg, Ph, Ii]), tj = function tj() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return tj.a(arguments[0], arguments[1]);
    case 4:
      return tj.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 6:
      return tj.ha(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
tj.a = function(a, b) {
  return Od(tj, Ld.a(a, b));
};
tj.D = function(a, b, c, d) {
  return Z().line(a, b, c, d);
};
tj.ha = function(a, b, c, d, e, f) {
  return Z().line(a, b, c, d, e, f);
};
tj.v = 6;
function uj() {
  var a = X.mouseButton;
  return u(M.a ? M.a(37, a) : M.call(null, 37, a)) ? Ii : u(M.a ? M.a(39, a) : M.call(null, 39, a)) ? ji : u(M.a ? M.a(3, a) : M.call(null, 3, a)) ? yh : null;
}
var vj = function vj() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return vj.b(arguments[0]);
    case 4:
      return vj.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
vj.b = function(a) {
  return Z().rotate(a);
};
vj.D = function(a, b, c, d) {
  return Z().rotate(a, b, c, d);
};
vj.v = 4;
var wj = function wj() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return wj.b(arguments[0]);
    case 2:
      return wj.a(arguments[0], arguments[1]);
    case 3:
      return wj.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
wj.b = function(a) {
  return Od(wj, a);
};
wj.a = function(a, b) {
  return Z().translate(a, b);
};
wj.f = function(a, b, c) {
  return Z().translate(a, b, c);
};
wj.v = 3;
function xj(a) {
  var b = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a, b = F(b, Fh), c = null != b && (b.h & 64 || b.Z) ? Od(fe, b) : b, d = F(c, fh), e = F(c, eh), b = F(c, Ei), c = F(c, wi), d = e - d, b = c - b, b = d > b ? d : b, d = X.width, e = X.height, c = d < e ? d : e;
  Z().background(0, 0, 0);
  wj.a(.5 * d, .5 * e);
  Z().scale(1, -1);
  Z().scale(c / b);
  Z().strokeWeight(b / c);
  var f;
  a: {
    a = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a;
    a = F(a, Uh);
    c = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a;
    e = F(c, rh);
    Q(e, 0);
    b = Q(e, 1);
    d = Q(e, 2);
    a = Q(e, 3);
    var e = Q(e, 4), h = F(c, sh), h = null != h && (h.h & 64 || h.Z) ? Od(fe, h) : h, h = F(h, Ih), k = null != h && (h.h & 64 || h.Z) ? Od(fe, h) : h, h = F(k, se), l = F(k, ch), k = F(k, zi), m = F(c, jh), n = F(c, Gi), c = .5 * m, m = .5 * n, b = new T(null, 2, 5, U, [b, d], null);
    Z().pushMatrix();
    try {
      wj.b(b);
      var r = new T(null, 1, 5, U, [Math.atan2(e, a)], null);
      Z().pushMatrix();
      try {
        Od(vj, r);
        Z().fill(255);
        Z().stroke(255);
        tj.a(new T(null, 2, 5, U, [0, 0], null), new T(null, 2, 5, U, [1 * Math.sqrt(2), 0], null));
        var t = new T(null, 2, 5, U, [1 * Math.sqrt(2), 0], null);
        Z().pushMatrix();
        try {
          wj.b(t);
          Z().noFill();
          Z().stroke(0, 255, 255);
          Z().ellipse(0, 0, 2, 2);
          var v = new T(null, 1, 5, U, [h], null);
          Z().pushMatrix();
          try {
            Od(vj, v);
            Z().stroke(255, 255, 0);
            tj.a(new T(null, 2, 5, U, [0, 0], null), new T(null, 2, 5, U, [l, 0], null));
            var x = new T(null, 2, 5, U, [l, 0], null);
            Z().pushMatrix();
            try {
              wj.b(x), Z().stroke(255, 0, 0), Z().ellipse(0, 0, 2 * k, 2 * k);
            } finally {
              Z().popMatrix();
            }
          } finally {
            Z().popMatrix();
          }
        } finally {
          Z().popMatrix();
        }
        var A = new T(null, 1, 5, U, [X.radians(-90)], null);
        Z().pushMatrix();
        try {
          Od(vj, A);
          Z().stroke(0, 255, 0);
          f = Z().triangle(-c, -m, 0, m, c, -m);
          break a;
        } finally {
          Z().popMatrix();
        }
      } finally {
        Z().popMatrix();
      }
    } finally {
      Z().popMatrix();
    }
    f = void 0;
  }
  return f;
}
;z("state map is missing :navigation-3d key. ");
z("Did you accidentally removed it from the state in ");
z(":update or any other handler?");
zd.b(" ");
z("state map is missing :navigation-2d key. ");
z("Did you accidentally removed it from the state in ");
z(":update or any other handler?");
function yj(a) {
  var b = zh.a(a, function() {
    return null;
  });
  return R.f(a, zh, function(a) {
    return function() {
      var b = X.gb, e = a.o ? a.o() : a.call(null);
      return he.a ? he.a(b, e) : he.call(null, b, e);
    };
  }(b));
}
function zj(a) {
  var b = xi.a(a, function() {
    return null;
  }), c = ph.a(a, md), b = function(a, b) {
    return function() {
      var c = le.a(X.gb, M.a(X.frameCount, 1) ? md : b);
      return a.b ? a.b(c) : a.call(null, c);
    };
  }(b, c);
  return R.f(Qc.a(a, ph), xi, b);
}
function Aj() {
  return new q(null, 2, [ri, X.mouseX, vg, X.mouseY], null);
}
function Bj() {
  return new q(null, 3, [ri, X.mouseX, vg, X.mouseY, Zg, uj()], null);
}
function Cj() {
  var a;
  a = X.key;
  var b = X.keyCode;
  a = u(M.a(65535, ("" + z(a)).charCodeAt())) ? jc(sj, b, ii) : zd.b("" + z(a));
  return new q(null, 3, [Rg, a, wg, X.keyCode, ui, X.key], null);
}
var Dj = function Dj() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Dj.a(arguments[0], arguments[1]);
    case 3:
      return Dj.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
};
Dj.a = function(a, b) {
  return Dj.f(a, b, null);
};
Dj.f = function(a, b, c) {
  var d = a.b ? a.b(b) : a.call(null, b);
  return u(d) ? R.f(a, b, u(c) ? function(a) {
    return function() {
      return le.f(X.gb, a, c.o ? c.o() : c.call(null));
    };
  }(d, d) : function(a) {
    return function() {
      return le.a(X.gb, a);
    };
  }(d, d)) : a;
};
Dj.v = 3;
function Ej(a, b) {
  return jd(function(a, b) {
    return b instanceof S ? Dj.a(a, b) : Pd(Dj, a, b);
  }, a, b);
}
function Fj(a) {
  var b = $g.b(a);
  return u(b) ? R.f(a, $g, function(a) {
    return function(b) {
      return le.f(X.gb, a, b);
    };
  }(b, b)) : a;
}
function Gj(a) {
  return Fj(Ej(zj(yj(a)), Gc([Dh, Oh, new T(null, 2, 5, U, [Kh, Aj], null), new T(null, 2, 5, U, [Mg, Aj], null), new T(null, 2, 5, U, [Ah, Bj], null), new T(null, 2, 5, U, [Hg, Aj], null), new T(null, 2, 5, U, [Gg, Bj], null), new T(null, 2, 5, U, [ih, function() {
    return new q(null, 4, [ri, X.mouseX, vg, X.mouseY, $h, X.pmouseX, Dg, X.pmouseY], null);
  }], null), new T(null, 2, 5, U, [Hi, function() {
    return new q(null, 5, [ri, X.mouseX, vg, X.mouseY, $h, X.pmouseX, Dg, X.pmouseY, Zg, uj()], null);
  }], null), new T(null, 2, 5, U, [Rh, Cj], null), Sh, new T(null, 2, 5, U, [Fg, Cj], null), Vg], 0)));
}
;function Hj(a) {
  return Gj(a);
}
;function Ij(a) {
  var b = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a, c = F(b, zi);
  return re(b, function(a, b, c, h) {
    return function(a) {
      return a + (1 * Math.random() - .5) * h;
    };
  }(a, b, b, c));
}
function Jj(a, b) {
  return Tf(function(b) {
    return a * Math.cos(b);
  }, function(b) {
    return a * Math.sin(b);
  }).call(null, b);
}
function Kj(a, b) {
  var c = null != b && (b.h & 64 || b.Z) ? Od(fe, b) : b, d = F(c, se), e = F(c, ch), f = function() {
    var b = ld(od, V.f(pd, a, a));
    return Math.sqrt(b);
  }(), c = 0 === f ? a : V.a(function(a) {
    return function(b) {
      return Math.sqrt(2) * (b / a);
    };
  }(f, b, c, c, d, e), a), d = Jj(e, d);
  return oe.a(Mc, V.f(od, c, d));
}
;function Lj(a, b, c) {
  for (var d = c - b;;) {
    if (a < b) {
      a += d;
    } else {
      if (a >= c) {
        a -= d;
      } else {
        return a;
      }
    }
  }
}
function Mj(a) {
  var b = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a, c = F(b, Fh), d = null != c && (c.h & 64 || c.Z) ? Od(fe, c) : c, e = F(d, fh), f = F(d, eh), h = F(d, Ei), k = F(d, wi);
  return qe.f(qe.f(b, new T(null, 3, 5, U, [Uh, rh, 1], null), function(a, b, c, d, e, f, h) {
    return function(a) {
      return Lj(a, f, h);
    };
  }(a, b, b, c, d, e, f, h, k)), new T(null, 3, 5, U, [Uh, rh, 2], null), function(a, b, c, d, e, f, h, k, C) {
    return function(a) {
      return Lj(a, k, C);
    };
  }(a, b, b, c, d, e, f, h, k));
}
function Nj(a) {
  var b = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a, c = F(b, hh), d = F(b, Uh), e = null != d && (d.h & 64 || d.Z) ? Od(fe, d) : d, f = F(e, rh), h = F(e, sh), k = (new Date).getTime(), l = .001 * (k - (u(c) ? c : k)), m = Le(f, 1, 3), n = Le(f, 3, 5), r = Kj(n, h.b ? h.b(Ih) : h.call(null, Ih)), t = k + l, v = V.a(function(a, b, c, d, e, f) {
    return function(a) {
      return a * f;
    };
  }(d, e, f, h, k, l, m, n, r, t, a, b, b, c, d), r), x = V.f(od, n, v), A = function() {
    var a = ld(od, V.f(pd, x, x));
    return Math.sqrt(a);
  }(), C = 0 === A ? n : V.a(function(a, b, c, d, e, f, h, k, l, m, n, r, t) {
    return function(a) {
      return a / t * 1;
    };
  }(d, e, f, h, k, l, m, n, r, t, v, x, A, a, b, b, c, d), x);
  a = V.a(function(a, b, c, d, e, f) {
    return function(a) {
      return a * f;
    };
  }(d, e, f, h, k, l, m, n, r, t, v, x, A, C, a, b, b, c, d), C);
  m = V.f(od, m, a);
  t = jd(oe, new T(null, 1, 5, U, [t], null), new T(null, 2, 5, U, [m, C], null));
  return Mj(qe.f(pe(oe.a(b, new q(null, 1, [hh, k], null)), new T(null, 2, 5, U, [Uh, rh], null), t), new T(null, 3, 5, U, [Uh, sh, Ih], null), Ij));
}
;function Oj() {
  Z().smooth();
  var a = X.jc;
  he.a ? he.a(a, 100) : he.call(null, a, 100);
  X.frameRate(100);
  return new q(null, 2, [Fh, new q(null, 4, [fh, -10, eh, 10, Ei, -10, wi, 10], null), Uh, new q(null, 4, [jh, .6, Gi, 1, rh, new T(null, 5, 5, U, [0, 0, 0, 0, 0], null), sh, new q(null, 1, [Ih, new q(null, 3, [se, 0, zi, .6, ch, 1], null)], null)], null)], null);
}
function Pj(a, b, c) {
  a = new q(null, 3, [jh, b, Gi, c, Hh, a], null);
  c = null != a && (a.h & 64 || a.Z) ? Od(fe, a) : a;
  a = F(c, jh);
  b = F(c, Gi);
  c = F(c, Hh);
  a = Gc([xh, "Flocking Behaviors", Hh, c, zh, Oj, xi, xj, ph, Nj, Bh, new T(null, 1, 5, U, [Hj], null), wh, new T(null, 2, 5, U, [a, b], null)], 0);
  return Od(pj, a);
}
var Qj = ["flocking", "game_launcher", "launch_app"], Rj = aa;
Qj[0] in Rj || !Rj.execScript || Rj.execScript("var " + Qj[0]);
for (var Sj;Qj.length && (Sj = Qj.shift());) {
  Qj.length || void 0 === Pj ? Rj = Rj[Sj] ? Rj[Sj] : Rj[Sj] = {} : Rj[Sj] = Pj;
}
;
})();