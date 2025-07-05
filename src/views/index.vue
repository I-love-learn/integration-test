<script setup>
import router from "@/router"
import { parseDict, count as COUNT } from "@/utils/dict"
import { ElMessage } from "element-plus"
import { bb } from "../utils/other.js"
parseDict("1", "sex")
http("/api/test22")
console.log("COUNT", COUNT)
function jump(address) {
  ElMessage.success("error")
  router.push(address)
}
const color = "red12"
bb()
console.log("color111", color)
const count = ref(5)
// 当前模块hmr  这里可以获取已更新的模块内容 进行一些处理
if (import.meta.hot) {
  // import.meta.hot.accept((newModule) => {
  //   if (newModule) {
  //     console.log("newModule", newModule)
  //     // newModule is undefined when SyntaxError happened
  //     console.log("updated: count is now ", newModule.count)
  //   }
  // })

  import.meta.hot.accept("../utils/dict.ts", (newFoo) => {
    // 回调函数接收到更新后的'./foo.js' 模块
    console.log("newFoo", newFoo)
  })

  import.meta.hot.accept("../utils/other.js", (newFoo) => {
    // 回调函数接收到更新后的'./foo.js' 模块
    console.log("newFoo", newFoo)
    newFoo.bb()
  })
}
</script>

<template>
  <el-row class="mb-4">
    {{ COUNT }} {{ count }}
    <el-button type="primary" @click="jump('/index')">首页</el-button>
    <el-button type="primary" @click="jump('/test')">测试</el-button>
    <el-button type="primary" @click="jump('/test2')">测试2</el-button>
    <el-button type="primary" @click="jump('/test3')">测试3</el-button>
    <el-button type="primary" @click="jump('/test4')">测试4</el-button>
    <el-button type="primary" @click="jump('/test5')">测试5</el-button>
    <el-button type="primary" @click="jump('/el-test')"
      >测试element组件</el-button
    >
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
    <el-button type="primary" @click="jump({ path: '/hooks' })"
      >测试hooks无限调用问题</el-button
    >
    <el-button type="primary" @click="jump({ path: '/updated' })"
      >测试update声明周期执行时机</el-button
    >

    <el-button type="primary" @click="jump({ path: '/echarts' })"
      >echarts demo</el-button
    >
    <el-button type="primary" @click="jump({ path: '/tableMerge' })"
      >测试表格合并</el-button
    >
    <!-- <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button> -->
  </el-row>

  <div>
    <div class="tt">
      <div class="tb">12</div>
    </div>
    <!-- <router-view></router-view> -->
    <el-radio></el-radio>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.tt {
  background-color: v-bind(color);
}
.tb {
  background-color: v-bind(color);
}
</style>
