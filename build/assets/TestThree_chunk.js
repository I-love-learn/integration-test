import{e as ze,ao as Y,ap as F,f as ve,Z as Be,g as D,u as Le,aq as me,ar as Ae,o as d,j as Q,x as s,r as fe,n as He,h as t,y as qe,k as Ge,m as Je,p as Ke,_ as U,a7 as B,q as r,P as ge,c,z as u,t as w,a as n,a6 as h,l as C,v as a,S as $,M as I,as as j,at as Ze,F as k,T as Qe,au as We,ab as Xe,a8 as el,ac as ll,I as tl,J as ol,E as al}from"./index_entry_aK93-D-V.js";import{E as nl}from"./el-date-picker_chunk.js";import"./el-popper_chunk.js";import{E as sl}from"./el-button_chunk.js";import{E as ul,a as il,b as dl}from"./el-main_chunk.js";import{E as rl}from"./el-checkbox_chunk.js";import{E as pl,a as cl,b as ml}from"./el-cascader-panel_chunk.js";import{E as vl,a as fl}from"./el-table-column_chunk.js";import"./el-tooltip_chunk.js";/* empty css            */import{E as gl}from"./el-switch_chunk.js";import"./el-radio_chunk.js";import{r as bl,E as _l}from"./el-row_chunk.js";import{E as yl}from"./el-card_chunk.js";import{E as kl}from"./el-progress_chunk.js";import"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.0.0-alpha-031abd24b-20210907/umd/react.development.js";import"./index_chunk2.js";import"./arrays_chunk.js";import"./hasIn_chunk.js";import"./isEqual_chunk.js";import"./objects_chunk.js";import"./aria_chunk.js";import"./index_chunk6.js";import"./focus-trap_chunk.js";import"./_overRest_chunk.js";import"./identity_chunk.js";import"./cloneDeep_chunk.js";import"./_initCloneObject_chunk.js";import"./index_chunk7.js";import"./scroll_chunk.js";import"./_baseIteratee_chunk.js";import"./merge_chunk.js";const xl=ze({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:Y([Number,Object]),default:()=>F({})},sm:{type:Y([Number,Object]),default:()=>F({})},md:{type:Y([Number,Object]),default:()=>F({})},lg:{type:Y([Number,Object]),default:()=>F({})},xl:{type:Y([Number,Object]),default:()=>F({})}}),hl=ve({name:"ElCol"}),Cl=ve({...hl,props:xl,setup(v){const o=v,{gutter:m}=Be(bl,{gutter:D(()=>0)}),p=Le("col"),g=D(()=>{const f={};return m.value&&(f.paddingLeft=f.paddingRight=`${m.value/2}px`),f}),y=D(()=>{const f=[];return["span","offset","pull","push"].forEach(i=>{const E=o[i];me(E)&&(i==="span"?f.push(p.b(`${o[i]}`)):E>0&&f.push(p.b(`${i}-${o[i]}`)))}),["xs","sm","md","lg","xl"].forEach(i=>{me(o[i])?f.push(p.b(`${i}-${o[i]}`)):Ae(o[i])&&Object.entries(o[i]).forEach(([E,R])=>{f.push(E!=="span"?p.b(`${i}-${E}-${R}`):p.b(`${i}-${R}`))})}),m.value&&f.push(p.is("guttered")),[p.b(),f]});return(f,T)=>(d(),Q(Ge(f.tag),{class:He(t(y)),style:qe(t(g))},{default:s(()=>[fe(f.$slots,"default")]),_:3},8,["class","style"]))}});var $l=Je(Cl,[["__file","col.vue"]]);const Vl=Ke($l),wl={__name:"ModelVue",props:{modelValue:Number},emits:["update:modelValue"],setup(v,{emit:o}){B(()=>{console.log("组件更新了")});const m=o,p=r(1);return setTimeout(()=>{p.value=1},2e3),ge(p,()=>{p.value++,console.log(p)}),(g,y)=>(d(),c("div",null,[u(w(v.modelValue)+" ",1),n("button",{onClick:y[0]||(y[0]=f=>m("update:modelValue",4))},"修改props")]))}},El=U(wl,[["__file","D:/html/开源 工具/integration-test/src/components/ModelVue.vue"]]),jl={__name:"UpdatedTest",props:{a:Number},setup(v){return(o,m)=>(d(),c("div",null,[u(w(v.a)+" ",1),fe(o.$slots,"default")]))}},Dl=U(jl,[["__file","D:/html/开源 工具/integration-test/src/components/UpdatedTest.vue"]]),Tl={__name:"Father1",props:{data:Object},setup(v){const o=v,m=o.data;function p(){o.data=12,console.log(o)}return setInterval(()=>{console.log(o.data)},1e3),h(o,"data"),(g,y)=>(d(),c("div",null,[u(w(t(m))+" ",1),C(" 想起来了属性可以赋值 但是不能直接修改props "),n("button",{onClick:p},"修改data"),C(" template里修改则不会报警告 响应式也不生效 虽然值确实被改了 而script里直接修改 会不生效"),n("button",{onClick:y[0]||(y[0]=f=>v.data=11)},"修改data"),C(' <Children v-model:data="d" /> '),u(" // input value如果是对象 则会转成[object:Object] 原生就是这样的 "),C(' <input type="text" :value="data" /> ')]))}},Nl=U(Tl,[["__file","D:/html/开源 工具/integration-test/src/components/toRef/Father1.vue"]]),Ul={style:{border:"1px solid red"}},Sl=["value"],Rl={__name:"children",props:{data:Object},emits:["update:data"],setup(v,{emit:o}){console.log(v.data);const p=o;function g(y){p("update:data",y.target.value)}return(y,f)=>(d(),c("div",Ul,[n("div",null,w(v.data.a),1),u(" "+w(v.data)+" ",1),n("input",{type:"text",value:v.data,onInput:g},null,40,Sl)]))}},Ml=U(Rl,[["__file","D:/html/开源 工具/integration-test/src/components/sanji/children.vue"]]),Yl=["value"],Fl={__name:"father",props:{data:Object},emits:["update:data"],setup(v,{emit:o}){const m=v,p=o,g=D({get(){return m.data},set(y){console.log(y),p("update:data",y)}});return(y,f)=>{const T=Ml;return d(),c("div",null,[a(T,{data:t(g),"onUpdate:data":f[0]||(f[0]=S=>$(g)?g.value=S:null)},null,8,["data"]),u(" // input value如果是对象 则会转成[object:Object] 原生就是这样的 "),n("input",{type:"text",value:v.data},null,8,Yl)])}}},Il=U(Fl,[["__file","D:/html/开源 工具/integration-test/src/components/sanji/father.vue"]]),Ol="/abc/e/assets/lx9pflerpej90fgz8xwd7bx39gt5zw6_asset.png",_=v=>(tl("data-v-b729b043"),v=v(),ol(),v),Pl={class:"common-layout"},zl={key:3},Bl=_(()=>n("div",null,"on-事件可以用@ 可以用: 但before-remove这种只给用冒号",-1)),Ll=_(()=>n("div",null," before-upload 只有自动上传才生效 before-remove手动上传也触发 ",-1)),Al=_(()=>n("div",null,"el-upload不绑定任何数据的情况下 上传会直接显示本地的图片",-1)),Hl=_(()=>n("div",null," 如果绑定了file-list 则默认可以展示file-list中的文件 删除的话还会自动清除file-list里的内容 ",-1)),ql=_(()=>n("div",null," 如果filelist是reactive([]) 我们添加图片后 可以看到在devtools工具里长度的确变成了2 0是默认的那个图片 reactive对象 1是我们刚传的 并且删除1 图片也的确消失了 但是如果不用devtools 而是在 change事件里通过fileList.pop()删除数据 发现filelist长度变成了0 新加的图片也没有 原来的也被删掉了 且不触发ui更新 ",-1)),Gl=_(()=>n("div",null," 也就是说如果filelist是reactive([]) 即便使用v-model 也不会触发数据删除 ui更新 而不用v-model虽然也可以触发删除同步移除了fileList的内容 但新增不会往filelist里添加数据 ",-1)),Jl=_(()=>n("div",null," :on-click 原生不能写成@click 但el-upload可以 :onClick 原生是这种写法 也就是:on = @ ",-1)),Kl=_(()=>n("div",null," 不会 v-model的值改变 ui会变化 但不触发change change是手动选择才触发 ",-1)),Zl=_(()=>n("div",{style:{"background-image":"url(../assets/vue.svg)",width:"80px",height:"80px"}},null,-1)),Ql=_(()=>n("div",{style:{"background-image":"url(../assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png)",width:"80px",height:"80px"}},null,-1)),Wl=_(()=>n("div",{style:{"background-image":"url('../assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png')",width:"80px",height:"80px"}},null,-1)),Xl=_(()=>n("div",{style:{"background-image":"url('/lx9pflerpej90fgz8xwd7bx39gt5zw6.png')",width:"80px",height:"80px"}},null,-1)),et=_(()=>n("div",{style:{"background-image":"url('src/assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png')",width:"80px",height:"80px"}},null,-1)),lt=_(()=>n("img",{src:Ol,alt:""},null,-1)),tt=_(()=>n("div",null,"不会触发change",-1)),ot={key:0},at={key:1},nt=_(()=>n("source",null,null,-1)),st=_(()=>n("div",{class:"color"},"123456",-1)),ut={style:{width:"100px",display:"flex"}},it={__name:"TestThree",setup(v){const o=r(1),m=I({data:{a:1,b:2}}),p=r("");console.log(h(()=>m.data));const g=h(m,"data");console.log(g),console.log(h(g)),console.log(h(g)===g),console.log(h(g,"a")),console.log(h(g,"value")===g),console.log(h(1)),console.log(h({a:1})),console.log(h(I({a:1})));const y=I({a:{b:1}}),f=I({a:1});console.log(h(y,"a")),console.log(h(f,"a")),console.log(h([])),console.log(m),console.log(r(m.data)),console.log(r(m)),console.log(r(m.data.a)),j(1),j(r(1)),j(()=>1);const T=r(2);j(T),console.log(T),console.log(j(1)),console.log(j(r(1))),console.log(j(()=>1));const S=r(12);B(()=>{console.log("我更新了")});const i=r([{url:"https://img0.baidu.com/it/u=2804005887,994501744&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",name:"123"}]);function E(){console.log(123),console.log(i)}function R(){console.log(456)}function W(){console.log(789)}const be=r();function _e(){i.value.pop(),console.log(123),setTimeout(()=>{i.value.pop(),console.log(i)},1e3)}function ye(V,e){console.log(e),i.value.pop(),console.log(document.querySelectorAll("input[type='file']"))}function X(){console.log(1)}async function ke(){await Promise.reject(1),console.log(123)}ke().then(V=>{console.log(V)}).catch(V=>{console.log(V)});const L=r(3);B(()=>{console.log("组件更新了")});const N=r([]),xe=r(["一个和桑挑水吃","一个和桑挑水吃一个和桑挑水吃","一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水"]),he={checkStrictly:!0},O=r(""),Ce=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]},{value:"resource",label:"Resource",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"docs",label:"Design Documentation"}]}],ee=r([{name:"name1",state:!1},{name:"name2",state:!1}]),le=r(1),$e=D(()=>(console.log(123456),le.value+1));setTimeout(()=>{le.value++},10);const te={};let oe=3;Object.defineProperty(te,"a",{get(){return console.log("我被读取"),oe},set(V){console.log("我被修改"),oe=V}}),te.a=1;const ae=r(1),A=r(2),Ve=D(()=>(console.log("%c计算属性","color:red;font-size:20px"),console.log(456789),ae.value++,ae.value+A.value));ge(A,(V,e)=>{console.log(V,e),A.value=3});const ne=r(1),we=D(()=>(console.log("计算属性------"),ne.value++,ne.value)),Ee=Ze();B(()=>{console.log("更新了")});const P=r(!1),x=I({name:"",age:""}),se=r(),ue=r();function je(){Object.assign(x,{name:"",age:""}),console.log(x),se.value?.resetFields(),ue.value?.resetFields(),console.log(x)}const H=r(!0),q=r(),G=r("");function De(){console.log(event.target.value),event.target.value=event.target.value.replace(/\D/g,"")}return(V,e)=>{const b=sl,Te=il,Ne=Il,Ue=Nl,Se=Dl,J=kl,K=yl,Z=_l,M=al,Re=pl,ie=gl,de=vl,Me=fl,Ye=Vl,z=cl,re=ml,Fe=rl,Ie=dl,Oe=ul,Pe=El,pe=nl;return d(),c(k,null,[u(w(t(we))+" "+w(V.aaaa)+" ",1),n("div",Pl,[a(Oe,null,{default:s(()=>[a(Te,{width:"500px"},{default:s(()=>[a(b,{onClick:e[0]||(e[0]=l=>o.value=1)},{default:s(()=>[u("测试三层组件传参")]),_:1}),a(b,{onClick:e[1]||(e[1]=l=>o.value=2)},{default:s(()=>[u("测试三层组件传参toRef")]),_:1}),a(b,{onClick:e[2]||(e[2]=l=>o.value=3)},{default:s(()=>[u("测试插槽和组件传参对于update生命周期触发影响")]),_:1}),a(b,{onClick:e[3]||(e[3]=l=>o.value=4)},{default:s(()=>[u("测试el-upload 多选删除其中一个是怎么做到的")]),_:1}),a(b,{onClick:e[4]||(e[4]=l=>o.value=5)},{default:s(()=>[u("测试el-upload数据绑定")]),_:1}),a(b,{onClick:e[5]||(e[5]=l=>o.value=6)},{default:s(()=>[u("el-card 高度怎么来的")]),_:1}),a(b,{onClick:e[6]||(e[6]=l=>o.value=7)},{default:s(()=>[u("el-input 点击下拉箭头图标无法触发click事件")]),_:1}),a(b,{onClick:e[7]||(e[7]=l=>o.value=8)},{default:s(()=>[u("级联下拉 change触发时机")]),_:1}),a(b,{onClick:e[8]||(e[8]=l=>o.value=9)},{default:s(()=>[u("style background template不生效吗")]),_:1}),a(b,{onClick:e[9]||(e[9]=l=>o.value=10)},{default:s(()=>[u("el-switch 手动改变值 会触发change吗")]),_:1}),a(b,{onClick:e[10]||(e[10]=l=>o.value=11)},{default:s(()=>[u("计算属性的触发时机")]),_:1}),a(b,{onClick:e[11]||(e[11]=l=>o.value=12)},{default:s(()=>[u("route 参数变化触发update吗")]),_:1}),a(b,{onClick:e[12]||(e[12]=l=>o.value=13)},{default:s(()=>[u("el-card大小变化 有过度吗")]),_:1}),a(b,{onClick:e[13]||(e[13]=l=>o.value=14)},{default:s(()=>[u("el-form不认object.assign吗")]),_:1}),a(b,{onClick:e[14]||(e[14]=l=>o.value=15)},{default:s(()=>[u("stop无法阻止el-checkbox的点击文字触发选中事件？")]),_:1}),a(b,{onClick:e[15]||(e[15]=l=>o.value=16)},{default:s(()=>[u("测试v-model语法糖")]),_:1})]),_:1}),a(Ie,null,{default:s(()=>[t(o)===1?(d(),c(k,{key:0},[n("div",null,[a(Ne,{data:t(m).data,"onUpdate:data":e[16]||(e[16]=l=>t(m).data=l)},null,8,["data"]),n("button",{onClick:e[17]||(e[17]=l=>t(m).data={a:10,b:15})},"修改数据")]),C(" 这也是 若依分页组件封装的逻辑 ")],64)):t(o)===2?(d(),c(k,{key:1},[n("div",null,[a(Ue,{data:t(m).data},null,8,["data"]),n("button",{onClick:e[18]||(e[18]=l=>t(m).data={a:10,b:15})},"修改数据")]),C(" 这也是 若依分页组件封装的逻辑 ")],64)):t(o)===3?(d(),c(k,{key:2},[a(Se,{a:t(S)},null,8,["a"]),n("button",{onClick:e[19]||(e[19]=l=>S.value=22)},"改变a的值"),u(" 首先可以确认的是插槽不会触发updated 父子组件传值会 即便这个值没有被子组件用到甚至没有被defineProps声明 ")],64)):t(o)===4?(d(),c("div",zl,[a(J,{"file-list":t(i),"onUpdate:fileList":e[20]||(e[20]=l=>$(i)?i.value=l:null),action:"","list-type":"picture-card",multiple:"","auto-upload":!1},null,8,["file-list"])])):t(o)===5?(d(),c(k,{key:4},[n("div",null,[a(J,{action:"","file-list":t(i),"onUpdate:fileList":e[21]||(e[21]=l=>$(i)?i.value=l:null),"list-type":"picture-card","auto-upload":!1,onChange:_e,onRemove:E,"before-remove":R,"before-upload":W},null,8,["file-list"]),a(J,{action:"","file-list":t(i),"onUpdate:fileList":e[22]||(e[22]=l=>$(i)?i.value=l:null),"list-type":"picture-card","auto-upload":!1,onChange:ye,multiple:"",ref_key:"uploadRef",ref:be,onRemove:E,"before-remove":R,"before-upload":W},null,8,["file-list"])]),Bl,Ll,Al,Hl,ql,Gl,Jl,n("button",{"on-click":X,onClick:X},"click",32)],64)):t(o)===6?(d(),c(k,{key:5},[a(K),C(" el-card 里面的el-card_body这个东西高度默认不等于el-card 并且他也不是flex布局 本质上是el-card-body 撑起了el-card 如果el-card外部容器是flex 那么会导致el-card继承高度 但el-card-body不会继承高度  "),C(" 其实还是flex的问题 默认flex子元素高度等于父元素 除非设置align-items "),C(" 默认只有padding大小 "),a(Z,null,{default:s(()=>[C(" v-for渲染的dom 样式每个都是独立的 那我也不知道为啥那里会高度不一样了 "),(d(!0),c(k,null,Qe(t(xe),l=>(d(),Q(K,{key:l},{default:s(()=>[u(w(l),1)]),_:2},1024))),128))]),_:1})],64)):t(o)===7?(d(),c(k,{key:6},[a(M,{modelValue:t(p),"onUpdate:modelValue":e[23]||(e[23]=l=>$(p)?p.value=l:null),placeholder:"请选择配送地",style:{width:"212px",height:"32px"},"suffix-icon":t(We),readonly:"",class:"select-address",onClick:e[24]||(e[24]=l=>console.log(123))},null,8,["modelValue","suffix-icon"]),u(" 确实 需要在input外包一层 ")],64)):t(o)===8?(d(),c(k,{key:7},[n("button",{onClick:e[25]||(e[25]=l=>O.value="consistency")},"变"),a(Re,{modelValue:t(O),"onUpdate:modelValue":e[26]||(e[26]=l=>$(O)?O.value=l:null),options:Ce,props:he,clearable:"",onChange:e[27]||(e[27]=l=>console.log("我变了"))},null,8,["modelValue"]),Kl],64)):t(o)===9?(d(),c(k,{key:8},[Zl,Ql,Wl,Xl,et,lt,u(" 测试得出 img style里的background 路径会解析成最终编译后的路径 无论是相对路径还是绝对路径 亦或者是@这种配置后的路径 但是background 写在内连style解析后 是字符串 不会解析@ 以及相对路径 但通过绝对路径访问图片可以 测试环境可以通过src/assets/images这种绝对路径来访问 打包后不可以 因为background 内联不会解析 而是当字符串处理路径 ")],64)):t(o)===10?(d(),c(k,{key:9},[a(ie,{modelValue:t(p),"onUpdate:modelValue":e[28]||(e[28]=l=>$(p)?p.value=l:null),onChange:e[29]||(e[29]=l=>console.log(t(p)))},null,8,["modelValue"]),tt,a(Me,{data:t(ee),style:{width:"100%"}},{default:s(()=>[a(de,{type:"name"}),a(de,{label:"状态",width:"180"},{default:s(({row:l})=>[a(ie,{modelValue:l.state,"onUpdate:modelValue":ce=>l.state=ce,onChange:ce=>console.log(l.state)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:1},8,["data"]),n("button",{onClick:e[30]||(e[30]=l=>ee.value=[{name:"name1",state:!0},{name:"name2",state:!0}])}," 数据改变 "),u(" 数据改变不会触发switch selected 级联 等控件的change事件 因为是手动通过点击组件交互修改数据才会触发change ")],64)):t(o)===11?(d(),c(k,{key:10},[u(" 计算属性 会在属性初始化后计算 以及属性更改后第二次计算 ")],64)):t(o)===12?(d(),c("button",{key:11,onClick:e[31]||(e[31]=l=>t(Ee).push("/test3?type=1"))},"切换")):t(o)===13?(d(),c(k,{key:12},[t(P)?(d(),Q(K,{key:0,style:{width:"500px",height:"300px"}})):C("v-if",!0),u(" 经过证明 el-card 和 el-row 都没有过度效果 默认 我意思是v-if 但是 大小变化有过度的 "),a(Z,{gutter:20},{default:s(()=>[a(Ye,{span:t(P)?10:24,style:{"background-color":"red"}},{default:s(()=>[u("23")]),_:1},8,["span"])]),_:1}),a(b,{onClick:e[32]||(e[32]=l=>P.value=!t(P))},{default:s(()=>[u("切换大小")]),_:1})],64)):t(o)===14?(d(),c(k,{key:13},[t(H)?(d(),c("div",ot,[a(re,{model:t(x),ref_key:"formRef",ref:se},{default:s(()=>[a(z,null,{default:s(()=>[a(M,{type:"text",modelValue:t(x).name,"onUpdate:modelValue":e[33]||(e[33]=l=>t(x).name=l),placeholder:"Name"},null,8,["modelValue"])]),_:1}),a(z,null,{default:s(()=>[a(M,{type:"text",modelValue:t(x).age,"onUpdate:modelValue":e[34]||(e[34]=l=>t(x).age=l),placeholder:"age"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])):(d(),c("div",at,[a(re,{model:t(x),ref_key:"formRef2",ref:ue},{default:s(()=>[a(z,null,{default:s(()=>[a(M,{type:"text",modelValue:t(x).name,"onUpdate:modelValue":e[35]||(e[35]=l=>t(x).name=l),placeholder:"Name"},null,8,["modelValue"])]),_:1}),a(z,null,{default:s(()=>[a(M,{type:"text",modelValue:t(x).age,"onUpdate:modelValue":e[36]||(e[36]=l=>t(x).age=l),placeholder:"age"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])),n("button",{onClick:je},"重置"),n("button",{onClick:e[37]||(e[37]=l=>{H.value=!t(H),t(x).name="xxxxxx"})}," 切换form ")],64)):t(o)===15?(d(),c(k,{key:14},[u(" 默认checkbox 单独使用时 要通过true-value false-value设置选中和不选中的值 否则默认就是truefalse value不生效 哦哦知道了 我的elementplus 版本太低了 这是2.6以上才有的 "),a(Fe,{modelValue:t(q),"onUpdate:modelValue":e[39]||(e[39]=l=>$(q)?q.value=l:null),"true-value":123},{default:s(()=>[n("span",{onClick:e[38]||(e[38]=Xe(l=>console.log(1),["stop"]))},"点我点我点我")]),_:1},8,["modelValue"]),u(" 证实 不能阻止 ")],64)):t(o)===16?el((d(),c("input",{key:15,type:"text","onUpdate:modelValue":e[40]||(e[40]=l=>$(G)?G.value=l:null),onInput:De},null,544)),[[ll,t(G)]]):C("v-if",!0)]),_:1})]),_:1})]),a(Pe,{modelValue:t(L),"onUpdate:modelValue":e[41]||(e[41]=l=>$(L)?L.value=l:null)},null,8,["modelValue"]),n("div",null,w(t($e)),1),n("p",null,w(t(Ve)),1),u(" 测试style "),nt,st,n("div",ut,[a(pe,{modelValue:t(N),"onUpdate:modelValue":e[42]||(e[42]=l=>$(N)?N.value=l:null),type:"datetimerange","start-placeholder":"Start date","end-placeholder":"End date",format:"YYYY-MM-DD HH:mm:ss","date-format":"YYYY/MM/DD ddd","time-format":"A hh:mm:ss"},null,8,["modelValue"])]),C(" el-date-picker 放到row col里 会自适应 本质上是放到flex布局里 会自适应 明天看看为什么 "),a(Z,{style:{width:"100px"}},{default:s(()=>[a(pe,{modelValue:t(N),"onUpdate:modelValue":e[43]||(e[43]=l=>$(N)?N.value=l:null),type:"datetimerange","start-placeholder":"Start date","end-placeholder":"End date",format:"YYYY-MM-DD HH:mm:ss","date-format":"YYYY/MM/DD ddd","time-format":"A hh:mm:ss"},null,8,["modelValue"])]),_:1})],64)}}},zt=U(it,[["__scopeId","data-v-b729b043"],["__file","D:/html/开源 工具/integration-test/src/views/TestThree.vue"]]);export{zt as default};
