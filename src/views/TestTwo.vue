<script setup lang="ts">
// 一个文件夹下同时有 同名js和ts 省略文件后缀 优先导入js
import { useAnalysisDict } from "@/hooks/index.ts"
// import "element-plus/dist/index.css"
import "element-plus/theme-chalk/el-select.css"
import { ElSelect, ElInputNumber } from "element-plus"
const flag = ref(0)

const count = ref(1)
function compute(value) {
  return value + 1
}

const count1 = reactive({
  a: 1
})
const handlePlus = function (value) {
  return value + 1
}
const count1plus = computed(() => handlePlus(count1.a))
// 计算属性的函数会触发更新吗
const sexCode = reactive({
  data: ""
})
const sex = useAnalysisDict()

setTimeout(() => {
  sexCode.data = "1"
}, 2000)

// 响应式数据的值 一直重新赋值 会触发更新不  不会 只会第一次值更新的时候 触发更新。 这也就说的通了 那里的return 的 string.value 其实是上一次函数执行的值，

var timer = setInterval(() => {
  count.value = 1
}, 2000)

onMounted(() => {
  console.log("页面进入了")
})

function lose() {
  console.log("进入")
  show.value = true
}
function _blur() {
  console.log("离开")
}
const show = ref(false)

const num1 = ref("")
const num2 = ref("")

const num3 = ref("123")
const num4 = ref("")

// v-model 是数据和界面 双向数据绑定 如果不用v-model 用:value的话 如果是原生的input 那么界面展示的还是我们输入的内容 只不过 data数据不会变化 如果是el-input 因为他是组件的自定义属性 则输入不了内容 只有属性变化才会改变
// value我们输入的 如果value绑定的那个属性变化 则界面也会更新 如果那个属性不符合规则没变化 或者没绑定value则界面也会更新 因为原生的input 展示的value是 e.traget.value 是以这个为准的  当绑定了value 每当value的值改变e.traget.value也会同步更新 否则就是e.target.value更新而value不变
function input(e) {
  console.log(e.data)
  console.log(e.target.value)

  let regex = /^([0-9]\d*(.\d*)?)|(0.\d*[1-9][0-9])|(0.\d*[1-9])$/
  // 让他可以检测小数点 但是小数点又不可以乱放
  console.log(regex.test(e.data))

  if (!regex.test(e.data)) {
    // console.log(e.target.value.replace(e.data, ""))
    // 这么写的话 输入汉字的时候 会清空 e.target已有的值
    e.target.value = num3.value
  } else {
    num3.value = e.target.value
  }
  // value
  // 不能这么写呢 因为.和负号的输入位置无法判断
  // num3.value = e.target.value.replace(
  //   /^-{2,}|(?<!\d)\.|\.(?!\d)|[^0-9\.\-]/g,
  //   ""
  // )
}

const pos = reactive({
  top: 0,
  left: 0,
  width: "100px",
  height: "100px",
  backgroundColor: "red",
  transition: "none"
})

// function addToShopCart(params: { skuId: number; count: number }) {
//   const a = {
//     ...params,
//     code: 0
//   }
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(a)
//     }, 100)
//   })
// }

// function startAnimal(e) {
//   const ary = [
//     { num: 1, id: 1 },
//     { num: 2, id: 2 }
//   ]
//   const asyncArray = []
//   ary.forEach((element) => {
//     if (element.num > 0) {
//       asyncArray.push(
//         addToShopCart({
//           skuId: element.id,
//           count: element.num
//         })
//       )
//     }
//   })

//   Promise.all(asyncArray).then((res) => {
//     const flag = res.some((item) => {
//       return item.code === 0
//     })
//     if (flag) {
//       pos.left = e.clientX - 25 + "px"
//       pos.top = e.clientY - 25 + "px"
//       pos.transition = "none"
//       const dom = document.querySelector("#warp").getBoundingClientRect()
//       // requestAnimationFrame(() => {
//       //   console.log(dom)

//       //   pos.left = dom.x + "px"
//       //   pos.top = dom.y + "px"
//       //   pos.transition = "all 5s"
//       // })

//       requestAnimationFrame(() => {
//         // 多次点击startAnimal 动画只执行第一次 原因是 动画还没来得及执行 pos.left = dom.x + "px" pos.top = dom.y + "px" 下一帧就要执行 pos.left = dom.x + "px"     pos.top = dom.y + "px" 然后动画就会继续执行 后者 前者跳过了
//         pos.left = dom.x + "px"
//         pos.top = dom.y + "px"
//         pos.transition = "all 5s"
//       })
//     }
//   })
// }

function addToShopCart(params: { skuId: number; count: number }) {
  const a = {
    ...params,
    code: 0
  }
  return Promise.resolve(a)
}

