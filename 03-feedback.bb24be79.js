!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function w(e){return c=e,f=setTimeout(S,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=g();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?y(e):(i=o=void 0,u)}function T(){var e=g(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:h(g())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var w=document.querySelector(".feedback-form"),O=w.querySelector('input[name="email"]'),S=w.querySelector('textarea[name="message"]');var h=e(t)((function(){var e={email:O.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);w.addEventListener("input",(function(e){e.target!==O&&e.target!==S||h()})),w.addEventListener("submit",(function(e){e.preventDefault(),function(){if(O.value&&S.value){var e={email:O.value,message:S.value};console.log(e),localStorage.removeItem("feedback-form-state"),w.reset()}else alert("Upewnij się żę wszystkie pola są wypełnione ")}()})),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),n=t.email,i=t.message;O.value=n,S.value=i}}))}();
//# sourceMappingURL=03-feedback.bb24be79.js.map