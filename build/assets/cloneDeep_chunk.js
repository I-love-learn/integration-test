import{k as h,g as F,s as G,e as N,f as v,h as j,n as T,j as L,b as K,S as R,l as Y}from"./isEqual_chunk.js";import{a as W}from"./objects_chunk.js";import{c as l,k as p,g as q,e as C,d as H,a as J,b as Q,i as V}from"./_initCloneObject_chunk.js";import{S as m,c as B,b as X,i as Z}from"./index_chunk2.js";function k(r,e){for(var n=-1,o=r==null?0:r.length;++n<o&&e(r[n],n,r)!==!1;);return r}function z(r,e){return r&&l(e,h(e),r)}function rr(r,e){return r&&l(e,p(e),r)}function er(r,e){return l(r,F(r),e)}var tr=Object.getOwnPropertySymbols,M=tr?function(r){for(var e=[];r;)N(e,F(r)),r=q(r);return e}:G;function nr(r,e){return l(r,M(r),e)}function ar(r){return v(r,p,M)}var or=Object.prototype,sr=or.hasOwnProperty;function cr(r){var e=r.length,n=new r.constructor(e);return e&&typeof r[0]=="string"&&sr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function ir(r,e){var n=e?C(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var fr=/\w*$/;function gr(r){var e=new r.constructor(r.source,fr.exec(r));return e.lastIndex=r.lastIndex,e}var O=m?m.prototype:void 0,w=O?O.valueOf:void 0;function br(r){return w?Object(w.call(r)):{}}var yr="[object Boolean]",ur="[object Date]",Tr="[object Map]",lr="[object Number]",jr="[object RegExp]",pr="[object Set]",Ar="[object String]",dr="[object Symbol]",Sr="[object ArrayBuffer]",$r="[object DataView]",mr="[object Float32Array]",Or="[object Float64Array]",wr="[object Int8Array]",Ir="[object Int16Array]",Er="[object Int32Array]",hr="[object Uint8Array]",Fr="[object Uint8ClampedArray]",Lr="[object Uint16Array]",Cr="[object Uint32Array]";function Br(r,e,n){var o=r.constructor;switch(e){case Sr:return C(r);case yr:case ur:return new o(+r);case $r:return ir(r,n);case mr:case Or:case wr:case Ir:case Er:case hr:case Fr:case Lr:case Cr:return H(r,n);case Tr:return new o;case lr:case Ar:return new o(r);case jr:return gr(r);case pr:return new o;case dr:return br(r)}}var Mr="[object Map]";function xr(r){return B(r)&&j(r)==Mr}var I=T&&T.isMap,Ur=I?L(I):xr,_r="[object Set]";function Pr(r){return B(r)&&j(r)==_r}var E=T&&T.isSet,Dr=E?L(E):Pr,Gr=1,Nr=2,vr=4,x="[object Arguments]",Kr="[object Array]",Rr="[object Boolean]",Yr="[object Date]",Wr="[object Error]",U="[object Function]",qr="[object GeneratorFunction]",Hr="[object Map]",Jr="[object Number]",_="[object Object]",Qr="[object RegExp]",Vr="[object Set]",Xr="[object String]",Zr="[object Symbol]",kr="[object WeakMap]",zr="[object ArrayBuffer]",re="[object DataView]",ee="[object Float32Array]",te="[object Float64Array]",ne="[object Int8Array]",ae="[object Int16Array]",oe="[object Int32Array]",se="[object Uint8Array]",ce="[object Uint8ClampedArray]",ie="[object Uint16Array]",fe="[object Uint32Array]",t={};t[x]=t[Kr]=t[zr]=t[re]=t[Rr]=t[Yr]=t[ee]=t[te]=t[ne]=t[ae]=t[oe]=t[Hr]=t[Jr]=t[_]=t[Qr]=t[Vr]=t[Xr]=t[Zr]=t[se]=t[ce]=t[ie]=t[fe]=!0;t[Wr]=t[U]=t[kr]=!1;function u(r,e,n,o,g,s){var a,b=e&Gr,y=e&Nr,P=e&vr;if(n&&(a=g?n(r,o,g,s):n(r)),a!==void 0)return a;if(!X(r))return r;var A=Z(r);if(A){if(a=cr(r),!b)return J(r,a)}else{var f=j(r),d=f==U||f==qr;if(K(r))return Q(r,b);if(f==_||f==x||d&&!g){if(a=y||d?{}:V(r),!b)return y?nr(r,rr(a,r)):er(r,z(a,r))}else{if(!t[f])return g?r:{};a=Br(r,f,b)}}s||(s=new R);var S=s.get(r);if(S)return S;s.set(r,a),Dr(r)?r.forEach(function(c){a.add(u(c,e,n,c,r,s))}):Ur(r)&&r.forEach(function(c,i){a.set(i,u(c,e,n,i,r,s))});var D=P?y?ar:Y:y?p:h,$=A?void 0:D(r);return k($||r,function(c,i){$&&(i=c,c=r[i]),W(a,i,u(c,e,n,i,r,s))}),a}var ge=1,be=4;function je(r){return u(r,ge|be)}export{u as b,je as c};
