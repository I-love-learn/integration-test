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

const fileList = ref([
  {
    url: "https://img0.baidu.com/it/u=2804005887,994501744&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
    name: "123"
  }
])

function remove() {
  console.log(123)

  console.log(fileList)
}

function beforeRemove() {
  console.log(456)
}

function beforeUpload() {
  console.log(789)
}

function change() {
  // change事件中return false并不会阻止 往filelist里添加内容 正确做法是如果不符合条件直接删除最后一个元素即可
  // return false
  fileList.value.pop()
  console.log(123)
  // console.log(fileList[0].name)
  setTimeout(() => {
    fileList.value.pop()

    // console.log(fileList.value)
    console.log(fileList)
  }, 1000)
}

function onClick() {
  console.log(1)
}
// await Promise 只可以返回成功状态的值 如果遇到reject 则会停止运行 并且返回一个rejected promise
async function Fun() {
  await Promise.reject(1)
  console.log(123)
}

Fun()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

const three = ref(3)

onUpdated(() => {
  console.log("组件更新了")
})

const value2 = ref([])
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
        <el-button @click="flag = 5">测试el-upload数据绑定</el-button>
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

        <template v-else-if="flag === 5">
          <div>
            <el-upload
              action=""
              v-model:file-list="fileList"
              list-type="picture-card"
              :auto-upload="false"
              @change="change"
              @remove="remove"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
            />
          </div>
          <div>on-事件可以用@ 可以用: 但before-remove这种只给用冒号</div>
          <div>
            before-upload 只有自动上传才生效 before-remove手动上传也触发
          </div>
          <div>el-upload不绑定任何数据的情况下 上传会直接显示本地的图片</div>
          <div>
            如果绑定了file-list 则默认可以展示file-list中的文件
            删除的话还会自动清除file-list里的内容
          </div>
          <div>
            如果filelist是reactive([]) 我们添加图片后
            可以看到在devtools工具里长度的确变成了2 0是默认的那个图片
            reactive对象 1是我们刚传的 并且删除1 图片也的确消失了
            但是如果不用devtools 而是在 change事件里通过fileList.pop()删除数据
            发现filelist长度变成了0 新加的图片也没有 原来的也被删掉了
            且不触发ui更新
          </div>
          <div>
            也就是说如果filelist是reactive([]) 即便使用v-model
            也不会触发数据删除 ui更新
            而不用v-model虽然也可以触发删除同步移除了fileList的内容
            但新增不会往filelist里添加数据
          </div>
          <div>
            :on-click 原生不能写成@click 但el-upload可以 :onClick 原生是这种写法
            也就是:on = @
          </div>
          <button :on-click="onClick" :onClick="onClick">click</button>
        </template>
      </el-main>
    </el-container>
  </div>

  <ModelVue v-model="three" />

  测试style
  <source />
  <div class="color">123456</div>

  <div style="width: 100px; display: flex">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start date"
      end-placeholder="End date"
      format="YYYY-MM-DD HH:mm:ss"
      date-format="YYYY/MM/DD ddd"
      time-format="A hh:mm:ss"
    />
  </div>
  <!-- el-date-picker 放到row col里 会自适应 本质上是放到flex布局里 会自适应 明天看看为什么 -->
  <el-row style="width: 100px">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      start-placeholder="Start date"
      end-placeholder="End date"
      format="YYYY-MM-DD HH:mm:ss"
      date-format="YYYY/MM/DD ddd"
      time-format="A hh:mm:ss"
    />
  </el-row>
</template>

<style lang="scss">
.common-layout {
  height: 100%;
  font-size: 16px;
}
</style>
<!-- 不写scoped的情况下 scss里的:deep会导致原本应该生效的样式不生效了 也就是说 scoped才可以使用deep 不使用scoped就使用deep 反倒会导致样式作废 因为打包后样式 还是:deep() css不认这个语法 -->
<style src="@/assets/css/test.scss" scoped></style>
