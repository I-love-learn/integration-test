import{bx as ee,ad as ae,bf as k,ae as te,az as z,bh as I,aB as N,ah as T,aU as O,aN as K,p as L,q as ie,aW as oe,aX as ne,ag as le,aZ as se,aY as ce,m as d,y as B,aR as re,l as P,aO as U,s as ue,o,c as v,a as A,W as a,aj as u,a$ as de,a6 as c,w as p,ab as b,E as h,b as r,N as D,e as ve,bd as fe,u as $,M as W,O as pe,ak as he,J as me,by as _,ar as ye,al as be}from"./index.js";import{u as ge}from"./el-button.js";const Ce=s=>["",...ee].includes(s),Se=ae({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Ce},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:k},activeActionIcon:{type:k},activeIcon:{type:k},inactiveIcon:{type:k},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:te(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),ke={[z]:s=>I(s)||N(s)||T(s),[O]:s=>I(s)||N(s)||T(s),[K]:s=>I(s)||N(s)||T(s)},Ie=["onClick"],we=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Ve=["aria-hidden"],Ee=["aria-hidden"],Ne=["aria-hidden"],w="ElSwitch",Te=L({name:w}),Be=L({...Te,props:Se,emits:ke,setup(s,{expose:R,emit:f}){const t=s,j=ie(),{formItem:g}=oe(),q=ne(),i=le("switch");(e=>{e.forEach(l=>{ge({from:l[0],replacement:l[1],scope:w,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},d(()=>{var y;return!!((y=j.vnode.props)!=null&&y[l[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:G}=se(t,{formItemContext:g}),C=ce(d(()=>t.loading)),V=B(t.modelValue!==!1),m=B(),H=B(),J=d(()=>[i.b(),i.m(q.value),i.is("disabled",C.value),i.is("checked",n.value)]),X=d(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),Y=d(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),Z=d(()=>({width:re(t.width)}));P(()=>t.modelValue,()=>{V.value=!0}),P(()=>t.value,()=>{V.value=!1});const M=d(()=>V.value?t.modelValue:t.value),n=d(()=>M.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(M.value)||(f(z,t.inactiveValue),f(O,t.inactiveValue),f(K,t.inactiveValue)),P(n,e=>{var l;m.value.checked=e,t.validateEvent&&((l=g==null?void 0:g.validate)==null||l.call(g,"change").catch(y=>U(y)))});const S=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(z,e),f(O,e),f(K,e),me(()=>{m.value.checked=n.value})},F=()=>{if(C.value)return;const{beforeChange:e}=t;if(!e){S();return}const l=e();[_(l),I(l)].includes(!0)||ye(w,"beforeChange must return type `Promise<boolean>` or `boolean`"),_(l)?l.then(E=>{E&&S()}).catch(E=>{U(w,`some error occurred: ${E}`)}):l&&S()},Q=d(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),x=()=>{var e,l;(l=(e=m.value)==null?void 0:e.focus)==null||l.call(e)};return ue(()=>{m.value.checked=n.value}),R({focus:x,checked:n}),(e,l)=>(o(),v("div",{class:u(a(J)),style:W(a(Q)),onClick:pe(F,["prevent"])},[A("input",{id:a(G),ref_key:"input",ref:m,class:u(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(C),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(C),tabindex:e.tabindex,onChange:S,onKeydown:de(F,["enter"])},null,42,we),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),v("span",{key:0,class:u(a(X))},[e.inactiveIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),v("span",{key:1,"aria-hidden":a(n)},D(e.inactiveText),9,Ve)):r("v-if",!0)],2)):r("v-if",!0),A("span",{ref_key:"core",ref:H,class:u(a(i).e("core")),style:W(a(Z))},[e.inlinePrompt?(o(),v("div",{key:0,class:u(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),c(a(h),{key:0,class:u(a(i).is("icon"))},{default:p(()=>[(o(),c(b(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),v("span",{key:1,class:u(a(i).is("text")),"aria-hidden":!a(n)},D(a(n)?e.activeText:e.inactiveText),11,Ee)):r("v-if",!0)],2)):r("v-if",!0),A("div",{class:u(a(i).e("action"))},[e.loading?(o(),c(a(h),{key:0,class:u(a(i).is("loading"))},{default:p(()=>[ve(a(fe))]),_:1},8,["class"])):a(n)?$(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(n)?r("v-if",!0):$(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),v("span",{key:1,class:u(a(Y))},[e.activeIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(o(),v("span",{key:1,"aria-hidden":!a(n)},D(e.activeText),9,Ne)):r("v-if",!0)],2)):r("v-if",!0)],14,Ie))}});var Pe=he(Be,[["__file","switch.vue"]]);const Oe=be(Pe);export{Oe as E};
