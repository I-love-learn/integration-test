<script setup>
function inputChange(e) {
  console.log(e)
}
</script>

<template>
  <input type="text" @input="inputChange" />
</template>

<style></style>