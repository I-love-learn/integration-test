<script setup>
const value = ref("")
watch(value, (n, o) => {
  console.log(n, o)
})
// 确实 watch先触发 然后才是 input

// 自己封装的组件 如果既有父子 watch 又有v-model 触发顺序是 子input 然后父update：modelValue 然后父watch 然后子watch
// el-input 也遵循这个规则
// 如果是 原生input 触发顺序是 watch 然后input事件 可能和组件传值有关？ 难道input触发时机在 微任务后？
// 无论原生v-model 还是组件v-model 都可以看出 v-model的值 在 input触发前 replace前就已经注定了。
function testInput1() {
  console.log(value.value)
  console.log(event)

  const target = event.target
  target.value = target.value.replace(/\D/g, "")
  console.log(target.value)
  // input3.value.input.addEventListener("input", function () {
  //   console.log("我输入")
  //   const target = event.target
  //   console.log(target.value)

  //   target.value = target.value.replace(/\D/g, "")
  //   console.log(target.value)
  // })
  // value.value = target.value
}

const input = ref()
const input2 = ref()
onMounted(() => {
  console.log(input.value.input)

  input.value.input.addEventListener("input", function () {
    // 通过获取子组件input 触发input事件执行时机居然在 watch的后面 也就是数据更新之后了 不管是组件的input还是 dom的input 最终都是数据先更新 再触发的  el-input的@input除外 这个触发时机早于数据更新
    const target = event.target
    target.value = target.value.replace(/\D/g, "")
    console.log(target.value)
  })

  input2.value.input
    .querySelector("input")
    .addEventListener("input", function () {
      console.log(event.target.value)

      console.log("我输入")
    })

  input3.value.input.addEventListener("input", function () {
    console.log("我输入")
    const target = event.target
    console.log(target.value)

    target.value = target.value.replace(/\D/g, "")
    console.log(target.value)
  })
})

const input3 = ref()

const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  console.log(rowIndex, row)
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
  }
}

const tableData = [
  {
    id: "12987122",
    name: "Tom",
    amount1: "234",
    amount2: "3.2",
    amount3: 10
  },
  {
    id: "12987123",
    name: "Tom",
    amount1: "165",
    amount2: "4.43",
    amount3: 12
  },
  {
    id: "12987124",
    name: "Tom",
    amount1: "324",
    amount2: "1.9",
    amount3: 9
  },
  {
    id: "12987125",
    name: "Tom",
    amount1: "621",
    amount2: "2.2",
    amount3: 17
  },
  {
    id: "12987126",
    name: "Tom",
    amount1: "539",
    amount2: "4.1",
    amount3: 15
  },
  {
    id: "12987126",
    name: "Tom",
    amount1: "539",
    amount2: "4.1",
    amount3: 15
  }
]

const cascaderData = [
  {
    label: "甲乙丙丁",
    value: "1",
    able: 0
  },
  {
    label: "甲乙丙丁1",
    value: "1",
    able: 1
  }
]

const show = ref(false)
const loading = ref(true)
const form1 = ref()
const form2 = ref()
const form = reactive({
  name: ""
})
form.name = "111"
const flag = ref(false)
// setTimeout(() => {

// }, 0)
const resetForm = () => {
  flag.value = true
  Object.assign(form, { name: "" })
  form.name = "111"
  form1.value.resetFields()
  form2.value.resetFields()
  form3.value?.resetFields()
}

const activeName = ref("first")

const form3 = ref()

onMounted(() => {
  console.log(zs)

  zs.colSpan = 4
  // js控制表格合并
})

const options = ref([
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
])
setTimeout(() => {
  options.value = [
    {
      value: "Option1",
      label: "Option1"
    },
    {
      value: "Option2",
      label: "Option2"
    },
    {
      value: "Option3",
      label: "Option3"
    },
    {
      value: "Option4",
      label: "Option4"
    }
  ]
}, 10000)
function changeM() {
  console.log(1234)
}

const data = ref([
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 11,
        label: "Level two 1-1",
        children: [
          {
            id: 111,
            label: "Level three 1-1-1"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 21,
        label: "Level two 2-1",
        children: [
          {
            id: 211,
            label: "Level three 2-1-1"
          }
        ]
      },
      {
        id: 22,
        label: "Level two 2-2",
        children: [
          {
            id: 221,
            label: "Level three 2-2-1"
          }
        ]
      }
    ]
  }
])

