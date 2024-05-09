<script setup>
const { proxy } = getCurrentInstance()
console.log(proxy);
// 插槽最终编译后 是一个函数 他是h函数的第三个参数
const ipt = ref()
onMounted(() => {
  console.log(Object.entries(ipt.value));
 for (const [key,value] of Object.entries(ipt.value)) {
  proxy[key] = value
 }
})
// defineExpose defineEmits这种语法糖 只能在setup全局下使用 不可放在函数中使用 所以这种写法不行 最终还是要用  选项是api 直接往this身上赋值 那不需要 因为proxy 就是this
// defineExpose(elInput.value)


</script>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log(this); // === proxy
  }
}
</script>
<template>
  <div>
    <el-input v-bind="$attrs" ref="ipt">
      <!-- 这里是el-input的插槽 需要我们放 外面插槽传进来的内容 -->
      <template v-for="(value,name) in $slots" #[name]="data" :key="name">
        <!-- 接受外部组件的插槽 并把数据传递给内部组件 -->
        <slot :name="name" v-bind="data">
        
        </slot>
      </template>
    </el-input>
  </div>
</template>

<style></style>