<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        a: 1,
        b: 2
      }
    }
  }
})
const obj = reactive({
  data: { a: 1, b: 2 }
})

console.log(isReactive(obj))
console.log(isReactive(obj.data))
console.log(isReactive(props))
console.log(isReactive(props.data))
</script>

<template>
  <div></div>
</template>

<style scoped lang="scss"></style>
