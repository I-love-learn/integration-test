import{d as g,e as o,r as x}from"./isEqual.js";import{S as e,i as m,m as d,j as I}from"./index4.js";import{i as P}from"./objects.js";var h=e?e.isConcatSpreadable:void 0;function S(n){return m(n)||g(n)||!!(h&&n&&n[h])}function u(n,i,a,r,s){var l=-1,f=n.length;for(a||(a=S),s||(s=[]);++l<f;){var t=n[l];i>0&&a(t)?i>1?u(t,i-1,a,r,s):o(s,t):r||(s[s.length]=t)}return s}function K(n){var i=n==null?0:n.length;return i?u(n,1):[]}function w(n,i){return n!=null&&i in Object(n)}function A(n,i,a){i=d(i,n);for(var r=-1,s=i.length,l=!1;++r<s;){var f=I(i[r]);if(!(l=n!=null&&a(n,f)))break;n=n[f]}return l||++r!=s?l:(s=n==null?0:n.length,!!s&&x(s)&&P(f,s)&&(m(n)||g(n)))}function L(n,i){return n!=null&&A(n,i,w)}export{u as b,K as f,L as h};
