<script setup>
const props = defineProps({
  modelValue: String
})

const emit = defineEmits(["update:modelValue", "input"])
const input = ref(null)
watch(
  () => props.modelValue,
  () => {
    console.log("modelValue changed")
  }
)

onMounted(() => {
  input.value.addEventListener("input", (e) => {
    console.log("input")
    // value.value = e.target.value
  })
})
defineExpose({
  input
})

// 子组件用v-model修改 props的话 触发顺序是父input 父watch 到子watch 到子input 再到 dom input 触发  卧槽 这就和el-input对上了 那么el-input的封装应该就是这样的  另外子组件的dom input 比父组件触发早 这可能是子组件mounted生命周期早于父

// 这里就是完整的el-input组件低配实现方式了 其他的就是ui方面的修改了
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    // 这里不知道为什么会触发两次  知道了 因为上面 input触发了一次赋值 而set是不会判断 是否相等的  所以会触发两次
    console.log(props.modelValue, value)
    // 这里这么写的话 每一次输入相同的值 由于正则处理的存在会导致 不触发父input自定义事件 以及 第一次父子watch（后续都相同了不再从无到有了就不触发了） 因此还不能这么写呢

    // 要记住 每一次v-model绑定的值 都是上次target被处理后的空值+当前输入的值
    // if (props.modelValue === value) return
    console.log(value + "vvvv")

    emit("update:modelValue", value)
    emit("input")
  }
})
function testInput1(e) {
  console.log("vvvv")
}
</script>

<template>
  <div ref="input">
    <input type="text" v-model="value" @input="testInput1" />
  </div>
</template>
