// import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import '@/assets/styles/base.scss'
import '@/assets/styles/base.less'

import { createPinia } from 'pinia'

console.log(import.meta.env);
// console.log(process.env.ENV_MODE);
// vue2中，webpack帮我们做了处理，使浏览器可以直接识别node的process.env变量，从而实现了浏览器识别环境变量的功能。
// vite中我们的代码运行在浏览器环境中，因此是无法识别process.env变量的。（这意味着，vite中识别环境变量的方式与webpack中不同） 除了运行在nodejs端的 vite.config.js 能获取process.env
// 但是我们可以通过import.meta.env来获取环境变量 反正经我测试没办法去修改process.env.ENV_MODE的值

const app = createApp(App) 
// 创建一个pinia应用实例 可以被app应用所使用 因为其内部含有一个install方法
const pinia = createPinia()
// 打印这个pinia应用实例可以看到 我们定义的多个store都存在于其身上 官网说使用createPinia 并使用use后才能提供devtool的支持 并且如果不这么做 直接使用defineStore是会报错的 可以认为不使用这个 就无法使用pinia

// pinia可以使用use属性来使用插件  https://blog.csdn.net/qq_33635385/article/details/125339178 createPinia源码
console.log(pinia);
console.log(app);
app.use(router)
app.use(pinia)
app.mount('#app')
