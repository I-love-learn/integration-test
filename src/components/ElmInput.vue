<script setup>
const emit = defineEmits(['blur'])
function test($event) {
  emit('blur',$event)
}

const test1 = (event) => {
  console.log(event)
}

const ipt = ref(null)

onMounted(() => {
  // blur和focus事件 都属于focus 事件  并且 我们原生触发事件的方式 例如.focus()触发事件 是会触发 @focus事件的
  ipt.value.focus()
})
</script>

<template>
  <div class="warp">
    <input type="text" @blur="test($event)" @focus="test1($event)" ref="ipt">
  </div>
</template>

<style scoped>
.warp {
  padding: 100px;
  background-color: cadetblue;
}
</style>