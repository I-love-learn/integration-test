<script setup>
import { useGlobal, useStore } from "@/store"
import { coolPostStart, delRoomPerson } from "@/api/request"
import { bb } from "@/utils/other"
import { a1 } from "@/hooks/index"
import axios from "axios"
// vantpicker是被动态组件使用的 因此需要导入 不属于动态导入的范畴
import VantPicker from "@/components/VantPicker.vue"
import SetUp from "@/components/SetUp.vue"
import FlexVue from "@/components/FlexVue.vue"

import { returnARef, returnARef2 } from "@/hooks"
import $ from "jquery"
console.log(SetUp)
console.log(VantPicker)
// flag 控制哪个模块显示
const flag = ref(0)
// visible 控制弹窗显示
const visible = ref(false)
const visible2 = ref(false)

// 点击事件 切换flag
function clickEvent(e) {
  console.log(e)
}

// ^-------------------------- 数组async
const ARRAY = [1, 2, 3, 4, 5]

const fetch = function () {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove({ code: 200, message: { name: "test" } })
    }, 2000)
  })
}
// async的作用是将一个函数变为异步函数，在其中可以使用await关键字，将异步操作变为同步操作 await会阻塞后面的代码运行，但不会阻塞async外部的代码执行
async function print() {
  console.log("我执行") // 1
}
print()
// async只会改变await后续代码的执行时机 但是不会改变异步任务的执行时机
function TestAsyncFunc() {
  ARRAY.forEach(async (item) => {
    console.log(0) // 2 这里的async函数打印0 是同步的
    const res = await fetch() // await需要等待 但下面的打印1 和 这里的回调不是同一级 因此不会阻塞1的打印
    // 可以
    console.log(res.message) // 4

    // some 回调如果是 async异步 只会执行一次 因为some是同步的，如果使用异步则始终返回promise  而promise会被认为是true

    // promise的状态 只会改变一次 如果我们想要测试 则每次都return 一个新的promise
    ARRAY.some(async (item) => {
      if (item === 1) {
        console.log(0)
        const res = await fetch()
        console.log(res.message)
        return true
      }
    })
  })
  console.log(1) // 3
}

TestAsyncFunc()
// $--------------------------- 数组async结束

// ^--------------------------- 对象劫持
const object = {
  a: 1,
  b: 2,
  c: { d: 3 }
}
Object.defineProperty(object, "a", {
  get() {
    return 3
  },
  set() {}
})

console.log(Object.getOwnPropertyDescriptor(object, "a"))

// 如果被劫持那么getOwnPropertyDescriptor 会有get和set属性

// $--------------------------- 对象劫持结束

// ^--------------------------- 对象代理

const proxy = new Proxy(object, {
  get(target, key, receiver) {
    console.log(target, key, receiver)
    // 没有这个的话 代理对象不会返回2 但是如果通过控制台查看这个proxy的话 可以看到target然后 可以通过target源对象 点击a 触发劫持的get return 2
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log(target, key, value, receiver)
    return Reflect.set(target, key, value, receiver)
  }
})
// console.log(proxy.target); // undefined proxy上不存在这个属性 但是控制台可以查看
// proxy.toString() // proxy执行toString方法 会去触发get key此时是Symbol(Symbol.toStringTag)
// Number(proxy) // 先触发Symbol(Symbol.toStringTag) 分别执行valueOf 和toString 然后又会触发Symbol(Symbol.toStringTag)  结合js高级那本书看这里
// Boolean(proxy) // 没反应
// new Object(proxy) // 没反应
// new Array(proxy) 无反应
// console.log(Object.prototype.toString.call(proxy)); // [object Object] 这个方式无法判定是不是proxy   https://blog.csdn.net/zhongqw_00/article/details/123479614 不过可以采用这种方式

// Symbol.toStringTag  object对象自带的默认symbol属性 当对象执行tostring方法的时候 会从其身上读取Symbol.toStringTag 获取其值 作为[object xxx]后面的值 表示对象的类型 这个值是可以覆盖的

const obj1 = { a: 1, b: 2 }

obj1[Symbol.toStringTag] = "xt"

console.log(obj1.toString())
console.log(Number(obj1)) // NaN  number等不会读取Symbol.toStringTag 仅字符串读取
console.log({ [Symbol.toStringTag]: "Foo" }.toString()) // [object Foo]
// 创建一个类 这个类创建的实例对象 读取Symbol.toStringTag的时候 返回xxx
class Collection {
  get [Symbol.toStringTag]() {
    return "xxx"
  }
}

let x = new Collection()

console.log(Object.prototype.toString.call(x)) // [object xxx]

// 解决办法是重写Proxy构造函数

// console.log(Proxy);
// Object.prototype.toString = function () {
//   return 123
// }
// Object.prototype上的方法是可以被重写的
// console.log(Object.prototype.toString);

const abcd = [1, 2, 3]
console.log(abcd.toString()) // 1,2,3
console.log(Object.prototype.toString.call(abcd)) // [object Array] 这也就是为什么更推荐用Object.prototype.toString.call(obj)来判断obj的类型

// https://blog.51cto.com/u_15726982/5504331 因为Number、String，Boolean，Array，RegExp、Date、Function等内置对象均重写了Object原型上的toString方法，作用为将当前数据类型转为字符串类型。 执行不到Object原型上的toString方法 因为Object原型上的toString方法 在Object.prototype上，而前面的包装对象执行的是其包装对象的prototype上的toString方法

console.log(Number.prototype)

console.log(Object.toString === Object.prototype.toString)
console.log(Object.toString)
for (const key in Number) {
  if (Object.hasOwnProperty.call(Number, key)) {
    const element = Number[key]
    console.log(element) // 啥也没有
  }
}
const MyProxy = new Proxy(Proxy, {
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
  //拦截 new 操作符，生成 Proxy 实例的时候来拦截
  construct: function (target, argumentsList) {
    //result是new Proxy()生成的原本的实例
    const result = new target(...argumentsList)
    //获取原本实例reslut的类型
    const originToStringTag = Object.prototype.toString
      .call(result)
      .slice(1, -1)
      .split(" ")[1]
    //改写result的[Symbol.toStringTag]属性，加上被代理的标志
    result[Symbol.toStringTag] = "Proxy-" + originToStringTag
    return result
  }
})

const abc = new MyProxy({ a: 1 }, {})

console.log(abc.toString()) // [object Proxy-Object]
// $--------------------------- 对象代理结束

// ^--------------------------- watch

const obj = reactive({
  data: { d: 1 }
})

// 不可以
watch(
  obj.data,
  (newvalue) => {
    console.log(newvalue)
  },
  {
    deep: true
  }
)
console.log(obj.data, isReactive(obj.data))
watch(
  () => obj.data,
  (newvalue) => {
    console.log(newvalue)
  },
  {
    deep: true
  }
)
// 监听属性不可以 整个监听可以
watch(
  obj,
  (newvalue) => {
    console.log(newvalue)
  },
  {
    deep: true
  }
)
function assign() {
  obj.data = { a: 1, b: 2 }
  obj.data.d = 6
}
console.log(proxy.a)
proxy.a = 2
proxy.c.d = 5
let a = { c: 1 }

// 不生效 非响应式数据 watch监听无效
watch(
  () => a.c,
  (newvalue) => {
    console.log(newvalue)
  },
  { deep: true }
)
a.c++
setTimeout(() => {
  a.c++
}, 100)

const emptyObject = reactive({ data: {} })

watch(
  () => emptyObject.data.a,
  (newValue) => {
    console.log(newValue) // 会触发 也就是说 getter函数的watch 监听的时候
  }
)
const emptyObject1 = { data: {} }

