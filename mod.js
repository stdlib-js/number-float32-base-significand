// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,e="function"==typeof o?o.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,a,f,i,y;if(null==t)return r.call(t);a=t[e],y=e,o=null!=(i=t)&&n.call(i,y);try{t[e]=void 0}catch(n){return r.call(t)}return f=r.call(t),o?t[e]=a:delete t[e],f}:function(t){return r.call(t)},f="function"==typeof Float32Array;var i=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var l=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y([1,3.14,-3.14,5e40]),n=r,t=(f&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===i}catch(r){t=!1}return t}()?c:function(){throw new Error("not implemented")},u="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var v="function"==typeof Uint32Array?Uint32Array:void 0;var A=function(){var t,r,n;if("function"!=typeof p)return!1;try{r=new p(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(u&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?v:function(){throw new Error("not implemented")},b=new l(1),m=new A(b.buffer);function w(t){var r=function(t){return b[0]=t,m[0]}(t);return 8388607&r}export{w as default};
//# sourceMappingURL=mod.js.map
