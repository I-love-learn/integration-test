import{e as p,ao as y,f,u,o as r,c as t,n as o,h as s,r as l,z as d,t as n,l as i,a as c,y as h,m,p as v}from"./index_entry_aK93-D-V.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(w){const a=u("card");return(e,$)=>(r(),t("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(s(a).e("header"))},[l(e.$slots,"header",{},()=>[d(n(e.header),1)])],2)):i("v-if",!0),c("div",{class:o([s(a).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[l(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(s(a).e("footer"))},[l(e.$slots,"footer",{},()=>[d(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var g=m(C,[["__file","card.vue"]]);const E=v(g);export{E};