watch(
  () => emptyObject1.data.a,
  (newValue) => {
    console.log(newValue) // 会触发 也就是说 getter函数的watch 别管监听的那个值当前存不存在 只要赋值了 就会触发监听
  }
)
setTimeout(() => {
  emptyObject.data.a = 10
  emptyObject1.data.a = 100 // 不会触发监听
}, 3000)

// 可以监听到对象变化 但仅仅只有一次 第一次
watchEffect(() => {
  console.log(a.c)
})

const obj2 = reactive({
  data: { d: 1 }
})
setTimeout(() => {
  obj2.data.d = 2
}, 1000)
// 如果watchEffect 只使用了某个响应式对象 则只会初始化的时候执行一次 如果使用到了某个值 则那个值变化时候会执行。 当然只要我们用到了那个值 那么就会触发监听 比如这里原本obj2是只打印一次的 但由于我们又在里面去使用了 obj2中data的d 则obj也打印了两次 因为data.d 变化了 所以会执行2次
watchEffect(() => {
  console.log(obj2) // 执行一次
  // console.log(obj2.data); // 执行一次
  console.log(obj2.data.d) // 执行2次
})
// $--------------------------- watch结束

// ^--------------------------- pinia
const global = useGlobal()

let store = useStore()

// 这样可以触发 getter函数
watch(
  () => global.b,
  (newvalue) => {
    // 无反应
    console.log(newvalue)
  }
)
// 直接替换store里的某个state是会触发 响应式的 但不会触发watch监听那个属性 但是会触发直接监听state
setTimeout(() => {
  global.b = 123
}, 3000)
console.log(store)
console.log(Object.getOwnPropertyDescriptors(global))
function clean() {
  // 将store的值设置为 null后 dom没有销毁 因为dom没有触发响应式 但再给store.array数组 增加值的时候 会直接报错 无法给null 增加值
  // store = null
  // console.log(store);
  store.array = null // 对store state的重新赋值是可以触发响应式的 想要将state恢复成初始值 使用$reset方法
  setTimeout(() => {
    store.array = [1]
  }, 500)
}

// $--------------------------- 结束

// ^--------------------------- async 开始

async function asyncFunc() {
  // async 中 return 等于 Promise中的reslove返回一个状态 并且这个return 必须是同步的 异步的话返回undefined
  setTimeout(() => {
    return 123
  }, 300)
}
console.log(asyncFunc()) // promise
asyncFunc().then((res) => {
  console.log(res)
})

async function Reject() {
  // 此时是执行 reject等于是 抛出错误
  throw new Error("错误的")
}

async function useReject() {
  try {
    Reject()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err) // 这里返回
      })
    await Reject()
    console.log(456)
  } catch (error) {
    console.log(error)
  }
}
useReject()
// reslove 无法throw 错误 因此被then捕获 而async throw错误被catch捕获
Promise.resolve(new Error("123"))
  .then((res) => {
    console.log(res) // 这里返回
  })
  .catch((err) => {
    console.log(err)
  })
// $--------------------------- async 结束

// 发起请求
async function ajax() {
  axios("httpss://localhost:3000/api/getData/abc/efg", {
    params: {
      a: new Map(),
      b: function () {}
    }
  })
    .then((res) => {
      // 这里接口故意乱写的 不走请求报错拦截器也不走响应报错拦截器 但是这里可以catch到错误是axios的错误 并不是接口的错误 而是压根这个接口就没有发出去
    })
    .catch((err) => {
      console.log(err)
    })
  coolPostStart()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  try {
    const result = await delRoomPerson()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        // 这里捕获 下面就不会捕获了 因为错误只会不活一次
        console.log(err)
      })
  } catch (error) {
    console.log(error)
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Promise.reject(new Error("错误的")))
    }, 3000)
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })

  new Promise((resolve, reject) => {
    resolve(Promise.reject(123))
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      return err
    })
    .then((res) => {
      console.log(res)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("000123")
        }, 3000)
      })
    })
    .then((res) => {
      console.log(res)
    })
}

const attr = ref(123)
setTimeout(() => {
  attr.value = 456
}, 10000)

const count = ref(0)
const o1 = reactive({
  count,
  a: 1
})
const v = toRef(o1, "a")
console.log(v)
v.value++
console.log(o1)
console.log(o1.count) // 0
// console.log(o1.count.value); // undefined

// v-bind 绑定的css
const color = ref("red")

const show = ref(true)

function enter() {
  console.log("过度动画要进入了")
}
function leave() {
  console.log("过度动画要离开了")
}

const count1 = ref(0)

setInterval(() => count1.value++, 2000)

function comEvent(e, f) {
  console.log(e)
  console.log(f)
}

function blurEvent() {
  console.log(event)
  console.log(1)
}

function changeEvent(e) {
  console.log(e)
}

const showAndHide = ref("inline-flex")
function toggle() {
  showAndHide.value =
    showAndHide.value === "inline-flex" ? "none" : "inline-flex"
}
// 咱们自己写的拦截符号不行 不会触发
const proxy1 = new Proxy(
  {
    a: 1,
    b: 2
  },
  {
    has(target, key) {
      console.log(target, key, "0000000000000")
      return Reflect.has(target, key)
    },
    defineProperty(target, key, descriptor) {
      console.log(target, key, "0000000000000")
      return Reflect.defineProperty(target, key, descriptor)
    },
    apply(target, thisArg, argArray) {
      console.log(target, thisArg, argArray, "0000000000000")
    }
  }
)

Object.getOwnPropertyDescriptors(proxy1)
for (const key in proxy1) {
  console.log(proxy1[key])
}

function eventCb() {
  console.log(event)
}
function changeEvent1() {
  console.log(event)
}

function eventCb2() {
  console.log(event)
}

// $--------------------------- 其他一些测试结束
// ^--------------------------- 22 组件二次封装
const modelValue = ref("")

function event24(e) {
  console.log(e) // e !== event 如果有参数
}
console.log(getCurrentInstance()) // 组件对象
// filelist必须是数组对象
const fileList = reactive({
  data: [
    {
      url: "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969"
    }
  ]
})
const fileList1 = reactive([
  {
    url: "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969"
  }
])

function changeUpload2() {
  console.log(11)
  setTimeout(() => {
    fileList1.splice(1, 1)
    setTimeout(() => {
      console.log(fileList1)
    }, 1000)
  }, 1000)
}
const list = reactive(["1", "2", "3"])

const uploadShow = ref(true)

function changeUpload(file, filelist) {
  console.log(1)
  fileList.data.splice(1, 1)
  // uploadRef.value.clearFiles()
  // setTimeout(() => {
  //   console.log(fileList);
  // fileList.data.push({
  //   url: "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969"
  // })
  // }, 0)
  filelist.push({
    url: "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969"
  })
}

const text = ref("")

function textChange() {
  text.value = "123"
}

const uploadRef = ref()

const arr1 = reactive([1, 2, 3])
const arr2 = reactive({ data: [1, 2, 3] })

const divShow = ref(true)
const div1 = ref()
function toggleShow() {
  divShow.value = !divShow.value
  // v-show也是异步的
  console.log(div1.value.style.display)
  nextTick(() => {
    console.log(div1.value.style.display)
  })
}

const twoShow = ref(false)
// 判断是否是从一级移入2级的条件 默认是没有移入
const isLeaveTwo = ref(true)
const threeShow = ref(false)
const fourShow = ref(false)
const isLeaveFour = ref(true)
function showTwo() {
  console.log("showTwo")
  twoShow.value = true
}

function hideTwo() {
  console.log("hideTwo")
  requestAnimationFrame(() => {
    if (isLeaveTwo.value) {
      twoShow.value = false
      // threeShow.value = false
    }
  })
}

