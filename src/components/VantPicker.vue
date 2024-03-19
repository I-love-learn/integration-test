<script setup>
const columns = reactive([
  ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  ['上海', '江苏', '浙江', '安徽', '福建'],
  ['武汉', '北京', '天津', '河北', '山西'],
  ['重庆', '四川', '贵州', '云南', '西藏'],
  ['辽宁', '吉林', '黑龙江', '内蒙古', '广西']
  )
</script>

<template>
  <van-picker title="标题" :columns="columns" />
</template>

<style></style>