import{s as m,m as oe,v as h,n as ne,B as ae,W as F,U as ue,z as ie,o as d,c as p,d as o,i as s,a as u,j as r,u as t,l as se,F as v,t as C,b as L,D as f,X as re,a1 as de,$ as pe,C as me,E as ce,_ as ve}from"./index_entry_HTNilGQT.js";import{a as fe,b as ye,E as ge}from"./el-main_chunk.js";import{E as ke}from"./el-date-picker_chunk.js";import"./el-popper_chunk.js";import{E as _e}from"./el-button_chunk.js";import{E as xe}from"./el-radio_chunk.js";import{_ as be}from"./SlotTest_chunk.js";import{E as Ce}from"./el-dialog_chunk.js";/* empty css                */import{E as Ve}from"./el-select_chunk.js";import{E as we}from"./index_chunk5.js";import"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.0.0-alpha-031abd24b-20210907/umd/react.development.js";import"./index_chunk3.js";import"./arrays_chunk.js";import"./hasIn_chunk.js";import"./isEqual_chunk.js";import"./objects_chunk.js";import"./aria_chunk.js";import"./index_chunk6.js";import"./focus-trap_chunk.js";import"./scroll_chunk.js";import"./index_chunk7.js";import"./_baseIteratee_chunk.js";import"./identity_chunk.js";function Ee(g){return new Promise((l,V)=>{setTimeout(()=>{l({code:0,data:[{dictCode:"1",dictLabel:"男",dictValue:"1"},{dictCode:"2",dictLabel:"女",dictValue:"2"}]})},5e3)})}function $e(){let g=m("");return function(l,V){if(!l)return g.value;console.log(l);let w;return Ee().then(E=>{E.code===0&&(w=E.data,w.some($=>{l==$.dictValue&&(g.value=$.dictLabel)}))}),console.log(g),g.value}}const Ue={class:"common-layout"},De=u("div",null," 会触发更新 因为也会收集依赖 当数据变化 会重新创建虚拟dom 然后会重新执行函数 ",-1),Te=u("div",null," 计算属性的回调函数中 用到的函数 中的参数是响应式对象 当响应式对象更新的时候 计算属性也会重新计算 ",-1),he={key:0,class:"modal"},Me=u("p",null," elementplus 如果设置了.number修饰符 当然这是elementplus自定义的修饰符 它可以屏蔽掉 汉字输入 不过 原生的不行 因为原生的只支持 数值字符串转数值 但是如果输入汉字字母 则还是字符串 因此原生要搭配type=number用 并且element.number不支持. 支持-号 原生增加type=number后 可以输入小数 还可以输入 + - ++ +- -+ --这种无意义的符号 也就是说 如果想要输入整数 则el-input的 .number够用 如果想要输入小数或者正数 则要自己判断了 ",-1),Re=["value"],Ae={key:3,class:"btn-warp"},Be=u("div",{style:{position:"fixed",width:"100px",height:"100px",right:"300px",top:"200px","background-color":"red"},id:"warp"},null,-1),Fe=u("div",{class:"con"},[u("div",{class:"ball"})],-1),Le={key:5},Se={key:6},Ie=["src"],Ne={key:8},Pe=u("div",null," watch的执行时间 如果nexttick写在数据改变前 则watch执行时机在nexttick之后 如果nexttick写在数据改变后 则watch执行时机在nexttick之前 感觉更像是数据改变的时候 新创建了一个nexttick1放在 nexttick后执行了 ",-1),qe=oe({__name:"TestTwo",setup(g){const l=m(0),V=m(1);function w(a){return a+1}const E=h({a:1}),$=function(a){return a+1},q=ne(()=>$(E.a)),S=h({data:""}),X=$e();setTimeout(()=>{S.data="1"},2e3),setInterval(()=>{V.value=1},2e3),ae(()=>{console.log("页面进入了")});function I(){console.log("进入"),b.value=!0}function j(){console.log("离开")}const b=m(!1),M=m(""),R=m(""),A=m("123"),z=m("");function Y(a){console.log(a.data),console.log(a.target.value);let e=/^([0-9]\d*(.\d*)?)|(0.\d*[1-9][0-9])|(0.\d*[1-9])$/;console.log(e.test(a.data)),e.test(a.data)?A.value=a.target.value:a.target.value=A.value}const y=h({top:0,left:0,width:"100px",height:"100px",backgroundColor:"red",transition:"none"});function W(a){const e={...a,code:0};return Promise.resolve(e)}function H(a){const e=[{num:1,id:1},{num:2,id:2}],i=[];e.forEach(c=>{c.num>0&&i.push(W({skuId:c.id,count:c.num}))}),Promise.all(i).then(c=>{if(c.some(x=>x.code===0)){y.left=a.clientX-25+"px",y.top=a.clientY-25+"px",y.transition="none";const x=document.querySelector("#warp").getBoundingClientRect();requestAnimationFrame(()=>{y.left=x.x+"px",y.top=x.y+"px",y.transition="all 5s"})}})}function O(){const a=document.querySelector(".con"),e=document.querySelector(".ball");e.style.transform="translateY(0)",a.style.transform="translateX(0)",e.clientWidth,e.style.transform="translateY(300px)",a.style.transform="translateX(100px)"}F(()=>{console.log("更新了")});const N=m("Hello, Vue 3!");function G(){N.value="Message changed!"}F(()=>{console.log("Component updated!")}),ue(()=>{console.log("Component before update!")});const J=m("");function K(a){const e=a.target.files[0],i=new FileReader,c=document.createElement("a");c.download="zy.png",c.href=i.readAsDataURL(e),c.click()}const k=m(0),_=m(0),P=h({data:{b:1}});F(()=>{console.log("更新了")});const U=m(1);function Q(){me(()=>{U.value++,console.log(U.value,"我还没更新呢")}),U.value++}ie(U,(a,e)=>{console.log("value更新了")});const B=m();return(a,e)=>{const i=_e,c=fe,D=ce,x=Ce,Z=be,T=xe,ee=ke,te=ye,le=ge;return d(),p("div",Ue,[o(le,null,{default:s(()=>[o(c,{width:"400px"},{default:s(()=>[u("div",null,[o(i,{onClick:e[0]||(e[0]=n=>l.value=1),type:"primary"},{default:s(()=>[r("测试 响应式对象作为函数参数传递 是否触发更新")]),_:1}),o(i,{onClick:e[1]||(e[1]=n=>l.value=2),type:"primary"},{default:s(()=>[r("测试 input focus 何时失去焦点")]),_:1}),o(i,{onClick:e[2]||(e[2]=n=>l.value=3),type:"primary"},{default:s(()=>[r("el-input 输入正数包括小数的写法")]),_:1}),o(i,{onClick:e[3]||(e[3]=n=>l.value=4),type:"primary"},{default:s(()=>[r("动画过渡问题测试")]),_:1}),o(i,{onClick:e[4]||(e[4]=n=>l.value=5),type:"primary"},{default:s(()=>[r("抛物线过度测试")]),_:1}),o(i,{onClick:e[5]||(e[5]=n=>l.value=6),type:"primary"},{default:s(()=>[r("updated生命周期不执行")]),_:1}),o(i,{onClick:e[6]||(e[6]=n=>l.value=7),type:"primary"},{default:s(()=>[r("FileReader.readAsDataURL(file)和URL createObjectURL()")]),_:1}),o(i,{onClick:e[7]||(e[7]=n=>l.value=8),type:"primary"},{default:s(()=>[r("手动导入和自动导入同时存在样式丢失了")]),_:1}),o(i,{onClick:e[8]||(e[8]=n=>l.value=9),type:"primary"},{default:s(()=>[r("el-radio 不带group的用法")]),_:1}),o(i,{onClick:e[9]||(e[9]=n=>("router"in a?a.router:t(se)).push(void 0)),type:"primary"},{default:s(()=>[r("测试跳转undefined （会直接报错）")]),_:1}),o(i,{onClick:e[10]||(e[10]=n=>l.value=10),type:"primary"},{default:s(()=>[r("template没用到的proxy 会触发updated吗")]),_:1}),o(i,{onClick:e[11]||(e[11]=n=>l.value=11),type:"primary"},{default:s(()=>[r("测试watch时机")]),_:1}),o(i,{onClick:e[12]||(e[12]=n=>l.value=12),type:"primary"},{default:s(()=>[r("datepicker可以跨年选吗")]),_:1})])]),_:1}),o(te,null,{default:s(()=>[t(l)===1?(d(),p(v,{key:0},[u("div",null,C(w(t(V))),1),De,u("p",null,C(t(q)),1),Te,u("p",null,C(t(X)(t(S).data,"sex")),1)],64)):t(l)===2?(d(),p(v,{key:1},[u("input",{type:"text",onFocus:I},null,32),t(b)?(d(),p("div",he)):L("v-if",!0),o(D,{type:"text",onFocus:I,onBlur:j}),o(x,{modelValue:t(b),"onUpdate:modelValue":e[13]||(e[13]=n=>f(b)?b.value=n:null)},null,8,["modelValue"])],64)):t(l)===3?(d(),p(v,{key:2},[o(D,{type:"number",modelValue:t(M),"onUpdate:modelValue":e[14]||(e[14]=n=>f(M)?M.value=n:null),modelModifiers:{number:!0}},null,8,["modelValue"]),re(u("input",{type:"number","onUpdate:modelValue":e[15]||(e[15]=n=>f(R)?R.value=n:null)},null,512),[[de,t(R),void 0,{number:!0}]]),Me,u("input",{type:"text",value:t(A),onInput:Y},null,40,Re),o(D,{type:"text","model-value":t(z)},null,8,["model-value"])],64)):t(l)===4?(d(),p("div",Ae,[u("div",{style:pe([{position:"fixed"},t(y)])},null,4),o(i,{type:"primary",onClick:H},{default:s(()=>[r("点我出现动画")]),_:1}),Be])):t(l)===5?(d(),p(v,{key:4},[Fe,u("button",{onClick:O},"执行抛物线动画")],64)):t(l)===6?(d(),p("div",Le,[r(" 插槽使用的响应式数据变化只会触发子组件updated生命周期 而不会触发父组件的 也就是说 子组件内部更新 父组件不会触发更新钩子 父组件state变化影响到子组件的 才会父子都触发updated钩子 "),u("div",null,[o(Z,null,{default:s(()=>[u("h1",null,C(t(N)),1),u("button",{onClick:G},"Change Message")]),_:1})])])):t(l)===7?(d(),p("div",Se,[u("input",{type:"file",onChange:K},null,32),u("img",{src:t(J),alt:"",width:"500",height:"500"},null,8,Ie)])):t(l)===8?(d(),p(v,{key:7},[o(t(Ve)),o(t(we))],64)):t(l)===9?(d(),p("div",Ne,[o(T,{value:"1",modelValue:t(k),"onUpdate:modelValue":e[16]||(e[16]=n=>f(k)?k.value=n:null),label:"1"},null,8,["modelValue"]),o(T,{value:"2",modelValue:t(k),"onUpdate:modelValue":e[17]||(e[17]=n=>f(k)?k.value=n:null),label:"2"},null,8,["modelValue"]),o(T,{value:"1",modelValue:t(_),"onUpdate:modelValue":e[18]||(e[18]=n=>f(_)?_.value=n:null),label:"1"},null,8,["modelValue"]),o(T,{value:"2",modelValue:t(_),"onUpdate:modelValue":e[19]||(e[19]=n=>f(_)?_.value=n:null),label:"2"},null,8,["modelValue"])])):t(l)===10?(d(),p(v,{key:9},[u("h2",null,C(t(P).data.b),1),L(" 直接替换数据是会更新了 "),u("button",{onClick:e[20]||(e[20]=n=>t(P).data={b:2})},"点击")],64)):t(l)===11?(d(),p(v,{key:10},[u("div",null,[o(i,{onClick:Q},{default:s(()=>[r("点击")]),_:1})]),Pe],64)):t(l)===12?(d(),p(v,{key:11},[r(" unlink-panels取消两个面板的联动 "),o(ee,{modelValue:t(B),"onUpdate:modelValue":e[21]||(e[21]=n=>f(B)?B.value=n:null),"unlink-panels":"",type:"daterange",placeholder:"选择日期"},null,8,["modelValue"]),r(" 可以 但是操作麻烦 ")],64)):L("v-if",!0)]),_:1})]),_:1})])}}}),mt=ve(qe,[["__file","D:/html/开源 工具/integration-test/src/views/TestTwo.vue"]]);export{mt as default};
