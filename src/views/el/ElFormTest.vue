<script setup>
const form = ref({ starRating: 0 })

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  detail: [
    {
      required: true,
      message: "请输入活动详细介绍",
      trigger: "blur"
      // validator 会影响 required 校验 并且如果validator 里没有callback error执行 则不会执行校验失败  并且会影响后续 的rules校验 从本校验往后的表单元素全部受影响
      // validator: (a, v) => {
      //   console.log(v)
      // }
    }
  ],
  starRating: [
    {
      required: true,
      type: "number",
      message: "请选择评分",
      trigger: ["blur", "change"],
      //
      min: 4,
      validator: (a, v) => {
        console.log(v)
      }
    }
  ],
  eat: [
    {
      required: true,
      message: "请输入吃饭",
      trigger: ["blur", "change"],
      //
      min: 1
    }
  ],
  drink: [
    {
      required: true,
      message: "请输入饮料",
      trigger: ["change"]
    }
  ],
  fruit: [
    {
      required: true,
      message: "请输入水果",
      trigger: ["change"]
    }
  ],
  isPay: [
    {
      required: true,
      message: "请选择是否支付",
      trigger: ["change"]
    }
  ],
  pay: [
    {
      // 想要min和max生效 必须声明type是number  v-model可不加.number修饰符
      required: true,
      min: 10,
      max: 999,
      type: "number",
      trigger: ["blur"],
      message: "请输入正确金额"
    }
  ],
  time: [
    {
      required: true,
      type: "date",
      trigger: ["change", "blur"],
      message: "请选择时间"
    }
  ],
  jilian: [
    {
      required: true,
      message: "请选择",
      trigger: ["change", "blur"]
    }
  ]
})

const abc = ref(123)

const open = ref(false)
const formRef = ref()
function submit() {
  formRef.value.resetFields()
  // formRef.value.validate((valid) => {
  //   if (valid) {
  //     ElMessage.success("验证成功")
  //   } else {
  //     ElMessage.error("验证失败")
  //   }
  // })
}

const formT = ref({
  // eat: "",
  // drink: "",
  // fruit: "",
  // detail: "",
  // pay: "",
  // isPay: "",
  // time: "",
  // starRating: ""
})

const open2 = ref(false)
const dg = ref()
function sb() {
  dg.value.validate((valid) => {
    if (valid) {
      ElMessage.success("验证成功")
    } else {
      ElMessage.error("验证失败")
    }
  })
}
// 获取详情
function detail() {
  // 为什么要先 让dialog打开再给数据赋值呢  这是因为el-form会把 onMounted前的值作为初始值 如果不错开的话 form会一直认为 赋值后的值是初始值 导致form resetFields() 不执行
  open2.value = true
  nextTick(() => {
    formT.value = {
      eat: "吃的自助餐",
      drink: 1,
      fruit: "apple",
      detail:
        "吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃",
      pay: 100,
      isPay: true,
      time: new Date(), // 可以是Date 可以是数字 字符串
      starRating: 1
    }
  })
}
// 正常的赋值 与 resetFields() 不会触发 数据清空了 rules却校验了  el-radio和select switch的bug  会触发这种bug的情况是  两个表单的ref 一样
function assignment() {
  formT.value = {
    eat: "吃的自助餐",
    drink: 1,
    fruit: "apple",
    detail:
      "吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃吃",
    pay: 100,
    isPay: true,
    time: new Date(), // 可以是Date 可以是数字 字符串
    starRating: 1
  }
}
function reset() {
  console.log(dg.value)
  dg.value.resetFields()
  // nextTick(() => {
  //   dg.value.resetFields()
  // })
}
// change rules的触发时机 就是数据改变时 rules触发 这里的数据改变不止用户操作的 手动修改数据也会触发 这也是为什么咱们两个相同的ref  dialog执行清空的时候 外面的form校验了 这是因为两个公用的同一组数据 清空数据 会导致change执行 从而rules校验

