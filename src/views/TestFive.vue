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
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
