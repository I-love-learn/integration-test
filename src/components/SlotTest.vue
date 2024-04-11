<script setup>
</script>

<template>
<div>
<div style="width: 800px;height: 300px;" class="div">
  <slot></slot>
  <div>456</div>
</div>
</div>
</template>

<style lang="scss" scoped>
:deep(.div) {
  div {
    font-size: 50px;
  }
}
</style>