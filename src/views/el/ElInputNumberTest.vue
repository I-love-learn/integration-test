<script setup>
const value = ref(0)
const min = ref(1)
const max = ref(10)
// min max值动态改变不会触发value自动更新  而会在我们点击+ -按钮时或者手动修改value的值才会触发 也就是说每次value改变 就像watch一样 会自动去执行max min的校验
setTimeout(() => {
  min.value = 5
  setTimeout(() => {
    value.value = 3
  }, 50)
}, 3000)
</script>

<template>
  <div>
    <el-input-number
      v-model="value"
      :min="min"
      :max="max"
      label="描述文字"
    ></el-input-number>
  </div>
</template>

<style></style>
