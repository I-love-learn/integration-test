<script setup>
const tableData = ref([
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄"
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄"
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄"
  }
])
// el-table无法合并一行凭空出现的数据 除非自己给数据添加一条新数据在数组开头  naiveui同理 但是naive有render要 这一点比element灵活
</script>

<template>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址" width="180"></el-table-column>
  </el-table>
</template>
