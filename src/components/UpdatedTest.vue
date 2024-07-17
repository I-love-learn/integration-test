<script setup>
const props = defineProps({
  a: Number
})
</script>

<template>
  <div>
    {{ a }}
    <slot></slot>
  </div>
</template>
