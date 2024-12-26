<script setup>
import { ref } from "vue"

const a = ref("来了来了")

const b = ref("来了来了2")
</script>

<template>
  <h1>这是一个组件</h1>

  <h2>{{ a }}</h2>
  <!-- 
  <h3>渲染啊xd</h3>

  <h4>{{ b }}</h4> -->
</template>

<style></style>
