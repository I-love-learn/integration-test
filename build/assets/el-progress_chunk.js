import{af as K,ag as h,m as j,ai as I,n as C,b3 as Fe,b4 as ce,b5 as Re,b6 as pe,az as fe,aF as ve,aD as ee,o as g,c as E,al as m,u as e,a as N,$ as M,O as L,t as W,b as k,aa as D,i as T,ac as Le,f as q,am as H,an as me,at as x,aQ as ye,aV as ge,ah as J,b7 as P,a_ as V,s as he,F as Te,G as _e,b1 as be,a0 as z,d as B,b8 as Ue,b9 as De,ba as Oe,bb as Be,M as Ne,Q as Y,bc as te,bd as je,z as se,aO as Me,N as qe,T as Ae,V as Ie,aR as ae,a9 as oe}from"./index_entry_HTNilGQT.js";import{u as ze}from"./index_chunk3.js";import{e as Ke}from"./objects_chunk.js";import{c as ne}from"./cloneDeep_chunk.js";import{i as He}from"./isEqual_chunk.js";const We=K({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:o=>o>=0&&o<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:h(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:h([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:h(Function),default:o=>`${o}%`}}),Ve=["aria-valuenow"],Xe={viewBox:"0 0 100 100"},Ge=["d","stroke","stroke-linecap","stroke-width"],Qe=["d","stroke","opacity","stroke-linecap","stroke-width"],Je={key:0},Ye=j({name:"ElProgress"}),Ze=j({...Ye,props:We,setup(o){const t=o,s={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},u=I("progress"),f=C(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:F(t.percentage)})),c=C(()=>(t.strokeWidth/t.width*100).toFixed(1)),y=C(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(c.value)/2}`,10):0),S=C(()=>{const r=y.value,R=t.type==="dashboard";return`
          M 50 50
          m 0 ${R?"":"-"}${r}
          a ${r} ${r} 0 1 1 0 ${R?"-":""}${r*2}
          a ${r} ${r} 0 1 1 0 ${R?"":"-"}${r*2}
          `}),b=C(()=>2*Math.PI*y.value),$=C(()=>t.type==="dashboard"?.75:1),w=C(()=>`${-1*b.value*(1-$.value)/2}px`),v=C(()=>({strokeDasharray:`${b.value*$.value}px, ${b.value}px`,strokeDashoffset:w.value})),i=C(()=>({strokeDasharray:`${b.value*$.value*(t.percentage/100)}px, ${b.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),a=C(()=>{let r;return t.color?r=F(t.percentage):r=s[t.status]||s.default,r}),d=C(()=>t.status==="warning"?Fe:t.type==="line"?t.status==="success"?ce:Re:t.status==="success"?pe:fe),n=C(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),p=C(()=>t.format(t.percentage));function l(r){const R=100/r.length;return r.map((_,U)=>ee(_)?{color:_,percentage:(U+1)*R}:_).sort((_,U)=>_.percentage-U.percentage)}const F=r=>{var R;const{color:O}=t;if(ve(O))return O(r);if(ee(O))return O;{const _=l(O);for(const U of _)if(U.percentage>r)return U.color;return(R=_[_.length-1])==null?void 0:R.color}};return(r,R)=>(g(),E("div",{class:m([e(u).b(),e(u).m(r.type),e(u).is(r.status),{[e(u).m("without-text")]:!r.showText,[e(u).m("text-inside")]:r.textInside}]),role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(g(),E("div",{key:0,class:m(e(u).b("bar"))},[N("div",{class:m(e(u).be("bar","outer")),style:M({height:`${r.strokeWidth}px`})},[N("div",{class:m([e(u).be("bar","inner"),{[e(u).bem("bar","inner","indeterminate")]:r.indeterminate},{[e(u).bem("bar","inner","striped")]:r.striped},{[e(u).bem("bar","inner","striped-flow")]:r.stripedFlow}]),style:M(e(f))},[(r.showText||r.$slots.default)&&r.textInside?(g(),E("div",{key:0,class:m(e(u).be("bar","innerText"))},[L(r.$slots,"default",{percentage:r.percentage},()=>[N("span",null,W(e(p)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),E("div",{key:1,class:m(e(u).b("circle")),style:M({height:`${r.width}px`,width:`${r.width}px`})},[(g(),E("svg",Xe,[N("path",{class:m(e(u).be("circle","track")),d:e(S),stroke:`var(${e(u).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),fill:"none",style:M(e(v))},null,14,Ge),N("path",{class:m(e(u).be("circle","path")),d:e(S),stroke:e(a),fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),style:M(e(i))},null,14,Qe)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(g(),E("div",{key:2,class:m(e(u).e("text")),style:M({fontSize:`${e(n)}px`})},[L(r.$slots,"default",{percentage:r.percentage},()=>[r.status?(g(),D(e(q),{key:1},{default:T(()=>[(g(),D(Le(e(d))))]),_:1})):(g(),E("span",Je,W(e(p)),1))])],6)):k("v-if",!0)],10,Ve))}});var xe=H(Ze,[["__file","progress.vue"]]);const et=me(xe),ke=Symbol("uploadContextKey"),tt="ElUpload";class st extends Error{constructor(t,s,u,f){super(t),this.name="UploadAjaxError",this.status=s,this.method=u,this.url=f}}function re(o,t,s){let u;return s.response?u=`${s.response.error||s.response}`:s.responseText?u=`${s.responseText}`:u=`fail to ${t.method} ${o} ${s.status}`,new st(u,s.status,t.method,o)}function at(o){const t=o.responseText||o.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const ot=o=>{typeof XMLHttpRequest>"u"&&x(tt,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,s=o.action;t.upload&&t.upload.addEventListener("progress",c=>{const y=c;y.percent=c.total>0?c.loaded/c.total*100:0,o.onProgress(y)});const u=new FormData;if(o.data)for(const[c,y]of Object.entries(o.data))ye(y)&&y.length?u.append(c,...y):u.append(c,y);u.append(o.filename,o.file,o.file.name),t.addEventListener("error",()=>{o.onError(re(s,o,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return o.onError(re(s,o,t));o.onSuccess(at(t))}),t.open(o.method,s,!0),o.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const f=o.headers||{};if(f instanceof Headers)f.forEach((c,y)=>t.setRequestHeader(y,c));else for(const[c,y]of Object.entries(f))ge(y)||t.setRequestHeader(c,String(y));return t.send(u),t},$e=["text","picture","picture-card"];let nt=1;const Z=()=>Date.now()+nt++,we=K({action:{type:String,default:"#"},headers:{type:h(Object)},method:{type:String,default:"post"},data:{type:h([Object,Function,Promise]),default:()=>J({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:h(Array),default:()=>J([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:$e,default:"text"},httpRequest:{type:h(Function),default:ot},disabled:Boolean,limit:Number}),rt=K({...we,beforeUpload:{type:h(Function),default:P},beforeRemove:{type:h(Function)},onRemove:{type:h(Function),default:P},onChange:{type:h(Function),default:P},onPreview:{type:h(Function),default:P},onSuccess:{type:h(Function),default:P},onProgress:{type:h(Function),default:P},onError:{type:h(Function),default:P},onExceed:{type:h(Function),default:P},crossorigin:{type:h(String)}}),lt=K({files:{type:h(Array),default:()=>J([])},disabled:{type:Boolean,default:!1},handlePreview:{type:h(Function),default:P},listType:{type:String,values:$e,default:"text"},crossorigin:{type:h(String)}}),it={remove:o=>!!o},ut=["onKeydown"],dt=["src","crossorigin"],ct=["onClick"],pt=["title"],ft=["onClick"],vt=["onClick"],mt=j({name:"ElUploadList"}),yt=j({...mt,props:lt,emits:it,setup(o,{emit:t}){const s=o,{t:u}=ze(),f=I("upload"),c=I("icon"),y=I("list"),S=V(),b=he(!1),$=C(()=>[f.b("list"),f.bm("list",s.listType),f.is("disabled",s.disabled)]),w=v=>{t("remove",v)};return(v,i)=>(g(),D(Be,{tag:"ul",class:m(e($)),name:e(y).b()},{default:T(()=>[(g(!0),E(Te,null,_e(v.files,a=>(g(),E("li",{key:a.uid||a.name,class:m([e(f).be("list","item"),e(f).is(a.status),{focusing:b.value}]),tabindex:"0",onKeydown:be(d=>!e(S)&&w(a),["delete"]),onFocus:i[0]||(i[0]=d=>b.value=!0),onBlur:i[1]||(i[1]=d=>b.value=!1),onClick:i[2]||(i[2]=d=>b.value=!1)},[L(v.$slots,"default",{file:a},()=>[v.listType==="picture"||a.status!=="uploading"&&v.listType==="picture-card"?(g(),E("img",{key:0,class:m(e(f).be("list","item-thumbnail")),src:a.url,crossorigin:v.crossorigin,alt:""},null,10,dt)):k("v-if",!0),a.status==="uploading"||v.listType!=="picture-card"?(g(),E("div",{key:1,class:m(e(f).be("list","item-info"))},[N("a",{class:m(e(f).be("list","item-name")),onClick:z(d=>v.handlePreview(a),["prevent"])},[B(e(q),{class:m(e(c).m("document"))},{default:T(()=>[B(e(Ue))]),_:1},8,["class"]),N("span",{class:m(e(f).be("list","item-file-name")),title:a.name},W(a.name),11,pt)],10,ct),a.status==="uploading"?(g(),D(e(et),{key:0,type:v.listType==="picture-card"?"circle":"line","stroke-width":v.listType==="picture-card"?6:2,percentage:Number(a.percentage),style:M(v.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),N("label",{class:m(e(f).be("list","item-status-label"))},[v.listType==="text"?(g(),D(e(q),{key:0,class:m([e(c).m("upload-success"),e(c).m("circle-check")])},{default:T(()=>[B(e(ce))]),_:1},8,["class"])):["picture-card","picture"].includes(v.listType)?(g(),D(e(q),{key:1,class:m([e(c).m("upload-success"),e(c).m("check")])},{default:T(()=>[B(e(pe))]),_:1},8,["class"])):k("v-if",!0)],2),e(S)?k("v-if",!0):(g(),D(e(q),{key:2,class:m(e(c).m("close")),onClick:d=>w(a)},{default:T(()=>[B(e(fe))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(S)?k("v-if",!0):(g(),E("i",{key:3,class:m(e(c).m("close-tip"))},W(e(u)("el.upload.deleteTip")),3)),v.listType==="picture-card"?(g(),E("span",{key:4,class:m(e(f).be("list","item-actions"))},[N("span",{class:m(e(f).be("list","item-preview")),onClick:d=>v.handlePreview(a)},[B(e(q),{class:m(e(c).m("zoom-in"))},{default:T(()=>[B(e(De))]),_:1},8,["class"])],10,ft),e(S)?k("v-if",!0):(g(),E("span",{key:0,class:m(e(f).be("list","item-delete")),onClick:d=>w(a)},[B(e(q),{class:m(e(c).m("delete"))},{default:T(()=>[B(e(Oe))]),_:1},8,["class"])],10,vt))],2)):k("v-if",!0)])],42,ut))),128)),L(v.$slots,"append")]),_:3},8,["class","name"]))}});var le=H(yt,[["__file","upload-list.vue"]]);const gt=K({disabled:{type:Boolean,default:!1}}),ht={file:o=>ye(o)},bt=["onDrop","onDragover"],Ee="ElUploadDrag",kt=j({name:Ee}),$t=j({...kt,props:gt,emits:ht,setup(o,{emit:t}){const s=Ne(ke);s||x(Ee,"usage: <el-upload><el-upload-dragger /></el-upload>");const u=I("upload"),f=he(!1),c=V(),y=b=>{if(c.value)return;f.value=!1,b.stopPropagation();const $=Array.from(b.dataTransfer.files),w=s.accept.value;if(!w){t("file",$);return}const v=$.filter(i=>{const{type:a,name:d}=i,n=d.includes(".")?`.${d.split(".").pop()}`:"",p=a.replace(/\/.*$/,"");return w.split(",").map(l=>l.trim()).filter(l=>l).some(l=>l.startsWith(".")?n===l:/\/\*$/.test(l)?p===l.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(l)?a===l:!1)});t("file",v)},S=()=>{c.value||(f.value=!0)};return(b,$)=>(g(),E("div",{class:m([e(u).b("dragger"),e(u).is("dragover",f.value)]),onDrop:z(y,["prevent"]),onDragover:z(S,["prevent"]),onDragleave:$[0]||($[0]=z(w=>f.value=!1,["prevent"]))},[L(b.$slots,"default")],42,bt))}});var wt=H($t,[["__file","upload-dragger.vue"]]);const Et=K({...we,beforeUpload:{type:h(Function),default:P},onRemove:{type:h(Function),default:P},onStart:{type:h(Function),default:P},onSuccess:{type:h(Function),default:P},onProgress:{type:h(Function),default:P},onError:{type:h(Function),default:P},onExceed:{type:h(Function),default:P}}),St=["onKeydown"],Ct=["name","multiple","accept"],Pt=j({name:"ElUploadContent",inheritAttrs:!1}),Ft=j({...Pt,props:Et,setup(o,{expose:t}){const s=o,u=I("upload"),f=V(),c=Y({}),y=Y(),S=n=>{if(n.length===0)return;const{autoUpload:p,limit:l,fileList:F,multiple:r,onStart:R,onExceed:O}=s;if(l&&F.length+n.length>l){O(n,F);return}r||(n=n.slice(0,1));for(const _ of n){const U=_;U.uid=Z(),R(U),p&&b(U)}},b=async n=>{if(y.value.value="",!s.beforeUpload)return w(n);let p,l={};try{const r=s.data,R=s.beforeUpload(n);l=te(s.data)?ne(s.data):s.data,p=await R,te(s.data)&&He(r,l)&&(l=ne(s.data))}catch{p=!1}if(p===!1){s.onRemove(n);return}let F=n;p instanceof Blob&&(p instanceof File?F=p:F=new File([p],n.name,{type:n.type})),w(Object.assign(F,{uid:n.uid}),l)},$=async(n,p)=>ve(n)?n(p):n,w=async(n,p)=>{const{headers:l,data:F,method:r,withCredentials:R,name:O,action:_,onProgress:U,onSuccess:Se,onError:Ce,httpRequest:Pe}=s;try{p=await $(p??F,n)}catch{s.onRemove(n);return}const{uid:X}=n,G={headers:l||{},withCredentials:R,file:n,data:p,method:r,filename:O,action:_,onProgress:A=>{U(A,n)},onSuccess:A=>{Se(A,n),delete c.value[X]},onError:A=>{Ce(A,n),delete c.value[X]}},Q=Pe(G);c.value[X]=Q,Q instanceof Promise&&Q.then(G.onSuccess,G.onError)},v=n=>{const p=n.target.files;p&&S(Array.from(p))},i=()=>{f.value||(y.value.value="",y.value.click())},a=()=>{i()};return t({abort:n=>{Ke(c.value).filter(n?([l])=>String(n.uid)===l:()=>!0).forEach(([l,F])=>{F instanceof XMLHttpRequest&&F.abort(),delete c.value[l]})},upload:b}),(n,p)=>(g(),E("div",{class:m([e(u).b(),e(u).m(n.listType),e(u).is("drag",n.drag)]),tabindex:"0",onClick:i,onKeydown:be(z(a,["self"]),["enter","space"])},[n.drag?(g(),D(wt,{key:0,disabled:e(f),onFile:S},{default:T(()=>[L(n.$slots,"default")]),_:3},8,["disabled"])):L(n.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:y,class:m(e(u).e("input")),name:n.name,multiple:n.multiple,accept:n.accept,type:"file",onChange:v,onClick:p[0]||(p[0]=z(()=>{},["stop"]))},null,42,Ct)],42,St))}});var ie=H(Ft,[["__file","upload-content.vue"]]);const ue="ElUpload",de=o=>{var t;(t=o.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(o.url)},Rt=(o,t)=>{const s=je(o,"fileList",void 0,{passive:!0}),u=i=>s.value.find(a=>a.uid===i.uid);function f(i){var a;(a=t.value)==null||a.abort(i)}function c(i=["ready","uploading","success","fail"]){s.value=s.value.filter(a=>!i.includes(a.status))}const y=(i,a)=>{const d=u(a);d&&(console.error(i),d.status="fail",s.value.splice(s.value.indexOf(d),1),o.onError(i,d,s.value),o.onChange(d,s.value))},S=(i,a)=>{const d=u(a);d&&(o.onProgress(i,d,s.value),d.status="uploading",d.percentage=Math.round(i.percent))},b=(i,a)=>{const d=u(a);d&&(d.status="success",d.response=i,o.onSuccess(i,d,s.value),o.onChange(d,s.value))},$=i=>{ge(i.uid)&&(i.uid=Z());const a={name:i.name,percentage:0,status:"ready",size:i.size,raw:i,uid:i.uid};if(o.listType==="picture-card"||o.listType==="picture")try{a.url=URL.createObjectURL(i)}catch(d){Me(ue,d.message),o.onError(d,a,s.value)}s.value=[...s.value,a],o.onChange(a,s.value)},w=async i=>{const a=i instanceof File?u(i):i;a||x(ue,"file to be removed not found");const d=n=>{f(n);const p=s.value;p.splice(p.indexOf(n),1),o.onRemove(n,p),de(n)};o.beforeRemove?await o.beforeRemove(a,s.value)!==!1&&d(a):d(a)};function v(){s.value.filter(({status:i})=>i==="ready").forEach(({raw:i})=>{var a;return i&&((a=t.value)==null?void 0:a.upload(i))})}return se(()=>o.listType,i=>{i!=="picture-card"&&i!=="picture"||(s.value=s.value.map(a=>{const{raw:d,url:n}=a;if(!n&&d)try{a.url=URL.createObjectURL(d)}catch(p){o.onError(p,a,s.value)}return a}))}),se(s,i=>{for(const a of i)a.uid||(a.uid=Z()),a.status||(a.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:f,clearFiles:c,handleError:y,handleProgress:S,handleStart:$,handleSuccess:b,handleRemove:w,submit:v,revokeFileObjectURL:de}},Lt=j({name:"ElUpload"}),Tt=j({...Lt,props:rt,setup(o,{expose:t}){const s=o,u=V(),f=Y(),{abort:c,submit:y,clearFiles:S,uploadFiles:b,handleStart:$,handleError:w,handleRemove:v,handleSuccess:i,handleProgress:a,revokeFileObjectURL:d}=Rt(s,f),n=C(()=>s.listType==="picture-card"),p=C(()=>({...s,fileList:b.value,onStart:$,onProgress:a,onSuccess:i,onError:w,onRemove:v}));return qe(()=>{b.value.forEach(d)}),Ae(ke,{accept:Ie(s,"accept")}),t({abort:c,submit:y,clearFiles:S,handleStart:$,handleRemove:v}),(l,F)=>(g(),E("div",null,[e(n)&&l.showFileList?(g(),D(le,{key:0,disabled:e(u),"list-type":l.listType,files:e(b),crossorigin:l.crossorigin,"handle-preview":l.onPreview,onRemove:e(v)},ae({append:T(()=>[B(ie,oe({ref_key:"uploadRef",ref:f},e(p)),{default:T(()=>[l.$slots.trigger?L(l.$slots,"trigger",{key:0}):k("v-if",!0),!l.$slots.trigger&&l.$slots.default?L(l.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[l.$slots.file?{name:"default",fn:T(({file:r})=>[L(l.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0),!e(n)||e(n)&&!l.showFileList?(g(),D(ie,oe({key:1,ref_key:"uploadRef",ref:f},e(p)),{default:T(()=>[l.$slots.trigger?L(l.$slots,"trigger",{key:0}):k("v-if",!0),!l.$slots.trigger&&l.$slots.default?L(l.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),l.$slots.trigger?L(l.$slots,"default",{key:2}):k("v-if",!0),L(l.$slots,"tip"),!e(n)&&l.showFileList?(g(),D(le,{key:3,disabled:e(u),"list-type":l.listType,files:e(b),crossorigin:l.crossorigin,"handle-preview":l.onPreview,onRemove:e(v)},ae({_:2},[l.$slots.file?{name:"default",fn:T(({file:r})=>[L(l.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0)]))}});var _t=H(Tt,[["__file","upload.vue"]]);const jt=me(_t);export{jt as E};
