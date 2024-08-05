<script setup>
import { ArrowDown } from "@element-plus/icons-vue"
const flag = ref(1)

const data = reactive({
  data: {
    a: 1,
    b: 2
  }
})
const value = ref("")
console.log(toRef(() => data.data)) // getterRef

const a = toRef(data, "data")
console.log(a) // ObjectRef
console.log(toRef(a))
console.log(toRef(a) === a) // true 对ref使用toRef 返回的是自身
console.log(toRef(a, "a")) // ObjectRef data 而不是a
console.log(toRef(a, "value") === a) // true
console.log(toRef(1))
console.log(toRef({ a: 1 }))
console.log(toRef(reactive({ a: 1 })))
const c = reactive({ a: { b: 1 } })
const d = reactive({ a: 1 })
console.log(toRef(c, "a"))
console.log(toRef(d, "a"))
console.log(toRef([]))
console.log(data) // RefImpl

console.log(ref(data.data)) // RefImpl
console.log(ref(data))
console.log(ref(data.data.a))

toValue(1) //       --> 1
toValue(ref(1)) //  --> 1
toValue(() => 1) // --> 1
// toValue 是返回一个refs 或 getters的值 但不会改变原本的ref对象
const b = ref(2)
toValue(b)
console.log(b)
console.log(toValue(1))
console.log(toValue(ref(1)))
console.log(toValue(() => 1))

const z = ref(12)

onUpdated(() => {
  console.log("我更新了")
})

const fileList = ref([
  {
    url: "https://img0.baidu.com/it/u=2804005887,994501744&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
    name: "123"
  }
])

function remove() {
  console.log(123)

  console.log(fileList)
}

function beforeRemove() {
  console.log(456)
}

function beforeUpload() {
  console.log(789)
}
const uploadRef = ref()
function change() {
  // change事件中return false并不会阻止 往filelist里添加内容 正确做法是如果不符合条件直接删除最后一个元素即可
  // return false
  fileList.value.pop()
  console.log(123)
  // console.log(fileList[0].name)
  setTimeout(() => {
    fileList.value.pop()

    // console.log(fileList.value)
    console.log(fileList)
  }, 1000)
}
function change1(a, v) {
  console.log(v)
  // console.log(uploadRef.value)
  // const input = uploadRef.value.querySelectorAll("input[type='file']")

  console.log(document.querySelectorAll("input[type='file']"))
}
function onClick() {
  console.log(1)
}
// await Promise 只可以返回成功状态的值 如果遇到reject 则会停止运行 并且返回一个rejected promise
async function Fun() {
  await Promise.reject(1)
  console.log(123)
}

Fun()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

const three = ref(3)

onUpdated(() => {
  console.log("组件更新了")
})

const value2 = ref([])

const listData = ref([
  "一个和桑挑水吃",
  "一个和桑挑水吃一个和桑挑水吃",
  "一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水吃一个和桑挑水"
])

const props1 = {
  checkStrictly: true
}

const value1 = ref("")
const options = [
  {
    value: "guide",
    label: "Guide",
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency"
          },
          {
            value: "feedback",
            label: "Feedback"
          },
          {
            value: "efficiency",
            label: "Efficiency"
          },
          {
            value: "controllability",
            label: "Controllability"
          }
        ]
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "side nav",
            label: "Side Navigation"
          },
          {
            value: "top nav",
            label: "Top Navigation"
          }
        ]
      }
    ]
  },
  {
    value: "component",
    label: "Component",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout"
          },
          {
            value: "color",
            label: "Color"
          },
          {
            value: "typography",
            label: "Typography"
          },
          {
            value: "icon",
            label: "Icon"
          },
          {
            value: "button",
            label: "Button"
          }
        ]
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio"
          },
          {
            value: "checkbox",
            label: "Checkbox"
          },
          {
            value: "input",
            label: "Input"
          },
          {
            value: "input-number",
            label: "InputNumber"
          },
          {
            value: "select",
            label: "Select"
          },
          {
            value: "cascader",
            label: "Cascader"
          },
          {
            value: "switch",
            label: "Switch"
          },
          {
            value: "slider",
            label: "Slider"
          },
          {
            value: "time-picker",
            label: "TimePicker"
          },
          {
            value: "date-picker",
            label: "DatePicker"
          },
          {
            value: "datetime-picker",
            label: "DateTimePicker"
          },
          {
            value: "upload",
            label: "Upload"
          },
          {
            value: "rate",
            label: "Rate"
          },
          {
            value: "form",
            label: "Form"
          }
        ]
      },
      {
        value: "data",
        label: "Data",
        children: [
          {
            value: "table",
            label: "Table"
          },
          {
            value: "tag",
            label: "Tag"
          },
          {
            value: "progress",
            label: "Progress"
          },
          {
            value: "tree",
            label: "Tree"
          },
          {
            value: "pagination",
            label: "Pagination"
          },
          {
            value: "badge",
            label: "Badge"
          }
        ]
      },
      {
        value: "notice",
        label: "Notice",
        children: [
          {
            value: "alert",
            label: "Alert"
          },
          {
            value: "loading",
            label: "Loading"
          },
          {
            value: "message",
            label: "Message"
          },
          {
            value: "message-box",
            label: "MessageBox"
          },
          {
            value: "notification",
            label: "Notification"
          }
        ]
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "menu",
            label: "Menu"
          },
          {
            value: "tabs",
            label: "Tabs"
          },
          {
            value: "breadcrumb",
            label: "Breadcrumb"
          },
          {
            value: "dropdown",
            label: "Dropdown"
          },
          {
            value: "steps",
            label: "Steps"
          }
        ]
      },
      {
        value: "others",
        label: "Others",
        children: [
          {
            value: "dialog",
            label: "Dialog"
          },
          {
            value: "tooltip",
            label: "Tooltip"
          },
          {
            value: "popover",
            label: "Popover"
          },
          {
            value: "card",
            label: "Card"
          },
          {
            value: "carousel",
            label: "Carousel"
          },
          {
            value: "collapse",
            label: "Collapse"
          }
        ]
      }
    ]
  },
  {
    value: "resource",
    label: "Resource",
    children: [
      {
        value: "axure",
        label: "Axure Components"
      },
      {
        value: "sketch",
        label: "Sketch Templates"
      },
      {
        value: "docs",
        label: "Design Documentation"
      }
    ]
  }
]

