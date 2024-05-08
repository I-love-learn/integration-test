<script setup>
const emit = defineEmits(['blur', 'click', 'change','click2'])
function test($event) {
  emit('blur',$event)
}

const test1 = (event) => {
  console.log(event)
}
const value = ref('')
watchEffect(() => {
  emit('change',value.value)
})

const a = ref(1)
watch(a, (a) => {
  emit('click2',a)
})
setInterval(() => {
  emit('click2',a)
}, 1000);
const ipt = ref(null)

onMounted(() => {
  // blur和focus事件 都属于focus 事件  并且 我们原生触发事件的方式 例如.focus()触发事件 是会触发 @focus事件的
  ipt.value.focus()
})
</script>

<template>
  <div class="warp" @click="$emit('click','click')">
    {{ a }}
    <input v-model="value" type="text" @blur="test($event)" @focus="test1($event)" ref="ipt">
    <button @click="a++">a++</button>
  </div>
</template>

<style scoped>
.warp {
  padding: 100px;
  background-color: cadetblue;
}
</style>