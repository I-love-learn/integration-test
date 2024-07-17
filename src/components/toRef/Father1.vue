<script setup>
const props = defineProps({
  data: Object
})

const d = props.data
// props.data = 1  会报警高说readonly

function edit() {
  props.data = 12

  console.log(props)
}
setInterval(() => {
  console.log(props.data)
}, 1000)

const e = toRef(props, "data")
// toRef的作用是让解构的属性变成响应式 而不是可以直接修改props的值
// console.log((e.value = 11))
</script>

<template>
  <div>
    {{ d }}
    <!-- 想起来了属性可以赋值 但是不能直接修改props -->
    <button @click="edit">修改data</button>
    <!-- template里修改则不会报警告 响应式也不生效 虽然值确实被改了 而script里直接修改 会不生效-->
    <button @click="data = 11">修改data</button>
    <!-- <Children v-model:data="d" /> -->
    // input value如果是对象 则会转成[object:Object] 原生就是这样的
    <!-- <input type="text" :value="data" /> -->
  </div>
</template>
