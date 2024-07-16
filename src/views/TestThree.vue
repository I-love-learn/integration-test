<script setup>
const flag = ref(1)

const data = reactive({
  data: {
    a: 1,
    b: 2
  }
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="500px">
        <el-button @click="flag = 1">测试三层组件传参</el-button>
        <el-button @click="flag = 2">测试三层组件传参toRef</el-button>
      </el-aside>
      <el-main>
        <template v-if="flag === 1">
          <div>
            <Father v-model:data="data.data" />
            <button @click="data.data = { a: 10, b: 15 }">修改数据</button>
          </div>
          <!-- 这也是 若依分页组件封装的逻辑 -->
        </template>
        <template v-if="flag === 2">
          <div>
            <Father1 :data="data.data" />
            <button @click="data.data = { a: 10, b: 15 }">修改数据</button>
          </div>
          <!-- 这也是 若依分页组件封装的逻辑 -->
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
.common-layout {
  height: 100%;
  font-size: 16px;
}
</style>
