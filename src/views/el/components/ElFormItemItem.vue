<script setup>
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
      // validator: (a, v) => {
      //   console.log(v)
      // }
    }
  ],
  starRating: [
    {
      required: true,
      message: "请选择评分",
      trigger: "change",
      validator(a, v, cb) {
        console.log(v)
        if (v < 1) {
          cb(new Error("请选择评分"))
        } else {
          cb()
        }
      }
    }
  ]
})

const form = defineModel()
console.log(form)
const props = defineProps({
  i: Number,
  abc: Number
})
// 不触发updated  原因是插槽不触发当前的updated
console.log(form)
// const emit = defineEmits(["update"])
watch(
  form,
  (newvalue) => {
    console.log(newvalue)
    // emit("update", newvalue)
  },
  {
    deep: true
  }
)
onUpdated(() => {
  console.log("更新了")
})
</script>

<template>
  <div>
    {{ form }}
    <el-form-item label="活动名称" :rules="rules.name" :prop="`${i}.name`">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item
      label="活动名称"
      :rules="rules.starRating"
      :prop="`${i}.starRating`"
    >
      <el-rate v-model="form.starRating" />
    </el-form-item>
    <el-form-item label="活动区域" :prop="`${i}.region`">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="详细介绍" :rules="rules.detail" :prop="`${i}.detail`">
      <!-- 不知道咋回事正常 textarea会触发 blur和 change的rules校验 但公司项目只触发change -->
      <el-input
        v-model="form.detail"
        type="textarea"
        placeholder="展开说说您对商品的想法吧"
        style="width: 456px; height: 80px"
        maxlength="200"
        show-word-limit
        clearable
        resize="none"
      ></el-input>
    </el-form-item>
  </div>
</template>

<style></style>
