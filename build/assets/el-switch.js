import{by as ee,ac as ae,bg as k,ad as te,ay as D,bi as I,aA as T,ag as N,aV as K,aM as M,x as H,y as ie,aX as oe,aY as ne,af as le,a_ as se,aZ as ce,s as d,H as B,aS as re,q as P,aN as U,z as ue,o,c as v,a as A,u as a,ai as u,b0 as de,a5 as c,g as p,a7 as b,E as h,b as r,t as z,e as ve,be as fe,B as _,S as $,U as pe,aj as he,P as me,bz as q,aq as ye,ak as be}from"./index.js";import{u as ge}from"./el-button.js";const Se=s=>["",...ee].includes(s),Ce=ae({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Se},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:k},activeActionIcon:{type:k},activeIcon:{type:k},inactiveIcon:{type:k},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:te(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),ke={[D]:s=>I(s)||T(s)||N(s),[K]:s=>I(s)||T(s)||N(s),[M]:s=>I(s)||T(s)||N(s)},Ie=["onClick"],we=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Ve=["aria-hidden"],Ee=["aria-hidden"],Te=["aria-hidden"],w="ElSwitch",Ne=H({name:w}),Be=H({...Ne,props:Ce,emits:ke,setup(s,{expose:L,emit:f}){const t=s,j=ie(),{formItem:g}=oe(),G=ne(),i=le("switch");(e=>{e.forEach(l=>{ge({from:l[0],replacement:l[1],scope:w,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},d(()=>{var y;return!!((y=j.vnode.props)!=null&&y[l[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:R}=se(t,{formItemContext:g}),S=ce(d(()=>t.loading)),V=B(t.modelValue!==!1),m=B(),W=B(),X=d(()=>[i.b(),i.m(G.value),i.is("disabled",S.value),i.is("checked",n.value)]),Y=d(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),Z=d(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),J=d(()=>({width:re(t.width)}));P(()=>t.modelValue,()=>{V.value=!0}),P(()=>t.value,()=>{V.value=!1});const F=d(()=>V.value?t.modelValue:t.value),n=d(()=>F.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(F.value)||(f(D,t.inactiveValue),f(K,t.inactiveValue),f(M,t.inactiveValue)),P(n,e=>{var l;m.value.checked=e,t.validateEvent&&((l=g==null?void 0:g.validate)==null||l.call(g,"change").catch(y=>U(y)))});const C=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(D,e),f(K,e),f(M,e),me(()=>{m.value.checked=n.value})},O=()=>{if(S.value)return;const{beforeChange:e}=t;if(!e){C();return}const l=e();[q(l),I(l)].includes(!0)||ye(w,"beforeChange must return type `Promise<boolean>` or `boolean`"),q(l)?l.then(E=>{E&&C()}).catch(E=>{U(w,`some error occurred: ${E}`)}):l&&C()},Q=d(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),x=()=>{var e,l;(l=(e=m.value)==null?void 0:e.focus)==null||l.call(e)};return ue(()=>{m.value.checked=n.value}),L({focus:x,checked:n}),(e,l)=>(o(),v("div",{class:u(a(X)),style:$(a(Q)),onClick:pe(O,["prevent"])},[A("input",{id:a(R),ref_key:"input",ref:m,class:u(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(S),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(S),tabindex:e.tabindex,onChange:C,onKeydown:de(O,["enter"])},null,42,we),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),v("span",{key:0,class:u(a(Y))},[e.inactiveIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),v("span",{key:1,"aria-hidden":a(n)},z(e.inactiveText),9,Ve)):r("v-if",!0)],2)):r("v-if",!0),A("span",{ref_key:"core",ref:W,class:u(a(i).e("core")),style:$(a(J))},[e.inlinePrompt?(o(),v("div",{key:0,class:u(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),c(a(h),{key:0,class:u(a(i).is("icon"))},{default:p(()=>[(o(),c(b(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),v("span",{key:1,class:u(a(i).is("text")),"aria-hidden":!a(n)},z(a(n)?e.activeText:e.inactiveText),11,Ee)):r("v-if",!0)],2)):r("v-if",!0),A("div",{class:u(a(i).e("action"))},[e.loading?(o(),c(a(h),{key:0,class:u(a(i).is("loading"))},{default:p(()=>[ve(a(fe))]),_:1},8,["class"])):a(n)?_(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(n)?r("v-if",!0):_(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),v("span",{key:1,class:u(a(Z))},[e.activeIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(b(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(o(),v("span",{key:1,"aria-hidden":!a(n)},z(e.activeText),9,Te)):r("v-if",!0)],2)):r("v-if",!0)],14,Ie))}});var Pe=he(Be,[["__file","switch.vue"]]);const Ke=be(Pe);export{Ke as E};