function startAnimal(e) {
  const ary = [
    { num: 1, id: 1 },
    { num: 2, id: 2 }
  ]
  const asyncArray = []
  ary.forEach((element) => {
    if (element.num > 0) {
      asyncArray.push(
        addToShopCart({
          skuId: element.id,
          count: element.num
        })
      )
    }
  })
  Promise.all(asyncArray).then((res) => {
    const flag = res.some((item) => {
      return item.code === 0
    })
    if (flag) {
      pos.left = e.clientX - 25 + "px" // 1
      pos.top = e.clientY - 25 + "px" // 2
      pos.transition = "none" // 3
      const dom = document.querySelector("#warp").getBoundingClientRect()
      // requestAnimationFrame(() => {
      //   console.log(dom)

      //   pos.left = dom.x + "px"
      //   pos.top = dom.y + "px"
      //   pos.transition = "all 5s"
      // })
      // 有一种感觉 就是如果 promise.all 接受的异步任务 不是放到当前微任务队列完成的 而是放在下一个宏任务的微队列运行的话 则 会无视掉上面的 1 2 3代码 首次执行时  后面每次执行才会 执行 123的代码
      requestAnimationFrame(() => {
        // 多次点击startAnimal 动画只执行第一次 原因是 动画还没来得及执行 pos.left = dom.x + "px" pos.top = dom.y + "px" 下一帧就要执行 pos.left = dom.x + "px"     pos.top = dom.y + "px" 然后动画就会继续执行 后者 前者跳过了
        pos.left = dom.x + "px"
        pos.top = dom.y + "px"
        pos.transition = "all 5s"
      })
    }
  })
}

// function startAnimal(e) {
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res(123)
//     }, 1000)
//   }).then(() => {
//     requestAnimationFrame(() => {
//       pos.left = e.clientX - 25 + "px" // 1
//       pos.top = e.clientY - 25 + "px" // 2
//       pos.transition = "none" // 3
//       // 这么写就好了
//       requestAnimationFrame(() => {
//         const dom = document.querySelector("#warp").getBoundingClientRect()
//         console.log(dom)

//         pos.left = dom.x + "px"
//         pos.top = dom.y + "px"
//         pos.transition = "all 5s cubic-bezier(0.5, -0.5, 1, 1)"
//       })
//     })
//     // const dom = document.querySelector("#warp").getBoundingClientRect()
//     // @ 和getBoundingClientRect() 无关
//     // const dom = {
//     //   x: 1100,
//     //   y: 400
//     // }
//     // requestAnimationFrame(() => {
//     //   console.log(dom)

//     // pos.left = dom.x + "px"
//     // pos.top = dom.y + "px"
//     // pos.transition = "all 5s"
//     // })
//     // 有一种感觉 就是如果 promise.all 接受的异步任务 不是放到当前微任务队列完成的 而是放在下一个宏任务的微队列运行的话 则 会无视掉上面的 1 2 3代码 首次执行时  后面每次执行才会 执行 123的代码
//     // 几乎不出闪现
//     // requestAnimationFrame(() => {
//     //   // 多次点击startAnimal 动画只执行第一次 原因是 动画还没来得及执行 pos.left = dom.x + "px" pos.top = dom.y + "px" 下一帧就要执行 pos.left = dom.x + "px"     pos.top = dom.y + "px" 然后动画就会继续执行 后者 前者跳过了
//     //   pos.left = dom.x + "px"
//     //   pos.top = dom.y + "px"
//     //   pos.transition = "all 5s"
//     // })
//     // 大概率出 闪现 也就是我们希望的效果 火狐的话几乎都是闪现  浏览器的处理不同

//     // 也就是说promise中调用requestAnimationFrame的话 为了确保动画的流畅性 好像只会记录元素的起始位置和结束位置产生动画 而不像计时器会跳跃 （猜测）

//     // 知道了 是vue的问题 vue是异步更新队列的也就是说 pos的属性虽然改变了 但是 dom还没有更新
//     // setTimeout(() => {
//     //   pos.left = dom.x + "px"
//     //   pos.top = dom.y + "px"
//     //   pos.transition = "all 5s"
//     // }, 0)
//   })
// }

// function startAnimal(e) {
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res(123)
//     }, 1000)
//   }).then(() => {
//     requestAnimationFrame(() => {
//       pos.left = e.clientX - 25 + "px" // 1
//       pos.top = e.clientY - 25 + "px" // 2
//       pos.transition = "none" // 3
//       // 这么写就好了
//       requestAnimationFrame(() => {
//         const dom = document.querySelector("#warp").getBoundingClientRect()
//         console.log(dom)

//         pos.left = dom.x + "px"
//         pos.top = dom.y + "px"
//         pos.transition = "all 5s cubic-bezier(0.5, -0.5, 1, 1)"
//       })
//     })
//     // const dom = document.querySelector("#warp").getBoundingClientRect()
//     // @ 和getBoundingClientRect() 无关
//     // const dom = {
//     //   x: 1100,
//     //   y: 400
//     // }
//     // requestAnimationFrame(() => {
//     //   console.log(dom)