const tableData = ref([
  {
    name: "name1",
    state: false
  },
  { name: "name2", state: false }
])
const cd = ref(1)
const unit = computed(() => {
  console.log(123456)
  return cd.value + 1
})

setTimeout(() => {
  cd.value++
}, 10)

const objj = {}
let temp = 3
Object.defineProperty(objj, "a", {
  get() {
    console.log("我被读取")
    return temp
  },
  set(v) {
    console.log("我被修改")
    temp = v
  }
})

objj.a = 1

const zhi1 = ref(1)

const zhi2 = ref(2)
// setTimeout(() => {
//   zhi1.value++
// }, 10)
// setTimeout(() => {
//   zhi1.value++
// }, 1000)
// 计算属性执行时内部修改了 被计算的属性会导致 计算属性再执行一次 仅第一次修改 这样可以避免无限执行 其实理论上来讲是不应该多这一次计算的 因为值不是异步修改的
// 但如果计算属性内部是异步修改被计算属性的话会导致无限执行
const co = computed(() => {
  console.log("%c计算属性", "color:red;font-size:20px")
  // if (zhi1.value === 2) {
  //   zhi2.value = 2
  // }

  // Promise.resolve意思是 立即返回一个 已经执行完成的promise 这里123444 打印在456789之前 因为这里resolve里的内容是函数 所以这里会立即执行函数 而then 这里的then执行时机是微任务里 这里我本来猜测 computed执行也是放到微任务里的 但是这里如果我写了微任务异步 也会导致无限执行 那就意味着 computed执行是宏任务的
  // Promise.resolve(
  //   (() => {
  //     console.log(123444)
  //     zhi1.value++
  //   })()
  // ).then(() => {})
  console.log(456789)
  // zhi2.value++

  // 也就是说 每次计算属性外部修改了 计算属性的依赖后 计算属性会执行一次 然后遇到这里内部修改依赖 也会触发一次计算 但是在那个计算属性里 不会触发下一次计算了 戛然而止了 防止无限计算 但是如果是异步修改的话 会无限计算
  zhi1.value++
  return zhi1.value + zhi2.value
})
// setTimeout(() => {
//   zhi2.value = 4
// }, 10)
// watch里如果修改了 比如++ 被watch的对象 会造成无限监听 内存溢出 但是赋值不会 要避免在watch和computed对依赖进行修改
// 还有一种情况要避免就是 像这里 如果计算属性里 zhi1++  而这里监听zhi1 将zhi1每次赋值为3 也会造成computed和watch 互相影响 导致无限监听
watch(zhi2, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  zhi2.value = 3
})
// watch(zhi2, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
//   zhi2.value = 5
// })
// 以后可以研究计算属性和watch执行顺序
// const aaaa = computed(() => {
//   const a = zhi2.value++
//   // 计算属性必须要return 才会生效
//   return a
// })

const aaa = ref(1)

const aaCom = computed(() => {
  console.log("计算属性------")
  aaa.value++
  return aaa.value
})

const router = useRouter()

