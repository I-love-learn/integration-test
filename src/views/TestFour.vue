<script setup>
const count = ref(1)
const count2 = ref(2)
// 在计算属性中修改属性 不会重新计算 V3 和v2一样
// 但如果后续外部修改了 computed的依赖 会导致计算属性重新计算 并且由于内部也修改了依赖 会导致计算属性会额外再执行一次
nextTick(() => {
  console.log("tick执行")
})
Promise.resolve()
  .then(() => {
    console.log("微任务执行") // 他们的执行都在微任务之前
  })
  .then(() => {
    console.log("微任务执行2")
  })
nextTick(() => {
  console.log("tick执行")
})
// v3的tick执行在微任务之后
const comp = computed(
  () => {
    console.log("我被读取")
    count.value++
    return count.value + count2.value
  },
  {
    onTrack(effect) {
      console.log("我被跟踪了", effect)
    },
    onTrigger(effect) {
      console.log("我被触发了", effect)
    }
  }
)
watch(count, () => {
  console.log("count被修改了") // v3 watch执行在计算属性之后
})

count.value = 4
onMounted(() => {
  count.value = 8
})

Promise.resolve().then(() => {
  console.log("微任务执行1") // 他们的执行都在微任务之前
})

nextTick(() => {
  console.log("tick执行3")
})

// nexttick的执行时机在第一轮微任务队列后 第二轮微任务队列前

const aaa = ref(1)
// 计算属性互相之间影响？？？好难啊
const aaCom = computed(() => {
  console.log("计算属性------")
  aaa.value++
  return aaa.value
})
</script>

<template>
  <p>{{ aaCom }}</p>
  <p>{{ comp }}</p>
  <div></div>
</template>

<style></style>
