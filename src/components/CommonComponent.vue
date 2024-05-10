<script setup>

const props = defineProps(['title'])
const emit = defineEmits()
</script>

<template>
  <div>
    <h1>
      {{ props.title }}
    </h1>
    <button @click.stop="emit('click',123)">按钮</button>
  </div>
</template>

<style>
</style>