<script setup>
import "@/assets/css/base.css"
import h from "@/components/h.vue"

http("/api/123")

onBeforeMount(() => {
  http("/api/123456")
})

onMounted(() => {
  http("/api/000")
})
</script>

<template>
  <h />
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  // color: $color;
  height: 100vh;
}
</style>
