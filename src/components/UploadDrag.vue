<script setup>
import { VueDraggable } from "vue-draggable-plus"

const list = ref([])
// 上传时 list 上传的图片是object类型 而之前上传的会变成reactive类型
// 就这么简单
// 如果修改状态或者其他 会让它上传时就变成reactive吗
function change(file) {
  file.status = "success"
}
</script>

<template>
  <VueDraggable v-model="list" target=".el-upload-list">
    <el-upload
      :auto-upload="false"
      @on-change="change"
      v-model:file-list="list"
      action=""
      list-type="picture-card"
    ></el-upload>
  </VueDraggable>
</template>
