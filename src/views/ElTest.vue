<script setup>
// import tl from "@/views/NoRouterImport.vue"
function handleClick(path) {
  router.push(path)
}
// 同步导入组件渲染
const tl = (await import("@/views/NoRouterImport.vue")).default
// console.log(tl)
</script>

<template>
  <div style="display: flex">
    <div style="width: 30%">
      <!-- vue-router to如果不写/ 那么默认 跳转的路由会替换掉当前路由的最后一级路由 -->
      <router-link to="/el-test/el-tree">
        <el-button type="primary">el-tree</el-button>
      </router-link>

      <router-link to="/el-test/el-table">
        <el-button type="primary">el-table</el-button>
      </router-link>

      <router-link to="/el-test/el-form">
        <el-button type="primary">el-form</el-button>
      </router-link>
      <router-link to="/el-test/el-skeleton">
        <el-button type="primary">el-skeleton</el-button>
      </router-link>
      <router-link to="/el-test/el-input-number">
        <el-button type="primary">el-input-number</el-button>
      </router-link>
    </div>

    <div>
      <tl />
      <router-view />
    </div>
  </div>
</template>
