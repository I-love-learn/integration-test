import{s as B,B as E,z as T,af as g,m as p,ai as S,o,c as r,aa as N,u as s,c6 as I,b as f,al as _,am as $,V as P,F as c,G as v,O as y,d as u,a9 as w,aS as V,an as C,as as z,_ as F,i as m,j as L,a as b}from"./index_entry_HTNilGQT.js";import"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.0.0-alpha-031abd24b-20210907/umd/react.development.js";const R=(l,n=0)=>{if(n===0)return l;const a=B(!1);let e=0;const i=()=>{e&&clearTimeout(e),e=window.setTimeout(()=>{a.value=l.value},n)};return E(i),T(()=>l.value,t=>{t?i():a.value=t}),a},j=g({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),x=g({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),D=p({name:"ElSkeletonItem"}),G=p({...D,props:x,setup(l){const n=S("skeleton");return(a,e)=>(o(),r("div",{class:_([s(n).e("item"),s(n).e(a.variant)])},[a.variant==="image"?(o(),N(s(I),{key:0})):f("v-if",!0)],2))}});var d=$(G,[["__file","skeleton-item.vue"]]);const H=p({name:"ElSkeleton"}),M=p({...H,props:j,setup(l,{expose:n}){const a=l,e=S("skeleton"),i=R(P(a,"loading"),a.throttle);return n({uiLoading:i}),(t,W)=>s(i)?(o(),r("div",w({key:0,class:[s(e).b(),s(e).is("animated",t.animated)]},t.$attrs),[(o(!0),r(c,null,v(t.count,k=>(o(),r(c,{key:k},[t.loading?y(t.$slots,"template",{key:k},()=>[u(d,{class:_(s(e).is("first")),variant:"p"},null,8,["class"]),(o(!0),r(c,null,v(t.rows,h=>(o(),N(d,{key:h,class:_([s(e).e("paragraph"),s(e).is("last",h===t.rows&&t.rows>1)]),variant:"p"},null,8,["class"]))),128))]):f("v-if",!0)],64))),128))],16)):y(t.$slots,"default",V(w({key:1},t.$attrs)))}});var O=$(M,[["__file","skeleton.vue"]]);const q=C(O,{SkeletonItem:d}),A=z(d),J={},K=b("div",null,"12323213",-1),Q=b("h1",null,"1516165",-1);function U(l,n){const a=A,e=q;return o(),r(c,null,[u(e,{animated:""},{template:m(()=>[u(a,{variant:"text",style:{width:"500px"}}),u(a,{variant:"h1",style:{width:"500px"}})]),default:m(()=>[K,Q]),_:1}),f(" 不写loading 默认不加载真实dom "),u(e,null,{default:m(()=>[L("123")]),_:1})],64)}const Z=F(J,[["render",U],["__file","D:/html/开源 工具/integration-test/src/views/el/ElSkeletonTest.vue"]]);export{Z as default};
