!function(r){var t={};function n(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return r[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var a in r)n.d(e,a,function(t){return r[t]}.bind(null,a));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="/Users/colincrawford/Desktop/code/Projects/ReasonChromeExtn/chrom-extn/build/",n(n.s=7)}([function(r,t,n){"use strict";var e=n(2);t.caml_array_dup=function(r){return r.slice(0)},t.caml_array_sub=function(r,t,n){for(var e=new Array(n),a=0,u=t;a<n;)e[a]=r[u],a=a+1|0,u=u+1|0;return e},t.caml_array_concat=function(r){var t=function(r,t){for(;;){var n=t,e=r;if(!n)return e;t=n[1],r=n[0].length+e|0}}(0,r),n=new Array(t);return function(r,t,n){for(;;){var e=n,a=t;if(!e)return 0;for(var u=e[0],c=u.length,o=a,i=0;i<c;)r[o]=u[i],o=o+1|0,i=i+1|0;n=e[1],t=o}}(n,0,r),n},t.caml_make_vect=function(r,t){for(var n=new Array(r),e=0,a=r-1|0;e<=a;++e)n[e]=t;return n},t.caml_make_float_vect=function(r){for(var t=new Array(r),n=0,e=r-1|0;n<=e;++n)t[n]=0;return t},t.caml_array_blit=function(r,t,n,e,a){if(e<=t){for(var u=0,c=a-1|0;u<=c;++u)n[u+e|0]=r[u+t|0];return 0}for(var o=a-1|0;o>=0;--o)n[o+e|0]=r[o+t|0];return 0},t.caml_array_get=function(r,t){if(t<0||t>=r.length)throw[e.invalid_argument,"index out of bounds"];return r[t]},t.caml_array_set=function(r,t,n){if(t<0||t>=r.length)throw[e.invalid_argument,"index out of bounds"];return r[t]=n,0}},function(r,t,n){"use strict";var e=n(0);function a(r,t){for(;;){var n=t,u=r,c=u.length,o=0===c?1:c,i=o-n.length|0;if(0===i)return u.apply(null,n);if(!(i<0))return function(r,t){return function(n){return a(r,t.concat([n]))}}(u,n);t=e.caml_array_sub(n,o,0|-i),r=u.apply(null,e.caml_array_sub(n,0,o))}}function u(r,t,n){if(n>7||n<0)return a(r,[t]);switch(n){case 0:case 1:return r(t);case 2:return function(n){return r(t,n)};case 3:return function(n,e){return r(t,n,e)};case 4:return function(n,e,a){return r(t,n,e,a)};case 5:return function(n,e,a,u){return r(t,n,e,a,u)};case 6:return function(n,e,a,u,c){return r(t,n,e,a,u,c)};case 7:return function(n,e,a,u,c,o){return r(t,n,e,a,u,c,o)}}}function c(r,t){var n=r.length;return 1===n?r(t):u(r,t,n)}function o(r,t,n,e){if(e>7||e<0)return a(r,[t,n]);switch(e){case 0:case 1:return a(r(t),[n]);case 2:return r(t,n);case 3:return function(e){return r(t,n,e)};case 4:return function(e,a){return r(t,n,e,a)};case 5:return function(e,a,u){return r(t,n,e,a,u)};case 6:return function(e,a,u,c){return r(t,n,e,a,u,c)};case 7:return function(e,a,u,c,o){return r(t,n,e,a,u,c,o)}}}function i(r,t,n){var e=r.length;return 2===e?r(t,n):o(r,t,n,e)}function f(r,t,n,e,u){var c=0;if(u>7||u<0)return a(r,[t,n,e]);switch(u){case 0:case 1:c=1;break;case 2:return a(r(t,n),[e]);case 3:return r(t,n,e);case 4:return function(a){return r(t,n,e,a)};case 5:return function(a,u){return r(t,n,e,a,u)};case 6:return function(a,u,c){return r(t,n,e,a,u,c)};case 7:return function(a,u,c,o){return r(t,n,e,a,u,c,o)}}return 1===c?a(r(t),[n,e]):void 0}function _(r,t,n,e){var a=r.length;return 3===a?r(t,n,e):f(r,t,n,e,a)}function l(r,t,n,e,u,c){var o=0;if(c>7||c<0)return a(r,[t,n,e,u]);switch(c){case 0:case 1:o=1;break;case 2:return a(r(t,n),[e,u]);case 3:return a(r(t,n,e),[u]);case 4:return r(t,n,e,u);case 5:return function(a){return r(t,n,e,u,a)};case 6:return function(a,c){return r(t,n,e,u,a,c)};case 7:return function(a,c,o){return r(t,n,e,u,a,c,o)}}return 1===o?a(r(t),[n,e,u]):void 0}function s(r,t,n,e,a){var u=r.length;return 4===u?r(t,n,e,a):l(r,t,n,e,a,u)}function v(r,t,n,e,u,c,o){var i=0;if(o>7||o<0)return a(r,[t,n,e,u,c]);switch(o){case 0:case 1:i=1;break;case 2:return a(r(t,n),[e,u,c]);case 3:return a(r(t,n,e),[u,c]);case 4:return a(r(t,n,e,u),[c]);case 5:return r(t,n,e,u,c);case 6:return function(a){return r(t,n,e,u,c,a)};case 7:return function(a,o){return r(t,n,e,u,c,a,o)}}return 1===i?a(r(t),[n,e,u,c]):void 0}function m(r,t,n,e,a,u){var c=r.length;return 5===c?r(t,n,e,a,u):v(r,t,n,e,a,u,c)}function y(r,t,n,e,u,c,o,i){var f=0;if(i>7||i<0)return a(r,[t,n,e,u,c,o]);switch(i){case 0:case 1:f=1;break;case 2:return a(r(t,n),[e,u,c,o]);case 3:return a(r(t,n,e),[u,c,o]);case 4:return a(r(t,n,e,u),[c,o]);case 5:return a(r(t,n,e,u,c),[o]);case 6:return r(t,n,e,u,c,o);case 7:return function(a){return r(t,n,e,u,c,o,a)}}return 1===f?a(r(t),[n,e,u,c,o]):void 0}function g(r,t,n,e,a,u,c){var o=r.length;return 6===o?r(t,n,e,a,u,c):y(r,t,n,e,a,u,c,o)}function d(r,t,n,e,u,c,o,i,f){var _=0;if(f>7||f<0)return a(r,[t,n,e,u,c,o,i]);switch(f){case 0:case 1:_=1;break;case 2:return a(r(t,n),[e,u,c,o,i]);case 3:return a(r(t,n,e),[u,c,o,i]);case 4:return a(r(t,n,e,u),[c,o,i]);case 5:return a(r(t,n,e,u,c),[o,i]);case 6:return a(r(t,n,e,u,c,o),[i]);case 7:return r(t,n,e,u,c,o,i)}return 1===_?a(r(t),[n,e,u,c,o,i]):void 0}function h(r,t,n,e,a,u,c,o){var i=r.length;return 7===i?r(t,n,e,a,u,c,o):d(r,t,n,e,a,u,c,o,i)}function b(r,t,n,e,u,c,o,i,f,_){var l=0;if(_>7||_<0)return a(r,[t,n,e,u,c,o,i,f]);switch(_){case 0:case 1:l=1;break;case 2:return a(r(t,n),[e,u,c,o,i,f]);case 3:return a(r(t,n,e),[u,c,o,i,f]);case 4:return a(r(t,n,e,u),[c,o,i,f]);case 5:return a(r(t,n,e,u,c),[o,i,f]);case 6:return a(r(t,n,e,u,c,o),[i,f]);case 7:return a(r(t,n,e,u,c,o,i),[f])}return 1===l?a(r(t),[n,e,u,c,o,i,f]):void 0}function p(r,t,n,e,a,u,c,o,i){var f=r.length;return 8===f?r(t,n,e,a,u,c,o,i):b(r,t,n,e,a,u,c,o,i,f)}t.app=a,t.curry_1=u,t._1=c,t.__1=function(r){return 1===r.length?r:function(t){return c(r,t)}},t.curry_2=o,t._2=i,t.__2=function(r){return 2===r.length?r:function(t,n){return i(r,t,n)}},t.curry_3=f,t._3=_,t.__3=function(r){return 3===r.length?r:function(t,n,e){return _(r,t,n,e)}},t.curry_4=l,t._4=s,t.__4=function(r){return 4===r.length?r:function(t,n,e,a){return s(r,t,n,e,a)}},t.curry_5=v,t._5=m,t.__5=function(r){return 5===r.length?r:function(t,n,e,a,u){return m(r,t,n,e,a,u)}},t.curry_6=y,t._6=g,t.__6=function(r){return 6===r.length?r:function(t,n,e,a,u,c){return g(r,t,n,e,a,u,c)}},t.curry_7=d,t._7=h,t.__7=function(r){return 7===r.length?r:function(t,n,e,a,u,c,o){return h(r,t,n,e,a,u,c,o)}},t.curry_8=b,t._8=p,t.__8=function(r){return 8===r.length?r:function(t,n,e,a,u,c,o,i){return p(r,t,n,e,a,u,c,o,i)}}},function(r,t,n){"use strict";var e=["Out_of_memory",0],a=["Sys_error",-1],u=["Failure",-2],c=["Invalid_argument",-3],o=["End_of_file",-4],i=["Division_by_zero",-5],f=["Not_found",-6],_=["Match_failure",-7],l=["Stack_overflow",-8],s=["Sys_blocked_io",-9],v=["Assert_failure",-10],m=["Undefined_recursive_module",-11];e.tag=248,a.tag=248,u.tag=248,c.tag=248,o.tag=248,i.tag=248,f.tag=248,_.tag=248,l.tag=248,s.tag=248,v.tag=248,m.tag=248,t.out_of_memory=e,t.sys_error=a,t.failure=u,t.invalid_argument=c,t.end_of_file=o,t.division_by_zero=i,t.not_found=f,t.match_failure=_,t.stack_overflow=l,t.sys_blocked_io=s,t.assert_failure=v,t.undefined_recursive_module=m},function(r,t,n){"use strict";t.setStyle=function(r,t,n){return r.style[t]=n,r},t.setAttribute=function(r,t,n){return r.setAttribute(t,n),r},t.addEventListener=function(r,t,n){return r.addEventListener(t,n),r},t.appendChild=function(r,t){return r.appendChild(t),r}},function(r,t,n){"use strict";var e=[0];function a(){return e[0]+=1,e[0]}t.caml_set_oo_id=function(r){return r[1]=e[0],e[0]+=1,r},t.get_id=a,t.create=function(r){var t=[r,a()];return t.tag=248,t},t.isCamlExceptionOrOpenVariant=function(r){if(void 0===r)return!1;if(248===r.tag)return!0;var t=r[0];return void 0!==t&&248===t.tag}},,,function(r,t,n){"use strict";var e=n(8),a=n(1),u=n(3),c=document.getElementById("buttonDiv"),o=["#3aa757","#e8453c","#f9bb2d","#4688f1"];function i(r,t){return chrome.storage.sync.set({color:r},function(){return console.log("color is "+r),0}),0}e.iter(function(r){return a._2(u.appendChild,c,a._3(u.addEventListener,a._3(u.setStyle,document.createElement("button"),"backgroundColor",r),"click",function(t){return i(r)})),0},o),t.page=c,t.kButtonColors=o,t.updateChromeStorageColor=i},function(r,t,n){"use strict";var e=n(1),a=n(9),u=n(0),c=n(4),o=n(2);function i(r,t,n){for(var e=u.caml_make_vect(r,[]),a=0,c=r-1|0;a<=c;++a)e[a]=u.caml_make_vect(t,n);return e}function f(r){var t=r.length;return 0===t?[]:u.caml_array_sub(r,0,t)}function _(r,t,n,e,a){if(a<0||t<0||t>(r.length-a|0)||e<0||e>(n.length-a|0))throw[o.invalid_argument,"Array.blit"];return u.caml_array_blit(r,t,n,e,a)}var l=c.create("Array.Bottom");function s(r,t){var n=function(n,a,c,o,i,f,l){for(var s=n+a|0,v=o+i|0,m=n,y=u.caml_array_get(t,n),g=o,d=u.caml_array_get(c,o),h=l;;){var b=h,p=d,w=g,E=y,k=m;if(e._2(r,E,p)<=0){u.caml_array_set(f,b,E);var x=k+1|0;if(x<s){h=b+1|0,y=u.caml_array_get(t,x),m=x;continue}return _(c,w,f,b+1|0,v-w|0)}u.caml_array_set(f,b,p);var O=w+1|0;if(!(O<v))return _(t,k,f,b+1|0,s-k|0);h=b+1|0,d=u.caml_array_get(c,O),g=O}},a=function(n,a,c,o){for(var i=0,f=o-1|0;i<=f;++i){for(var _=u.caml_array_get(t,n+i|0),l=(c+i|0)-1|0;l>=c&&e._2(r,u.caml_array_get(a,l),_)>0;)u.caml_array_set(a,l+1|0,u.caml_array_get(a,l)),l=l-1|0;u.caml_array_set(a,l+1|0,_)}return 0},c=function(r,e,u,o){if(o<=5)return a(r,e,u,o);var i=o/2|0,f=o-i|0;return c(r+i|0,e,u+i|0,f),c(r,t,r+f|0,i),n(r+f|0,i,e,u+i|0,f,e,u)},o=t.length;if(o<=5)return a(0,t,0,o);var i=o/2|0,f=o-i|0,l=u.caml_make_vect(f,u.caml_array_get(t,0));return c(i,l,0,f),c(0,t,f,i),n(f,i,l,0,f,t,0)}var v=i,m=u.caml_array_concat,y=s;t.init=function(r,t){if(0===r)return[];if(r<0)throw[o.invalid_argument,"Array.init"];for(var n=u.caml_make_vect(r,e._1(t,0)),a=1,c=r-1|0;a<=c;++a)n[a]=e._1(t,a);return n},t.make_matrix=i,t.create_matrix=v,t.append=function(r,t){var n=r.length;return 0===n?f(t):0===t.length?u.caml_array_sub(r,0,n):r.concat(t)},t.concat=m,t.sub=function(r,t,n){if(n<0||t>(r.length-n|0))throw[o.invalid_argument,"Array.sub"];return u.caml_array_sub(r,t,n)},t.copy=f,t.fill=function(r,t,n,e){if(t<0||n<0||t>(r.length-n|0))throw[o.invalid_argument,"Array.fill"];for(var a=t,u=(t+n|0)-1|0;a<=u;++a)r[a]=e;return 0},t.blit=_,t.to_list=function(r){for(var t=r.length-1|0,n=0;;){var e=n,a=t;if(a<0)return e;n=[r[a],e],t=a-1|0}},t.of_list=function(r){if(!r)return[];for(var t=u.caml_make_vect(function(r,t){for(;;){var n=t,e=r;if(!n)return e;t=n[1],r=e+1|0}}(0,r),r[0]),n=1,e=r[1];;){var a=e,c=n;if(!a)return t;t[c]=a[0],e=a[1],n=c+1|0}},t.iter=function(r,t){for(var n=0,a=t.length-1|0;n<=a;++n)e._1(r,t[n]);return 0},t.map=function(r,t){var n=t.length;if(0===n)return[];for(var a=u.caml_make_vect(n,e._1(r,t[0])),c=1,o=n-1|0;c<=o;++c)a[c]=e._1(r,t[c]);return a},t.iteri=function(r,t){for(var n=0,a=t.length-1|0;n<=a;++n)e._2(r,n,t[n]);return 0},t.mapi=function(r,t){var n=t.length;if(0===n)return[];for(var a=u.caml_make_vect(n,e._2(r,0,t[0])),c=1,o=n-1|0;c<=o;++c)a[c]=e._2(r,c,t[c]);return a},t.fold_left=function(r,t,n){for(var a=t,u=0,c=n.length-1|0;u<=c;++u)a=e._2(r,a,n[u]);return a},t.fold_right=function(r,t,n){for(var a=n,u=t.length-1|0;u>=0;--u)a=e._2(r,t[u],a);return a},t.sort=function(r,t){for(var n=function(n,a){var c=1+((a+a|0)+a|0)|0,o=c;if((c+2|0)<n)return e._2(r,u.caml_array_get(t,c),u.caml_array_get(t,c+1|0))<0&&(o=c+1|0),e._2(r,u.caml_array_get(t,o),u.caml_array_get(t,c+2|0))<0&&(o=c+2|0),o;if((c+1|0)<n&&e._2(r,u.caml_array_get(t,c),u.caml_array_get(t,c+1|0))<0)return c+1|0;if(c<n)return c;throw[l,a]},c=function(c,o,i){try{for(var f=c,_=o,s=i;;){var v=_,m=n(f,v);if(!(e._2(r,u.caml_array_get(t,m),s)>0))return u.caml_array_set(t,v,s);u.caml_array_set(t,v,u.caml_array_get(t,m)),_=m}}catch(r){var y=a.internalToOCamlException(r);if(y[0]===l)return u.caml_array_set(t,y[1],i);throw y}},i=function(r,e){try{for(var c=r,o=e;;){var i=o,f=n(c,i);u.caml_array_set(t,i,u.caml_array_get(t,f)),o=f}}catch(r){var _=a.internalToOCamlException(r);if(_[0]===l)return _[1];throw _}},f=function(n,a){for(;;){var c=n,i=(c-1|0)/3|0;if(c===i)throw[o.assert_failure,["array.ml",173,4]];if(e._2(r,u.caml_array_get(t,i),a)<0){if(u.caml_array_set(t,c,u.caml_array_get(t,i)),i>0){n=i;continue}return u.caml_array_set(t,0,a)}return u.caml_array_set(t,c,a)}},_=t.length,s=((_+1|0)/3|0)-1|0;s>=0;--s)c(_,s,u.caml_array_get(t,s));for(var v=_-1|0;v>=2;--v){var m=u.caml_array_get(t,v);u.caml_array_set(t,v,u.caml_array_get(t,0)),f(i(v,0),m)}if(_>1){var y=u.caml_array_get(t,1);return u.caml_array_set(t,1,u.caml_array_get(t,0)),u.caml_array_set(t,0,y)}return 0},t.stable_sort=s,t.fast_sort=y},function(r,t,n){"use strict";var e=n(4),a=e.create("Js_exn.Error");t.$$Error=a,t.internalToOCamlException=function(r){return e.isCamlExceptionOrOpenVariant(r)?r:[a,r]},t.raiseError=function(r){throw new Error(r)},t.raiseEvalError=function(r){throw new EvalError(r)},t.raiseRangeError=function(r){throw new RangeError(r)},t.raiseReferenceError=function(r){throw new ReferenceError(r)},t.raiseSyntaxError=function(r){throw new SyntaxError(r)},t.raiseTypeError=function(r){throw new TypeError(r)},t.raiseUriError=function(r){throw new URIError(r)}}]);