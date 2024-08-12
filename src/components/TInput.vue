<script setup>
const props = defineProps({
  modelValue: String
})

const emit = defineEmits(["update:modelValue", "input"])
// 知道怎么回事了 再vue里  v-model 是一个语法糖 本质上就是 input的时候 把e.target.value传给update:modelValue 然后更新状态 而咱们的input事件触发时机是要晚于 update:modelValue的 导致v-model绑定的值 已经是输入的值了 但后面input咱们才处理e.target.value 让他重新赋值。 因此需要手动触发一次 input事件更新值

watch(
  () => props.modelValue,
  (n, o) => {
    console.log(n, o)
  }
)
const testInput1 = (e) => {
  console.log(e.target.value) // 11a
  setTimeout(() => {
    console.log(0)
  }, 0)
  Promise.resolve().then(() => {
    console.log(1)
    // 可以看出父子组件的watch触发顺序 是在微任务中的  大概可以看出watch本质也是一个异步队列 其执行时估计也是在Promise.resolve().then里的

    // 而原生v-model watch执行早于input事件 可能与组件传值不同吧
  })
  emit("update:modelValue", e.target.value)
  // 为什么这里要e.target.value 而不让父组件的事件中直接用 modelValue呢 这是因为如果 emit("update:modelValue")在 emit("input")后触发的话 会导致父组件传的值还没有更新 先触发了input事件
  emit("input", e.target.value)
}
// 正则加g的好处是  英文状态下输入a 会匹配a 然后replace没问题 中文输入时 按住a 不放手只会replace第一次 后面的虽然也会触发input 但是没有清空 不知道为啥
// 明晚继续研究为什么 el-input 会回显值 而其它两个不会
</script>

<template>
  <div>
    <input type="text" @input="testInput1" />
  </div>
</template>
