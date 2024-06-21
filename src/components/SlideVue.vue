<script setup>
const isOpen = ref(false)

const a = ref(1)

defineExpose({
  a
})
</script>

<template>
  <div class="btn" @click="isOpen = !isOpen">≡</div>
  <transition name="fade">
    <div class="slide" v-if="isOpen">
      <div class="title">
        <div class="btn" @click="isOpen = !isOpen">×</div>
      </div>
      <slot>这里的数据将被替换</slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.btn {
  font-size: 30px;
  cursor: pointer;
}

.slide {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 50%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  left: -50%;
  opacity: 0;
}
</style>
