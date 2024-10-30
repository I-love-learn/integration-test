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
      trigger: "blur",
      validator: (a, v) => {
        console.log(v)
      }
    }
  ],
  starRating: [
    {
      required: true,
      message: "请选择评分",
      trigger: ["blur", "change"],
      //
      min: 1
    }
  ],
  eat: [
    {
      required: true,
      message: "请输入吃饭",
      trigger: ["blur"],
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
      required: true,
      min: 10,
      max: 999,
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
  ]
})

const abc = ref(123)

const open = ref(false)
const formRef = ref()
function submit() {
  formRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success("验证成功")
    } else {
      ElMessage.error("验证失败")
    }
  })
}

const formT = ref({
  detail: ""
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
  </div>

  <el-dialog v-model="open2">
    <el-form :model="formT" :rules="rules" ref="dg">
      <el-form-item label="吃饭" prop="eat">
        <el-input v-model="formT.eat" />
      </el-form-item>

      <el-form-item label="饮料" prop="drink">
        <!-- radio-group的v-model 一上来必须有初始值 否则所有的el-radio会选中 -->
        <el-radio-group v-model="formT.drink">
          <el-radio
            v-for="(item, index) in [
              { name: 'water', id: 1 },
              { name: 'coffee', id: 2 }
            ]"
            :key="index"
            :value="item.id"
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

      <el-form-item label="是否自费" prop="isPay">
        <el-switch v-model="formT.isPay"> </el-switch>
      </el-form-item>

      <el-form-item label="花多少钱" prop="pay">
        <el-input v-model="formT.pay"> </el-input>
      </el-form-item>

      <el-form-item label="活动星级" prop="starRating">
        <el-rate v-model="formT.starRating" />
      </el-form-item>

      <el-form-item label="活动感受" prop="detail">
        <el-input type="textarea" v-model="formT.detail"> </el-input>
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
