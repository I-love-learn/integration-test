import{a as y,b as w,c as F,d as b,S as _}from"./isEqual.js";import{i as I,b as L}from"./objects.js";import{b as m,e as A,c as P,d as M,i as h,f as G}from"./index4.js";import{g as R,c as q,k as S,a as x,b as B,d as D,i as V}from"./_initCloneObject.js";import{i as E}from"./identity.js";import{s as H,o as J}from"./_overRest.js";function K(n,r){return H(J(n,r,E),n+"")}function N(n,r,e){if(!m(e))return!1;var s=typeof r;return(s=="number"?y(e)&&I(r,e.length):s=="string"&&r in e)?A(e[r],n):!1}function Q(n){return K(function(r,e){var s=-1,f=e.length,i=f>1?e[f-1]:void 0,o=f>2?e[2]:void 0;for(i=n.length>3&&typeof i=="function"?(f--,i):void 0,o&&N(e[0],e[1],o)&&(i=f<3?void 0:i,f=1),r=Object(r);++s<f;){var t=e[s];t&&n(r,t,s,i)}return r})}var U="[object Object]",W=Function.prototype,X=Object.prototype,C=W.toString,Y=X.hasOwnProperty,Z=C.call(Object);function $(n){if(!P(n)||M(n)!=U)return!1;var r=R(n);if(r===null)return!0;var e=Y.call(r,"constructor")&&r.constructor;return typeof e=="function"&&e instanceof e&&C.call(e)==Z}function j(n){return function(r,e,s){for(var f=-1,i=Object(r),o=s(r),t=o.length;t--;){var a=o[n?t:++f];if(e(i[a],a,i)===!1)break}return r}}var z=j();function g(n,r,e){(e!==void 0&&!A(n[r],e)||e===void 0&&!(r in n))&&L(n,r,e)}function k(n){return P(n)&&y(n)}function c(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}function nn(n){return q(n,S(n))}function rn(n,r,e,s,f,i,o){var t=c(n,e),a=c(r,e),O=o.get(a);if(O){g(n,e,O);return}var u=i?i(t,a,e+"",n,r,o):void 0,l=u===void 0;if(l){var d=h(a),p=!d&&w(a),v=!d&&!p&&F(a);u=a,d||p||v?h(t)?u=t:k(t)?u=x(t):p?(l=!1,u=B(a,!0)):v?(l=!1,u=D(a,!0)):u=[]:$(a)||b(a)?(u=t,b(t)?u=nn(t):(!m(t)||G(t))&&(u=V(a))):l=!1}l&&(o.set(a,u),f(u,a,s,i,o),o.delete(a)),g(n,e,u)}function T(n,r,e,s,f){n!==r&&z(r,function(i,o){if(f||(f=new _),m(i))rn(n,r,o,e,T,s,f);else{var t=s?s(c(n,o),i,o+"",n,r,f):void 0;t===void 0&&(t=i),g(n,o,t)}},S)}var un=Q(function(n,r,e){T(n,r,e)});export{z as b,un as m};