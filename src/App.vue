<script setup>
import "@/assets/css/base.css"
import h from "@/components/h.vue"
import svg from "./assets/vue.svg"
import { parseDict } from "@/utils/dict"

import { useHttp } from "@/hooks/http"

import { msg } from "virtual:my-module"

console.log(msg)
// import Bar3D from "./components/Bar3D.vue"
const { result, fail } = useHttp(
  "/admin-api/system/website_setting/select_website_list",
  {
    headers: {
      Authorization: "Bearer fe10de76-2041-48ed-86f4-cfa07a4adff1"
    }
  }
)
fetch("/api/obc")
http("/api/123")
console.log(svg)
onBeforeMount(() => {
  http("/api/123456")
})

console.log(new URL("./assets/vue.svg", import.meta.url), import.meta)
console.log(
  new URL("./assets/lx9pflerpej90fgz8xwd7bx39gt5zw6.png", import.meta.url),
  import.meta
)
console.log(import.meta.dirname, import.meta.filename)
console.log(import.meta.ENV)
onMounted(() => {
  console.log("基座app挂载")
  http("/api/000")
})
// https://blog.csdn.net/weixin_45747310/article/details/122895496  useRouter()的执行一定要在setup内  而不能放在setup中的其他函数内部执行  否则返回值是undefined

// https://coding.m.imooc.com/questiondetail.html?qid=GDyQ0Y9gzDG6JARr 这是因为它内部调用了inject 而inject是要放到setup内执行的 并且不可以放在函数内部执行
setTimeout(() => {
  // inject("test", "test")
  // useRouter().push("/about")
}, 5000)

const dict = reactive(new Map())
// map 如果set的值是 ref 则渲染时 字符串会带引号 逆天 加上.value 则不会  vue 3.4.31后修复了这个问题  6月28日
dict.set(
  "name",
  computed(() => parseDict("2", "a"))
)
const color = "blue"
const color1 = "orange"

const id = "idv"
</script>

<template>
  <el-watermark font="font">
    <div style="height: 500px" />
  </el-watermark>
  <div>{{ result }}</div>
  <div>{{ fail }}</div>
  <!-- <bar-3-d :height="0.5" /> -->
  <div>
    <h />
    <suspense>
      <router-view></router-view>
    </suspense>
    <div id="app2" style="height: 600px"></div>
    <div id="app4" style="height: 600px"></div>
    <div id="app1" style="height: 600px"></div>
    <div id="app3" style="height: 600px"></div>

    <div class="abc">123</div>
    <div>123</div>

    <div :class="id">0000</div>
    <div>{{ dict.get("name").value }}</div>
    <my-input />
  </div>
</template>

<style lang="scss">
// scss定义变量
$id: idv;
$pink: pink;
// scss使用变量 css变量不需要#{}使用 但类名需要 因为$符号本身也是css的符号 所以需要转义
// scss中#{}是字符串拼接
.#{$id} {
  color: $pink;
}
#app {
  // color: $color;
  height: 100vh;
}

#app1 {
  background-color: v-bind(color);
}
#app2 {
  background-color: v-bind(color);
}
.abc {
  background-color: v-bind(color1);
}
</style>
