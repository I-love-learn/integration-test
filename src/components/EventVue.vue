<script setup>
// 由于vue3 移除了原生事件修饰符.native 因此v3里进行了判断 比如click事件 默认就是原生事件 除非手动在子组件里使用了 defineEmits(["click"])接受它 那么它就不是原生了 就变成了需要自定义的了 自定义事件getEventListeners就不再捕获得到了
// defineEmits(["click"])

// 如果父组件和子组件根节点同时绑定了click事件 那么子组件的click事件会先触发 再触发父组件的click事件  但是getEventListeners 只会获得一个click事件 是vue的事件处理程序函数 里面的value才是真的事件 是一个数组 第一项是子组件的click事件 第二项是父组件的 这也是为什么先触发子组件事件再触发父组件事件

// 并且template里的实参event只有一个那就是$event 才是e 其他的写法会认为是从 setup定义的变量里取得 setupState
const c = 123
// e不传默认接受得就是事件对象e 这也是为什么即便vue通过invoker 包了一层但却仍然可以通过e.preventDefault来阻止默认事件得原因
function a(e) {
  console.log(e)
  console.log(event)
}
</script>

<script>
export default {
  mounted() {
    console.log(this)
  }
}
</script>

<template>
  <div @click="console.log(2)">
    <!-- <h1 @click="$emit('click')">点我吧各位</h1> -->
    <h1>点我吧各位</h1>
    <h1 @click="a">点我吧各位</h1>
    <h1 @click="a(e)">点我吧各位</h1>
  </div>
</template>

<style></style>
