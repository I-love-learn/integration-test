<script setup>
const props = defineProps({
  modelValue: String
})

const emit = defineEmits(["update:modelValue", "input"])
// 知道怎么回事了 再vue里  v-model 是一个语法糖 本质上就是 input的时候 把e.target.value传给update:modelValue 然后更新状态 而咱们的input事件触发时机是要晚于 update:modelValue的 导致v-model绑定的值 已经是输入的值了 但后面input咱们才处理e.target.value 让他重新赋值。 因此需要手动触发一次 input事件更新值

watch(
  () => props.modelValue,
  (n, o) => {
    console.log(n, o)

    // emit("update:modelValue", n)
  }
)
const testInput1 = (e) => {
  // 这里e.target.value 每一次拿的是上一次的值 + 新输入的值
  console.log(e.target.value) // 11a
  setTimeout(() => {
    console.log(0)
  }, 0)
  Promise.resolve().then(() => {
    console.log(1)
    // 可以看出父子组件的watch触发顺序 是在微任务中的  大概可以看出watch本质也是一个异步队列 其执行时估计也是在Promise.resolve().then里的

    // 而原生v-model watch执行早于input事件 可能与组件传值不同吧
  })
  emit("update:modelValue", e.target.value)
  // 为什么这里要e.target.value 而不让父组件的事件中直接用 modelValue呢 这是因为如果 emit("update:modelValue")在 emit("input")后触发的话 会导致父组件传的值还没有更新 先触发了input事件
  emit("input", e.target.value)
}
// 正则加g的好处是  英文状态下输入a 会匹配a 然后replace没问题 中文输入时 按住a 不放手只会replace第一次 后面的虽然也会触发input 但是没有清空 不知道为啥 是因为正则不g 只匹配一次 而中文输入法按住不松手 输入的拼音字符是连续的 而不是单个的 比如a aa aaa 按第一次是一个a 第二次是两个a 和英文不同 英文每次按下都算一个
// 明晚继续研究为什么 el-input 会回显值 而其它两个不会
// el-input 貌似它的input事件 覆盖后的target.value的值 并没有正确回显到input里 猜想是 value值改变又会重新赋值一次给 target.value？？
// 不过通过mounted直接获取el-input中input 直接addEventListener input 就不会有这个情况了  通过打印可以看出 v-model绑定的值更新在 el-input的 @input后 但是在 input 的input前 这也许证明了为什么后者replace的值会生效 而前者不会吧 因为前者replace又被v-model的值覆盖了

// 明天测试 通过组件拿到的dom input触发时机 和 组件内部的input 执行顺序
// dom的input 触发最晚 在数据更新后
// 为什么 后面两个输入框改变第一个没有出现值呢  因为数值变化 并没有触发组件的emit("update:modelValue") 因为这个咱们是放在 input事件里触发的  难道说el-input是放到watch里触发的？  妈的 我傻逼了 我没有吧 传过来的值绑定给 input
const input = ref(null)
defineExpose({
  input
})
</script>

<template>
  <div ref="input">
    <input type="text" :value="modelValue" @input="testInput1" />
  </div>
</template>
