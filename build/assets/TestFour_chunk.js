import{_,s,C as n,n as c,z as m,B as p,o as v,c as f,a as l,t as a,u as r,F as h}from"./index_entry_DkF0jWrh.js";import"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.0.0-alpha-031abd24b-20210907/umd/react.development.js";const k=l("div",null,null,-1),d={__name:"TestFour",setup(T){const o=s(1),u=s(2);n(()=>{console.log("tick执行")}),Promise.resolve().then(()=>{console.log("微任务执行")}).then(()=>{console.log("微任务执行2")}),n(()=>{console.log("tick执行")});const i=c(()=>(console.log("我被读取"),o.value++,o.value+u.value),{onTrack(e){console.log("我被跟踪了",e)},onTrigger(e){console.log("我被触发了",e)}});m(o,()=>{console.log("count被修改了")}),o.value=4,p(()=>{o.value=8}),Promise.resolve().then(()=>{console.log("微任务执行1")}),n(()=>{console.log("tick执行3")});const t=s(1),g=c(()=>(console.log("计算属性------"),t.value++,t.value));return(e,F)=>(v(),f(h,null,[l("p",null,a(r(g)),1),l("p",null,a(r(i)),1),k],64))}},w=_(d,[["__file","D:/html/开源 工具/integration-test/src/views/TestFour.vue"]]);export{w as default};