function showThree() {
  console.log("showThree")
  isLeaveTwo.value = false
  threeShow.value = true
}
function hideThree() {
  console.log("hideThree")
  threeShow.value = false
  isLeaveTwo.value = true
}

function hoverThree() {
  console.log("hoverThree")
  fourShow.value = true
}

function leaveThree() {
  requestAnimationFrame(() => {
    if (isLeaveFour.value) {
      fourShow.value = false
    }
  })
}
function hoverFour() {
  console.log("hoverFour")
  isLeaveFour.value = false
}
function leaveFour() {
  console.log("leaveFour")
  isLeaveFour.value = true
  fourShow.value = false
}

function jump(path) {
  router.push(path)
}

function upload(e) {
  console.log(e.target.files[0])
  console.log(typeof e.target.files[0] === "object")
  coolPostStart(
    { file: e.target.files[0] },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  )
  // $.ajax({
  //   url: `/api/iot/device/robot/cooling/point/start`,
  //   type: "POST",
  //   contentType: "application/x-www-form-urlencoded",
  //   data: { file: e.target.files[0] }
  // })
  // $.ajax({
  //   url: "/api/iot/device/robot/cooling/point/start",
  //   type: "get",
  //   data: { a: 123 }
  // })
  // 用json无法给后端传输file对象 这是由于 不管是json还是 x-www-form-urlencoded 格式 如果值是file文件 前者会转成空对象 后者会转成 Object字符
  // 只能用formdata formdata可以模拟表单数据 而表单是可以提交 文件的
  const xhr = new XMLHttpRequest()
  xhr.open("POST", "/api/iot/device/robot/cooling/point/start")
  xhr.setRequestHeader("Content-type", "application/json")
  // xhr.send(JSON.stringify({ file: e.target.files[0] }))
  xhr.send(JSON.stringify({ file: { a: 1 } }))
}

// v-for v-is
const data = reactive({ data: [1, 2, 3, 4, 5, 6, 7, 8, 9] })

function flagTo29() {
  flag.value = 29
  setTimeout(() => {
    data.data = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  }, 1000)
}

const classes = reactive({
  data: [
    {
      id: 1,
      name: "安全防护",
      imageUrlPc:
        "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
      children: [
        { id: 1, name: "头部防护" },
        { id: 2, name: "面部防护" },
        { id: 3, name: "防护眼镜" },
        { id: 4, name: "安全帽" },
        { id: 5, name: "防护面罩" },
        { id: 6, name: "手部防护" }
      ]
    },
    {
      id: 2,
      name: "工具耗材",
      imageUrlPc:
        "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
      children: [
        { id: 1, name: "头部防护" },
        { id: 2, name: "面部防护" },
        { id: 3, name: "防护眼镜" },
        { id: 4, name: "安全帽" },
        { id: 5, name: "防护面罩" },
        { id: 6, name: "手部防护" }
      ]
    },
    {
      id: 3,
      name: "行政办公",
      imageUrlPc:
        "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
      children: [
        { id: 1, name: "头部防护" },
        { id: 2, name: "面部防护" },
        { id: 3, name: "防护眼镜" },
        { id: 4, name: "安全帽" },
        { id: 5, name: "防护面罩" },
        { id: 6, name: "手部防护" }
      ]
    },
    {
      id: 4,
      name: "给水排水",
      imageUrlPc:
        "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
      children: [
        { id: 1, name: "头部防护" },
        { id: 2, name: "面部防护" },
        { id: 3, name: "防护眼镜" },
        { id: 4, name: "安全帽" },
        { id: 5, name: "防护面罩" },
        { id: 6, name: "手部防护" }
      ]
    },
    {
      id: 5,
      imageUrlPc:
        "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
      name: "给水排水",
      children: [
        { id: 1, name: "头部防护" },
        { id: 2, name: "面部防护" },
        { id: 3, name: "防护眼镜" },
        { id: 4, name: "安全帽" },
        { id: 5, name: "防护面罩" },
        { id: 6, name: "手部防护" }
      ]
    }
  ]
})

watch(flag, (newvalue) => {
  if (newvalue === 29) {
    setTimeout(() => {
      classes.data = [
        {
          id: 21,
          name: "安全防护1",
          imageUrlPc:
            "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
          children: [
            { id: 1, name: "头部防护" },
            { id: 2, name: "面部防护" },
            { id: 3, name: "防护眼镜" },
            { id: 4, name: "安全帽" },
            { id: 5, name: "防护面罩" },
            { id: 6, name: "手部防护" }
          ]
        },
        {
          id: 31,
          name: "工具耗材4",
          imageUrlPc:
            "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
          children: [
            { id: 1, name: "头部防护" },
            { id: 2, name: "面部防护" },
            { id: 3, name: "防护眼镜" },
            { id: 4, name: "安全帽" },
            { id: 5, name: "防护面罩" },
            { id: 6, name: "手部防护" }
          ]
        },
        {
          id: 32,
          name: "行政办公",
          imageUrlPc:
            "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
          children: [
            { id: 1, name: "头部防护" },
            { id: 2, name: "面部防护" },
            { id: 3, name: "防护眼镜" },
            { id: 4, name: "安全帽" },
            { id: 5, name: "防护面罩" },
            { id: 6, name: "手部防护" }
          ]
        },
        {
          id: 43,
          name: "给水排水",
          imageUrlPc:
            "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
          children: [
            { id: 1, name: "头部防护" },
            { id: 2, name: "面部防护" },
            { id: 3, name: "防护眼镜" },
            { id: 4, name: "安全帽" },
            { id: 5, name: "防护面罩" },
            { id: 6, name: "手部防护" }
          ]
        },
        {
          id: 51,
          imageUrlPc:
            "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
          name: "给水排水",
          children: [
            { id: 1, name: "头部防护" },
            { id: 2, name: "面部防护" },
            { id: 3, name: "防护眼镜" },
            { id: 4, name: "安全帽" },
            { id: 5, name: "防护面罩" },
            { id: 6, name: "手部防护" }
          ]
        },
        {
          id: 53,
          imageUrlPc:
            "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
          name: "给水排水",
          children: [
            { id: 1, name: "头部防护" },
            { id: 2, name: "面部防护" },
            { id: 3, name: "防护眼镜" },
            { id: 4, name: "安全帽" },
            { id: 5, name: "防护面罩" },
            { id: 6, name: "手部防护" }
          ]
        },
        {
          id: 54,
          imageUrlPc:
            "https://t14.baidu.com/it/u=122816844,712275297&fm=224&app=112&size=h200&n=0&f=PNG?sec=1715533200&t=296085a25226e7ed9a44453eb6aae969",
          name: "给水排水",
          children: [
            { id: 1, name: "头部防护" },
            { id: 2, name: "面部防护" },
            { id: 3, name: "防护眼镜" },
            { id: 4, name: "安全帽" },
            { id: 5, name: "防护面罩" },
            { id: 6, name: "手部防护" }
          ]
        }
      ]
    }, 1000)
  }
})
// map set
new Map([[1, 2]])
const mapResponsive = reactive(
  new Map([
    ["b", 1],
    ["a", 2],
    ["md", 3],
    ["lg", 4],
    ["xl", 5],
    ["xxl", 6]
  ])
)
const setResponsive = reactive(new Set([1, 2, 3, 4]))
console.log(setResponsive)
const symbolResponsive = reactive(Symbol("symbol"))
console.log(symbolResponsive) // 不是响应式

const dd = reactive({
  a: 1,
  b: 2
})

const isshow = ref(false)

const num1 = ref()
const num2 = ref()

function aa() {
  console.log(222222222)
}

console.log(returnARef())

const slide = ref()

