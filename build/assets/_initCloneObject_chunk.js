import{b as O,a as y}from"./objects_chunk.js";import{o as p,a as m,p as x,q as w,U as u}from"./isEqual_chunk.js";import{b as v,r as P}from"./index_chunk3.js";var i=Object.create,b=function(){function e(){}return function(n){if(!v(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();function N(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function $(e,n,r,t){var g=!r;r||(r={});for(var a=-1,h=n.length;++a<h;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),g?O(r,o,s):y(r,o,s)}return r}function A(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var U=Object.prototype,C=U.hasOwnProperty;function I(e){if(!v(e))return A(e);var n=p(e),r=[];for(var t in e)t=="constructor"&&(n||!C.call(e,t))||r.push(t);return r}function D(e){return m(e)?x(e,!0):I(e)}var K=w(Object.getPrototypeOf,Object);const L=K;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,T=f&&f.exports===d,l=T?P.Buffer:void 0,c=l?l.allocUnsafe:void 0;function F(e,n){if(n)return e.slice();var r=e.length,t=c?c(r):new e.constructor(r);return e.copy(t),t}function B(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function G(e,n){var r=n?B(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function H(e){return typeof e.constructor=="function"&&!p(e)?b(L(e)):{}}export{N as a,F as b,$ as c,G as d,B as e,L as g,H as i,D as k};