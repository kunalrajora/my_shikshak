/* Modernizr 2.5.3 (Custom Build) | MIT & BSD  * Build:
http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-
borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-
textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-
cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-
canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-
inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-
webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-
cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
*/ ;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function
D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof
a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in
a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function H(a,b,d){for(var e
in a){var f=b[a[e]];if(f!==c)return
d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var
d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split("
");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+"
")+d).split(" "),H(e,b,c))}function K(){e.input=function(c){for(var
d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createEleme
nt("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list
placeholder max min multiple pattern required step".split("
")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribu
te("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:ab
solute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.
appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null
).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(sear
ch|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity
()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.remov
eChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime
date month week time datetime-local number range color".split(" "))}var d="2.5
.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style
,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms-
".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r
={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function
(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("b
ody");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1)
,k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,(
l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m
)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=f
unction(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d
in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.r
emoveAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")
||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input
",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A
={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b)
{return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[
b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b)
{var c=this;if(typeof c!="function")throw new TypeError;var
d=w.call(arguments,1),e=function(){if(this instanceof e){var
a=function(){};a.prototype=c.prototype;var f=new
a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return
c.apply(b,d.concat(w.call(arguments)))};return e});var J=function(c,d){var
f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.le
ngth-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i
=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in
a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)==
=9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.
csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.gen
eratedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split("
")[0])===0},g,d)}(['@font-face {font-
family:"font";src:url("https://")}',["@media (",n.join("touch-
enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media
(",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolu
te;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibili
ty:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent
"]);s.flexbox=function(){return I("flexOrder")},s["flexbox-
legacy"]=function(){return I("boxDirection")},s.canvas=function(){var a=b.crea
teElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=f
unction(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fil
lText,"function")},s.webgl=function(){try{var
d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext
("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return
e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigat
or.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldataba
se=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexe
dDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c
||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushSta
te},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in
a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var
b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in
a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.bac
kgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40
%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multi
plebgs=function(){return C("background:url(https://),url(https://),red url(htt
ps://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){re
turn I("backgroundSize")},s.borderimage=function(){return
I("borderImage")},s.borderradius=function(){return
I("borderRadius")},s.boxshadow=function(){return
I("boxShadow")},s.textshadow=function(){return
b.createElement("div").style.textShadow===""},s.opacity=function(){return
D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return
I("animationName")},s.csscolumns=function(){return
I("columnCount")},s.cssgradients=function(){var a="background-
image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c
="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").j
oin(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.c
ssreflections=function(){return I("boxReflect")},s.csstransforms=function(){re
turn!!I("transform")},s.csstransforms3d=function(){var
a=!!I("perspective");return a&&"webkitPerspective"in
g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return
I("transition")},s.fontface=function(){return
e.fontface},s.generatedcontent=function(){return
e.generatedcontent},s.video=function(){var
a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new
Boolean(c),c.ogg=a.canPlayType('video/ogg;
codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4;
codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm;
codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return
c},s.audio=function(){var
a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new
Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""
),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('a
udio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")
||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return
c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage
.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return s
essionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}}
,s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){retur
n!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createE
lementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var
a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChi
ld.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnim
ate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function
(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.sv
g,"clipPath")))};for(var L in
s)B(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return
e.input||K(),C(""),i=k=null,function(a,b){function g(a,b){var c=a.createElemen
t("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHT
ML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function
h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function
i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createEleme
nt=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.c
anHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Functi
on("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethod
s&&("+h().join().replace(/\w+/g,function(a){return
b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function
j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,d
etails,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{
display:none}canvas,video{display:inline-
block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display
:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(
b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|ma
p|select|textarea)$/i,e,f;(function(){var
a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes
.length==1||function(){try{b.createElement("a")}catch(a){return!0}var
c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof
c.createDocumentFragment=="undefined"||typeof
c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article
aside audio bdi canvas data datalist details figcaption figure footer header
hgroup mark meter nav output progress section summary time video",shivCSS:c.sh
ivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.htm
l5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixe
s=p,e.hasEvent=z,e.testProp=function(a){return
G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s
)no-js(\s|$)/,"$1$2")+(f?" js "+v.join("
"):""),e}(this,this.document),function(a,b,c){function d(a){return
o.call(a)=="[object Function]"}function e(a){return typeof
a=="string"}function f(){}function
g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var
a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a
,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g
(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="im
g"&&m(function(){t.removeChild(l)},50);for(var d in
y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=
0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a==
"object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l
.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y
[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function
j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.spli
ce(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return
a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElements
ByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&
&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)==
"[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"scri
pt":u,w=Array.isArray||function(a){return o.call(a)=="[object
Array]"},x=[],y={},z={timeout:function(a,b){return
b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("
!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f
=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[
f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split("
.").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/"
).pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!
0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop(
).split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(fu
nction(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function
i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var
a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else
if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in
a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--
m&&(d(j)?j=function(){var
a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return
function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[
n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l
=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var
j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j
++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&
i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B
.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loadi
ng",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("
DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.ex
ecuteStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var
k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAt
tribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.re
adyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,
c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=fun
ction(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="
stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNo
de.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnop
e.apply(window,[].slice.call(arguments,0))};