const origin = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]
const tableData1 = reactive({ data: origin })

const a = ref("2016-05-03")

setTimeout(() => {
  tableData1.data = [...origin]
  a.value = "2016-05-04"
}, 5000)
const currentNodeKey = ref()
onBeforeMount(() => {
  currentNodeKey.value = 1
})
// el-tree的data 每次变化重新赋值时 会使用一开始初始时的currentkey的值作为默认选中 default-expanded 不会 它会拿当前值作为默认展开

// 总结 el-tree 如果data不重新赋值 那么无论手动更改 currentkey还是default-expanded-keys 都会生效 但是如果data重新赋值 那么重新赋值currentkey不会使用当前的值 而是使用一开始初始时的currentkey的值 而 default-expanded 使用的是当前的值
const keys = ref()
setTimeout(() => {
  currentNodeKey.value = 2
  keys.value = [1]
}, 3000)
setTimeout(() => {
  data.value = [
    {
      id: 1,
      label: "Level one 1",
      children: [
        {
          id: 11,
          label: "Level two 1-1",
          children: [
            {
              id: 111,
              label: "Level three 1-1-1"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "Level one 2",
      children: [
        {
          id: 21,
          label: "Level two 2-1",
          children: [
            {
              id: 211,
              label: "Level three 2-1-1"
            }
          ]
        }
      ]
    }
  ]
  // setTimeout(() => {
  //   currentNodeKey.value = 2
  // }, 10)
}, 6000)
function handleExpand(a, b, c, d) {
  console.log(a, b, c, d)

  // currentNodeKey.value = a.id
  // setTimeout(() => {
  //   data.value = [
  //     {
  //       id: 1,
  //       label: "Level one 1",
  //       children: [
  //         {
  //           id: 11,
  //           label: "Level two 1-1",
  //           children: [
  //             {
  //               id: 111,
  //               label: "Level three 1-1-1"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       label: "Level one 2",
  //       children: [
  //         {
  //           id: 21,
  //           label: "Level two 2-1",
  //           children: [
  //             {
  //               id: 211,
  //               label: "Level three 2-1-1"
  //             }
  //           ]
  //         },
  //         {
  //           id: 22,
  //           label: "Level two 2-2",
  //           children: [
  //             {
  //               id: 221,
  //               label: "Level three 2-2-1"
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }, 500)
}
function handleClick(a, b, c, d) {
  currentNodeKey.value = 2
}
const open = ref(false)

const formG = ref({
  name: "",
  name2: ""
})

const formRef = ref()

function openD() {
  // formG.value = {
  //   name: "111",
  //   name2: "222"
  // }
  open.value = true
  formG.value = {
    name: "111",
    name2: "222"
  }
  // nextTick(() => {
  //   formG.value = {
  //     name: "111",
  //     name2: "222"
  //   }
  // })
}

// el-form的终极重置机制
// 初始值
const f = ref({
  name: "0"
})

const formR = ref()

const s = ref(false)

function sShow() {
  s.value = true
  f.value.name = "74151"
}

const optionsCascader = [
  {
    value: "guide",
    label: "Guide",
    disabled: true,
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
  },
  {
    label: "哥们在这给你说唱",
    value: "dz",
    children: [
      {
        label: "1",
        value: "1"
      },
      {
        label: "5",
        value: "5",
        disabled: true,
        children: [
          {
            label: "5-1",
            value: "5-1",
            disabled: true
          },
          {
            label: "5-2",
            value: "5-2",
            disabled: true
          }
        ]
      }
    ]
  }
]

const ds = ref(false)

const dataTree = ref([])
function cf() {
  ds.value = true
  ab()
}
function ab() {
  setTimeout(() => {
    dataTree.value = [
      {
        value: "1",
        label: "Level one 1",
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            children: [
              {
                value: "1-1-1",
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ]
  }, 100)
}

const formT = ref(null)

const rules = reactive({
  select: [{ required: true, message: "请选择活动区域", trigger: "change" }]
})

const boolean = ref(false)

function handleSubmit() {
  console.log(event)
  // 可行
  // event.preventDefault()
  return false
}
const ipt = ref()
onMounted(() => {
  ipt.value.onchange = function () {
    console.log(222)
  }
})

const count = ref(1)

const event1 = () => {
  console.log(1)
  count.value++
}
const event2 = () => {
  console.log(2)
  count.value++
}
const event3 = () => {
  console.log(3)
  count.value++
}
const event4 = () => {
  console.log(4)
  count.value++
}
const event5 = () => {
  console.log(5)
}

const arrayMethods = [event1, event2, event3, event4, event5]

const k = ref({
  name: "k",
  age: undefined
})
</script>

<template>
  <div>
    <form>
      <fieldset>
        <legend>v-model 与input顺序</legend>
        <t-input v-model="value" @input="testInput1" ref="input2" />
        <t2-input v-model="value" @input="testInput1" ref="input3" />
        <el-input v-model="value" @input="testInput1" ref="input" />
        <input type="text" v-model="value" @input="testInput1" />
      </fieldset>

      <fieldset>
        <legend>table 合并行后 hover样式自定义</legend>
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="amount1" label="Amount 1" />
          <el-table-column prop="amount2" label="Amount 2" />
          <el-table-column prop="amount3" label="Amount 3" />
        </el-table>
      </fieldset>
      <fieldset>
        <legend>级联选择器 禁用属性是0还是1</legend>
        <el-cascader
          :options="cascaderData"
          :props="{
            disabled: 'able'
          }"
        />
      </fieldset>
      <fieldset>
        <legend>dialog 使用v-loading</legend>
        <el-button @click="show = true">出来吧 dialog</el-button>
        <el-dialog v-loading="loading" title="title" width="30%" v-model="show">
          0000000000
        </el-dialog>

        dialog 的确不能直接使用v-loading 否则不生效还会警告
        因为dialog组件没有根元素
      </fieldset>

      <fieldset>
        <legend>el-form 值还原了是什么问题</legend>
        原因是自己代码的问题 在resetForm后又重新给form赋值了
        跟是不是执行resetFields 和el-tab 没有任何关系
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="User" name="first">
            <el-form :model="form" ref="form1">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="form.name" />
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="Config" name="second"
            ><el-form :model="form" ref="form2">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="form.name" />
              </el-form-item> </el-form
          ></el-tab-pane>
        </el-tabs>

        <button @click="resetForm" type="button">重置</button>
        <el-form :model="form" ref="form3" v-if="flag">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-form>

        不过 formRef.value.resetFields()记录的初始值是 onMounted前的初始值
        如果这个值在onMounted前被修改了 那么初始值也会变
        这个初始值不会因为后续再重新给form的某个属性赋值 而被更改
        因为他就是初始值
      </fieldset>
      <fieldset>
        <legend>表格合并</legend>
        element的form与naiveui的表格合并比起来后者更简单
        因为后者只需要声明哪些需要合并 而前者还需要声明哪些不需要合并
        从原生表格合并 看el表格合并 原生的表格合并中 如果表格td
        需要rowspan或者colspan合并了 那么被合并的td 就不要写了
        否则会造成布局变乱 在原生table里 rowspan和colspan 设置0是无效的 最低是1
        <table border>
          <thead>
            <tr>
              <th>姓名</th>
              <th>任务1</th>
              <th>任务2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="zs">张三</td>
              <td colspan="0">抽烟</td>
              <td>喝酒</td>
              <td>烫头</td>
            </tr>
            <tr>
              <td rowspan="2">李四</td>
              <td colspan="3">抽烟</td>
              <!-- <td colspan="1">喝酒</td>
              <td colspan="1">烫头</td> -->
            </tr>
            <tr>
              <!-- <td>王五</td> -->
              <td colspan="1">抽烟</td>
              <td colspan="1">喝酒</td>
              <td colspan="1">烫头</td>
            </tr>
          </tbody>
        </table>

        而在el里 除了需要声明需要合并的单元格 还需要声明 不需要合并的单元格
        rowspan和colspan用1 表示 而合并后需要隐藏的单元格 则使用 0 0 表示
        这一点和原生表格合并不一样 因为0在原生表格里没有意义（火狐除外）
        vue中封装组件想要控制合并的话 我想td得需要v-if去动态渲染了
        后面可以自己封装一个可以合并单元格得table组件。
      </fieldset>

      <fieldset>
        <legend>el-select change触发时机</legend>
        <el-select
          v-model="value"
          @change="changeM"
          class="m-2"
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </fieldset>

      <fieldset>
        <legend>el-tree 数据更新后的默认选中</legend>
        <p>highlight-current 让树选中带高亮</p>
        <p>current-node-key+node-key 让树默认带高亮节点</p>
        <p>
          tree的data如果重新赋值前修改了current-node-key的值 不会生效 虽然值变了
          但选中还是之前的选中dom样式 并且后面再修改为相同的值也不会生效
          正确做法是赋值后 等下一次渲染再赋值 就可以了
          https://www.jianshu.com/p/d3dfb3b2ad51
          https://blog.csdn.net/sun2331/article/details/109855521
          每次list数据更新 如果想让选中某个节点都要重新设置
          这个下一次渲染最好放在nexttick里而不要放在计时器里 计时器会有闪现
          而nexttick是同步的因为nexttick执行时间dom还没有渲染
        </p>
        <p>
          正常去切换currentNodeKey是会生效的
          但如果currentNodeKey和data同时变化则不会生效了
          正确做法是currentNodeKey变化要在data赋值后面的微任务或者宏任务内
        </p>
        <p>这只是结论 至于为什么会有这种清空 还需要去element得源码中查看</p>
        <el-tree
          style="max-width: 600px"
          :data="data"
          :current-node-key="currentNodeKey"
          :default-expanded-keys="keys"
          highlight-current
          :props="{
            children: 'children',
            label: 'label'
          }"
          accordion
          node-key="id"
          @node-expand="handleExpand"
          @node-click="handleClick"
        />
      </fieldset>

      <fieldset>
        <legend>dialog的form 表单重置</legend>
        <p>
          如果form是放在dialog里的 那么初始值以dialog创建的时候
          也就是open值改变时的值为准 重置方法后续重置的也是那时候的值
        </p>
        <el-dialog v-model="open">
          <el-form :model="formG" ref="formRef">
            <el-form-item label="活动名称" prop="name">
              <el-input type="text" v-model="formG.name"></el-input>
            </el-form-item>
            <el-form-item label="活动名称2" prop="name2">
              <el-input type="text" v-model="formG.name2"></el-input>
            </el-form-item>
          </el-form>

          <el-button @click="formRef.resetFields()">重置</el-button>
        </el-dialog>

        <el-button @click="openD">打开</el-button>
      </fieldset>
      <fieldset>
        <legend>el-form 的终极重置机制</legend>
        <p>表单如果想要resetFields生效和 表单校验生效prop必不可少</p>
        <p>
          form会记录它创建时 beforeMounted时的值 作为初始值
          因此只要在此之前修改的值都会作为初始值。
        </p>
        <p>
          因此如果我们做dialog嵌套form的时候一定要注意 如果dialog打开时
          我们在给form赋值时 执行了dialog打开 那么form会记录这个值
          后续如果不手动清空的话使用resetfileds会还原初始值
        </p>
        <el-form ref="formR" :model="f" v-if="s">
          <el-form-item prop="name">
            <el-input v-model="f.name"></el-input>
          </el-form-item>
        </el-form>

        <el-button @click="$refs.formR.resetFields()">reset</el-button>
        <el-button @click="sShow">出来吧 弹框</el-button>
      </fieldset>
      <fieldset>
        <legend>el-table current-row-key 切换</legend>
        <p>
          current-row-key是会让高亮行切换的 但是不知道为什么我们的项目里就不行
          后面再研究吧
        </p>
        <el-table
          :data="tableData1.data"
          table-layout="fixed"
          v-model:current-row-key="a"
          row-key="date"
          highlight-current-row
        >
          <el-table-column prop="date" label="Date" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </fieldset>

      <fieldset>
        <legend>el-cascader级联选择器</legend>

        <el-cascader
          :options="optionsCascader"
          :props="{ checkStrictly: true }"
        ></el-cascader>
      </fieldset>

      <fieldset>
        <legend>treeselect选择器 多选</legend>

        <el-dialog v-model="ds" append-to-body>
          <el-form :model="formT" :rules="rules">
            <el-form-item label="选择" prop="select">
              <el-tree-select
                v-model="formT.select"
                :data="dataTree"
                multiple
                style="width: 240px"
              />
            </el-form-item>
          </el-form>
        </el-dialog>

        <el-button @click="cf">展示树</el-button>
      </fieldset>

      <fieldset>
        <legend>测试vif false的内容还会解析吗</legend>
        <p>
          v-if的内容 只有当 v-if为true时才会解析执行 包括自定义属性 因为v-if
          render的时候是通过三元表达式分支执行的
        </p>
        <div v-if="boolean" :a="a.b.cc">
          {{ a.b.cc }}
        </div>
      </fieldset>

      <fieldset>
        <legend>.prevent与preventDefault</legend>
        <!-- 阻止跳转默认 -->
        <a href="www.baidu.com" @click.prevent>百度</a>
        <!-- 这个不生效 其他两个生效 -->
        <a href="www.baidu.com" @click="() => false">百度</a>
        <a
          href="www.baidu.com"
          @click="
            () => {
              return false
            }
          "
          >百度</a
        >
        <a href="www.baidu.com" @click="(e) => e.preventDefault()">百度</a>

        <form action="" @submit="handleSubmit">
          <input type="text" />
        </form>
        <!-- 内联事件 最终转换为(e)=> 而直接写事件名 最终转换的也是(e)=> 也就是说无论vue的事件是如何定义的 最终都要多包一层 而不是直接通过onxxx绑定的  最有可能的还是addEventListener 因为如果是onxxx 会出现事件覆盖 这里没有  -->
        <input
          type="text"
          @change="handleSubmit"
          ref="ipt"
          id="ipt"
          @input="console.log(1)"
        />

        <p>
          @change 和 onchange可以同时 触发 也就证明了 @change不是简简单单的
          onchange的另一种写法 又因为removeEventListener 没有移除事件
          那也排除了addEventListener绑定事件
        </p>

        getEventListeners 谷歌控制台提供的获取元素所有事件的方法

        <p>
          直接写在方法内部得代码 最终会作为事件内容 放在函数里
          也就是listener.value 如果是用的setup里定义得方法 listener.value
          直接就是那个函数 如果写函数执行 则和直接写代码一样
          会包裹到函数里执行listener.value是(e)=> setup.事件()
        </p>
        <event-vue
          @click="console.log(1)"
          id="even"
          @change="console.log(2)"
          @i="handleClick()"
        />

        vue2中事件处理
        https://blog.csdn.net/m0_52711377/article/details/127821080
        vue3中事件处理 https://juejin.cn/post/7206576861051584573
        vue中对事件的处理 只需要绑定一次addeventListener 然后事件更新是通过修改
        invoker的value引用的 因此性能很好 与传统的add 与removelistener相比
        不过这里暂时不理解为什么要做这个测试 vue的事件不也是只绑定一次吗
        https://cloud.tencent.com.cn/developer/article/2021177 Vuejs 设计与实现
        —— 渲染器核心：挂载与更新
        https://blog.csdn.net/m0_64572085/article/details/129228019 vue
        数据变化更新视图原理之 vdom（虚拟dom）、vnode（虚拟节点）、
        diff算法、为什么不能用index作为key? 渲染器的好帮手 VNode
        https://zhuanlan.zhihu.com/p/632190953 vdom 是虚拟dom树 vnode是树的节点
        这一点和真实dom和node关系是一致的
        <!-- arrayMethods[count] -->

        <!-- 据我测试 组件的事件都是一次绑定的 暂时没有看到事件会切换的场景阿 那为什么vue还要用invoker来调用事件呢 难道仅仅是为了移除时好移除？ 这个以后有机会再研究吧 -->
        <button id="btn" type="button" @click="count === 1 ? event1 : event2">
          按钮
        </button>
      </fieldset>

      <fieldset>
        <legend>插槽 插槽默认值测试</legend>
        <!-- 插槽的默认值是插槽没使用或者使用了 但值是空的情况下 显示默认值 -->
        <slot-test-v2>{{ k.age }}</slot-test-v2>
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
