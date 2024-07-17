<script setup>
const props = defineProps({
  data: Object
})
console.log(props.data)
const emits = defineEmits(["update:data"])
function input(e) {
  emits("update:data", e.target.value)
}
</script>

<template>
  <div style="border: 1px solid red">
    <div>{{ data.a }}</div>
    {{ data }}
    <input type="text" :value="data" @input="input" />
  </div>
</template>
