<script setup>
import _ from "lodash"
http("api/test3")
const n = 100
console.log(_.round(n, 2).toFixed(2))

console.log(_.round(95, 2))
console.log(_.round(100, 2))
console.log(_.round(100, -2))
console.log(_.round(100, 3))
</script>

<template>
  <div>
    <el-icon icon="el-icon-s-home" />
    <RouterView />
  </div>
</template>

<style></style>
