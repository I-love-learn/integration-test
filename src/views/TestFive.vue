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
  // value.value = target.value
}

const input = ref()
onMounted(() => {
  console.log(input.value.input)

  input.value.input.addEventListener("input", function () {
    const target = event.target
    target.value = target.value.replace(/\D/g, "")
    console.log(target.value)
  })
})
</script>

<template>
  <div>
    <form>
      <fieldset>
        <legend>v-model 与input顺序</legend>
        <t-input v-model="value" @input="testInput1" />
        <el-input v-model="value" @input="testInput1" ref="input" />
        <input type="text" v-model="value" @input="testInput1" />
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
