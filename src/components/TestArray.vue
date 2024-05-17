<script setup>
// props传的参如果 没被子组件用 则不出发update更新 如果参数变了得话
  const props = defineProps(['arr'])

  onUpdated(() => {
    console.log('更新了');
    console.log('props', props)
  })
</script>

<template>
  <div>
    <h1>组件</h1>
    <!-- <h2>{{ arr }}</h2> -->
  </div>
</template>

<style scoped lang="scss"></style>