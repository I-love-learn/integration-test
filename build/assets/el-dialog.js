import{aD as me,aP as G,n as Z,z as se,I as pe,A as ye,aS as W,W as be,aq as Ee,af as J,bF as Ce,aG as le,bn as ee,q,aH as ge,aI as Te,bG as Se,aF as we,b6 as X,ac as Q,ad as V,x as z,e as H,B as S,M as Ae,bg as Le,v as oe,s as I,o as R,c as F,a as K,ai as w,u as o,t as Me,g as k,a5 as j,a7 as De,E as ke,b as x,S as ae,aj as re,bH as he,ay as ie,bi as Ie,y as Be,bA as te,H as h,P as Ne,bI as Oe,bw as ne,ao as Re,K as $e,Q as Ye,a4 as _e,aQ as He,R as ze,T as Ke,bJ as Ue,ak as Ve}from"./index.js";import{u as Ge}from"./index4.js";import{F as Xe,i as Fe,E as Pe}from"./focus-trap.js";import{c as We,d as qe,u as je}from"./el-button.js";import{g as xe}from"./scroll.js";const Je=(...e)=>t=>{e.forEach(n=>{me(n)?n(t):n.value=t})};var U=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(U||{});const P=e=>{const t=G(e)?e:[e],n=[];return t.forEach(a=>{var l;G(a)?n.push(...P(a)):Z(a)&&G(a.children)?n.push(...P(a.children)):(n.push(a),Z(a)&&((l=a.component)!=null&&l.subTree)&&n.push(...P(a.component.subTree)))}),n},Qe=(e,t,n,a)=>{let l={offsetX:0,offsetY:0};const d=v=>{const c=v.clientX,p=v.clientY,{offsetX:y,offsetY:C}=l,f=e.value.getBoundingClientRect(),u=f.left,T=f.top,B=f.width,$=f.height,N=document.documentElement.clientWidth,Y=document.documentElement.clientHeight,_=-u+y,O=-T+C,A=N-u-B+y,L=Y-T-$+C,g=s=>{let m=y+s.clientX-c,b=C+s.clientY-p;a!=null&&a.value||(m=Math.min(Math.max(m,_),A),b=Math.min(Math.max(b,O),L)),l={offsetX:m,offsetY:b},e.value&&(e.value.style.transform=`translate(${W(m)}, ${W(b)})`)},M=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",M)},i=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",d)},r=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",d)};se(()=>{pe(()=>{n.value?i():r()})}),ye(()=>{r()})},Ze=(e,t={})=>{be(e)||Ee("[useLockscreen]","You need to pass a ref param to this function");const n=t.ns||J("popup"),a=Ce(()=>n.bm("parent","hidden"));if(!le||ee(document.body,a.value))return;let l=0,d=!1,i="0";const r=()=>{setTimeout(()=>{we(document==null?void 0:document.body,a.value),d&&document&&(document.body.style.width=i)},200)};q(e,v=>{if(!v){r();return}d=!ee(document.body,a.value),d&&(i=document.body.style.width),l=xe(n.namespace.value);const c=document.documentElement.clientHeight<document.body.scrollHeight,p=ge(document.body,"overflowY");l>0&&(c||p==="scroll")&&d&&(document.body.style.width=`calc(100% - ${l}px)`),Te(document.body,a.value)}),Se(()=>r())},ue=e=>{if(!e)return{onClick:X,onMousedown:X,onMouseup:X};let t=!1,n=!1;return{onClick:i=>{t&&n&&e(i),t=n=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{n=i.target===i.currentTarget}}},eo=Q({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:V([String,Array,Object])},zIndex:{type:V([String,Number])}}),oo={click:e=>e instanceof MouseEvent},to="overlay";var no=z({name:"ElOverlay",props:eo,emits:oo,setup(e,{slots:t,emit:n}){const a=J(to),l=v=>{n("click",v)},{onClick:d,onMousedown:i,onMouseup:r}=ue(e.customMaskEvent?void 0:l);return()=>e.mask?H("div",{class:[a.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:d,onMousedown:i,onMouseup:r},[S(t,"default")],U.STYLE|U.CLASS|U.PROPS,["onClick","onMouseup","onMousedown"]):Ae("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[S(t,"default")])}});const so=no,de=Symbol("dialogInjectionKey"),ce=Q({center:Boolean,alignCenter:Boolean,closeIcon:{type:Le},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),lo={close:()=>!0},ao=["aria-level"],ro=["aria-label"],io=["id"],uo=z({name:"ElDialogContent"}),co=z({...uo,props:ce,emits:lo,setup(e){const t=e,{t:n}=Ge(),{Close:a}=he,{dialogRef:l,headerRef:d,bodyId:i,ns:r,style:v}=oe(de),{focusTrapRef:c}=oe(Xe),p=I(()=>[r.b(),r.is("fullscreen",t.fullscreen),r.is("draggable",t.draggable),r.is("align-center",t.alignCenter),{[r.m("center")]:t.center}]),y=Je(c,l),C=I(()=>t.draggable),f=I(()=>t.overflow);return Qe(l,d,C,f),(u,T)=>(R(),F("div",{ref:o(y),class:w(o(p)),style:ae(o(v)),tabindex:"-1"},[K("header",{ref_key:"headerRef",ref:d,class:w([o(r).e("header"),{"show-close":u.showClose}])},[S(u.$slots,"header",{},()=>[K("span",{role:"heading","aria-level":u.ariaLevel,class:w(o(r).e("title"))},Me(u.title),11,ao)]),u.showClose?(R(),F("button",{key:0,"aria-label":o(n)("el.dialog.close"),class:w(o(r).e("headerbtn")),type:"button",onClick:T[0]||(T[0]=B=>u.$emit("close"))},[H(o(ke),{class:w(o(r).e("close"))},{default:k(()=>[(R(),j(De(u.closeIcon||o(a))))]),_:1},8,["class"])],10,ro)):x("v-if",!0)],2),K("div",{id:o(i),class:w(o(r).e("body"))},[S(u.$slots,"default")],10,io),u.$slots.footer?(R(),F("footer",{key:0,class:w(o(r).e("footer"))},[S(u.$slots,"footer")],2)):x("v-if",!0)],6))}});var fo=re(co,[["__file","dialog-content.vue"]]);const vo=Q({...ce,appendToBody:Boolean,appendTo:{type:V(String),default:"body"},beforeClose:{type:V(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),mo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ie]:e=>Ie(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},po=(e,t)=>{var n;const l=Be().emit,{nextZIndex:d}=We();let i="";const r=te(),v=te(),c=h(!1),p=h(!1),y=h(!1),C=h((n=e.zIndex)!=null?n:d());let f,u;const T=qe("namespace",Oe),B=I(()=>{const E={},D=`--${T.value}-dialog`;return e.fullscreen||(e.top&&(E[`${D}-margin-top`]=e.top),e.width&&(E[`${D}-width`]=W(e.width))),E}),$=I(()=>e.alignCenter?{display:"flex"}:{});function N(){l("opened")}function Y(){l("closed"),l(ie,!1),e.destroyOnClose&&(y.value=!1)}function _(){l("close")}function O(){u==null||u(),f==null||f(),e.openDelay&&e.openDelay>0?{stop:f}=ne(()=>M(),e.openDelay):M()}function A(){f==null||f(),u==null||u(),e.closeDelay&&e.closeDelay>0?{stop:u}=ne(()=>s(),e.closeDelay):s()}function L(){function E(D){D||(p.value=!0,c.value=!1)}e.beforeClose?e.beforeClose(E):A()}function g(){e.closeOnClickModal&&L()}function M(){le&&(c.value=!0)}function s(){c.value=!1}function m(){l("openAutoFocus")}function b(){l("closeAutoFocus")}function fe(E){var D;((D=E.detail)==null?void 0:D.focusReason)==="pointer"&&E.preventDefault()}e.lockScroll&&Ze(c);function ve(){e.closeOnPressEscape&&L()}return q(()=>e.modelValue,E=>{E?(p.value=!1,O(),y.value=!0,C.value=Fe(e.zIndex)?d():C.value++,Ne(()=>{l("open"),t.value&&(t.value.scrollTop=0)})):c.value&&A()}),q(()=>e.fullscreen,E=>{t.value&&(E?(i=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=i)}),se(()=>{e.modelValue&&(c.value=!0,y.value=!0,O())}),{afterEnter:N,afterLeave:Y,beforeLeave:_,handleClose:L,onModalClick:g,close:A,doClose:s,onOpenAutoFocus:m,onCloseAutoFocus:b,onCloseRequested:ve,onFocusoutPrevented:fe,titleId:r,bodyId:v,closed:p,style:B,overlayDialogStyle:$,rendered:y,visible:c,zIndex:C}},yo=["aria-label","aria-labelledby","aria-describedby"],bo=z({name:"ElDialog",inheritAttrs:!1}),Eo=z({...bo,props:vo,emits:mo,setup(e,{expose:t}){const n=e,a=Re();je({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!a.title));const l=J("dialog"),d=h(),i=h(),r=h(),{visible:v,titleId:c,bodyId:p,style:y,overlayDialogStyle:C,rendered:f,zIndex:u,afterEnter:T,afterLeave:B,beforeLeave:$,handleClose:N,onModalClick:Y,onOpenAutoFocus:_,onCloseAutoFocus:O,onCloseRequested:A,onFocusoutPrevented:L}=po(n,d);$e(de,{dialogRef:d,headerRef:i,bodyId:p,ns:l,rendered:f,style:y});const g=ue(Y),M=I(()=>n.draggable&&!n.fullscreen);return t({visible:v,dialogContentRef:r}),(s,m)=>(R(),j(Ue,{to:s.appendTo,disabled:s.appendTo!=="body"?!1:!s.appendToBody},[H(Ke,{name:"dialog-fade",onAfterEnter:o(T),onAfterLeave:o(B),onBeforeLeave:o($),persisted:""},{default:k(()=>[Ye(H(o(so),{"custom-mask-event":"",mask:s.modal,"overlay-class":s.modalClass,"z-index":o(u)},{default:k(()=>[K("div",{role:"dialog","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:o(c),"aria-describedby":o(p),class:w(`${o(l).namespace.value}-overlay-dialog`),style:ae(o(C)),onClick:m[0]||(m[0]=(...b)=>o(g).onClick&&o(g).onClick(...b)),onMousedown:m[1]||(m[1]=(...b)=>o(g).onMousedown&&o(g).onMousedown(...b)),onMouseup:m[2]||(m[2]=(...b)=>o(g).onMouseup&&o(g).onMouseup(...b))},[H(o(Pe),{loop:"",trapped:o(v),"focus-start-el":"container",onFocusAfterTrapped:o(_),onFocusAfterReleased:o(O),onFocusoutPrevented:o(L),onReleaseRequested:o(A)},{default:k(()=>[o(f)?(R(),j(fo,_e({key:0,ref_key:"dialogContentRef",ref:r},s.$attrs,{center:s.center,"align-center":s.alignCenter,"close-icon":s.closeIcon,draggable:o(M),overflow:s.overflow,fullscreen:s.fullscreen,"show-close":s.showClose,title:s.title,"aria-level":s.headerAriaLevel,onClose:o(N)}),He({header:k(()=>[s.$slots.title?S(s.$slots,"title",{key:1}):S(s.$slots,"header",{key:0,close:o(N),titleId:o(c),titleClass:o(l).e("title")})]),default:k(()=>[S(s.$slots,"default")]),_:2},[s.$slots.footer?{name:"footer",fn:k(()=>[S(s.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):x("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,yo)]),_:3},8,["mask","overlay-class","z-index"]),[[ze,o(v)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Co=re(Eo,[["__file","dialog.vue"]]);const Lo=Ve(Co);export{Lo as E,P as f};
