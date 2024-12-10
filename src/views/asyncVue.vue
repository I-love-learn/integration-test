<script setup>
const msg = await Promise.resolve("Hello World")
const count = await Promise.resolve("Hello World")
</script>

<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ count }}</div>
  </div>
</template>
