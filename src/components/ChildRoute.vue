<script setup>
function jump(path) {
  router.push(path)
}
</script>

<template>
  <div>
    <router-link to="b">1</router-link>
    <router-link :to="{ path: 'a' }">2</router-link>
    <router-link to="/b">3</router-link>
    <router-link :to="{ path: '/a' }">4</router-link>
    <div @click="jump('a')">5</div>
    <div @click="jump('/a')">6</div>
  </div>
</template>

<style></style>
