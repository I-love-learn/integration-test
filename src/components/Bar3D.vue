<script>
export default {
  name: "Bar3D",
  props: {
    height: Number
  }
}
</script>

<template>
  <div class="fzt" style="background: rgba(70, 171, 218, 0.2)">
    <!-- 填充块1 -->
    <div class="fhead" style="bottom: 3vh; border: 6px solid #4fb3dd"></div>
    <!-- 填充块2 -->
    <div
      class="fbody"
      style="bottom: calc(3vh - 16px); border: 8px solid #4fb3dd"
    ></div>
    <!-- 填充块4 -->
    <div class="ffoot" style="border: 6px solid #6ccde5"></div>
    <!-- 填充块3 -->
    <div
      class="fmain"
      style="height: 3vh; background-image: linear-gradient(#44a9da, #6ccce5)"
    ></div>
    <!-- 背景块1 -->
    <div class="yhead" style="border: 6px solid rgba(70, 171, 218, 0.34)"></div>
    <!-- 背景块2 -->
    <div class="ybody" style="border: 8px solid rgba(70, 171, 218, 0.2)"></div>
    <!-- 背景块4 -->
    <div class="yfoot" style="border: 6px solid rgba(70, 171, 218, 0.2)"></div>
  </div>
</template>

<style>
.fzt {
  height: 9vh;
  width: 40px;
  position: relative;
}

.fmain {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
}

.yhead {
  height: 0;
  width: 0;
  border-right: 20px solid transparent !important;
  border-left: 20px solid transparent !important;
  border-top: 6px solid transparent !important;
  position: absolute;
  top: -12px;
  z-index: 1;
}

.fhead {
  height: 0;
  width: 0;
  border-right: 20px solid transparent !important;
  border-left: 20px solid transparent !important;
  border-top: 6px solid transparent !important;
  position: absolute;
  z-index: 10;
}

.ybody {
  height: 0;
  width: 0;
  border-right: 20px solid transparent !important;
  border-left: 20px solid transparent !important;
  border-bottom-color: transparent !important;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.fbody {
  height: 0;
  width: 0;
  border-right: 20px solid transparent !important;
  border-left: 20px solid transparent !important;
  border-bottom-color: transparent !important;
  position: absolute;
  left: 0;
  z-index: 100;
}

.yfoot {
  height: 0;
  width: 0;
  border-right: 20px solid transparent !important;
  border-left: 20px solid transparent !important;
  border-bottom-color: transparent !important;
  position: absolute;
  bottom: -12px;
  z-index: 1;
}

.ffoot {
  height: 0;
  width: 0;
  border-right: 20px solid transparent !important;
  border-left: 20px solid transparent !important;
  border-bottom-color: transparent !important;
  position: absolute;
  bottom: -12px;
  z-index: 10;
}
</style>
