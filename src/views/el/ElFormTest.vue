<script setup>
const form = ref(null)

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
  ]
})
</script>
<!-- 动态增删表单  把rules绑定在 el-form-item上 单独写在form上不生效 -->
<template>
  <!-- :rules="[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]" -->
  <div>
    <el-form :model="form" label-width="80px" :rules="rules">
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

      <el-form-item-item
        v-model="form[i]"
        v-for="(item, i) in form"
        :index="i"
      />
    </el-form>

    <el-button
      @click="
        form = new Array(1, 2, 3).map(() => {
          return {}
        })
      "
      >渲染form</el-button
    >
  </div>
</template>

<style lang="scss" scoped></style>
