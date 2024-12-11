import{aT as Z,ay as z,aA as M,ag as O,bi as G,v as I,s as g,az as w,aZ as de,aX as T,y as j,q as H,aN as Q,P as X,H as D,aP as E,ah as be,Z as A,aY as q,aU as ve,a_ as Y,x as L,ao as J,af as R,o as x,a5 as _,g as ee,a as W,ai as C,u as o,Q as $,c as y,W as V,U as F,c1 as N,B as U,F as ce,i as ae,t as le,b as P,a7 as ne,aj as K,S as me,ac as fe,ad as ke,K as pe,aC as ge,ak as he,ap as te}from"./index.js";import{i as Ce}from"./isEqual.js";import{k as xe,m as ye}from"./index4.js";import{c as Se}from"./objects.js";import{f as Le,h as Be}from"./hasIn.js";import{s as Ee,o as Ie}from"./_overRest.js";function $e(e){return Ee(Ie(e,void 0,Le),e+"")}function Ve(e,i,u){for(var l=-1,k=i.length,v={};++l<k;){var d=i[l],t=xe(e,d);u(t,d)&&Se(v,ye(d,e),t)}return v}function Fe(e,i){return Ve(e,i,function(u,l){return Be(e,l)})}var Ne=$e(function(e,i){return e==null?{}:Fe(e,i)});const oe={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Z,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},se={[z]:e=>M(e)||O(e)||G(e),change:e=>M(e)||O(e)||G(e)},B=Symbol("checkboxGroupContextKey"),ze=({model:e,isChecked:i})=>{const u=I(B,void 0),l=g(()=>{var v,d;const t=(v=u==null?void 0:u.max)==null?void 0:v.value,c=(d=u==null?void 0:u.min)==null?void 0:d.value;return!w(t)&&e.value.length>=t&&!i.value||!w(c)&&e.value.length<=c&&i.value});return{isDisabled:de(g(()=>(u==null?void 0:u.disabled.value)||l.value)),isLimitDisabled:l}},Ge=(e,{model:i,isLimitExceeded:u,hasOwnLabel:l,isDisabled:k,isLabeledByFormItem:v})=>{const d=I(B,void 0),{formItem:t}=T(),{emit:c}=j();function a(n){var b,f;return n===e.trueLabel||n===!0?(b=e.trueLabel)!=null?b:!0:(f=e.falseLabel)!=null?f:!1}function m(n,b){c("change",a(n),b)}function p(n){if(u.value)return;const b=n.target;c("change",a(b.checked),n)}async function S(n){u.value||!l.value&&!k.value&&v.value&&(n.composedPath().some(r=>r.tagName==="LABEL")||(i.value=a([!1,e.falseLabel].includes(i.value)),await X(),m(i.value,n)))}const s=g(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return H(()=>e.modelValue,()=>{s.value&&(t==null||t.validate("change").catch(n=>Q(n)))}),{handleChange:p,onClickRoot:S}},we=e=>{const i=D(!1),{emit:u}=j(),l=I(B,void 0),k=g(()=>w(l)===!1),v=D(!1),d=g({get(){var t,c;return k.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(c=e.modelValue)!=null?c:i.value},set(t){var c,a;k.value&&E(t)?(v.value=((c=l==null?void 0:l.max)==null?void 0:c.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,v.value===!1&&((a=l==null?void 0:l.changeEvent)==null||a.call(l,t))):(u(z,t),i.value=t)}});return{model:d,isGroup:k,isLimitExceeded:v}},De=(e,i,{model:u})=>{const l=I(B,void 0),k=D(!1),v=g(()=>{const a=u.value;return G(a)?a:E(a)?be(e.label)?a.map(A).some(m=>Ce(m,e.label)):a.map(A).includes(e.label):a!=null?a===e.trueLabel:!!a}),d=q(g(()=>{var a;return(a=l==null?void 0:l.size)==null?void 0:a.value}),{prop:!0}),t=q(g(()=>{var a;return(a=l==null?void 0:l.size)==null?void 0:a.value})),c=g(()=>!!i.default||!ve(e.label));return{checkboxButtonSize:d,isChecked:v,isFocused:k,checkboxSize:t,hasOwnLabel:c}},Pe=(e,{model:i})=>{function u(){E(i.value)&&!i.value.includes(e.label)?i.value.push(e.label):i.value=e.trueLabel||!0}e.checked&&u()},ie=(e,i)=>{const{formItem:u}=T(),{model:l,isGroup:k,isLimitExceeded:v}=we(e),{isFocused:d,isChecked:t,checkboxButtonSize:c,checkboxSize:a,hasOwnLabel:m}=De(e,i,{model:l}),{isDisabled:p}=ze({model:l,isChecked:t}),{inputId:S,isLabeledByFormItem:s}=Y(e,{formItemContext:u,disableIdGeneration:m,disableIdManagement:k}),{handleChange:n,onClickRoot:b}=Ge(e,{model:l,isLimitExceeded:v,hasOwnLabel:m,isDisabled:p,isLabeledByFormItem:s});return Pe(e,{model:l}),{inputId:S,isLabeledByFormItem:s,isChecked:t,isDisabled:p,isFocused:d,checkboxButtonSize:c,checkboxSize:a,hasOwnLabel:m,model:l,handleChange:n,onClickRoot:b}},Te=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Re=["id","indeterminate","disabled","value","name","tabindex"],Ue=L({name:"ElCheckbox"}),Ke=L({...Ue,props:oe,emits:se,setup(e){const i=e,u=J(),{inputId:l,isLabeledByFormItem:k,isChecked:v,isDisabled:d,isFocused:t,checkboxSize:c,hasOwnLabel:a,model:m,handleChange:p,onClickRoot:S}=ie(i,u),s=R("checkbox"),n=g(()=>[s.b(),s.m(c.value),s.is("disabled",d.value),s.is("bordered",i.border),s.is("checked",v.value)]),b=g(()=>[s.e("input"),s.is("disabled",d.value),s.is("checked",v.value),s.is("indeterminate",i.indeterminate),s.is("focus",t.value)]);return(f,r)=>(x(),_(ne(!o(a)&&o(k)?"span":"label"),{class:C(o(n)),"aria-controls":f.indeterminate?f.controls:null,onClick:o(S)},{default:ee(()=>[W("span",{class:C(o(b))},[f.trueLabel||f.falseLabel?$((x(),y("input",{key:0,id:o(l),"onUpdate:modelValue":r[0]||(r[0]=h=>V(m)?m.value=h:null),class:C(o(s).e("original")),type:"checkbox",indeterminate:f.indeterminate,name:f.name,tabindex:f.tabindex,disabled:o(d),"true-value":f.trueLabel,"false-value":f.falseLabel,onChange:r[1]||(r[1]=(...h)=>o(p)&&o(p)(...h)),onFocus:r[2]||(r[2]=h=>t.value=!0),onBlur:r[3]||(r[3]=h=>t.value=!1),onClick:r[4]||(r[4]=F(()=>{},["stop"]))},null,42,Te)),[[N,o(m)]]):$((x(),y("input",{key:1,id:o(l),"onUpdate:modelValue":r[5]||(r[5]=h=>V(m)?m.value=h:null),class:C(o(s).e("original")),type:"checkbox",indeterminate:f.indeterminate,disabled:o(d),value:f.label,name:f.name,tabindex:f.tabindex,onChange:r[6]||(r[6]=(...h)=>o(p)&&o(p)(...h)),onFocus:r[7]||(r[7]=h=>t.value=!0),onBlur:r[8]||(r[8]=h=>t.value=!1),onClick:r[9]||(r[9]=F(()=>{},["stop"]))},null,42,Re)),[[N,o(m)]]),W("span",{class:C(o(s).e("inner"))},null,2)],2),o(a)?(x(),y("span",{key:0,class:C(o(s).e("label"))},[U(f.$slots,"default"),f.$slots.default?P("v-if",!0):(x(),y(ce,{key:0},[ae(le(f.label),1)],64))],2)):P("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Me=K(Ke,[["__file","checkbox.vue"]]);const Oe=["name","tabindex","disabled","true-value","false-value"],Ae=["name","tabindex","disabled","value"],qe=L({name:"ElCheckboxButton"}),We=L({...qe,props:oe,emits:se,setup(e){const i=e,u=J(),{isFocused:l,isChecked:k,isDisabled:v,checkboxButtonSize:d,model:t,handleChange:c}=ie(i,u),a=I(B,void 0),m=R("checkbox"),p=g(()=>{var s,n,b,f;const r=(n=(s=a==null?void 0:a.fill)==null?void 0:s.value)!=null?n:"";return{backgroundColor:r,borderColor:r,color:(f=(b=a==null?void 0:a.textColor)==null?void 0:b.value)!=null?f:"",boxShadow:r?`-1px 0 0 0 ${r}`:void 0}}),S=g(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",v.value),m.is("checked",k.value),m.is("focus",l.value)]);return(s,n)=>(x(),y("label",{class:C(o(S))},[s.trueLabel||s.falseLabel?$((x(),y("input",{key:0,"onUpdate:modelValue":n[0]||(n[0]=b=>V(t)?t.value=b:null),class:C(o(m).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:o(v),"true-value":s.trueLabel,"false-value":s.falseLabel,onChange:n[1]||(n[1]=(...b)=>o(c)&&o(c)(...b)),onFocus:n[2]||(n[2]=b=>l.value=!0),onBlur:n[3]||(n[3]=b=>l.value=!1),onClick:n[4]||(n[4]=F(()=>{},["stop"]))},null,42,Oe)),[[N,o(t)]]):$((x(),y("input",{key:1,"onUpdate:modelValue":n[5]||(n[5]=b=>V(t)?t.value=b:null),class:C(o(m).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:o(v),value:s.label,onChange:n[6]||(n[6]=(...b)=>o(c)&&o(c)(...b)),onFocus:n[7]||(n[7]=b=>l.value=!0),onBlur:n[8]||(n[8]=b=>l.value=!1),onClick:n[9]||(n[9]=F(()=>{},["stop"]))},null,42,Ae)),[[N,o(t)]]),s.$slots.default||s.label?(x(),y("span",{key:2,class:C(o(m).be("button","inner")),style:me(o(k)?o(p):void 0)},[U(s.$slots,"default",{},()=>[ae(le(s.label),1)])],6)):P("v-if",!0)],2))}});var ue=K(We,[["__file","checkbox-button.vue"]]);const Ze=fe({modelValue:{type:ke(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Z,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),je={[z]:e=>E(e),change:e=>E(e)},He=L({name:"ElCheckboxGroup"}),Qe=L({...He,props:Ze,emits:je,setup(e,{emit:i}){const u=e,l=R("checkbox"),{formItem:k}=T(),{inputId:v,isLabeledByFormItem:d}=Y(u,{formItemContext:k}),t=async a=>{i(z,a),await X(),i("change",a)},c=g({get(){return u.modelValue},set(a){t(a)}});return pe(B,{...Ne(ge(u),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:c,changeEvent:t}),H(()=>u.modelValue,()=>{u.validateEvent&&(k==null||k.validate("change").catch(a=>Q(a)))}),(a,m)=>{var p;return x(),_(ne(a.tag),{id:o(v),class:C(o(l).b("group")),role:"group","aria-label":o(d)?void 0:a.label||"checkbox-group","aria-labelledby":o(d)?(p=o(k))==null?void 0:p.labelId:void 0},{default:ee(()=>[U(a.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var re=K(Qe,[["__file","checkbox-group.vue"]]);const la=he(Me,{CheckboxButton:ue,CheckboxGroup:re});te(ue);te(re);export{la as E,Ne as p};
