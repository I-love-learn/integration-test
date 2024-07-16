<script setup>
const props = defineProps({
  data: Object
})
const emit = defineEmits(["update:data"])
// 这里有两种写法 第一种watch监听然后emit触发 第二种计算属性 直接set赋值
const d = computed({
  get() {
    return props.data
  },
  set(value) {
    console.log(value)
    emit("update:data", value)
  }
})
</script>

<template>
  <div>
    <Children v-model:data="d" />
    // input value如果是对象 则会转成[object:Object] 原生就是这样的
    <input type="text" :value="data" />
  </div>
</template>
