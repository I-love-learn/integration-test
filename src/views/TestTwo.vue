<script setup lang="ts">
// 一个文件夹下同时有 同名js和ts 省略文件后缀 优先导入js
import { useAnalysisDict } from "@/hooks/index.ts"
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
  console.log("页面更新了")
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

function startAnimal(e) {
  console.log(e)

  pos.left = e.clientX - 25 + "px"
  pos.top = e.clientY - 25 + "px"
  const dom = document.querySelector("#warp").getBoundingClientRect()
  // requestAnimationFrame(() => {
  //   console.log(dom)

  //   pos.left = dom.x + "px"
  //   pos.top = dom.y + "px"
  //   pos.transition = "all 5s"
  // })

  requestAnimationFrame(() => {
    // 多次点击startAnimal 动画只执行第一次 原因是 动画还没来得及执行 pos.left = dom.x + "px" pos.top = dom.y + "px" 下一帧就要执行 pos.left = dom.x + "px"     pos.top = dom.y + "px" 然后动画就会继续执行 后者 前者跳过了
    pos.left = dom.x + "px"
    pos.top = dom.y + "px"
    pos.transition = "all 5s"
  })
}
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
            当响应式对象更新的时候 计算数学也会重新计算
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
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
.common-layout {
  height: 100vh;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