function printSlide() {
  console.log(slide)
  // 使用的时候 被解包了
  console.log(slide.value.a) // 1
  console.log(slide.value.a.value)
}
// 也就是说如果我们在函数内部定义的ref对象 并return 给模板调用 那么ref 不是响应式的

// 错了ref是响应的 只不过每次页面更新 都创建新的ref 然后return 导致值一直是初始的
function RetRef() {
  const a = ref("1")

  setInterval(() => {
    a.value = a.value + 1
  }, 1000)
  return a
}
// 但是如果这个ref return 出来并且被赋值给setup变量 那么这个ref 是响应式的
const bb1 = RetRef()

const bb2 = ref("1")
setInterval(() => {
  bb2.value = bb2.value + 1
}, 1000)

onUpdated(() => {
  console.log("更新")
})
</script>

<script>
export default {
  mounted() {
    console.log(this) // 组件代理对象
  },
  updated() {
    console.log("更新")
  }
}
</script>

<template>
  <el-container>
    <el-aside width="400px">
      <el-button type="primary" @click="flag = 1">append-to-body</el-button>
      <el-button type="primary" @click="flag = 2">.naive</el-button>
      <el-button type="primary" @click="flag = 3"
        >循环可以使用async吗？</el-button
      >
      <el-button type="primary" @click="flag = 4"
        >shallowReactive和markRaw</el-button
      >

      <el-button type="primary" @click="flag = 5"
        >判断对象是否被代理或劫持</el-button
      >

      <el-button type="primary" @click="flag = 6"
        >watch可以监听一个一开始没有后面又赋值的数据吗</el-button
      >
      <el-button type="primary" @click="flag = 7">pinia使用时赋值</el-button>
      <el-button type="primary" @click="flag = 8"
        >async异步函数中的return是什么</el-button
      >
      <el-button type="primary" @click="flag = 9"
        >axios拦截器中的失败函数的return有什么用</el-button
      >
      <el-button type="primary" @click="flag = 10">动态组件component</el-button>
      <el-button type="primary" @click="flag = 11">折叠菜单组件</el-button>
      <el-button type="primary" @click="flag = 12"
        >setup直接返回一个h可以被页面使用吗</el-button
      >
      <el-button type="primary" @click="flag = 13">ref不需要.value</el-button>
      <el-button type="primary" @click="flag = 14">测试插槽的flex</el-button>
      <el-button type="primary" @click="flag = 15"
        >测试flex子元素宽度</el-button
      >
      <el-button type="primary" @click="flag = 16">css v-bind</el-button>
      <el-button type="primary" @click="flag = 17">deep</el-button>
      <el-button type="primary" @click="flag = 18">transition</el-button>
      <el-button type="primary" @click="flag = 19">组件事件</el-button>
      <el-button type="primary" @click="flag = 20">事件与传参</el-button>
      <el-button type="primary" @click="flag = 21">proxy in操作符 </el-button>
      <el-button type="primary" @click="flag = 22">ui组件的二次封装 </el-button>
      <el-button type="primary" @click="flag = 23">@等不等于:on</el-button>
      <el-button type="primary" @click="flag = 24"
        >emit和props define的时候不传参能使用不</el-button
      >
      <el-button type="primary" @click="flag = 25"
        >el-upload的file-list是干什么的，和文件列表展示有关系吗</el-button
      >
      <el-button type="primary" @click="flag = 26"
        >v-for 绑定 v-model</el-button
      >
      <el-button type="primary" @click="flag = 27"
        >v-show同步还是异步</el-button
      >
      <el-button type="primary" @click="flag = 28"
        >多个mouseleave会同时触发吗</el-button
      >
      <el-button type="primary" @click="flagTo29">v-if配合v-for bug</el-button>
      <el-button type="primary" @click="flag = 30"
        >路由跳转与router-link</el-button
      >
      <el-button type="primary" @click="flag = 31">class覆盖优先级</el-button>
      <el-button type="primary" @click="flag = 32"
        >上传可以使用json吗</el-button
      >
      <el-button type="primary" @click="flag = 33"
        >vue scoped会继承吗</el-button
      >
      <el-button type="primary" @click="flag = 34"
        >map reactive 和set reactive</el-button
      >
      <el-button type="primary" @click="flag = 35"
        >props reactive测试</el-button
      >
      <el-button type="primary" @click="flag = 36"
        >transition 折叠过度动画</el-button
      >
      <el-button type="primary" @click="flag = 37"
        >全局变量 在template里直接用</el-button
      >
      <el-button type="primary" @click="flag = 38"
        >el-input输入整数测试</el-button
      >
      <el-button type="primary" @click="flag = 39">测试函数输出ref</el-button>
    </el-aside>
    <el-main style="position: relative">
      <template v-if="flag === 1">
        <el-button type="primary" @click="visible = true">显示弹窗</el-button>
        <div style="position: absolute; top: 100px; left: 100px">
          <el-dialog
            title="Basic usage"
            v-model="visible"
            class="dialog"
            :modal="false"
            width="80%"
          >
            <div>
              element plus 上说当 modal 的值为 false 时，请一定要确保
              append-to-body 属性为 true，由于 Dialog 使用 position: relative
              定位，当外层的遮罩层被移除时，Dialog 则会根据当前 DOM
              上的祖先节点来定位，因此可能造成定位问题。 但是经过我测试
              并没有发现弹窗不加append-to-body 属性时的定位问题。
              因为每次弹窗都会自动添加一个遮罩层。而遮罩层的大小是全屏的，我怀疑是自动append-to了一个遮罩层，因此样式不受影响。
              另外官方建议我们dialog嵌套时要添加append-to-body属性或者是直接写在外面
              平级。
            </div>
            <div style="width: 500px; height: 100px; position: relative">
              <el-dialog
                title="dialog2"
                draggable
                v-model="visible2"
                :modal="false"
              >
                <div>我是第二个窗口</div>
                <template #footer>
                  <el-button @click="visible2 = false">取 消</el-button>
                  <el-button type="primary" @click="visible2 = false"
                    >关闭窗口</el-button
                  >
                </template>
              </el-dialog>
            </div>

            <template #footer>
              <el-button @click="visible = false">取 消</el-button>
              <el-button type="primary" @click="visible2 = true"
                >打开新窗口</el-button
              >
            </template>
          </el-dialog>
        </div>
      </template>

      <template v-else-if="flag === 2">
        <div>
          首先，明确一点，vue3中的naive没有了。 直接对子组件使用事件
          如果子组件有根节点则直接事件放在 根节点上执行
          如果没有根组件则会抛出警告 让用emits写 Vue 3.x 取消 .native 修饰符
          .native 修饰符在 Vue 3.x 已经移除掉了。取而代之的是，在新增的 emits
          选项中定义当前组件真正触发的事件（即，组件事件）。此外，Vue
          现在将所有未在组件emits
          选项中定义的事件作为原生事件添加到子组件的根元素中（除非子组件选项中设置了
          inheritAttrs: false）。
          https://blog.csdn.net/weixin_44869002/article/details/113176244
          也就是说vue3中 放在子组件身上但并未被emits接收的事件
          会直接被认为是.native事件原生事件 v3等于是省略了v2的.native修饰符号
          而v2的.native修饰符意思是直接使用原生事件。
          也就是把组件当作一个dom注册一个原生的事件使用。 v2中
          native只能用于组件 意味给组件添加一个原生事件
          这个原生事件就是v-on后的那个事件 因为v-on事件就是对原生事件的封装。
          我们可以使用 v-on 指令 (简写为 @) 来监听 DOM
          事件，并在事件触发时执行对应的 JavaScript。用法：v-on:click="handler"
          或 @click="handler"。
          https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers
          因为编译成虚拟dom的时候就是onClick。 如果组件根节点绑定了一个事件
          然后父组件使用时 绑定了一个相同事件 那么会触发两次 比如子组件input
          子组件绑定了input事件 父组件也绑定了此时会触发两次回调
          <test-child-multiple @click="clickEvent" />
          <test-child-single @input="clickEvent" />
        </div>
      </template>

      <template v-else-if="flag === 3">
        <div>
          测试对数组进行遍历的时候回调可不可以使用async
          答案是：可以，但some只会执行一次
        </div>
      </template>

      <template v-else-if="flag === 4">
        <data-react :abc="attr" />
      </template>

      <template v-else-if="flag === 5">
        https://blog.csdn.net/zhongqw_00/article/details/123479614
        检测一个对象是否被proxy
      </template>

      <template v-else-if="flag === 6">
        <el-button type="primary" @click="assign">点我赋值</el-button>

        watch使用的时候，如果监听的是一个响应式对象中的某个属性，如果这个属性直接被赋值了，那么不会触发监听，（原因应该是proxy劫持的时候get与set只会触发到本级，比如代理了a对象，修改a对象中b属性
        那么set中target就是a 而不是b，而watch直接监听a.b
        只能监听到b内部变化时触发，想要让b赋值时也被监听到
        则需要使用getter函数，内部原理暂不清楚）除非我们监听的时候是getter形式的方式监听的。但这个监听是浅的，仅限于该值被赋值了，需要设置deep:true,而默认的reactive被watch的时候默认就是深度的。
        也就是说 如果需要监听响应式中某个属性的话需要getter函数。
        <div>
          https://www.jb51.net/article/270499.htm#_lab2_0_0
          vue3中watch不可直接监听响应式对象的属性
          但写成getter函数的形式则可以监听属性重新赋值时的变化，并且可以通过deep设置成true
        </div>
        <div>
          https://juejin.cn/post/7013312008410005541 他们都是拿一个属性
          简单数据类型举例 但是我测试对象属性也不行啊
        </div>
        <div>
          在Vue
          3中，watch选项可以接受一个getter函数作为参数。这个getter函数的作用是用来获取被监听属性的值。当这个被监听属性的值发生变化时，Vue
          3会调用这个getter函数来获取最新的属性值，并触发相应的操作。
          通过使用getter函数，你可以更灵活地控制watch选项的行为。getter函数可以返回任何你想要监听的值，可以是响应式对象的属性，也可以是计算属性的值，甚至可以是一些复杂的逻辑。这样可以让你在watch选项中实现更加灵活和复杂的逻辑处理。
          总的来说，watch选项中的getter函数是用来获取被监听属性的最新值的函数。通过合理地使用getter函数，你可以更好地实现对响应式数据的监听和处理。希望这个解释对你有帮助！如果你有任何其他问题，我很乐意为你解答。
        </div>
      </template>

      <template v-else-if="flag === 7">
        <div>
          {{ store.array }}
        </div>
        <div>{{ global }}</div>
        <el-button type="primary" @click="store.array.push(1)"
          >往store里添加内容</el-button
        >
        <el-button type="primary" @click="global.e = 1010"
          >往global里添加内容</el-button
        >
        <el-button type="primary" @click="clean">清空store</el-button>
        <div>
          直接修改store中state的值是会触发响应式的因为 store的值是响应式的 但是
          pinia的 tools里不会出现这个我们直接定义赋值的属性
        </div>
      </template>

      <template v-else-if="flag === 8">
        <div>https://www.cnblogs.com/voxov/p/14575667.html</div>
        <div>
          async函数 中默认返回的是 Promise.reslove() 也就是undefined return xx
          就等于 return Promise.reslove(xx) 返回一个promise
        </div>
      </template>

      <template v-else-if="flag === 9">
        <div>
          <el-button type="primary" @click="ajax">发起ajax请求</el-button>"
        </div>

        <div>
          promise resolve一个值 可以被then拿到 resolve一个Promise.reject
          可以被catch拿到
        </div>
        <div>resolve会返回成功状态 then和catch调用会返回一个新的promise</div>
        <div>
          这也是为什么我们请求拦截和相应拦截器是一个函数了 因为函数执行会返回值
          reslove这个函数执行
        </div>
        <div>
          无论是接口地址乱写还是传参乱写
          都不会触发请求拦截器错误回调,因为压根没走拦截器直接axios就给报错了.
        </div>
        <div>
          .then或者.catch可以在回调中return 一个值或者一个promise
          如果是值得话会被后面的then或者catch中拿到 如果是promise得话
          会在promise执行完毕后被后面的then或者catch中拿到
        </div>
      </template>

      <template v-else-if="flag === 10">
        <!-- 动态组件是可以传参的 所有被动态组件使用的组件都可以拿到props  is不在props中 -->
        <component :is="VantPicker" a="a" />
      </template>
      <template v-else-if="flag === 11">
        <button @click="printSlide">打印</button>
        <slide-vue ref="slide" />
      </template>
      <template v-else-if="flag === 12">
        <set-up :attr="attr" />
      </template>
      <template v-else-if="flag === 13">
        <div>
          响应式转换是“深层”的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何
          ref 属性，同时保持响应性。
        </div>
      </template>
      <template v-else-if="flag === 14">
        <div>
          align-items属性适用于弹性容器（flex container）内部的所有项目（flex
          items），作用于整个容器内的项目。
        </div>
        <div>
          设置了align-items属性后，flex中的子元素高度会自动根据元素内容撑开，而不会铺满父元素，这一点和定位很像。（也有一些属性设置了高度还是铺满父元素的，比如stretch
          normal等等） 除了这些属性 其他的都是自适应高度
          https://blog.csdn.net/JHY97/article/details/122334190 初始值是normal
          和拉伸模式一样，所以子元素会铺满父元素，其它center flex-start
          flex-end是自适应高度。
        </div>
        <div>圣杯布局可以两端写死中间flex：1</div>
        <flex-vue>
          <div>123</div>
          <div style="height: 20px; width: 0; border-left: 1px solid red"></div>
        </flex-vue>
      </template>
      <template v-else-if="flag === 15">
        <div
          style="
            background-color: red;
            display: flex;
            justify-content: stretch;
            height: 80px;
          "
        >
          <div>456</div>
          <div>678</div>
        </div>
        <div>flex的子元素 和定位一样 被内容撑开 高度倒是默认拉伸的</div>
      </template>
      <template v-else-if="flag === 16">
        <div class="vb">script setup</div>
        <el-upload> + 点击 </el-upload>
        <div class="toggle">展示展示展示展示</div>
        <button @click="toggle">切换</button>
        <div>
          实际的值会被编译成哈希化的 CSS 自定义属性，因此 CSS
          本身仍然是静态的。自定义属性会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式地更新。
        </div>
      </template>
      <template v-else-if="flag === 17">
        <div>测试几种deep</div>

        <div>
          deep的意思是 在当前元素的之前加当前组件的的data-v
          而直接写是在元素之后加data-v 导致找不到对应的class
        </div>

        <!-- 插槽里的data-v 用的是使用他的组件的data-v -->
        <div class="deep1">
          <el-button class="btn"><el-button>123</el-button></el-button>
        </div>
        <!-- 子组件修改父组件插槽内容样式也可用deep 做法是在子组件的除了根节点外包裹插槽内容盒子外的任意元素加上 deep -->
        <!-- ：deep 不能嵌套 ：deep 否则会不生效 -->
        <slot-test>
          <div>123</div>
        </slot-test>

        <div class="deep2">
          <div class="deep3">
            <div class="deep4">123</div>
          </div>
        </div>
      </template>
      <template v-else-if="flag === 18">
        <!-- 明白了 这里设置type是告诉vue 以哪个动画的过度时常为准 比如这里如果是设置 transition 则 我们自己写的transition 过度结束 过度效果自动结束 无论animation是否执行完毕 -->
        <transition
          name="fade"
          type="animation"
          @enter="enter"
          @leave="leave"
          appear
        >
          <el-button type="primary" v-if="show" class="btn"
            >我是一个蓝色的按钮</el-button
          >
        </transition>
        <button @click="show = !show">切换</button>
        <p>
          过度可以封装成插槽组件 供不同的组件使用 component和router-view
          好像本身就可以切换了
        </p>
        <p>appear 是第一次进入页面时触发 自动触发动画</p>

        <p>
          https://play.vuejs.org/#eNqNVF1v0zAU/SsmCHWT2iTrNjGFboyhPYAQQ7AHkPLiJjepV8e2bKfrVPW/c+0kbTJBt6fG536c43NvvQk+KRWuagiSYGYyzZQlBmytrlLBKiW1JRuioSBbUmhZkRGmjnah0lDV4u4TA6nIpDDYYyEfyaWrPLK6hmMXKWqRWSYFkeIGCqnhVljQR8CPySYVxHcLkRyRcYMQYjLK4XdC4nB6Pu5BfwaQVDRj9ikhJ+68Rbat+xhQdmRjkksBfUor+4x5rakrwWZ9QtQwOKOA7rxnbwGgBhIyAk6NZVnIxF1tj6bh+ZicHI+6IvFZVoqDxUwnqCd8IPsb0BUMZaf2oOw4fP9K4euEnMbxa0R36l5wDEfSdsuxDzoSY/0zkzq+AwbMomYTcQfxYAHTqAU8ETKb19aiMdcZZ9nyMg3aRXvjftPg6l6WJYdZ1KT5Blh0r6kwzGlsuK/nfv8m4HYCmwwWMg3apH10iHM3Eo/74XR4khmDaEG5aTGvGOlztiIZ+urCzr/JXK7TgKwmrGhvgMpnEaY1d4z2ehGYRT0H8GjsE3efYdeqmcOcZstSy1rkCXl7Np1fXJx+cHhFdcnExEqVkGms1h58ZLlduOm35wWwcmF7wFzqHPRE05zVJiHn8TuEm9G09ME4aF6BSYUb8WCkwCfEK0nbgEmDpNuR5uIOSIOFtcokUVQLtSzDTFaRi32sZF7z1jlk2iKBNfiaFKx81h5LFOOg75SzaEhDOZePXz3mHp522bBmAdnyH/iDwVE4VT80GNBunLuYRevANuHbX99hjd+7YCf3QPAnGMlrv3Y+7QaHg7J7eV7tF+8WE+W9uV1bwMm3l3JCvRs+Pw3w7XX/mf9dfS/3NDzbubj9C6SW58o=
          利用钩子函数触发动画
        </p>

        <p>
          元素间过度 就是通过v-if elseif 会一边触发上个离开动画
          一边执行下个进入动画 是同时进行的 我们可以去控制哪个先执行 mode属性。
          mode="out-in"
        </p>
        <!-- 通过key 可以让过度效果触发 不在是文字更新 因为文字更新不会触发过渡效果 其实是两个元素再做过度 一个销毁的 一个生成的  -->
        <!-- 不同的mode 搭配上key 实现的过渡效果 -->
        <!-- 先执行进入动画 再执行离开动画 效果就是 先从左边飞过来 然后右边再飞过去 -->
        <transition mode="in-out">
          <span :key="count1">{{ count1 }}</span>
        </transition>
        <br />
        <!-- 先执行离开动画 再执行进入动画 离开的时候数是没有变化的 离开动画结束后 时间已经过去2s count+2 因此进入动画的时候值已变成 + 2的值 并且只会显示一个数 因为离开动画结束的位置 正好是进入动画开始的位置 这两个位置重叠了 因此数看起来是一个  -->
        <transition mode="out-in">
          <span :key="count1">{{ count1 }}</span>
        </transition>
        <br />
        <!-- 默认不写 同时进行 离开小的数 进入大的数 并且每个动画结束都+2 -->
        <transition>
          <span :key="count1">{{ count1 }}</span>
        </transition>
        <br />
        <!-- 动画好像不能实现 mode 在有key的情况下 -->
        <transition name="an">
          <span :key="count1">{{ count1 }}</span>
        </transition>
      </template>
      <template v-else-if="flag === 19">
        <elm-input @click="comEvent" @blur="blurEvent" />
      </template>
      <template v-else-if="flag === 20">
        <button @click="(p, a) => comEvent(p, a)">按钮</button>
        <!-- <el-upload action="" :on-change="changeEvent()">+</el-upload> -->
        <elm-input @click="eventCb" @change="changeEvent1" @click2="eventCb2" />
      </template>
      <template v-else-if="flag === 21">
        in 操作符就是in操作符 和遍历循环无关
        https://www.cnblogs.com/yiweiyihang/p/16778097.html in 操作符 判断
        一个属性是否在某个对象中
      </template>
      <template v-else-if="flag === 22">
        <my-input v-model="modelValue">
          <template #append="data">
            <el-button>{{ data }}</el-button>
          </template>
        </my-input>
      </template>
      <template v-else-if="flag === 23">
        <div>
          @ === v-on === :on 这里如果绑定click 然后子组件click再传递给el-input
          会导致click点一下触发两次
        </div>
        <my-input :onBlur="eventCb"></my-input>
      </template>
      <template v-else-if="flag === 24">
        <!-- 这里如果是click 事件，子组件click事件会冒泡到父组件，导致父组件click事件触发两次 但是换个名就只触发自定义事件一次了 不过子组件中可以阻止冒泡 -->
        <common-component @click="event24" title="海底捞" />
      </template>
      <template v-else-if="flag === 25">
        <div v-show="uploadShow">
          <!-- before-upload只有开启自动上传才会触发 这个属于自动上传的生命周期函数  若返回false或者返回 Promise 且被 reject，则停止上传  -->
          <el-upload
            action=""
            :auto-upload="false"
            show-file-list
            list-type="picture-card"
            v-model:file-list="fileList.data"
            ref="uploadRef"
            @change="changeUpload"
            >+</el-upload
          >

          <el-upload
            action=""
            :auto-upload="false"
            show-file-list
            list-type="picture-card"
            v-model:file-list="fileList1"
            ref="uploadRef2"
            @change="changeUpload2"
            @remove="changeUpload2"
            >+</el-upload
          >

          <el-upload
            action=""
            :auto-upload="false"
            show-file-list
            list-type="picture-card"
            :file-list="fileList.data"
            ref="uploadRef"
            @change="changeUpload"
            >+</el-upload
          >
        </div>
        <button @click="uploadShow = !uploadShow">切换</button>
        <div>
          upload的展示列表和fileList的关系 filelist只是一个变量
          用来存储默认上传的文件。 如果我们不使用filelist属性
          那么上传文件正常列表显示，只是我们获取不到。（通过change等方法也可获取）
          因为upload的展示是本地的文件内容。
          如果想要清空列表，那么需要手动清空filelist。 使用clearFiles方法。
          但是这个方法呢清空后 没办法还原了. 原因是因为el-dialog
          采用的v-show而不是v-if 因此解决办法有了
          重新创建upload就能解决没有清空之前的上传的问题
          如果upload绑定了filelist属性，那么上传文件列表是绑定在filelist属性中的。
          fileList删除数据，那么上传列表也会删除。
          fileList新增数据，那么上传列表也会新增。
          v-model:file-list则会双向绑定fileList属性。 并且fileList
          必须是reactive对象的形式 而不能是reactive数组的形式
          否则删除数据后ui没有更新 这里不知道为什么element 内部怎么实现的
        </div>
        <div>
          有时候清空了数据 发现上传列表没有清空，这时候需要手动清空上传列表。
        </div>
        <el-input type="text" v-model="text" @change="textChange"></el-input>

        <div>
          <!-- 正常来说 数组reactive 包不包一层对象 都无所谓  因为v3 reactive 对于数组也做了兼容 数组的索引就类似对象的key 所以可以代理 其实是proxy内部支持数组的代理 而defineProperty不支持 -->
          <div>{{ arr1 }}</div>
          <div>{{ arr2.data }}</div>
          <span v-for="(item, index) in arr1">{{ item }}</span>
          <span v-for="(item, index) in arr2.data">{{ item }}</span>
          <button @click="arr1.pop()">删除arr1一个元素</button>
          <button @click="arr2.data.pop()">删除arr2一个元素</button>

          <test-array :arr="arr2" />
        </div>
      </template>
      <template v-else-if="flag === 26">
        <div v-for="(item, index) in list">
          <!-- <input type="text" v-model="item"> -->
        </div>
      </template>
      <template v-else-if="flag === 27">
        <div v-show="divShow" ref="div1">123</div>

        <button @click="toggleShow">切换</button>
        <p>
          下面有三个div盒子我们要求鼠标放到1上展示2 防到2上展示3 离开3 隐藏3
          离开2隐藏2 3 离开123 隐藏23
        </p>
        <div
          style="width: 50px; background-color: red"
          @mouseenter="showTwo"
          @mouseleave="hideTwo"
        >
          1
          <div
            style="width: 50px; height: 50px; background-color: green"
            v-show="twoShow"
            @mouseenter="showThree"
            @mouseleave="hideThree"
          >
            2
            <div
              style="width: 50px; height: 50px; background-color: yellow"
              v-show="threeShow"
              @mouseenter="hoverThree"
              @mouseleave="leaveThree"
            >
              3
              <div
                style="width: 50px; height: 50px; background-color: blue"
                v-show="fourShow"
                @mouseenter="hoverFour"
                @mouseleave="leaveFour"
              >
                4
              </div>
            </div>
          </div>
        </div>

        <!-- on-click不是vue内置的语法 是elementplus的自定义语法 存在于upload组件 既能用@执行 也能用自定义属性执行 -->
        <div
          style="height: 30px; background-color: blue"
          :on-click="hideTwo"
        ></div>
      </template>
      <template v-else-if="flag === 28">
        <div
          style="height: 200px; background-color: red"
          @mouseenter="console.log('我进入一')"
          @mouseleave="console.log('我离开一')"
        >
          <div
            @mouseenter="console.log('我进入2')"
            @mouseleave="console.log('我离开2')"
            style="height: 200px"
          >
            <div
              @mouseenter="console.log('我进入3')"
              @mouseleave="console.log('我离开3')"
              style="height: 200px"
            ></div>
          </div>
        </div>

        <div
          style="height: 200px; background-color: red"
          @mouseenter="console.log('我进入一')"
          @mouseleave="console.log('我离开一')"
        >
          <div
            @mouseenter="console.log('我进入2')"
            @mouseleave="console.log('我离开2')"
            style="height: 150px; background-color: brown"
          >
            <div
              @mouseenter="console.log('我进入3')"
              @mouseleave="console.log('我离开3')"
              style="height: 100px; background-color: blueviolet"
            ></div>
          </div>
        </div>
      </template>
      <template v-else-if="flag === 29">
        <div
          v-for="(item, index) in Math.ceil(data.data.length / 4)"
          :key="index"
        >
          <template v-for="(item1, index1) in data.data">
            <div
              v-if="index1 >= (index - 1) * 4 && index1 < index * 4"
              :key="index1"
            >
              {{ item1 }}
            </div>
          </template>
        </div>
        <n-carousel
          direction="vertical"
          dot-placement="right"
          mousewheel
          :autoplay="false"
          :show-arrow="false"
          :show-dots="false"
          :interval="5000"
          style="height: 404px"
        >
          <li v-for="j in Math.ceil(classes.data.length / 4)" :key="j">
            <template v-for="(item, index) in classes.data">
              <div
                class="py-20"
                :key="index"
                v-if="index < j * 4 && index >= (j - 1) * 4"
              >
                <div class="top flex ac sb bg-f6 mb-1 point">
                  <div class="flex ac">
                    <img
                      :src="item.imageUrlPc"
                      alt=""
                      style="width: 30px; height: 30px"
                      class="ml-13 icon"
                    />
                    <span class="col-blue2 fs-14 ml-13 ls-1">
                      {{ item.name }}</span
                    >
                  </div>
                </div>
                <div class="bottom flex warp pl-15 pr-0 overflow-hide">
                  <template v-for="(it, i) in item.children">
                    <span
                      :key="it.id"
                      class="fs-14 col-999 children point ls-1 mr-12"
                      v-if="i < 6"
                      >{{ it.name }}</span
                    >
                  </template>
                </div>
              </div>
            </template>
          </li>
        </n-carousel>

        <h2>
          经过测试不是v-if 配合v-for的问题 是走马灯组件的问题
          只要定义的初始数据超过了能够渲染第一幕走马灯的数据
          且新数据大于等于走马灯的初始数据 就会报错（key为 index的情况下）
          报错信息是:DOMException: Failed to execute 'insertBefore' on 'Node':
          The node before which the new node is to be inserted is not a child of
          this node 并且如果初始数据长度长 而重新赋值的数据短 那么新渲染的dom
          不会移除之前的 但会移除 多出的走马灯页面 如果是从0到有 或者从有到0
          则会移除dom和走马灯 如果key是id 这种不可复用的话
          只要初始数据超出第一页 后赋值的数据只要不等于0 就报错 从0到有
          和从有到0都不报错 并且 id的话 从4变3 dom会减少 而index不会
        </h2>
      </template>
      <template v-else-if="flag === 30">
        <router-link to="a">1</router-link>
        <router-link :to="{ path: 'a' }">2</router-link>
        <router-link to="/a">3</router-link>
        <router-link :to="{ path: '/a' }">4</router-link>
        <div @click="jump('a')">5</div>
        <div @click="jump('/a')">6</div>
        <router-view />
      </template>
      <template v-else-if="flag === 31">
        <div class="a b c d">123</div>
        <!-- class权重一样的情况下 以style里最后定义的class为准 因为后定义的class会覆盖前一个 和style一样 后定义的生效 因此可以得出一个结论组件里 父组件的class先生效 子组件的后生效 -->
      </template>
      <template v-else-if="flag === 32">
        <input type="file" @change="upload" />
      </template>
      <template v-else-if="flag === 33">
        <div class="scoped">
          <div class="a">1</div>
          <div class="b">2</div>
        </div>
        <test-scoped></test-scoped>
      </template>
      <template v-else-if="flag === 34">
        <div v-for="(item, key, index) in mapResponsive">
          <!-- 和数组一样 没有第三个参数 第二个参数是index item是[key,value] -->
          {{ item }},{{ key }},{{ index }}
        </div>
        <div v-for="(item, key, index) in setResponsive">
          <!-- 和数组一样 没有第三个参数 第二个参数是index item是value -->
          {{ item }},{{ key }},{{ index }}
        </div>
      </template>
      <template v-else-if="flag === 35">
        <test-props :data="dd" />
      </template>
      <template v-else-if="flag === 36">
        <el-button type="primary" @click="isshow = !isshow">切换</el-button>
        <!-- v-if和v-show都可以过度 高度过度 前提是必须设置要过度的元素高度 -->
        <transition name="expand">
          <div style="background-color: red" v-show="isshow" class="abcdefg">
            1
          </div>
        </transition>

        <!-- <transition-group name="expand">
          <div
            style="background-color: red"
            v-if="isshow"
            :key="1"
            class="abcdefg"
          >
            1
          </div>
          <div
            style="background-color: blue"
            v-if="isshow"
            :key="2"
            class="abcdefg"
          >
            1
          </div>
          <div
            style="background-color: yellow"
            v-if="isshow"
            :key="3"
            class="abcdefg"
          >
            1
          </div>
          <div
            style="background-color: black"
            v-if="isshow"
            :key="4"
            class="abcdefg"
          >
            1
          </div>
        </transition-group> -->
        <br />
        <br />

        <!-- <transition-group name="expand">
          <div
            style="background-color: red"
            v-show="isshow"
            class="abcdefg"
            :key="1"
          >
            2
          </div>
          <div
            style="background-color: blue"
            v-show="isshow"
            class="abcdefg"
            :key="2"
          >
            2
          </div>
          <div
            style="background-color: yellow"
            v-show="isshow"
            class="abcdefg"
            :key="3"
          >
            2
          </div>
          <div
            style="background-color: black"
            v-show="isshow"
            class="abcdefg"
            :key="4"
          >
            2
          </div>
        </transition-group> -->
      </template>
      <template v-else-if="flag === 37">
        <!-- 直接在胡子语法里使用不可以 报错 -->
        <!-- {{ window }}
        {{ math }} -->
        <!-- Math Object String这种是可以直接使用的 console JSON也行 但是window 和localStorage不行 -->
        {{ JSON }}
        {{ console }}
        {{ Object }}
        <!-- template的 global和 浏览器的那个global不是一回事 这个是proxy对象 -->
        {{ global }}
        {{ Promise }}
        {{ prototype }}
        {{ __proto__ }}
        {{ globalThis }}
        {{ setTimeout }}
        <el-button @click="console.log(123)">按钮</el-button>
        <el-button @click="console.log(window)">按钮</el-button>
        <el-button @click="console.log(Math)">按钮</el-button>
        <el-button @click="console.log(String)">按钮</el-button>
        <el-button @click="console.log(global)">按钮</el-button>
        <el-button
          @click="
            () => {
              console.log(Window)
            }
          "
          >按钮</el-button
        >
      </template>
      <template v-else-if="flag === 38">
        <!-- el-input是受控的 他的v-model 是组件v-model 也就是：value + update：value 如果不适用v-model 则没有双向绑定数据 因此无法输入内容 但原生不会 -->
        <!-- v-model.number 默认没有小数 是整数 加了type number就能用小数了 -->
        <el-input max="10" v-model.number="num1" />
        <!-- 原生则不是 原生.number就可用小数 因为组件v-model是element自己封装的 -->
        <!-- type number的缺点可以输入+-这样的符号 -->
        <input max="10" type="number" v-model.number="num2" />
        <!-- v-model.number的作用是 输入的数字是number类型 而非字符串 但是 他不能保证 只能输入数字 依然可以输入汉字 输入的汉字是字符串类型 也就是说它只能把字符串的数字 转换成 数值 并不能限定只能输入数字 -->
        <el-input type="text" v-model.number="num2"></el-input>
        <input type="text" v-model="num2" />
        <!-- 而type=number 则可以限制 只能输入数字 但这里要注意是字符串数字 如果要转换成数值 则需要使用.number修饰符 -->
        <!-- 如果 type=number和type=text 同时绑定一个value 则用后者值转字符串 用前者值转number -->
        <input type="number" v-model.number="num2" />
        <!-- vue template中 $event是事件对象 而event是函数的事件对象 -->
        <input type="number" @input="console.log($event.target.value)" />
        <!-- 直接写函数的话 默认第一个接受参数是事件对象e -->
        <!-- https://cn.vuejs.org/guide/essentials/event-handling.html#event-handling  箭头函数和直接写的函数调用与js代码统一叫做内联事件处理 而定义在setup中的函数 这里通过函数名使用 叫方法处理 -->
        <!-- 箭头函数不能写()执行 这一点要和 函数名() 区分 -->
        <input
          type="number"
          @input="
            (e) => {
              console.log(e.target.value)
            }
          "
        />
        <!-- 这么写 mounted会立即执行打印1000000000000 -->
        <input
          type="number"
          @input="
            ((e) => {
              console.log(10000000000000000)
            })()
          "
        />
        <!-- 但是这么写函数又不会立刻执行  -->
        <input type="number" @input="aa()" />
        <!-- 只写一个() 默认执行bb 写两个才执行bbreturn的函数 -->
        <input type="number" @input="bb()" />
        <!-- https://segmentfault.com/q/1010000016258709?bd_source_light=4746641  https://blog.csdn.net/weixin_56008510/article/details/121948791  加不加括号的区别 在于是否自动传递事件对象e 而定义函数加括号 会认为是立即执行函数 temolate渲染就执行 https://www.zhihu.com/question/55753541/answer/146197733 -->
        <input type="number" v-model.number="num2" />
        <input type="number" v-model.number="num2" />
      </template>
      <template v-else-if="flag === 39">
        <p>{{ returnARef() }}</p>
        <p>{{ returnARef2() }}</p>
        <p>{{ a1 }}</p>
        <p>
          的确有这种情况 原因未知 就是外部引入的ref对象
          渲染时多出来双引号了字符串类型的
        </p>

        <p>{{ RetRef() }}</p>
        <p>不触发响应式</p>

        <p>{{ bb1 }}</p>
        <p>{{ bb2 }}</p>
      </template>
    </el-main>
  </el-container>
  <router-view />
