import{af as c,m as n,ai as p,n as a,T as f,o as m,aa as y,i as g,O as d,al as w,u as o,$ as _,ac as v,am as b,an as C}from"./index_entry_e97BpdQx.js";const R=Symbol("rowContextKey"),S=["start","center","end","space-around","space-between","space-evenly"],x=["top","middle","bottom"],$=c({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:S,default:"start"},align:{type:String,values:x}}),h=n({name:"ElRow"}),j=n({...h,props:$,setup(r){const t=r,e=p("row"),l=a(()=>t.gutter);f(R,{gutter:l});const i=a(()=>{const s={};return t.gutter&&(s.marginRight=s.marginLeft=`-${t.gutter/2}px`),s}),u=a(()=>[e.b(),e.is(`justify-${t.justify}`,t.justify!=="start"),e.is(`align-${t.align}`,!!t.align)]);return(s,K)=>(m(),y(v(s.tag),{class:w(o(u)),style:_(o(i))},{default:g(()=>[d(s.$slots,"default")]),_:3},8,["class","style"]))}});var E=b(j,[["__file","row.vue"]]);const z=C(E);export{z as E,R as r};