//     // pos.left = dom.x + "px"
//     // pos.top = dom.y + "px"
//     // pos.transition = "all 5s"
//     // })
//     // 有一种感觉 就是如果 promise.all 接受的异步任务 不是放到当前微任务队列完成的 而是放在下一个宏任务的微队列运行的话 则 会无视掉上面的 1 2 3代码 首次执行时  后面每次执行才会 执行 123的代码
//     // 几乎不出闪现
//     // requestAnimationFrame(() => {
//     //   // 多次点击startAnimal 动画只执行第一次 原因是 动画还没来得及执行 pos.left = dom.x + "px" pos.top = dom.y + "px" 下一帧就要执行 pos.left = dom.x + "px"     pos.top = dom.y + "px" 然后动画就会继续执行 后者 前者跳过了
//     //   pos.left = dom.x + "px"
//     //   pos.top = dom.y + "px"
//     //   pos.transition = "all 5s"
//     // })
//     // 大概率出 闪现 也就是我们希望的效果 火狐的话几乎都是闪现  浏览器的处理不同

//     // 也就是说promise中调用requestAnimationFrame的话 为了确保动画的流畅性 好像只会记录元素的起始位置和结束位置产生动画 而不像计时器会跳跃 （猜测）

//     // 知道了 是vue的问题 vue是异步更新队列的也就是说 pos的属性虽然改变了 但是 dom还没有更新
//     // setTimeout(() => {
//     //   pos.left = dom.x + "px"
//     //   pos.top = dom.y + "px"
//     //   pos.transition = "all 5s"
//     // }, 0)
//   })
// }

function handleAnimal() {
  const con = document.querySelector(".con")
  const ball = document.querySelector(".ball")

  ball.style.transform = "translateY(0)"
  con.style.transform = "translateX(0)"
  // 动态 transform 不会触发元素的重新渲染
  ball.clientWidth //，加入这个代码，让页面重新渲染，从而达到有过渡的效果。

  ball.style.transform = "translateY(300px)"
  con.style.transform = "translateX(100px)"
}

onUpdated(() => {
  console.log("更新了")
})
const message = ref("Hello, Vue 3!")

function changeMessage() {
  message.value = "Message changed!"
}
// 正常是会触发 updated与beforeUpdate的 state改变的时候
onUpdated(() => {
  console.log("Component updated!")
})
onBeforeUpdate(() => {
  console.log("Component before update!")
})

// 上传
const src = ref("")

function upload(e) {
  const file = e.target.files[0]
  // 可以预览 甚至不需要转base64
  // src.value = window.URL.createObjectURL(file)

  // 同理 base64 也可下载 这俩都可以用同样的功能 细节有所差别
  const fr = new FileReader()
  const a = document.createElement("a")
  a.download = "zy.png"
  a.href = fr.readAsDataURL(file)
  a.click()
}

const radioModel = ref(0)
const radioModel2 = ref(0)

const react = reactive({
  data: {
    b: 1
  }
})
// template未用到的响应式数据 不会触发 updated
// setInterval(() => {
//   react.data++
// }, 1000)
onUpdated(() => {
  console.log("更新了")
})

const value = ref(1)

function change() {
  nextTick(() => {
    value.value++
    console.log(value.value, "我还没更新呢")
  })
  value.value++
}
watch(value, (newValue, oldValue) => {
  console.log("value更新了")
})

