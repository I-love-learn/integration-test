<script setup>

const fileList = reactive([]);
const fileList2 = reactive({
  data: [],
});

function changeFile() {
  setTimeout(() => {
    fileList.pop()
  }, 1000);
}

function changeFile2() {
  setTimeout(() => {
    // fileList2.data.pop()  clearFiles() 会清空fileList数组
    upload2.value.clearFiles()
  }, 1000);
}
const upload2 = ref(null);
// 经过我测试 upload组件 的file-list 绑定reactive([])的话 删除元素不会触发页面更新 并且vue tools还检测不到  但如果 file-list绑定reactive({data:[]})的话 删除元素会触发页面更新
</script>

<template>
  <div>
    <el-upload :file-list="fileList" :auto-upload="false" show-file-list list-type="picture-card" @change="changeFile"></el-upload>
    <el-upload :file-list="fileList2.data" :auto-upload="false" show-file-list list-type="picture-card"  ref="upload2" @change="changeFile2"></el-upload>
  </div>
</template>

<style lang="scss" scoped>
</style>