import{af as d,m as i,ai as c,n as m,aj as o,o as p,c as f,O as g,d as v,i as _,X as b,a as h,al as r,u as a,t as B,Y as y,Z as D,am as N,an as $}from"./index_entry_DkF0jWrh.js";const w=d({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),x=["textContent"],C=i({name:"ElBadge"}),S=i({...C,props:w,setup(l,{expose:u}){const e=l,s=c("badge"),n=m(()=>e.isDot?"":o(e.value)&&o(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return u({content:n}),(t,k)=>(p(),f("div",{class:r(a(s).b())},[g(t.$slots,"default"),v(D,{name:`${a(s).namespace.value}-zoom-in-center`,persisted:""},{default:_(()=>[b(h("sup",{class:r([a(s).e("content"),a(s).em("content",t.type),a(s).is("fixed",!!t.$slots.default),a(s).is("dot",t.isDot)]),textContent:B(a(n))},null,10,x),[[y,!t.hidden&&(a(n)||t.isDot)]])]),_:1},8,["name"])],2))}});var E=N(S,[["__file","badge.vue"]]);const P=$(E);export{P as E};
