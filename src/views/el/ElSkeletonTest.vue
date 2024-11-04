<script setup></script>

<template>
  <el-skeleton animated>
    <template #template>
      <el-skeleton-item variant="text" style="width: 500px" />
      <el-skeleton-item variant="h1" style="width: 500px" />
    </template>

    <template #default>
      <div>12323213</div>
      <h1>1516165</h1>
    </template>
  </el-skeleton>
  <!-- 不写loading 默认不加载真实dom -->
  <el-skeleton><template #default>123</template> </el-skeleton>
</template>
