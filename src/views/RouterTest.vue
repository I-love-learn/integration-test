<script setup>
http("/api/test")
onBeforeMount(() => {
  http("/api/123456789")
})
onMounted(() => {
  http("/api/0001")
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style></style>
