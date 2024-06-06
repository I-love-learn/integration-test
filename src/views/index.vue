<script setup>
import router from "@/router"
import { ElMessage } from "element-plus"

function jump(address) {
  ElMessage.success("error")
  router.push(address)
}
</script>

<template>
  <el-row class="mb-4">
    <el-button type="primary" @click="jump('/test')">测试</el-button>
    <el-button type="primary" @click="jump('/autoimport')"
      >测试autoimport</el-button
    >
    <el-button
      type="primary"
      @click="jump({ path: '/test', query: { a: 1, b: 2 } })"
      >测试对象路由</el-button
    >
    <el-button type="primary" @click="jump({ path: '/upload' })"
      >新upload上传</el-button
    >
    <el-button type="primary" @click="jump({ path: '/path1/path2' })"
      >定义多级路由</el-button
    >
    <!-- <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button> -->
  </el-row>
</template>
