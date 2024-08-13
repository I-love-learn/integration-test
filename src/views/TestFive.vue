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
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
