<script setup>
const flag = ref(1)

const data = reactive({
  data: {
    a: 1,
    b: 2
  }
})

console.log(toRef(() => data.data)) // getterRef

const a = toRef(data, "data")
console.log(a) // ObjectRef
console.log(toRef(a))
console.log(toRef(a) === a) // true 对ref使用toRef 返回的是自身
console.log(toRef(a, "a")) // ObjectRef data 而不是a
console.log(toRef(a, "value") === a) // true
console.log(toRef(1))
console.log(toRef({ a: 1 }))
console.log(toRef(reactive({ a: 1 })))
const c = reactive({ a: { b: 1 } })
const d = reactive({ a: 1 })
console.log(toRef(c, "a"))
console.log(toRef(d, "a"))
console.log(toRef([]))
console.log(data) // RefImpl

console.log(ref(data.data)) // RefImpl
console.log(ref(data))
console.log(ref(data.data.a))

toValue(1) //       --> 1
toValue(ref(1)) //  --> 1
toValue(() => 1) // --> 1
// toValue 是返回一个refs 或 getters的值 但不会改变原本的ref对象
const b = ref(2)
toValue(b)
console.log(b)
console.log(toValue(1))
console.log(toValue(ref(1)))
console.log(toValue(() => 1))

const z = ref(12)

onUpdated(() => {
  console.log("我更新了")
})

const fileList = ref([])
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="500px">
        <el-button @click="flag = 1">测试三层组件传参</el-button>
        <el-button @click="flag = 2">测试三层组件传参toRef</el-button>
        <el-button @click="flag = 3"
          >测试插槽和组件传参对于update生命周期触发影响</el-button
        >
        <el-button @click="flag = 4"
          >测试el-upload 多选删除其中一个是怎么做到的</el-button
        >
      </el-aside>
      <el-main>
        <template v-if="flag === 1">
          <div>
            <Father v-model:data="data.data" />
            <button @click="data.data = { a: 10, b: 15 }">修改数据</button>
          </div>
          <!-- 这也是 若依分页组件封装的逻辑 -->
        </template>
        <template v-else-if="flag === 2">
          <div>
            <Father1 :data="data.data" />
            <button @click="data.data = { a: 10, b: 15 }">修改数据</button>
          </div>
          <!-- 这也是 若依分页组件封装的逻辑 -->
        </template>
        <template v-else-if="flag === 3">
          <UpdatedTest :a="z" />

          <button @click="z = 22">改变a的值</button>
          首先可以确认的是插槽不会触发updated 父子组件传值会
          即便这个值没有被子组件用到甚至没有被defineProps声明
        </template>

        <template v-else-if="flag === 4">
          <div>
            <el-upload
              v-model:file-list="fileList"
              action=""
              list-type="picture-card"
              multiple
              :auto-upload="false"
            />
          </div>
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
.common-layout {
  height: 100%;
  font-size: 16px;
}
</style>