const time = ref()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="400px">
        <div>
          <el-button @click="flag = 1" type="primary"
            >测试 响应式对象作为函数参数传递 是否触发更新</el-button
          >
          <el-button @click="flag = 2" type="primary"
            >测试 input focus 何时失去焦点</el-button
          >
          <el-button @click="flag = 3" type="primary"
            >el-input 输入正数包括小数的写法</el-button
          >
          <el-button @click="flag = 4" type="primary"
            >动画过渡问题测试</el-button
          >
          <el-button @click="flag = 5" type="primary">抛物线过度测试</el-button>
          <el-button @click="flag = 6" type="primary"
            >updated生命周期不执行</el-button
          >
          <el-button @click="flag = 7" type="primary"
            >FileReader.readAsDataURL(file)和URL createObjectURL()</el-button
          >
          <el-button @click="flag = 8" type="primary"
            >手动导入和自动导入同时存在样式丢失了</el-button
          >
          <el-button @click="flag = 9" type="primary"
            >el-radio 不带group的用法</el-button
          >
          <el-button @click="router.push(undefined)" type="primary"
            >测试跳转undefined （会直接报错）</el-button
          >
          <el-button @click="flag = 10" type="primary"
            >template没用到的proxy 会触发updated吗</el-button
          >
          <el-button @click="flag = 11" type="primary">测试watch时机</el-button>
          <el-button @click="flag = 12" type="primary"
            >datepicker可以跨年选吗</el-button
          >
        </div>
      </el-aside>
      <el-main>
        <template v-if="flag === 1">
          <div>{{ compute(count) }}</div>
          <div>
            会触发更新 因为也会收集依赖 当数据变化 会重新创建虚拟dom
            然后会重新执行函数
          </div>

          <p>{{ count1plus }}</p>
          <div>
            计算属性的回调函数中 用到的函数 中的参数是响应式对象
            当响应式对象更新的时候 计算属性也会重新计算
          </div>

          <p>{{ sex(sexCode.data, "sex") }}</p>
        </template>
        <template v-else-if="flag === 2">
          <input type="text" @focus="lose" />

          <div class="modal" v-if="show"></div>
          <el-input type="text" @focus="lose" @blur="_blur"></el-input>
          <el-dialog v-model="show"></el-dialog>
        </template>
        <template v-else-if="flag === 3">
          <el-input type="number" v-model.number="num1" />
          <input type="number" v-model.number="num2" />

          <p>
            elementplus 如果设置了.number修饰符
            当然这是elementplus自定义的修饰符 它可以屏蔽掉 汉字输入 不过
            原生的不行 因为原生的只支持 数值字符串转数值 但是如果输入汉字字母
            则还是字符串 因此原生要搭配type=number用 并且element.number不支持.
            支持-号 原生增加type=number后 可以输入小数 还可以输入 + - ++ +- -+
            --这种无意义的符号 也就是说 如果想要输入整数 则el-input的
            .number够用 如果想要输入小数或者正数 则要自己判断了
          </p>

          <input type="text" :value="num3" @input="input" />
          <el-input type="text" :model-value="num4" />
        </template>
        <template v-else-if="flag === 4">
          <div class="btn-warp">
            <div style="position: fixed" :style="pos"></div>
            <el-button type="primary" @click="startAnimal"
              >点我出现动画</el-button
            >

            <div
              style="
                position: fixed;
                width: 100px;
                height: 100px;
                right: 300px;
                top: 200px;
                background-color: red;
              "
              id="warp"
            ></div>
          </div>
        </template>
        <template v-else-if="flag === 5">
          <div class="con">
            <div class="ball"></div>
          </div>

          <button @click="handleAnimal">执行抛物线动画</button>
        </template>
        <template v-else-if="flag === 6">
          <div>
            插槽使用的响应式数据变化只会触发子组件updated生命周期
            而不会触发父组件的 也就是说 子组件内部更新 父组件不会触发更新钩子
            父组件state变化影响到子组件的 才会父子都触发updated钩子
            <div>
              <slot-test>
                <h1>{{ message }}</h1>
                <button @click="changeMessage">Change Message</button>
              </slot-test>
            </div>
          </div>
        </template>
        <template v-else-if="flag === 7">
          <div>
            <input type="file" @change="upload" />

            <img :src="src" alt="" width="500" height="500" />
          </div>
        </template>
        <template v-else-if="flag === 8">
          <el-select></el-select>
          <el-input-number></el-input-number>
        </template>

        <template v-else-if="flag === 9">
          <div>
            <el-radio value="1" v-model="radioModel" label="1"></el-radio>
            <el-radio value="2" v-model="radioModel" label="2"></el-radio>
            <el-radio value="1" v-model="radioModel2" label="1"></el-radio>
            <el-radio value="2" v-model="radioModel2" label="2"></el-radio>
          </div>
        </template>
        <template v-else-if="flag === 10">
          <h2>{{ react.data.b }}</h2>
          <!-- 直接替换数据是会更新了 -->
          <button @click="react.data = { b: 2 }">点击</button>
        </template>
        <template v-else-if="flag === 11">
          <div>
            <el-button @click="change">点击</el-button>
          </div>
          <div>
            watch的执行时间 如果nexttick写在数据改变前
            则watch执行时机在nexttick之后 如果nexttick写在数据改变后
            则watch执行时机在nexttick之前 感觉更像是数据改变的时候
            新创建了一个nexttick1放在 nexttick后执行了
          </div>
        </template>
        <template v-else-if="flag === 12">
          unlink-panels取消两个面板的联动
          <el-date-picker
            v-model="time"
            unlink-panels
            type="daterange"
            placeholder="选择日期"
          ></el-date-picker>

          可以 但是操作麻烦
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
.common-layout {
  height: 100vh;
}
.con {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 100px;
  top: 300px;
  position: fixed;
  transition: 2s linear;
}

.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #0d84ff;
  position: absolute;
  transition: 2s cubic-bezier(0.5, -0.5, 1, 1);
}
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
