import{A as g,aI as $,M as R,q as _,am as te,l as ne,S as se,y as h,u as T,aV as oe,N as ce,B as M,aD as re}from"./index_entry_BqmNs-q.js";import{E as X}from"./aria_chunk.js";function Se(e){return e===void 0}let E=[];const q=e=>{const n=e;n.key===X.esc&&E.forEach(s=>s(n))},ae=e=>{g(()=>{E.length===0&&document.addEventListener("keydown",q),$&&E.push(e)}),R(()=>{E=E.filter(n=>n!==e),E.length===0&&$&&document.removeEventListener("keydown",q)})},w="focus-trap.focus-after-trapped",O="focus-trap.focus-after-released",ue="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},ie={cancelable:!0,bubbles:!1},W="focusAfterTrapped",J="focusAfterReleased",de=Symbol("elFocusTrap"),N=_(),P=_(0),I=_(0);let F=0;const Z=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},Y=(e,n)=>{for(const s of e)if(!fe(s,n))return s},fe=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},le=e=>{const n=Z(e),s=Y(n,e),o=Y(n.reverse(),e);return[s,o]},ve=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),I.value=window.performance.now(),e!==s&&ve(e)&&n&&e.select()}};function z(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const Ee=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=z(e,o),e.unshift(o)},remove:o=>{var r,d;e=z(e,o),(d=(r=e[0])==null?void 0:r.resume)==null||d.call(r)}}},pe=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},G=Ee(),me=()=>P.value>I.value,b=()=>{N.value="pointer",P.value=window.performance.now()},Q=()=>{N.value="keyboard",P.value=window.performance.now()},Te=()=>(g(()=>{F===0&&(document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),document.addEventListener("keydown",Q)),F++}),R(()=>{F--,F<=0&&(document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b),document.removeEventListener("keydown",Q))}),{focusReason:N,lastUserFocusTimestamp:P,lastAutomatedFocusTimestamp:I}),y=e=>new CustomEvent(ue,{...ie,detail:e}),Fe=ne({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,J,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=_();let o,r;const{focusReason:d}=Te();ae(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},p=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:c,altKey:a,ctrlKey:u,metaKey:i,currentTarget:x,shiftKey:B}=t,{loop:H}=e,ee=c===X.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const S=x,[L,C]=le(S);if(L&&C){if(!B&&m===C){const f=y({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),H&&l(L,!0))}else if(B&&[L,S].includes(m)){const f=y({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),H&&l(C,!0))}}else if(m===S){const f=y({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};se(de,{focusTrapRef:s,onKeydown:p}),h(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),h([s],([t],[c])=>{t&&(t.addEventListener("keydown",p),t.addEventListener("focusin",U),t.addEventListener("focusout",K)),c&&(c.removeEventListener("keydown",p),c.removeEventListener("focusin",U),c.removeEventListener("focusout",K))});const k=t=>{n(W,t)},A=t=>n(J,t),U=t=>{const c=T(s);if(!c)return;const a=t.target,u=t.relatedTarget,i=a&&c.contains(a);e.trapped||u&&c.contains(u)||(o=u),i&&n("focusin",t),!v.paused&&e.trapped&&(i?r=a:l(r,!0))},K=t=>{const c=T(s);if(!(v.paused||!c))if(e.trapped){const a=t.relatedTarget;!oe(a)&&!c.contains(a)&&setTimeout(()=>{if(!v.paused&&e.trapped){const u=y({focusReason:d.value});n("focusout-prevented",u),u.defaultPrevented||l(r,!0)}},0)}else{const a=t.target;a&&c.contains(a)||n("focusout",t)}};async function D(){await M();const t=T(s);if(t){G.push(v);const c=t.contains(document.activeElement)?o:document.activeElement;if(o=c,!t.contains(c)){const u=new Event(w,j);t.addEventListener(w,k),t.dispatchEvent(u),u.defaultPrevented||M(()=>{let i=e.focusStartEl;re(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&pe(Z(t),!0),(document.activeElement===c||i==="container")&&l(t)})}}}function V(){const t=T(s);if(t){t.removeEventListener(w,k);const c=new CustomEvent(O,{...j,detail:{focusReason:d.value}});t.addEventListener(O,A),t.dispatchEvent(c),!c.defaultPrevented&&(d.value=="keyboard"||!me()||t.contains(document.activeElement))&&l(o??document.body),t.removeEventListener(O,A),G.remove(v)}}return g(()=>{e.trapped&&D(),h(()=>e.trapped,t=>{t?D():V()})}),R(()=>{e.trapped&&V()}),{onKeydown:p}}});function be(e,n,s,o,r,d){return ce(e.$slots,"default",{handleKeydown:e.onKeydown})}var Le=te(Fe,[["render",be],["__file","focus-trap.vue"]]);export{Le as E,de as F,Se as i};
