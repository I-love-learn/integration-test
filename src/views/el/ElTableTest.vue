<script setup>
const originData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "张三",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tags: ["nice", "developer"]
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "李四",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tags: ["nice", "developer"]
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "王五",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tags: ["nice", "developer"]
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "赵六",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tags: ["nice", "developer"]
  },
  {
    id: 5,
    date: "2016-05-08",
    name: "孙七",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tags: ["nice", "developer"]
  },
  {
    id: 6,
    date: "2016-05-06",
    name: "刘八",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tags: ["nice", "developer"]
  },
  {
    id: 7,
    date: "2016-05-07",
    name: "陈九",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tags: ["nice", "developer"]
  }
]

const tableData = reactive({ data: originData })
const currentRowKey = ref(2)

function randomKey() {
  const count = Math.floor(Math.random() * 7) + 1
  currentRowKey.value = count
  expandRowKeys.value = [count]
}

function random() {
  const count = Math.floor(Math.random() * 8)
  tableData.data = originData.filter((item) => {
    return item.id > count
  })
}

// table 的current-row-key 改变后数据切换的话 也会以当前key为准而不是mounte的初始key  如果切换的数据没有找到当前key 后续数据切换即便有当前key也不会高亮了  手动选择高亮行不会影响current-row-key的值 但是后续数据切换 高亮还是以手动选择的key为准 也就是说current-row-key 无论是手动选择改变还是修改数据改变 最终只会修改组件内部的那个高亮值 但是那个高亮值不会反过来影响到current-row-key的值  不是双向的 而是单向数据流

const expandRowKeys = ref([2])

// expandRowKeys的话手动修改的 数据切换不会记录 但通过数据修改的会记录下来 后续数据切换 key会使用当前  而不会用mounte时的key 这一点要和current-row-key做区分 后者手动切换 也会记录
</script>

<template>
  <el-table
    :data="tableData.data"
    style="width: 100%"
    highlight-current-row
    :current-row-key="currentRowKey"
    row-key="id"
    :expand-row-keys="expandRowKeys"
  >
    <el-table-column type="expand">
      <template #default="props">
        <div>
          {{ props.row.tags }}
        </div>
      </template>
    </el-table-column>
    <el-table-column type="index" width="50" label="id" />
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="320" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
  </el-table>

  <el-button @click="random">随机筛选表格</el-button>
  <el-button @click="randomKey">随机currentKey</el-button>
</template>

<style></style>
