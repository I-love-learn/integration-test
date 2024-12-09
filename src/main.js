// import { createApp } from 'vue'
import "./style.css"
import App from "./App.vue"
import "@/assets/css/base.css"
import "@/assets/styles/base.scss"
import { registerMicroApps, start } from "qiankun"

import "@/assets/styles/base.less"
import { createApp } from "vue"
import MoreText from "./components/MoreText.vue"
import { createPinia } from "pinia"
import { test } from "@/utils/test"
// import a from '../node_modules/test' 经过我测试 路径带有node_modules的文件的确会被依赖预构建
// console.log(a);
// css 文件也会被 vite处理
// import '../node_modules/test.css'
// 非绝对路径引入的模块不会进行 vite处理
import "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.0.0-alpha-031abd24b-20210907/umd/react.development.js"
console.log(import.meta.env)
// console.log(process.env.ENV_MODE);
// vue2中，webpack帮我们做了处理，使浏览器可以直接识别node的process.env变量，从而实现了浏览器识别环境变量的功能。
// vite中我们的代码运行在浏览器环境中，因此是无法识别process.env变量的。（这意味着，vite中识别环境变量的方式与webpack中不同） 除了运行在nodejs端的 vite.config.js 能获取process.env
// 但是我们可以通过import.meta.env来获取环境变量 反正经我测试没办法去修改process.env.ENV_MODE的值

// setTimeout(() => {
registerMicroApps([
  {
    // name是随便填的吗
    name: "reactApp",
    entry: "//localhost:8080",
    // 子应用的跟组件的根节点 id不能与这个同名 负责会造成最终渲染一个app1 盒子 内部是reactApp盒子 中一个空的app盒子 猜测是子应用的先生成了app1的dom 然后mount挂载到了app上 替换了父应用的app盒子
    container: "#app1",
    activeRule: "/ccb",
    props: {
      document: document,
      app2: document.querySelector("#app2")
    }
  }
])

setTimeout(() => {
  console.log("我是基座")
}, 0)
// 启动 qiankun
start({ strictStyleIsolation: true, experimentalStyleIsolation: true })
// }, 50)

setTimeout(() => {
  console.log(window.__POWERED_BY_QIANKUN__)
}, 3000)
const app = createApp(App)
console.log(app)
// 创建一个pinia应用实例 可以被app应用所使用 因为其内部含有一个install方法
const pinia = createPinia()
// 打印这个pinia应用实例可以看到 我们定义的多个store都存在于其身上 官网说使用createPinia 并使用use后才能提供devtool的支持 并且如果不这么做 直接使用defineStore是会报错的 可以认为不使用这个 就无法使用pinia

// pinia可以使用use属性来使用插件  https://blog.csdn.net/qq_33635385/article/details/125339178 createPinia源码
console.log(cloneDeep)
console.log(http)
console.log(app)
app.use(router)
app.use(pinia)
app.component("MoreText", MoreText)
app.mount("#app")

export function FuncAbc() {
  return 123
}
