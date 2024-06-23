<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const message = ref("Hello, Vue 3!")

function changeMessage() {
  message.value = "Message changed!"
}
// 正常是会触发 updated与beforeUpdate的 state改变的时候
onUpdated(() => {
  console.log("Component updated!")
})
onBeforeUpdate(() => {
  console.log("Component before update!")
})
</script>

<style scoped>
h1 {
  color: red;
}
</style>
