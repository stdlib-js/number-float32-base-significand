// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,e="function"==typeof r?r.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,f,i,a,y;if(null==t)return n.call(t);f=t[e],y=e,r=null!=(a=t)&&o.call(a,y);try{t[e]=void 0}catch(o){return n.call(t)}return i=n.call(t),r?t[e]=f:delete t[e],i}:function(t){return n.call(t)},i="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null,u="function"==typeof Float32Array?Float32Array:void 0,l=function(){var t,n,o;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,5e40]),o=n,t=(i&&o instanceof Float32Array||"[object Float32Array]"===f(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===a}catch(n){t=!1}return t}()?u:function(){throw new Error("not implemented")},c="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0,b=function(){var t,n,o;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(c&&o instanceof Uint32Array||"[object Uint32Array]"===f(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?d:function(){throw new Error("not implemented")},m=new l(1),s=new b(m.buffer);return function(t){var n=function(t){return m[0]=t,s[0]}(t);return 8388607&n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).significandf=n();
//# sourceMappingURL=index.js.map
