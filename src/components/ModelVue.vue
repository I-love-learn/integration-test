<script setup>
const props = defineProps({
  modelValue: Number
})
onUpdated(() => {
  console.log("组件更新了")
})
const emits = defineEmits(["update:modelValue"])

// watch(props, () => {
//   // 对象会触发 父更新 子组件也会更新 然后循环调用
//   emits("update:modelValue", {})
// })

const a = ref(1)
setTimeout(() => {
  a.value = 1
}, 2000)
watch(a, () => {
  // watch修改 被watch的数据不会再次触发 watch
  a.value++
  console.log(a)
})
</script>

<template>
  <div>
    {{ modelValue }}
    <button @click="emits('update:modelValue', 4)">修改props</button>
  </div>
</template>
