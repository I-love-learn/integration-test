import{S as g,m as R,k as M}from"./isEqual_chunk.js";import{b as _,h as m,j as E,g as l,k as y,i as C}from"./index_chunk3.js";import{h as I}from"./hasIn_chunk.js";import{i as L}from"./identity_chunk.js";var d=1,D=2;function G(n,r,i,t){var e=i.length,o=e,A=!t;if(n==null)return!o;for(n=Object(n);e--;){var f=i[e];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++e<o;){f=i[e];var u=f[0],s=n[u],a=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var h=new g;if(t)var p=t(s,a,u,n,r,h);if(!(p===void 0?R(a,s,d|D,t,h):p))return!1}}return!0}function O(n){return n===n&&!_(n)}function w(n){for(var r=M(n),i=r.length;i--;){var t=r[i],e=n[t];r[i]=[t,e,O(e)]}return r}function P(n,r){return function(i){return i==null?!1:i[n]===r&&(r!==void 0||n in Object(i))}}function F(n){var r=w(n);return r.length==1&&r[0][2]?P(r[0][0],r[0][1]):function(i){return i===n||G(i,n,r)}}var S=1,c=2;function b(n,r){return m(n)&&O(r)?P(E(n),r):function(i){var t=l(i,n);return t===void 0&&t===r?I(i,n):R(r,t,S|c)}}function x(n){return function(r){return r==null?void 0:r[n]}}function K(n){return function(r){return y(r,n)}}function N(n){return m(n)?x(E(n)):K(n)}function v(n){return typeof n=="function"?n:n==null?L:typeof n=="object"?C(n)?b(n[0],n[1]):F(n):N(n)}export{v as b};
