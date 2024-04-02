<script setup>
</script>
<template>
  <div class="bar">
    <div class="block"></div>
    <div style="font-size: 20px;">123</div>
    <slot></slot>
    <div style="font-size: 30px;">你好我是谁</div>
    <div style="font-size: 50px;">okok</div>
  </div>
</template>
<style scoped>
.bar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items不设置的话 默认盒子的高度等于父盒子的高度 设置center后 盒子高度根据内容高度来了 并且会居中 */
  align-items: center;
}
.block{
  width: 100px;
  height: 60px;
  background-color: red;
}
</style>