import{G as $l,n as Ol,ac as Oe,ad as Ue,ae as rl,x as G,y as ge,v as Pe,aq as je,af as he,H as p,q as D,P as J,ar as dl,o as F,c as Y,ai as qe,u as m,S as Pl,aj as Ge,as as Al,at as Bl,s as R,z as oe,O as Il,e as r,E as xe,au as Kl,av as Rl,aw as Ml,K as Fl,B as Ee,ax as Dl,ay as ce,az as ll,aA as He,ag as zl,ao as Ul,aB as tl,l as le,a1 as jl,Q as be,R as cl,b as q,ak as ql,ap as Gl,aC as We,aD as Hl,M as Z,aE as Wl,g as V,T as Yl,aF as Se,aG as Jl,aH as fe,aI as nl,ah as vl,W as U,aJ as Ql,_ as _e,a as v,i as K,V as ml,aK as Xl,D as Zl,a5 as Ce,t as al,U as et,aL as lt,ab as tt,F as nt,a8 as at}from"./index.js";/* empty css      *//* empty css               */import"./el-popper.js";import{E as Le,a as Fe,s as ot}from"./el-select.js";import{_ as De,E as st}from"./el-tree.js";import{p as $e}from"./el-checkbox.js";import{b as ut,a as it,E as rt}from"./el-cascader-panel.js";import{f as dt,E as ct}from"./el-dialog.js";/* empty css          */import{u as ol,a as vt,E as mt}from"./el-button.js";import"./el-radio.js";import{a as ft,E as pt}from"./el-table-column.js";import"./el-tooltip.js";import{c as ee,e as bt}from"./index8.js";import{E as Ve}from"./aria.js";import{i as gt}from"./isEqual.js";import"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.0.0-alpha-031abd24b-20210907/umd/react.development.js";import"./index4.js";import"./focus-trap.js";import"./scroll.js";import"./_baseIteratee.js";import"./hasIn.js";import"./objects.js";import"./identity.js";import"./_overRest.js";import"./cloneDeep.js";import"./_initCloneObject.js";import"./arrays.js";import"./merge.js";const ht=(e,l,t)=>dt(e.subTree).filter(n=>{var d;return Ol(n)&&((d=n.type)==null?void 0:d.name)===l&&!!n.component}).map(n=>n.component.uid).map(n=>t[n]).filter(n=>!!n),_t=(e,l)=>{const t={},o=$l([]);return{children:o,addChild:d=>{t[d.uid]=d,o.value=ht(e,l,t)},removeChild:d=>{delete t[d],o.value=o.value.filter(b=>b.uid!==d)}}},Ae=Symbol("tabsRootContextKey"),yt=Oe({tabs:{type:Ue(Array),default:()=>rl([])}}),fl="ElTabBar",Ct=G({name:fl}),kt=G({...Ct,props:yt,setup(e,{expose:l}){const t=e,o=ge(),u=Pe(Ae);u||je(fl,"<el-tabs><el-tab-bar /></el-tabs>");const n=he("tabs"),d=p(),b=p(),i=()=>{let C=0,y=0;const a=["top","bottom"].includes(u.props.tabPosition)?"width":"height",s=a==="width"?"x":"y",h=s==="x"?"left":"top";return t.tabs.every(x=>{var f,L;const E=(L=(f=o.parent)==null?void 0:f.refs)==null?void 0:L[`tab-${x.uid}`];if(!E)return!1;if(!x.active)return!0;C=E[`offset${ee(h)}`],y=E[`client${ee(a)}`];const N=window.getComputedStyle(E);return a==="width"&&(t.tabs.length>1&&(y-=Number.parseFloat(N.paddingLeft)+Number.parseFloat(N.paddingRight)),C+=Number.parseFloat(N.paddingLeft)),!1}),{[a]:`${y}px`,transform:`translate${ee(s)}(${C}px)`}},_=()=>b.value=i();return D(()=>t.tabs,async()=>{await J(),_()},{immediate:!0}),dl(d,()=>_()),l({ref:d,update:_}),(C,y)=>(F(),Y("div",{ref_key:"barRef",ref:d,class:qe([m(n).e("active-bar"),m(n).is(m(u).props.tabPosition)]),style:Pl(b.value)},null,6))}});var xt=Ge(kt,[["__file","tab-bar.vue"]]);const Vt=Oe({panes:{type:Ue(Array),default:()=>rl([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),wt={tabClick:(e,l,t)=>t instanceof Event,tabRemove:(e,l)=>l instanceof Event},sl="ElTabNav",Nt=G({name:sl,props:Vt,emits:wt,setup(e,{expose:l,emit:t}){const o=ge(),u=Pe(Ae);u||je(sl,"<el-tabs><tab-nav /></el-tabs>");const n=he("tabs"),d=Al(),b=Bl(),i=p(),_=p(),C=p(),y=p(),a=p(!1),s=p(0),h=p(!1),x=p(!0),f=R(()=>["top","bottom"].includes(u.props.tabPosition)?"width":"height"),L=R(()=>({transform:`translate${f.value==="width"?"X":"Y"}(-${s.value}px)`})),E=()=>{if(!i.value)return;const w=i.value[`offset${ee(f.value)}`],S=s.value;if(!S)return;const k=S>w?S-w:0;s.value=k},N=()=>{if(!i.value||!_.value)return;const w=_.value[`offset${ee(f.value)}`],S=i.value[`offset${ee(f.value)}`],k=s.value;if(w-k<=S)return;const O=w-k>S*2?k+S:w-S;s.value=O},I=async()=>{const w=_.value;if(!a.value||!C.value||!i.value||!w)return;await J();const S=C.value.querySelector(".is-active");if(!S)return;const k=i.value,O=["top","bottom"].includes(u.props.tabPosition),$=S.getBoundingClientRect(),A=k.getBoundingClientRect(),z=O?w.offsetWidth-A.width:w.offsetHeight-A.height,B=s.value;let P=B;O?($.left<A.left&&(P=B-(A.left-$.left)),$.right>A.right&&(P=B+$.right-A.right)):($.top<A.top&&(P=B-(A.top-$.top)),$.bottom>A.bottom&&(P=B+($.bottom-A.bottom))),P=Math.max(P,0),s.value=Math.min(P,z)},j=()=>{var w;if(!_.value||!i.value)return;e.stretch&&((w=y.value)==null||w.update());const S=_.value[`offset${ee(f.value)}`],k=i.value[`offset${ee(f.value)}`],O=s.value;k<S?(a.value=a.value||{},a.value.prev=O,a.value.next=O+k<S,S-O<k&&(s.value=S-k)):(a.value=!1,O>0&&(s.value=0))},M=w=>{const S=w.code,{up:k,down:O,left:$,right:A}=Ve;if(![k,O,$,A].includes(S))return;const z=Array.from(w.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),B=z.indexOf(w.target);let P;S===$||S===k?B===0?P=z.length-1:P=B-1:B<z.length-1?P=B+1:P=0,z[P].focus({preventScroll:!0}),z[P].click(),H()},H=()=>{x.value&&(h.value=!0)},Q=()=>h.value=!1;return D(d,w=>{w==="hidden"?x.value=!1:w==="visible"&&setTimeout(()=>x.value=!0,50)}),D(b,w=>{w?setTimeout(()=>x.value=!0,50):x.value=!1}),dl(C,j),oe(()=>setTimeout(()=>I(),0)),Il(()=>j()),l({scrollToActiveTab:I,removeFocus:Q}),D(()=>e.panes,()=>o.update(),{flush:"post",deep:!0}),()=>{const w=a.value?[r("span",{class:[n.e("nav-prev"),n.is("disabled",!a.value.prev)],onClick:E},[r(xe,null,{default:()=>[r(Kl,null,null)]})]),r("span",{class:[n.e("nav-next"),n.is("disabled",!a.value.next)],onClick:N},[r(xe,null,{default:()=>[r(Rl,null,null)]})])]:null,S=e.panes.map((k,O)=>{var $,A,z,B;const P=k.uid,se=k.props.disabled,ve=(A=($=k.props.name)!=null?$:k.index)!=null?A:`${O}`,me=!se&&(k.isClosable||e.editable);k.index=`${O}`;const ue=me?r(xe,{class:"is-icon-close",onClick:W=>t("tabRemove",k,W)},{default:()=>[r(Ml,null,null)]}):null,ye=((B=(z=k.slots).label)==null?void 0:B.call(z))||k.props.label,Be=!se&&k.active?0:-1;return r("div",{ref:`tab-${P}`,class:[n.e("item"),n.is(u.props.tabPosition),n.is("active",k.active),n.is("disabled",se),n.is("closable",me),n.is("focus",h.value)],id:`tab-${ve}`,key:`tab-${P}`,"aria-controls":`pane-${ve}`,role:"tab","aria-selected":k.active,tabindex:Be,onFocus:()=>H(),onBlur:()=>Q(),onClick:W=>{Q(),t("tabClick",k,ve,W)},onKeydown:W=>{me&&(W.code===Ve.delete||W.code===Ve.backspace)&&t("tabRemove",k,W)}},[ye,ue])});return r("div",{ref:C,class:[n.e("nav-wrap"),n.is("scrollable",!!a.value),n.is(u.props.tabPosition)]},[w,r("div",{class:n.e("nav-scroll"),ref:i},[r("div",{class:[n.e("nav"),n.is(u.props.tabPosition),n.is("stretch",e.stretch&&["top","bottom"].includes(u.props.tabPosition))],ref:_,style:L.value,role:"tablist",onKeydown:M},[e.type?null:r(xt,{ref:y,tabs:[...e.panes]},null),S])])])}}}),Tt=Oe({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Ue(Function),default:()=>!0},stretch:Boolean}),Me=e=>He(e)||zl(e),Et={[ce]:e=>Me(e),tabClick:(e,l)=>l instanceof Event,tabChange:e=>Me(e),edit:(e,l)=>["remove","add"].includes(l),tabRemove:e=>Me(e),tabAdd:()=>!0},St=G({name:"ElTabs",props:Tt,emits:Et,setup(e,{emit:l,slots:t,expose:o}){var u,n;const d=he("tabs"),{children:b,addChild:i,removeChild:_}=_t(ge(),"ElTabPane"),C=p(),y=p((n=(u=e.modelValue)!=null?u:e.activeName)!=null?n:"0"),a=async(f,L=!1)=>{var E,N,I;if(!(y.value===f||ll(f)))try{await((E=e.beforeLeave)==null?void 0:E.call(e,f,y.value))!==!1&&(y.value=f,L&&(l(ce,f),l("tabChange",f)),(I=(N=C.value)==null?void 0:N.removeFocus)==null||I.call(N))}catch{}},s=(f,L,E)=>{f.props.disabled||(a(L,!0),l("tabClick",f,E))},h=(f,L)=>{f.props.disabled||ll(f.props.name)||(L.stopPropagation(),l("edit",f.props.name,"remove"),l("tabRemove",f.props.name))},x=()=>{l("edit",void 0,"add"),l("tabAdd")};return ol({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},R(()=>!!e.activeName)),ol({from:'"addIcon"',replacement:'"add-icon"',scope:"ElTabs",version:"2.6.0",ref:"https://element-plus.org/en-US/component/tabs.html#slots",type:"Slot"},R(()=>!!t.addIcon)),D(()=>e.activeName,f=>a(f)),D(()=>e.modelValue,f=>a(f)),D(y,async()=>{var f;await J(),(f=C.value)==null||f.scrollToActiveTab()}),Fl(Ae,{props:e,currentName:y,registerPane:i,unregisterPane:_}),o({currentName:y}),()=>{const f=t["add-icon"]||t.addIcon,L=f&&t.addIcon,E=e.editable||e.addable?r("span",{class:d.e("new-tab"),tabindex:"0",onClick:x,onKeydown:j=>{j.code===Ve.enter&&x()}},[f?Ee(t,L?"addIcon":"add-icon"):r(xe,{class:d.is("icon-plus")},{default:()=>[r(Dl,null,null)]})]):null,N=r("div",{class:[d.e("header"),d.is(e.tabPosition)]},[E,r(Nt,{ref:C,currentName:y.value,editable:e.editable,type:e.type,panes:b.value,stretch:e.stretch,onTabClick:s,onTabRemove:h},null)]),I=r("div",{class:d.e("content")},[Ee(t,"default")]);return r("div",{class:[d.b(),d.m(e.tabPosition),{[d.m("card")]:e.type==="card",[d.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[N,I]:[I,N]])}}}),Lt=Oe({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),$t=["id","aria-hidden","aria-labelledby"],pl="ElTabPane",Ot=G({name:pl}),Pt=G({...Ot,props:Lt,setup(e){const l=e,t=ge(),o=Ul(),u=Pe(Ae);u||je(pl,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const n=he("tab-pane"),d=p(),b=R(()=>l.closable||u.props.closable),i=tl(()=>{var s;return u.currentName.value===((s=l.name)!=null?s:d.value)}),_=p(i.value),C=R(()=>{var s;return(s=l.name)!=null?s:d.value}),y=tl(()=>!l.lazy||_.value||i.value);D(i,s=>{s&&(_.value=!0)});const a=le({uid:t.uid,slots:o,props:l,paneName:C,active:i,index:d,isClosable:b});return oe(()=>{u.registerPane(a)}),jl(()=>{u.unregisterPane(a.uid)}),(s,h)=>m(y)?be((F(),Y("div",{key:0,id:`pane-${m(C)}`,class:qe(m(n).b()),role:"tabpanel","aria-hidden":!m(i),"aria-labelledby":`tab-${m(C)}`},[Ee(s.$slots,"default")],10,$t)),[[cl,m(i)]]):q("v-if",!0)}});var bl=Ge(Pt,[["__file","tab-pane.vue"]]);const At=ql(St,{TabPane:bl}),Bt=Gl(bl),It=(e,{attrs:l,emit:t},{tree:o,key:u})=>{const n=he("tree-select"),d={...$e(We(e),Object.keys(Le.props)),...l,"onUpdate:modelValue":b=>t(ce,b),valueKey:u,popperClass:R(()=>{const b=[n.e("popper")];return e.popperClass&&b.push(e.popperClass),b.join(" ")}),filterMethod:(b="")=>{e.filterMethod&&e.filterMethod(b),J(()=>{var i;(i=o.value)==null||i.filter(b)})},onVisibleChange:b=>{var i;(i=l.onVisibleChange)==null||i.call(l,b),e.filterable&&b&&d.filterMethod()}};return d},Kt=G({extends:Fe,setup(e,l){const t=Fe.setup(e,l);delete t.selectOptionClick;const o=ge().proxy;return J(()=>{t.select.states.cachedOptions.get(o.value)||t.select.onOptionCreate(o)}),t},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function ze(e){return e||e===0}function Ye(e){return Array.isArray(e)&&e.length}function pe(e){return Array.isArray(e)?e:ze(e)?[e]:[]}function we(e,l,t,o,u){for(let n=0;n<e.length;n++){const d=e[n];if(l(d,n,e,u))return o?o(d,n,e,u):d;{const b=t(d);if(Ye(b)){const i=we(b,l,t,o,d);if(i)return i}}}}function gl(e,l,t,o){for(let u=0;u<e.length;u++){const n=e[u];l(n,u,e,o);const d=t(n);Ye(d)&&gl(d,l,t,n)}}const Rt=(e,{attrs:l,slots:t,emit:o},{select:u,tree:n,key:d})=>{D(()=>e.modelValue,()=>{e.showCheckbox&&J(()=>{const a=n.value;a&&!gt(a.getCheckedKeys(),pe(e.modelValue))&&a.setCheckedKeys(pe(e.modelValue))})},{immediate:!0,deep:!0});const b=R(()=>({value:d.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),i=(a,s)=>{var h;const x=b.value[a];return Hl(x)?x(s,(h=n.value)==null?void 0:h.getNode(i("value",s))):s[x]},_=pe(e.modelValue).map(a=>we(e.data||[],s=>i("value",s)===a,s=>i("children",s),(s,h,x,f)=>f&&i("value",f))).filter(a=>ze(a)),C=R(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const a=[];return gl(e.data.concat(e.cacheData),s=>{const h=i("value",s);a.push({value:h,currentLabel:i("label",s),isDisabled:i("disabled",s)})},s=>i("children",s)),a}),y=R(()=>C.value.reduce((a,s)=>({...a,[s.value]:s}),{}));return{...$e(We(e),Object.keys(De.props)),...l,nodeKey:d,expandOnClickNode:R(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:R(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(_):_),renderContent:(a,{node:s,data:h,store:x})=>a(Kt,{value:i("value",h),label:i("label",h),disabled:i("disabled",h)},e.renderContent?()=>e.renderContent(a,{node:s,data:h,store:x}):t.default?()=>t.default({node:s,data:h,store:x}):void 0),filterNodeMethod:(a,s,h)=>e.filterNodeMethod?e.filterNodeMethod(a,s,h):a?new RegExp(bt(a),"i").test(i("label",s)||""):!0,onNodeClick:(a,s,h)=>{var x,f,L,E;if((x=l.onNodeClick)==null||x.call(l,a,s,h),!(e.showCheckbox&&e.checkOnClickNode)){if(!e.showCheckbox&&(e.checkStrictly||s.isLeaf)){if(!i("disabled",a)){const N=(f=u.value)==null?void 0:f.states.options.get(i("value",a));(L=u.value)==null||L.handleOptionSelect(N)}}else e.expandOnClickNode&&h.proxy.handleExpandIconClick();(E=u.value)==null||E.focus()}},onCheck:(a,s)=>{var h;if(!e.showCheckbox)return;const x=i("value",a),f=s.checkedKeys,L=e.multiple?pe(e.modelValue).filter(N=>N in y.value&&!n.value.getNode(N)&&!f.includes(N)):[],E=f.concat(L);if(e.checkStrictly)o(ce,e.multiple?E:E.includes(x)?x:void 0);else if(e.multiple)o(ce,n.value.getCheckedKeys(!0));else{const N=we([a],M=>!Ye(i("children",M))&&!i("disabled",M),M=>i("children",M)),I=N?i("value",N):void 0,j=ze(e.modelValue)&&!!we([a],M=>i("value",M)===e.modelValue,M=>i("children",M));o(ce,I===e.modelValue||j?void 0:I)}J(()=>{var N;const I=pe(e.modelValue);n.value.setCheckedKeys(I),(N=l.onCheck)==null||N.call(l,a,{checkedKeys:n.value.getCheckedKeys(),checkedNodes:n.value.getCheckedNodes(),halfCheckedKeys:n.value.getHalfCheckedKeys(),halfCheckedNodes:n.value.getHalfCheckedNodes()})}),(h=u.value)==null||h.focus()},cacheOptions:C}};var Mt=G({props:{data:{type:Array,default:()=>[]}},setup(e){const l=Pe(ot);return D(()=>e.data,()=>{var t;e.data.forEach(u=>{l.states.cachedOptions.has(u.value)||l.states.cachedOptions.set(u.value,u)});const o=((t=l.selectRef)==null?void 0:t.querySelectorAll("input"))||[];Array.from(o).includes(document.activeElement)||l.setSelected()},{flush:"post",immediate:!0}),()=>{}}});const Ft=G({name:"ElTreeSelect",inheritAttrs:!1,props:{...Le.props,...De.props,cacheData:{type:Array,default:()=>[]}},setup(e,l){const{slots:t,expose:o}=l,u=p(),n=p(),d=R(()=>e.nodeKey||e.valueKey||"value"),b=It(e,l,{select:u,tree:n,key:d}),{cacheOptions:i,..._}=Rt(e,l,{select:u,tree:n,key:d}),C=le({});return o(C),oe(()=>{Object.assign(C,{...$e(n.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...$e(u.value,["focus","blur"])})}),()=>Z(Le,le({...b,ref:y=>u.value=y}),{...t,default:()=>[Z(Mt,{data:i.value}),Z(De,le({..._,ref:y=>n.value=y}))]})}});var Ne=Ge(Ft,[["__file","tree-select.vue"]]);Ne.install=e=>{e.component(Ne.name,Ne)};const Dt=Ne,zt=Dt;function Ut(e){let l;const t=p(!1),o=le({...e,originalPosition:"",originalOverflow:"",visible:!1});function u(a){o.text=a}function n(){const a=o.parent,s=y.ns;if(!a.vLoadingAddClassList){let h=a.getAttribute("loading-number");h=Number.parseInt(h)-1,h?a.setAttribute("loading-number",h.toString()):(Se(a,s.bm("parent","relative")),a.removeAttribute("loading-number")),Se(a,s.bm("parent","hidden"))}d(),C.unmount()}function d(){var a,s;(s=(a=y.$el)==null?void 0:a.parentNode)==null||s.removeChild(y.$el)}function b(){var a;e.beforeClose&&!e.beforeClose()||(t.value=!0,clearTimeout(l),l=window.setTimeout(i,400),o.visible=!1,(a=e.closed)==null||a.call(e))}function i(){if(!t.value)return;const a=o.parent;t.value=!1,a.vLoadingAddClassList=void 0,n()}const _=G({name:"ElLoading",setup(a,{expose:s}){const{ns:h,zIndex:x}=vt("loading");return s({ns:h,zIndex:x}),()=>{const f=o.spinner||o.svg,L=Z("svg",{class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"0 0 50 50",...f?{innerHTML:f}:{}},[Z("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),E=o.text?Z("p",{class:h.b("text")},[o.text]):void 0;return Z(Yl,{name:h.b("fade"),onAfterLeave:i},{default:V(()=>[be(r("div",{style:{backgroundColor:o.background||""},class:[h.b("mask"),o.customClass,o.fullscreen?"is-fullscreen":""]},[Z("div",{class:h.b("spinner")},[L,E])]),[[cl,o.visible]])])})}}}),C=Wl(_),y=C.mount(document.createElement("div"));return{...We(o),setText:u,removeElLoadingChild:d,close:b,handleAfterLeave:i,vm:y,get $el(){return y.$el}}}let ke;const jt=function(e={}){if(!Jl)return;const l=qt(e);if(l.fullscreen&&ke)return ke;const t=Ut({...l,closed:()=>{var u;(u=l.closed)==null||u.call(l),l.fullscreen&&(ke=void 0)}});Gt(l,l.parent,t),ul(l,l.parent,t),l.parent.vLoadingAddClassList=()=>ul(l,l.parent,t);let o=l.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",l.parent.setAttribute("loading-number",o),l.parent.appendChild(t.$el),J(()=>t.visible.value=l.visible),l.fullscreen&&(ke=t),t},qt=e=>{var l,t,o,u;let n;return He(e.target)?n=(l=document.querySelector(e.target))!=null?l:document.body:n=e.target||document.body,{parent:n===document.body||e.body?document.body:n,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:n===document.body&&((t=e.fullscreen)!=null?t:!0),lock:(o=e.lock)!=null?o:!1,customClass:e.customClass||"",visible:(u=e.visible)!=null?u:!0,target:n}},Gt=async(e,l,t)=>{const{nextZIndex:o}=t.vm.zIndex||t.vm._.exposed.zIndex,u={};if(e.fullscreen)t.originalPosition.value=fe(document.body,"position"),t.originalOverflow.value=fe(document.body,"overflow"),u.zIndex=o();else if(e.parent===document.body){t.originalPosition.value=fe(document.body,"position"),await J();for(const n of["top","left"]){const d=n==="top"?"scrollTop":"scrollLeft";u[n]=`${e.target.getBoundingClientRect()[n]+document.body[d]+document.documentElement[d]-Number.parseInt(fe(document.body,`margin-${n}`),10)}px`}for(const n of["height","width"])u[n]=`${e.target.getBoundingClientRect()[n]}px`}else t.originalPosition.value=fe(l,"position");for(const[n,d]of Object.entries(u))t.$el.style[n]=d},ul=(e,l,t)=>{const o=t.vm.ns||t.vm._.exposed.ns;["absolute","fixed","sticky"].includes(t.originalPosition.value)?Se(l,o.bm("parent","relative")):nl(l,o.bm("parent","relative")),e.fullscreen&&e.lock?nl(l,o.bm("parent","hidden")):Se(l,o.bm("parent","hidden"))},Te=Symbol("ElLoading"),il=(e,l)=>{var t,o,u,n;const d=l.instance,b=a=>vl(l.value)?l.value[a]:void 0,i=a=>{const s=He(a)&&(d==null?void 0:d[a])||a;return s&&p(s)},_=a=>i(b(a)||e.getAttribute(`element-loading-${Ql(a)}`)),C=(t=b("fullscreen"))!=null?t:l.modifiers.fullscreen,y={text:_("text"),svg:_("svg"),svgViewBox:_("svgViewBox"),spinner:_("spinner"),background:_("background"),customClass:_("customClass"),fullscreen:C,target:(o=b("target"))!=null?o:C?void 0:e,body:(u=b("body"))!=null?u:l.modifiers.body,lock:(n=b("lock"))!=null?n:l.modifiers.lock};e[Te]={options:y,instance:jt(y)}},Ht=(e,l)=>{for(const t of Object.keys(l))U(l[t])&&(l[t].value=e[t])},Wt={mounted(e,l){l.value&&il(e,l)},updated(e,l){const t=e[Te];l.oldValue!==l.value&&(l.value&&!l.oldValue?il(e,l):l.value&&l.oldValue?vl(l.value)&&Ht(l.value,t.options):t==null||t.instance.close())},unmounted(e){var l;(l=e[Te])==null||l.instance.close(),e[Te]=null}},Yt={};function Jt(e,l){return F(),Y("div",null,[v("h1",null,[Ee(e.$slots,"title",{},()=>[K("默认标题")])])])}const Qt=_e(Yt,[["render",Jt],["__file","D:/html/开源 工具/integration-test/src/components/SlotTestV2.vue"]]),Xt=v("h1",null,"点我吧各位",-1),Zt={mounted(){console.log(this)}},en=Object.assign(Zt,{__name:"EventVue",setup(e){function l(t){console.log(t),console.log(event)}return(t,o)=>(F(),Y("div",{onClick:o[1]||(o[1]=u=>console.log(2))},[q(` <h1 @click="$emit('click')">点我吧各位</h1> `),Xt,v("h1",{onClick:l},"点我吧各位"),v("h1",{onClick:o[0]||(o[0]=u=>l(t.e))},"点我吧各位")]))}}),ln=_e(en,[["__file","D:/html/开源 工具/integration-test/src/components/EventVue.vue"]]),tn={__name:"T2Input",props:{modelValue:String},emits:["update:modelValue","input"],setup(e,{expose:l,emit:t}){const o=e,u=t,n=p(null);D(()=>o.modelValue,()=>{console.log("modelValue changed")}),oe(()=>{n.value.addEventListener("input",i=>{console.log("input")})}),l({input:n});const d=R({get(){return o.modelValue},set(i){console.log(o.modelValue,i),console.log(i+"vvvv"),u("update:modelValue",i),u("input")}});function b(i){console.log("vvvv")}return(i,_)=>(F(),Y("div",{ref_key:"input",ref:n},[be(v("input",{type:"text","onUpdate:modelValue":_[0]||(_[0]=C=>U(d)?d.value=C:null),onInput:b},null,544),[[ml,m(d)]])],512))}},nn=_e(tn,[["__file","D:/html/开源 工具/integration-test/src/components/T2Input.vue"]]),an=["value"],on={__name:"TInput",props:{modelValue:String},emits:["update:modelValue","input"],setup(e,{expose:l,emit:t}){const o=e,u=t;D(()=>o.modelValue,(b,i)=>{console.log(b,i)});const n=b=>{console.log(b.target.value),setTimeout(()=>{console.log(0)},0),Promise.resolve().then(()=>{console.log(1)}),u("update:modelValue",b.target.value),u("input",b.target.value)},d=p(null);return l({input:d}),(b,i)=>(F(),Y("div",{ref_key:"input",ref:d},[v("input",{type:"text",value:e.modelValue,onInput:n},null,40,an)],512))}},sn=_e(on,[["__file","D:/html/开源 工具/integration-test/src/components/TInput.vue"]]),un="_red_1xn05_3",rn={red:un},dn=v("legend",null,"v-model 与input顺序",-1),cn=v("legend",null,"table 合并行后 hover样式自定义",-1),vn=v("legend",null,"级联选择器 禁用属性是0还是1",-1),mn=v("legend",null,"dialog 使用v-loading",-1),fn=v("legend",null,"el-form 值还原了是什么问题",-1),pn=lt(`<fieldset><legend>表格合并</legend> element的form与naiveui的表格合并比起来后者更简单 因为后者只需要声明哪些需要合并 而前者还需要声明哪些不需要合并 从原生表格合并 看el表格合并 原生的表格合并中 如果表格td 需要rowspan或者colspan合并了 那么被合并的td 就不要写了 否则会造成布局变乱 在原生table里 rowspan和colspan 设置0是无效的 最低是1 <table border><thead><tr><th>姓名</th><th>任务1</th><th>任务2</th></tr></thead><tbody><tr><td id="zs">张三</td><td colspan="0">抽烟</td><td>喝酒</td><td>烫头</td></tr><tr><td rowspan="2">李四</td><td colspan="3">抽烟</td><!-- &lt;td colspan=&quot;1&quot;&gt;喝酒&lt;/td&gt;\r
              &lt;td colspan=&quot;1&quot;&gt;烫头&lt;/td&gt; --></tr><tr><!-- &lt;td&gt;王五&lt;/td&gt; --><td colspan="1">抽烟</td><td colspan="1">喝酒</td><td colspan="1">烫头</td></tr></tbody></table> 而在el里 除了需要声明需要合并的单元格 还需要声明 不需要合并的单元格 rowspan和colspan用1 表示 而合并后需要隐藏的单元格 则使用 0 0 表示 这一点和原生表格合并不一样 因为0在原生表格里没有意义（火狐除外） vue中封装组件想要控制合并的话 我想td得需要v-if去动态渲染了 后面可以自己封装一个可以合并单元格得table组件。 </fieldset>`,1),bn=v("legend",null,"el-select change触发时机",-1),gn=v("legend",null,"el-tree 数据更新后的默认选中",-1),hn=v("p",null,"highlight-current 让树选中带高亮",-1),_n=v("p",null,"current-node-key+node-key 让树默认带高亮节点",-1),yn=v("p",null," tree的data如果重新赋值前修改了current-node-key的值 不会生效 虽然值变了 但选中还是之前的选中dom样式 并且后面再修改为相同的值也不会生效 正确做法是赋值后 等下一次渲染再赋值 就可以了 https://www.jianshu.com/p/d3dfb3b2ad51 https://blog.csdn.net/sun2331/article/details/109855521 每次list数据更新 如果想让选中某个节点都要重新设置 这个下一次渲染最好放在nexttick里而不要放在计时器里 计时器会有闪现 而nexttick是同步的因为nexttick执行时间dom还没有渲染 ",-1),Cn=v("p",null," 正常去切换currentNodeKey是会生效的 但如果currentNodeKey和data同时变化则不会生效了 正确做法是currentNodeKey变化要在data赋值后面的微任务或者宏任务内 ",-1),kn=v("p",null,"这只是结论 至于为什么会有这种清空 还需要去element得源码中查看",-1),xn=v("legend",null,"dialog的form 表单重置",-1),Vn=v("p",null," 如果form是放在dialog里的 那么初始值以dialog创建的时候 也就是open值改变时的值为准 重置方法后续重置的也是那时候的值 ",-1),wn=v("legend",null,"el-form 的终极重置机制",-1),Nn=v("p",null,"表单如果想要resetFields生效和 表单校验生效prop必不可少",-1),Tn=v("p",null," form会记录它创建时 beforeMounted时的值 作为初始值 因此只要在此之前修改的值都会作为初始值。 ",-1),En=v("p",null," 因此如果我们做dialog嵌套form的时候一定要注意 如果dialog打开时 我们在给form赋值时 执行了dialog打开 那么form会记录这个值 后续如果不手动清空的话使用resetfileds会还原初始值 ",-1),Sn=v("legend",null,"el-table current-row-key 切换",-1),Ln=v("p",null," current-row-key是会让高亮行切换的 但是不知道为什么我们的项目里就不行 后面再研究吧 ",-1),$n=v("legend",null,"el-cascader级联选择器",-1),On=v("legend",null,"treeselect选择器 多选",-1),Pn=v("legend",null,"测试vif false的内容还会解析吗",-1),An=v("p",null," v-if的内容 只有当 v-if为true时才会解析执行 包括自定义属性 因为v-if render的时候是通过三元表达式分支执行的 ",-1),Bn=["a"],In=v("legend",null,".prevent与preventDefault",-1),Kn=v("a",{href:"www.baidu.com",onClick:()=>!1},"百度",-1),Rn=v("a",{href:"www.baidu.com",onClick:()=>!1},"百度",-1),Mn=v("input",{type:"text"},null,-1),Fn=[Mn],Dn=v("p",null," @change 和 onchange可以同时 触发 也就证明了 @change不是简简单单的 onchange的另一种写法 又因为removeEventListener 没有移除事件 那也排除了addEventListener绑定事件 ",-1),zn=v("p",null," 直接写在方法内部得代码 最终会作为事件内容 放在函数里 也就是listener.value 如果是用的setup里定义得方法 listener.value 直接就是那个函数 如果写函数执行 则和直接写代码一样 会包裹到函数里执行listener.value是(e)=> setup.事件() ",-1),Un={__name:"TestFive",setup(e){const l=p("");D(l,(T,c)=>{console.log(T,c)});function t(){console.log(l.value),console.log(event);const T=event.target;T.value=T.value.replace(/\D/g,""),console.log(T.value)}console.log(Xl());const o=p(),u=p();oe(()=>{console.log(o.value.input),o.value.input.addEventListener("input",function(){const T=event.target;T.value=T.value.replace(/\D/g,""),console.log(T.value)}),u.value.input.querySelector("input").addEventListener("input",function(){console.log(event.target.value),console.log("我输入")}),n.value.input.addEventListener("input",function(){console.log("我输入");const T=event.target;console.log(T.value),T.value=T.value.replace(/\D/g,""),console.log(T.value)})});const n=p(),d=({row:T,column:c,rowIndex:te,columnIndex:ie})=>{if(console.log(te,T),ie===0)return te%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},b=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}],i=[{label:"甲乙丙丁",value:"1",able:0},{label:"甲乙丙丁1",value:"1",able:1}],_=p(!1),C=p(!0),y=p(),a=p(),s=le({name:""});s.name="111";const h=p(!1),x=()=>{var T;h.value=!0,Object.assign(s,{name:""}),s.name="111",y.value.resetFields(),a.value.resetFields(),(T=L.value)==null||T.resetFields()},f=p("first"),L=p();oe(()=>{console.log(zs),zs.colSpan=4});const E=p([{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}]);setTimeout(()=>{E.value=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"}]},1e4);function N(){console.log(1234)}const I=p([{id:1,label:"Level one 1",children:[{id:11,label:"Level two 1-1",children:[{id:111,label:"Level three 1-1-1"}]}]},{id:2,label:"Level one 2",children:[{id:21,label:"Level two 2-1",children:[{id:211,label:"Level three 2-1-1"}]},{id:22,label:"Level two 2-2",children:[{id:221,label:"Level three 2-2-1"}]}]}]),j=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],M=le({data:j}),H=p("2016-05-03");setTimeout(()=>{M.data=[...j],H.value="2016-05-04"},5e3);const Q=p();Zl(()=>{Q.value=1});const w=p();setTimeout(()=>{Q.value=2,w.value=[1]},3e3),setTimeout(()=>{I.value=[{id:1,label:"Level one 1",children:[{id:11,label:"Level two 1-1",children:[{id:111,label:"Level three 1-1-1"}]}]},{id:2,label:"Level one 2",children:[{id:21,label:"Level two 2-1",children:[{id:211,label:"Level three 2-1-1"}]}]}]},6e3);function S(T,c,te,ie){console.log(T,c,te,ie)}function k(T,c,te,ie){Q.value=2}const O=p(!1),$=p({name:"",name2:""}),A=p();function z(){O.value=!0,$.value={name:"111",name2:"222"}}const B=p({name:"0"}),P=p(),se=p(!1);function ve(){se.value=!0,B.value.name="74151"}const me=[{value:"guide",label:"Guide",disabled:!0,children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]},{value:"resource",label:"Resource",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"docs",label:"Design Documentation"}]},{label:"哥们在这给你说唱",value:"dz",children:[{label:"1",value:"1"},{label:"5",value:"5",disabled:!0,children:[{label:"5-1",value:"5-1",disabled:!0},{label:"5-2",value:"5-2",disabled:!0}]}]}],ue=p(!1),ye=p([]);function Be(){ue.value=!0,W()}function W(){setTimeout(()=>{ye.value=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}]},100)}const Ie=p(null),hl=le({select:[{required:!0,message:"请选择活动区域",trigger:"change"}]}),_l=p(!1);function Je(){return console.log(event),!1}const Qe=p();oe(()=>{Qe.value.onchange=function(){console.log(222)}});const Ke=p(1),yl=()=>{console.log(1),Ke.value++},Cl=()=>{console.log(2),Ke.value++},kl=p({name:"k",age:void 0});return(T,c)=>{const te=sn,ie=nn,ne=tt,X=pt,Xe=ft,Ze=rt,re=mt,Re=ct,ae=it,de=ut,el=Bt,xl=At,Vl=Fe,wl=Le,Nl=st,Tl=zt,El=ln,Sl=Qt,Ll=Wt;return F(),Y("div",null,[v("form",null,[v("fieldset",null,[dn,r(te,{modelValue:m(l),"onUpdate:modelValue":c[0]||(c[0]=g=>U(l)?l.value=g:null),onInput:t,ref_key:"input2",ref:u},null,8,["modelValue"]),r(ie,{modelValue:m(l),"onUpdate:modelValue":c[1]||(c[1]=g=>U(l)?l.value=g:null),onInput:t,ref_key:"input3",ref:n},null,8,["modelValue"]),r(ne,{modelValue:m(l),"onUpdate:modelValue":c[2]||(c[2]=g=>U(l)?l.value=g:null),onInput:t,ref_key:"input",ref:o},null,8,["modelValue"]),be(v("input",{type:"text","onUpdate:modelValue":c[3]||(c[3]=g=>U(l)?l.value=g:null),onInput:t},null,544),[[ml,m(l)]])]),v("fieldset",null,[cn,r(Xe,{data:b,"span-method":d,border:"",style:{width:"100%","margin-top":"20px"}},{default:V(()=>[r(X,{prop:"id",label:"ID",width:"180"}),r(X,{prop:"name",label:"Name"}),r(X,{prop:"amount1",label:"Amount 1"}),r(X,{prop:"amount2",label:"Amount 2"}),r(X,{prop:"amount3",label:"Amount 3"})]),_:1})]),v("fieldset",null,[vn,r(Ze,{options:i,props:{disabled:"able"}})]),v("fieldset",null,[mn,r(re,{onClick:c[4]||(c[4]=g=>_.value=!0)},{default:V(()=>[K("出来吧 dialog")]),_:1}),be((F(),Ce(Re,{title:"title",width:"30%",modelValue:m(_),"onUpdate:modelValue":c[5]||(c[5]=g=>U(_)?_.value=g:null)},{default:V(()=>[K(" 0000000000 ")]),_:1},8,["modelValue"])),[[Ll,m(C)]]),K(" dialog 的确不能直接使用v-loading 否则不生效还会警告 因为dialog组件没有根元素 ")]),v("fieldset",null,[fn,K(" 原因是自己代码的问题 在resetForm后又重新给form赋值了 跟是不是执行resetFields 和el-tab 没有任何关系 "),r(xl,{modelValue:m(f),"onUpdate:modelValue":c[8]||(c[8]=g=>U(f)?f.value=g:null),class:"demo-tabs"},{default:V(()=>[r(el,{label:"User",name:"first"},{default:V(()=>[r(de,{model:m(s),ref_key:"form1",ref:y},{default:V(()=>[r(ae,{label:"活动名称",prop:"name"},{default:V(()=>[r(ne,{modelValue:m(s).name,"onUpdate:modelValue":c[6]||(c[6]=g=>m(s).name=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),r(el,{label:"Config",name:"second"},{default:V(()=>[r(de,{model:m(s),ref_key:"form2",ref:a},{default:V(()=>[r(ae,{label:"活动名称",prop:"name"},{default:V(()=>[r(ne,{modelValue:m(s).name,"onUpdate:modelValue":c[7]||(c[7]=g=>m(s).name=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"]),v("button",{onClick:x,type:"button"},"重置"),m(h)?(F(),Ce(de,{key:0,model:m(s),ref_key:"form3",ref:L},{default:V(()=>[r(ae,{label:"活动名称",prop:"name"},{default:V(()=>[r(ne,{modelValue:m(s).name,"onUpdate:modelValue":c[9]||(c[9]=g=>m(s).name=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):q("v-if",!0),K(" 不过 formRef.value.resetFields()记录的初始值是 onMounted前的初始值 如果这个值在onMounted前被修改了 那么初始值也会变 这个初始值不会因为后续再重新给form的某个属性赋值 而被更改 因为他就是初始值 ")]),pn,v("fieldset",null,[bn,r(wl,{modelValue:m(l),"onUpdate:modelValue":c[10]||(c[10]=g=>U(l)?l.value=g:null),onChange:N,class:"m-2",placeholder:"Select",size:"large"},{default:V(()=>[(F(!0),Y(nt,null,at(m(E),g=>(F(),Ce(Vl,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),v("fieldset",null,[gn,hn,_n,yn,Cn,kn,r(Nl,{style:{"max-width":"600px"},data:m(I),"current-node-key":m(Q),"default-expanded-keys":m(w),"highlight-current":"",props:{children:"children",label:"label"},accordion:"","node-key":"id",onNodeExpand:S,onNodeClick:k},null,8,["data","current-node-key","default-expanded-keys"])]),v("fieldset",null,[xn,Vn,r(Re,{modelValue:m(O),"onUpdate:modelValue":c[14]||(c[14]=g=>U(O)?O.value=g:null)},{default:V(()=>[r(de,{model:m($),ref_key:"formRef",ref:A},{default:V(()=>[r(ae,{label:"活动名称",prop:"name"},{default:V(()=>[r(ne,{type:"text",modelValue:m($).name,"onUpdate:modelValue":c[11]||(c[11]=g=>m($).name=g)},null,8,["modelValue"])]),_:1}),r(ae,{label:"活动名称2",prop:"name2"},{default:V(()=>[r(ne,{type:"text",modelValue:m($).name2,"onUpdate:modelValue":c[12]||(c[12]=g=>m($).name2=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),r(re,{onClick:c[13]||(c[13]=g=>m(A).resetFields())},{default:V(()=>[K("重置")]),_:1})]),_:1},8,["modelValue"]),r(re,{onClick:z},{default:V(()=>[K("打开")]),_:1})]),v("fieldset",null,[wn,Nn,Tn,En,m(se)?(F(),Ce(de,{key:0,ref_key:"formR",ref:P,model:m(B)},{default:V(()=>[r(ae,{prop:"name"},{default:V(()=>[r(ne,{modelValue:m(B).name,"onUpdate:modelValue":c[15]||(c[15]=g=>m(B).name=g)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):q("v-if",!0),r(re,{onClick:c[16]||(c[16]=g=>T.$refs.formR.resetFields())},{default:V(()=>[K("reset")]),_:1}),r(re,{onClick:ve},{default:V(()=>[K("出来吧 弹框")]),_:1})]),v("fieldset",null,[Sn,Ln,r(Xe,{data:m(M).data,"table-layout":"fixed","current-row-key":m(H),"onUpdate:currentRowKey":c[17]||(c[17]=g=>U(H)?H.value=g:null),"row-key":"date","highlight-current-row":""},{default:V(()=>[r(X,{prop:"date",label:"Date"}),r(X,{prop:"name",label:"Name"}),r(X,{prop:"address",label:"Address"})]),_:1},8,["data","current-row-key"])]),v("fieldset",null,[$n,r(Ze,{options:me,props:{checkStrictly:!0}})]),v("fieldset",null,[On,r(Re,{modelValue:m(ue),"onUpdate:modelValue":c[19]||(c[19]=g=>U(ue)?ue.value=g:null),"append-to-body":""},{default:V(()=>[r(de,{model:m(Ie),rules:m(hl)},{default:V(()=>[r(ae,{label:"选择",prop:"select"},{default:V(()=>[r(Tl,{modelValue:m(Ie).select,"onUpdate:modelValue":c[18]||(c[18]=g=>m(Ie).select=g),data:m(ye),multiple:"",style:{width:"240px"}},null,8,["modelValue","data"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),r(re,{onClick:Be},{default:V(()=>[K("展示树")]),_:1})]),v("fieldset",null,[Pn,An,m(_l)?(F(),Y("div",{key:0,a:m(H).b.cc},al(m(H).b.cc),9,Bn)):q("v-if",!0)]),v("fieldset",null,[In,q(" 阻止跳转默认 "),v("a",{href:"www.baidu.com",onClick:c[20]||(c[20]=et(()=>{},["prevent"]))},"百度"),q(" 这个不生效 其他两个生效 "),Kn,Rn,v("a",{href:"www.baidu.com",onClick:c[21]||(c[21]=g=>g.preventDefault())},"百度"),v("form",{action:"",onSubmit:Je},[...Fn],32),q(" 内联事件 最终转换为(e)=> 而直接写事件名 最终转换的也是(e)=> 也就是说无论vue的事件是如何定义的 最终都要多包一层 而不是直接通过onxxx绑定的  最有可能的还是addEventListener 因为如果是onxxx 会出现事件覆盖 这里没有  "),v("input",{type:"text",onChange:Je,ref_key:"ipt",ref:Qe,id:"ipt",onInput:c[22]||(c[22]=g=>console.log(1))},null,544),Dn,K(" getEventListeners 谷歌控制台提供的获取元素所有事件的方法 "),zn,r(El,{onClick:c[23]||(c[23]=g=>console.log(1)),id:"even",onChange:c[24]||(c[24]=g=>console.log(2)),onI:c[25]||(c[25]=g=>k())}),K(" vue2中事件处理 https://blog.csdn.net/m0_52711377/article/details/127821080 vue3中事件处理 https://juejin.cn/post/7206576861051584573 vue中对事件的处理 只需要绑定一次addeventListener 然后事件更新是通过修改 invoker的value引用的 因此性能很好 与传统的add 与removelistener相比 不过这里暂时不理解为什么要做这个测试 vue的事件不也是只绑定一次吗 https://cloud.tencent.com.cn/developer/article/2021177 Vuejs 设计与实现 —— 渲染器核心：挂载与更新 https://blog.csdn.net/m0_64572085/article/details/129228019 vue 数据变化更新视图原理之 vdom（虚拟dom）、vnode（虚拟节点）、 diff算法、为什么不能用index作为key? 渲染器的好帮手 VNode https://zhuanlan.zhihu.com/p/632190953 vdom 是虚拟dom树 vnode是树的节点 这一点和真实dom和node关系是一致的 "),q(" arrayMethods[count] "),q(" 据我测试 组件的事件都是一次绑定的 暂时没有看到事件会切换的场景阿 那为什么vue还要用invoker来调用事件呢 难道仅仅是为了移除时好移除？ 这个以后有机会再研究吧 "),v("button",{id:"btn",type:"button",onClick:c[26]||(c[26]=g=>m(Ke)===1?yl:Cl)}," 按钮 ")]),v("fieldset",null,[v("legend",{class:qe(T.$style.red)},"插槽 插槽默认值测试",2),q(" 插槽的默认值是插槽没使用或者使用了 但值是空的情况下 显示默认值 "),r(Sl,null,{default:V(()=>[K(al(m(kl).age),1)]),_:1})])])])}}},jn={$style:rn},Ca=_e(Un,[["__cssModules",jn],["__file","D:/html/开源 工具/integration-test/src/views/TestFive.vue"]]);export{Ca as default};
