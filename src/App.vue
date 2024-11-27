<script setup>
import "@/assets/css/base.css"
import h from "@/components/h.vue"

http("/api/123")

onBeforeMount(() => {
  http("/api/123456")
})

onMounted(() => {
  http("/api/000")
})
// https://blog.csdn.net/weixin_45747310/article/details/122895496  useRouter()的执行一定要在setup内  而不能放在setup中的其他函数内部执行  否则返回值是undefined

// https://coding.m.imooc.com/questiondetail.html?qid=GDyQ0Y9gzDG6JARr 这是因为它内部调用了inject 而inject是要放到setup内执行的 并且不可以放在函数内部执行
setTimeout(() => {
  // inject("test", "test")
  // useRouter().push("/about")
}, 5000)
</script>

<template>
  <h />
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  // color: $color;
  height: 100vh;
}
</style>
