import{H as B,z as E,q as T,ac as g,x as d,af as N,o,c as r,a5 as S,u as s,c4 as I,b as f,ai as _,aj as $,N as P,F as c,a8 as v,B as y,e as u,a4 as w,aR as C,ak as V,ap as z,_ as R,g as m,i as x,a as b}from"./index.js";import"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.0.0-alpha-031abd24b-20210907/umd/react.development.js";const F=(l,n=0)=>{if(n===0)return l;const a=B(!1);let e=0;const i=()=>{e&&clearTimeout(e),e=window.setTimeout(()=>{a.value=l.value},n)};return E(i),T(()=>l.value,t=>{t?i():a.value=t}),a},H=g({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),L=g({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),j=d({name:"ElSkeletonItem"}),q=d({...j,props:L,setup(l){const n=N("skeleton");return(a,e)=>(o(),r("div",{class:_([s(n).e("item"),s(n).e(a.variant)])},[a.variant==="image"?(o(),S(s(I),{key:0})):f("v-if",!0)],2))}});var p=$(q,[["__file","skeleton-item.vue"]]);const D=d({name:"ElSkeleton"}),M=d({...D,props:H,setup(l,{expose:n}){const a=l,e=N("skeleton"),i=F(P(a,"loading"),a.throttle);return n({uiLoading:i}),(t,W)=>s(i)?(o(),r("div",w({key:0,class:[s(e).b(),s(e).is("animated",t.animated)]},t.$attrs),[(o(!0),r(c,null,v(t.count,k=>(o(),r(c,{key:k},[t.loading?y(t.$slots,"template",{key:k},()=>[u(p,{class:_(s(e).is("first")),variant:"p"},null,8,["class"]),(o(!0),r(c,null,v(t.rows,h=>(o(),S(p,{key:h,class:_([s(e).e("paragraph"),s(e).is("last",h===t.rows&&t.rows>1)]),variant:"p"},null,8,["class"]))),128))]):f("v-if",!0)],64))),128))],16)):y(t.$slots,"default",C(w({key:1},t.$attrs)))}});var A=$(M,[["__file","skeleton.vue"]]);const G=V(A,{SkeletonItem:p}),J=z(p),K={},O=b("div",null,"12323213",-1),Q=b("h1",null,"1516165",-1);function U(l,n){const a=J,e=G;return o(),r(c,null,[u(e,{animated:""},{template:m(()=>[u(a,{variant:"text",style:{width:"500px"}}),u(a,{variant:"h1",style:{width:"500px"}})]),default:m(()=>[O,Q]),_:1}),f(" 不写loading 默认不加载真实dom "),u(e,null,{default:m(()=>[x("123")]),_:1})],64)}const Z=R(K,[["render",U],["__file","D:/html/开源 工具/integration-test/src/views/el/ElSkeletonTest.vue"]]);export{Z as default};
