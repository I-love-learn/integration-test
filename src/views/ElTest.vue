<script setup>
function handleClick(path) {
  router.push(path)
}
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
    </div>

    <div>
      <router-view />
    </div>
  </div>
</template>