// 但是change事件这种 是用户操作才触发的数据改变不会触发
function edit() {
  formT.value.drink = undefined
  formT.value.isPay = undefined
  formT.value.fruit = undefined
  formT.value.eat = undefined
}
// 组件 重名ref 会覆盖  元素也是 以最后一次为准   v-for 使用ref 是所以v-for的元素  组件也是
onMounted(() => {
  console.log(dg.value)
})

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
</script>
<!-- 动态增删表单  把rules绑定在 el-form-item上 单独写在form上不生效 -->

<template>
  <!-- :rules="[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]" -->
  <div>
    <el-dialog v-model="open">
      <el-form :model="form" label-width="80px" ref="formRef" :rules="rules">
        <el-form-item label="活动名称" prop="starRating">
          <el-rate v-model="form.starRating" />
        </el-form-item>
        <!-- <div v-for="i in form?.length">
        <el-form-item label="活动名称" :prop="`${i}.name`">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :prop="`${i}.region`">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="详细介绍"
          :rules="rules.detail"
          :prop="`${i}.detail`"
        >
          <el-input v-model="form.detail" type="textarea"></el-input>
        </el-form-item>
      </div> -->
        <!-- @update="form[i] = $event" -->
        <el-form-item-item
          :abc="abc"
          v-model="form[i]"
          v-for="(item, i) in form"
          :i="i"
          :key="i"
        />
      </el-form>

      <el-button @click="submit">提交</el-button>
    </el-dialog>
    <el-button
      @click="
        form = new Array(1, 2, 3).map(() => {
          open = true
          return { a: 1 }
        })
      "
      >渲染form</el-button
    >
    <el-button @click="open = true">渲染form</el-button>
    <el-button @click="open2 = true">渲染大form</el-button>
    <el-button @click="detail">渲染大form并赋值</el-button>
    <el-button @click="assignment">给form赋值</el-button>
    <el-button @click="edit">修改radio和select等值</el-button>
    <el-button @click="reset">重置值</el-button>
  </div>

  <div style="margin-top: 20px">
    <el-form :model="formT" :rules="rules" ref="dg">
      <el-form-item label="吃饭" prop="eat">
        <el-input v-model="formT.eat" />
      </el-form-item>

      <el-form-item label="饮料" prop="drink">
        <!-- radio-group的v-model 一上来必须有初始值 否则所有的el-radio会选中 仅仅选中效果 但过不了校验rules 错了问题出在  elementplus 2.6以上才支持value 因此设置了value不生效 没设置label 导致不设置属性 就等于undefined 所以俩都选中 -->
        <!-- 不设置 label 并且 v-model的初始值设置为空字符串或undefined 或者不设置都会导致所有radio选中 -->
        <el-radio-group v-model="formT.drink">
          <el-radio
            v-for="(item, index) in [
              { name: 'water', id: 1 },
              { name: 'coffee', id: 2 }
            ]"
            :key="index"
            :label="item.id"
            >{{ item.name }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="水果" prop="fruit">
        <el-select v-model="formT.fruit">
          <el-option
            v-for="item in ['apple', 'orange']"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动感受" prop="detail">
        <el-input type="textarea" v-model="formT.detail"> </el-input>
      </el-form-item>
      <el-form-item label="是否自费" prop="isPay">
        <el-switch v-model="formT.isPay"> </el-switch>
      </el-form-item>

      <el-form-item label="花多少钱" prop="pay">
        <el-input v-model.number="formT.pay"> </el-input>
      </el-form-item>

      <el-form-item label="活动星级" prop="starRating">
        <el-rate v-model="formT.starRating" />
      </el-form-item>

      <el-form-item label="活动时间" prop="time">
        <el-date-picker
          v-model="formT.time"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>
    </el-form>

    <el-form :model="formT" :rules="rules" ref="dg">
      <el-form-item label="吃饭" prop="eat">
        <el-input v-model="formT.eat" />
      </el-form-item>

      <el-form-item label="饮料" prop="drink">
        <!-- radio-group的v-model 一上来必须有初始值 否则所有的el-radio会选中 仅仅选中效果 但过不了校验rules 错了问题出在  elementplus 2.6以上才支持value 因此设置了value不生效 没设置label 导致不设置属性 就等于undefined 所以俩都选中 -->
        <!-- 不设置 label 并且 v-model的初始值设置为空字符串或undefined 或者不设置都会导致所有radio选中 -->
        <el-radio-group v-model="formT.drink">
          <el-radio
            v-for="(item, index) in [
              { name: 'water', id: 1 },
              { name: 'coffee', id: 2 }
            ]"
            :key="index"
            :label="item.id"
            >{{ item.name }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="水果" prop="fruit">
        <el-select v-model="formT.fruit">
          <el-option
            v-for="item in ['apple', 'orange']"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动感受" prop="detail">
        <el-input type="textarea" v-model="formT.detail"> </el-input>
      </el-form-item>
      <el-form-item label="是否自费" prop="isPay">
        <el-switch v-model="formT.isPay"> </el-switch>
      </el-form-item>

      <el-form-item label="花多少钱" prop="pay">
        <el-input v-model.number="formT.pay"> </el-input>
      </el-form-item>

      <el-form-item label="活动星级" prop="starRating">
        <el-rate v-model.number="formT.starRating" />
      </el-form-item>

      <el-form-item label="活动时间" prop="time">
        <el-date-picker
          v-model="formT.time"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>
    </el-form>

    <!-- <div ref="dg"></div> -->
    <!-- v-for 使用ref 是所以v-for的元素  组件也是 -->
    <!-- <div ref="dg" v-for="item in 4"></div> -->

    <el-radio ref="dg" v-for="item in 4"></el-radio>
  </div>

  <el-dialog v-model="open2" @closed="reset">
    <el-form :model="formT" :rules="rules" ref="dg">
      <el-form-item label="吃饭" prop="eat">
        <el-input v-model="formT.eat" />
      </el-form-item>

      <el-form-item label="饮料" prop="drink">
        <!-- radio-group的v-model 一上来必须有初始值 否则所有的el-radio会选中 仅仅选中效果 但过不了校验rules 错了问题出在  elementplus 2.6以上才支持value 因此设置了value不生效 没设置label 导致不设置属性 就等于undefined 所以俩都选中 -->
        <!-- 不设置 label 并且 v-model的初始值设置为空字符串或undefined 或者不设置都会导致所有radio选中 -->
        <el-radio-group v-model="formT.drink">
          <el-radio
            v-for="(item, index) in [
              { name: 'water', id: 1 },
              { name: 'coffee', id: 2 }
            ]"
            :key="index"
            :label="item.id"
            >{{ item.name }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="水果" prop="fruit">
        <el-select v-model="formT.fruit">
          <el-option
            v-for="item in ['apple', 'orange']"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动感受" prop="detail">
        <el-input type="textarea" v-model="formT.detail"> </el-input>
      </el-form-item>
      <el-form-item label="是否自费" prop="isPay">
        <el-switch v-model="formT.isPay"> </el-switch>
      </el-form-item>

      <el-form-item label="花多少钱" prop="pay">
        <el-input v-model.number="formT.pay"> </el-input>
      </el-form-item>
      <el-form-item label="级联" prop="jilian">
        <el-cascader
          v-model="form.jilian"
          :options="options"
          :props="{
            multiple: true
          }"
        />
      </el-form-item>
      <el-form-item label="活动星级" prop="starRating">
        <el-rate v-model.number="formT.starRating" />
      </el-form-item>

      <el-form-item label="活动时间" prop="time">
        <el-date-picker
          v-model="formT.time"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="open2 = false">取消</el-button>
      <el-button @click="sb">提交</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
