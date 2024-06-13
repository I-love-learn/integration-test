<script setup></script>

<template>
  <div>
    知道问题了 我在hooks函数里每次执行都创建了一个新的 ref
    然后由于请求是异步的每次 请求过来页面更新都会重新触发函数调用创建一个新的
    ref 然后更新 然后再更新页面 再创建 导致无限执行。 解决办法是要么定义在函数外
    要么其他解决方式
  </div>
</template>

<style scoped lang="scss"></style>
