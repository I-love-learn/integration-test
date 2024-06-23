<script setup>
onUpdated(() => {
  console.log("updated")
})

function RetRef() {
  const a = ref("1")
  setInterval(() => {
    a.value = a.value + 1
  }, 1000)
  return a
}
const b = RetRef()

console.log(b)

function retReact() {
  const r = reactive({
    a: "1a",
    b: "2"
  })
  return r
}

const r = reactive({
  a: "1a",
  b: "2"
})
</script>

<template>
  <div>
    <div style="width: 800px; height: 300px" class="div">
      <slot></slot>
      <div>456</div>
      <div>{{ RetRef() }}</div>
      <div>{{ b }}</div>
      <div>
        {{ retReact() }}
      </div>
      <div>{{ retReact().a }}</div>
      <div>{{ r }}</div>
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
