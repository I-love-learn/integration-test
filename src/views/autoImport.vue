<script setup>
import { ref } from 'vue'
const checked1 = ref(false) 
const checked2 = ref(false)
const color1 = ref('red')
const value1 = ref('')
const value = ref('')
function clickEvent(){
  ElMessage({
    showClose: true,
    message: 'This is a message.',
  })

  ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>

<template>
  <ElButton @click="ElMessage({
    showClose: true,
    message: 'This is a message.',
  })">这是一个按钮</ElButton>
  <div>
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color1" />
  </div>
  <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
      />
      <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1" />
  </div>
  <el-badge :value="12" class="item">
    <el-button>comments</el-button>
  </el-badge>

  <el-calendar v-model="value" />
</template>


<style lang="scss" scoped>
</style>
