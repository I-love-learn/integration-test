<script setup>
const v = ref(1)
const a = ref(5)
const btn = ref()

const show = ref(false)
onMounted(() => {
  a.value = btn.value.ref.clientWidth
  console.log(a.value)
})
function toBig() {
  v.value = v.value * 2

  console.log(btn.value.ref)

  a.value = a.value * 2
}
</script>

<template>
  <div class="canyouLoveme" style="width:100vw,overflow: hidden">
    <template v-if="!show">
      <h1 style="text-align: center">可以成为我的恋人吗？</h1>

      <div style="display: flex; justify-content: center">
        <el-button
          type="danger"
          :style="{ transform: `scale(${v})` }"
          ref="btn"
          @click="show = true"
          >可以</el-button
        >
        <el-button
          type="primary"
          @click="toBig"
          :style="{ marginLeft: a + 'px' }"
          >不可以</el-button
        >
      </div>
    </template>

    <el-result
      v-if="show"
      icon="success"
      title="恭喜你"
      sub-title="祝贺你啊兄弟能跟我这样的人在一起"
    >
    </el-result>
  </div>
</template>

<style>
.canyouLoveme {
  width: 100%;
  padding: 100px 0;
}
</style>
