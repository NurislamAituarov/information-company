(()=>{var t={757:(t,n,e)=>{t.exports=e(666)},424:(t,n,e)=>{"use strict";e.d(n,{Z:()=>c});var r=e(537),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nul,\nli {\n  list-style: none;\n}\n\nbody {\n  padding: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n}\n\ninput {\n  font-size: 16px;\n  padding: 4px;\n}\n.wrapper {\n  height: max-content;\n}\n.container {\n  position: relative;\n}\n.title {\n  margin-bottom: 10px;\n}\n#party {\n  width: 100%;\n}\n.result {\n  width: 50%;\n  min-width: 300px;\n}\n\n.row {\n  margin-top: 1em;\n}\n\n.row label {\n  display: block;\n  min-width: 10em;\n}\n\n.row input,\n.row textarea {\n  width: 100%;\n}\n\n.show_list {\n  display: none;\n  position: absolute;\n  width: 100%;\n  border: 2px solid rgb(129, 129, 129, 0.5);\n  border-top: 0;\n  background-color: white;\n  padding: 5px;\n}\n.show_list p {\n  margin-bottom: 10px;\n  color: rgb(160, 160, 160);\n  font-size: 14px;\n}\n.show_list div {\n  padding: 5px 0;\n  cursor: default;\n}\n.show_list span {\n  color: rgb(167, 167, 167);\n}\n.show_list div:hover {\n  background-color: rgb(245, 245, 245, 0.7);\n  font-size: 16px;\n}\n#type {\n  margin-top: 15px;\n}\n@media screen and (max-width: 768px) {\n  .result {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 378px) {\n  #party::-webkit-input-placeholder {\n    font-size: 13px;\n  }\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gGAAgG;AAClG;;AAEA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,yCAAyC;EACzC,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yCAAyC;EACzC,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE;IACE,WAAW;EACb;AACF;AACA;EACE;IACE,eAAe;EACjB;AACF",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nul,\nli {\n  list-style: none;\n}\n\nbody {\n  padding: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n}\n\ninput {\n  font-size: 16px;\n  padding: 4px;\n}\n.wrapper {\n  height: max-content;\n}\n.container {\n  position: relative;\n}\n.title {\n  margin-bottom: 10px;\n}\n#party {\n  width: 100%;\n}\n.result {\n  width: 50%;\n  min-width: 300px;\n}\n\n.row {\n  margin-top: 1em;\n}\n\n.row label {\n  display: block;\n  min-width: 10em;\n}\n\n.row input,\n.row textarea {\n  width: 100%;\n}\n\n.show_list {\n  display: none;\n  position: absolute;\n  width: 100%;\n  border: 2px solid rgb(129, 129, 129, 0.5);\n  border-top: 0;\n  background-color: white;\n  padding: 5px;\n}\n.show_list p {\n  margin-bottom: 10px;\n  color: rgb(160, 160, 160);\n  font-size: 14px;\n}\n.show_list div {\n  padding: 5px 0;\n  cursor: default;\n}\n.show_list span {\n  color: rgb(167, 167, 167);\n}\n.show_list div:hover {\n  background-color: rgb(245, 245, 245, 0.7);\n  font-size: 16px;\n}\n#type {\n  margin-top: 15px;\n}\n@media screen and (max-width: 768px) {\n  .result {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 378px) {\n  #party::-webkit-input-placeholder {\n    font-size: 13px;\n  }\n}\n"],sourceRoot:""}]);const c=i},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},537:t=>{"use strict";t.exports=function(t){var n=t[1],e=t[3];if(!e)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},666:t=>{var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var o=n&&n.prototype instanceof y?n:y,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,n,e){var r=p;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return j()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=B(i,e);if(c){if(c===A)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===p)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=f;var s=l(t,n,e);if("normal"===s.type){if(r=e.done?h:d,s.arg===A)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r=h,e.method="throw",e.arg=s.arg)}}}(t,e,i),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",d="suspendedYield",f="executing",h="completed",A={};function y(){}function m(){}function v(){}var g={};s(g,a,(function(){return this}));var E=Object.getPrototypeOf,b=E&&E(E(S([])));b&&b!==e&&r.call(b,a)&&(g=b);var w=v.prototype=y.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function C(t,n){function e(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?n.resolve(p.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):n.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}}function B(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,B(t,e),"throw"===e.method))return A;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,A;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,A):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,A)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:n,done:!0}}return m.prototype=v,s(w,"constructor",v),s(v,"constructor",m),m.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(C.prototype),s(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new C(u(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,A):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),A},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),A}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),A}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var l=e(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function n(n){return function(n){if(Array.isArray(n))return t(n)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n,e,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var i=t.apply(n,e);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}}var a=e(757),i=e.n(a),c=e(379),s=e.n(c),u=e(795),l=e.n(u),p=e(569),d=e.n(p),f=e(565),h=e.n(f),A=e(216),y=e.n(A),m=e(589),v=e.n(m),g=e(424),E={};E.styleTagTransform=v(),E.setAttributes=h(),E.insert=d().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=y(),s()(g.Z,E),g.Z&&g.Z.locals&&g.Z.locals;var b=document.querySelector(".result"),w=document.querySelector("#party"),x=document.getElementById("name_short"),C=document.getElementById("name_full"),B=document.getElementById("inn_kpp"),L=document.getElementById("address"),_=document.querySelector(".show_list"),k=document.querySelectorAll("li"),S=document.querySelectorAll(".span"),j=document.querySelector("#type"),T=document.querySelector("#action"),I="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",O="a96d79dffeeb431d6669017ec478fe6a7c88ac61",M=[];function z(){return z=o(i().mark((function t(e){var r,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token "+O},body:JSON.stringify({query:e})},t.next=3,fetch(I,r);case 3:return o=t.sent,t.next=6,o.json();case 6:if(!(a=t.sent).suggestions.length){t.next=16;break}return a.suggestions.slice(0,5).forEach((function(t,e){n(_.children).forEach((function(t){return t.style.display="block"})),T.innerHTML="Выберите вариант или продолжите ввод",k[e].innerHTML=t.value,S[e].innerHTML="".concat(t.data.address.data.postal_code,", ").concat(t.data.address.value),j.innerHTML="Организация (".concat(t.data.type,")"),b.prepend(j)})),t.t0=M,t.next=12,a.suggestions;case 12:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.next=20;break;case 16:n(_.children).forEach((function(t){return t.style.display="none"})),T.innerHTML="Неизвестная организация",T.style.display="block",_.prepend(T);case 20:return t.next=22,a.suggestions;case 22:return t.abrupt("return",t.sent);case 23:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}k.forEach((function(t,n){t.addEventListener("click",(function(){var t=M[M.length-1][n];x.value=t.value,C.value=t.data.name.full_with_opf,B.value="".concat(t.data.inn," / ").concat(t.data.kpp),L.value="".concat(t.data.address.data.postal_code,", ").concat(t.data.address.value),w.value="",_.style.display="none"}))})),w.addEventListener("input",(function(t){t.target.value?_.style.display="block":_.style.display="none",function(t){return z.apply(this,arguments)}(t.target.value).catch((function(t){return console.log("error",t)}))}))})()})();
//# sourceMappingURL=scripts.839864603d11f7b7764f.js.map