onUpdated(() => {
  console.log("更新了")
})

const cardShow = ref(false)
</script>

<template>
  {{ aaCom }}
  {{ aaaa }}
  <div class="common-layout">
    <el-container>
      <el-aside width="500px">
        <el-button @click="flag = 1">测试三层组件传参</el-button>
        <el-button @click="flag = 2">测试三层组件传参toRef</el-button>
        <el-button @click="flag = 3"
          >测试插槽和组件传参对于update生命周期触发影响</el-button
        >
        <el-button @click="flag = 4"
          >测试el-upload 多选删除其中一个是怎么做到的</el-button
        >
        <el-button @click="flag = 5">测试el-upload数据绑定</el-button>
        <el-button @click="flag = 6">el-card 高度怎么来的</el-button>
        <el-button @click="flag = 7"
          >el-input 点击下拉箭头图标无法触发click事件</el-button
        >
        <el-button @click="flag = 8">级联下拉 change触发时机</el-button>
        <el-button @click="flag = 9"
          >style background template不生效吗</el-button
        >
        <el-button @click="flag = 10"
          >el-switch 手动改变值 会触发change吗</el-button
        >
        <el-button @click="flag = 11">计算属性的触发时机</el-button>
        <el-button @click="flag = 12">route 参数变化触发update吗</el-button>
        <el-button @click="flag = 13">el-card大小变化 有过度吗</el-button>
      </el-aside>
      <el-main>
        <template v-if="flag === 1">
          <div>
            <Father v-model:data="data.data" />
            <button @click="data.data = { a: 10, b: 15 }">修改数据</button>
          </div>
          <!-- 这也是 若依分页组件封装的逻辑 -->
        </template>
        <template v-else-if="flag === 2">
          <div>
            <Father1 :data="data.data" />
            <button @click="data.data = { a: 10, b: 15 }">修改数据</button>
          </div>
          <!-- 这也是 若依分页组件封装的逻辑 -->
        </template>
        <template v-else-if="flag === 3">
          <UpdatedTest :a="z" />

          <button @click="z = 22">改变a的值</button>
          首先可以确认的是插槽不会触发updated 父子组件传值会
          即便这个值没有被子组件用到甚至没有被defineProps声明
        </template>

        <template v-else-if="flag === 4">
          <div>
            <el-upload
              v-model:file-list="fileList"
              action=""
              list-type="picture-card"
              multiple
              :auto-upload="false"
            />
          </div>
        </template>

        <template v-else-if="flag === 5">
          <div>
            <el-upload
              action=""
              v-model:file-list="fileList"
              list-type="picture-card"
              :auto-upload="false"
              @change="change"
              @remove="remove"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
            />
            <el-upload
              action=""
              v-model:file-list="fileList"
              list-type="picture-card"
              :auto-upload="false"
              @change="change1"
              multiple
              ref="uploadRef"
              @remove="remove"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
            />
          </div>
          <div>on-事件可以用@ 可以用: 但before-remove这种只给用冒号</div>
          <div>
            before-upload 只有自动上传才生效 before-remove手动上传也触发
          </div>
          <div>el-upload不绑定任何数据的情况下 上传会直接显示本地的图片</div>
          <div>
            如果绑定了file-list 则默认可以展示file-list中的文件
            删除的话还会自动清除file-list里的内容
          </div>
          <div>
            如果filelist是reactive([]) 我们添加图片后
            可以看到在devtools工具里长度的确变成了2 0是默认的那个图片
            reactive对象 1是我们刚传的 并且删除1 图片也的确消失了
            但是如果不用devtools 而是在 change事件里通过fileList.pop()删除数据
            发现filelist长度变成了0 新加的图片也没有 原来的也被删掉了
            且不触发ui更新
          </div>
          <div>
            也就是说如果filelist是reactive([]) 即便使用v-model
            也不会触发数据删除 ui更新
            而不用v-model虽然也可以触发删除同步移除了fileList的内容
            但新增不会往filelist里添加数据
          </div>
          <div>
            :on-click 原生不能写成@click 但el-upload可以 :onClick 原生是这种写法
            也就是:on = @
          </div>
          <button :on-click="onClick" :onClick="onClick">click</button>
        </template>
        <template v-else-if="flag === 6">
          <el-card></el-card>
          <!-- el-card 里面的el-card_body这个东西高度默认不等于el-card 并且他也不是flex布局 本质上是el-card-body 撑起了el-card 如果el-card外部容器是flex 那么会导致el-card继承高度 但el-card-body不会继承高度  -->
          <!-- 其实还是flex的问题 默认flex子元素高度等于父元素 除非设置align-items -->
          <!-- 默认只有padding大小 -->

          <el-row>
            <!-- v-for渲染的dom 样式每个都是独立的 那我也不知道为啥那里会高度不一样了 -->
            <el-card v-for="item in listData" :key="item">{{ item }}</el-card>
          </el-row>
        </template>
        <template v-else-if="flag === 7">
          <el-input
            v-model="value"
            placeholder="请选择配送地"
            style="width: 212px; height: 32px"
            :suffix-icon="ArrowDown"
            readonly
            class="select-address"
            @click="console.log(123)"
          >
          </el-input>
          确实 需要在input外包一层
        </template>
        <template v-else-if="flag === 8">
          <button @click="value1 = 'consistency'">变</button>
          <el-cascader
            v-model="value1"
            :options="options"
            :props="props1"
            clearable
            @change="console.log('我变了')"
          />

          <div>
            不会 v-model的值改变 ui会变化 但不触发change change是手动选择才触发
          </div>
        </template>
        <template v-else-if="flag === 9">
          <div
            style="
              background-image: url(../assets/vue.svg);
              width: 80px;
              height: 80px;
            "
          ></div>
          <div
            style="
              background-image: url(../assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png);
              width: 80px;
              height: 80px;
            "
          ></div>
          <div
            style="
              background-image: url('../assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png');
              width: 80px;
              height: 80px;
            "
          ></div>
          <div
            style="
              background-image: url('/lx9pflerpej90fgz8xwd7bx39gt5zw6.png');
              width: 80px;
              height: 80px;
            "
          ></div>
          <div
            style="
              background-image: url('src/assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png');
              width: 80px;
              height: 80px;
            "
          ></div>
          <img src="../assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png" alt="" />

          测试得出 img style里的background 路径会解析成最终编译后的路径
          无论是相对路径还是绝对路径 亦或者是@这种配置后的路径 但是background
          写在内连style解析后 是字符串 不会解析@ 以及相对路径
          但通过绝对路径访问图片可以
          测试环境可以通过src/assets/images这种绝对路径来访问 打包后不可以
          因为background 内联不会解析 而是当字符串处理路径
        </template>
        <template v-else-if="flag === 10">
          <el-switch v-model="value" @change="console.log(value)" />
          <div>不会触发change</div>

          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="name"> </el-table-column>
            <el-table-column label="状态" width="180">
              <template #default="{ row }">
                <el-switch
                  v-model="row.state"
                  @change="console.log(row.state)"
                />
              </template>
            </el-table-column>
          </el-table>

          <button
            @click="
              tableData = [
                {
                  name: 'name1',
                  state: true
                },
                { name: 'name2', state: true }
              ]
            "
          >
            数据改变
          </button>

          数据改变不会触发switch selected 级联 等控件的change事件
          因为是手动通过点击组件交互修改数据才会触发change
        </template>
        <template v-else-if="flag === 11">
          计算属性 会在属性初始化后计算 以及属性更改后第二次计算
        </template>
        <template v-else-if="flag === 12">
          <button @click="router.push('/test3?type=1')">切换</button>
        </template>
        <template v-else-if="flag === 13">
          <el-card
            style="width: 500px; height: 300px"
            v-if="cardShow"
          ></el-card>
          经过证明 el-card 和 el-row 都没有过度效果 默认
          <el-row :gutter="20">
            <el-col :span="cardShow ? 10 : 24" style="background-color: red"
              >23</el-col
            >
          </el-row>
          <el-button @click="cardShow = !cardShow">切换大小</el-button>
        </template>
      </el-main>
    </el-container>
  </div>

  <ModelVue v-model="three" />
  <div>{{ unit }}</div>
  <p>{{ co }}</p>

  测试style
  <source />
  <div class="color">123456</div>

  <div style="width: 100px; display: flex">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start date"
      end-placeholder="End date"
      format="YYYY-MM-DD HH:mm:ss"
      date-format="YYYY/MM/DD ddd"
      time-format="A hh:mm:ss"
    />
  </div>
  <!-- el-date-picker 放到row col里 会自适应 本质上是放到flex布局里 会自适应 明天看看为什么 -->
  <el-row style="width: 100px">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start date"
      end-placeholder="End date"
      format="YYYY-MM-DD HH:mm:ss"
      date-format="YYYY/MM/DD ddd"
      time-format="A hh:mm:ss"
    />
  </el-row>
</template>

<style lang="scss">
.common-layout {
  height: 100%;
  font-size: 16px;
}
</style>
<!-- 不写scoped的情况下 scss里的:deep会导致原本应该生效的样式不生效了 也就是说 scoped才可以使用deep 不使用scoped就使用deep 反倒会导致样式作废 因为打包后样式 还是:deep() css不认这个语法 -->
<style src="@/assets/css/test.scss" scoped></style>
