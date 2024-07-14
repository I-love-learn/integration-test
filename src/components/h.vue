<script setup>
import { h } from "vue"
// 不知道为什么eslint格式化会自动在函数前加; 感觉这个;加了没有任何意义不加也不会报错 但是这个代码是没办法使用的 因为箭头函数也要赋值的
// setup语法糖没法 return 一个render
;(() => {
  h("div", { id: "map" })
  console.log(123)
  return 123
})()
</script>