</template>

<style scoped lang="scss">
.abcdefg {
  height: 100px;
}
.expand-enter-active,
.expand-leave-active {
  transition: all 6s;
}
.expand-enter-from,
.expand-leave-to {
  height: 0px;
}
div {
  color: var(--color-blue);
  .dialog {
    div {
    }
    div {
      div {
      }
    }
  }
}
div {
}
div {
  div {
  }
}

.el-container {
  height: 100%;

  .el-aside {
    background-color: #f5f7fa;
    height: 100%;

    .el-button {
      margin: 5px;
    }
  }
}

.vb {
  // v-bind编译后是 css 变量  + 号可写可不写 编译后都是空格
  // 如果想写表达式则需要用引号包裹起来
  color: v-bind("color") !important;
}
button {
}
.deep1 {
  .btn {
  }
}
.deep2 {
  .deep3 {
    .deep4 {
    }
  }
}
:deep(.btn) {
  color: red;
  .el-button {
    span {
      font-size: 20px;
    }
  }
}
p {
}
span {
}
br {
}
div {
  div {
  }
  span {
  }
  button {
  }
}
div {
  div {
    div {
      div {
      }
    }
  }
}
div {
  div {
    div {
    }
  }
}
div {
  div {
    div {
    }
  }
}
div {
  div {
  }
}
// 不生效
:deep(.deep2) {
  :deep(.deep3) {
    .deep4 {
      color: red;
    }
  }
}
// 动画不一定 要定义两个 一个过度开始 一个结束  可以用动画的reverse属性来反转动画
.fade-enter-active {
  animation: move 3s reverse;
}
.fade-leave-active {
  animation: move 3s;
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}
input {
}
.btn {
  transition: background-color 2s;
}
.btn:hover {
  background-color: red;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(40px);
}

.an-enter-active {
  animation: move 1s reverse;
}
.an-leave-active {
  animation: move 1s;
}
@keyframes an {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
:deep(.el-upload) {
  display: v-bind(showAndHide);
}
.toggle {
  display: v-bind(showAndHide);
}
.b {
  color: red;
}
.c {
  color: yellow;
}
.d {
  color: white;
}
.a {
  color: blue;
}

.scoped {
  .a {
    color: brown;
  }
  .b {
    color: cadetblue;
  }
}
</style>
