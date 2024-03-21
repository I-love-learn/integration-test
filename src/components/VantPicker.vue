<script setup>
// const columns = reactive(['杭州', '宁波', '温州', '嘉兴', '湖州'])
// columns 的类型必须是数组对象
const columns = reactive([
  {
    text: '杭州',
    value: '杭州',
  },
  {
    text: '宁波',
    value: '宁波',
  },
  {
    text: '温州',
    value: '温州',
  },
  {
    text: '嘉兴',
    value: '嘉兴',
  },
  {
    text: '湖州',
    value: '湖州',
  },
])

const props = defineProps(['a'])
console.log(props);
</script>

<template>
  <van-picker title="标题" :columns="columns" />
</template>

<style></style>