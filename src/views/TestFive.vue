<script setup>
const value = ref("")
watch(value, (n, o) => {
  console.log(n, o)
})
// 确实 watch先触发 然后才是 input

// 自己封装的组件 如果既有父子 watch 又有v-model 触发顺序是 子input 然后父update：modelValue 然后父watch 然后子watch
// el-input 也遵循这个规则
// 如果是 原生input 触发顺序是 watch 然后input事件 可能和组件传值有关？
function testInput1() {
  console.log(value.value)

  const target = event.target
  target.value = target.value.replace(/\D/, "")
  console.log(target.value)
}
</script>

<template>
  <div>
    <form>
      <fieldset>
        <legend>v-model 与input顺序</legend>
        <t-input v-model="value" @input="testInput1" />
        <el-input v-model="value" @input="testInput1" />
        <input type="text" v-model="value" @input="testInput1" />
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
