<script setup>
// el-tree的数据

const treeData = reactive({
  data: [
    {
      label: "白鹿原",
      value: "1",
      id: 100,
      children: [
        {
          label: "白嘉轩",
          value: "1-1",
          id: 2,
          children: [
            {
              label: "白孝文",
              value: "1-1-1",
              id: 4
            },
            {
              label: "白孝武",
              value: "1-1-2",
              id: 5
            }
          ]
        },
        {
          label: "鹿子霖",
          value: "1-2",
          id: 3,
          children: [
            {
              label: "鹿兆鹏",
              value: "1-2-1",
              id: 6
            },
            {
              label: "鹿兆海",
              value: "1-2-2",
              id: 7
            }
          ]
        }
      ]
    }
  ]
})

const currentKey = ref(5)

function dataChange() {
  treeData.data = [
    {
      label: "三国演义",
      value: "1",
      id: 1,
      children: [
        {
          label: "刘备",
          value: "1-1",
          id: 2,
          children: [
            {
              label: "关羽",
              value: "1-1-1",
              id: 4
            },
            {
              label: "张飞",
              value: "1-1-2",
              id: 5
            }
          ]
        },
        {
          label: "曹操",
          value: "1-2",
          id: 3,
          children: [
            {
              label: "张郃",
              value: "1-2-1",
              id: 6
            },
            {
              label: "典韦",
              value: "1-2-2",
              id: 7
            }
          ]
        }
      ]
    }
  ]
}

onBeforeMount(() => {
  currentKey.value = 6
})

const expandedKeys = ref([3])

function changeExpand() {
  expandedKeys.value = [2]
}

const defaultKeys = ref()
</script>

<template>
  <!--     default-expand-all -->
  <el-tree
    :data="treeData.data"
    highlight-current
    node-key="id"
    :current-node-key="currentKey"
    :default-expanded-keys="expandedKeys"
    show-checkbox
    :default-checked-keys="defaultKeys"
  >
    <template #default="{ node, data }">
      <span>{{ node.label }}</span>
      <span style="margin-left: 10px">{{ node.value }}</span>
      <span style="margin-left: 10px">{{ node.id }}</span>
      <span style="margin-left: 10px">{{ node.data.id }}</span>
    </template>
  </el-tree>
  <el-card header="操作栏">
    <el-button @click="currentKey = 7">换一个选中id</el-button>
    <el-button @click="dataChange">给树换一个数据</el-button>
    <el-button @click="changeExpand">换个默认展开</el-button>
    <el-button @click="defaultKeys = [6, 7]">换个默认勾选</el-button>
  </el-card>
  <p>
    虽然highlight-current node-key current-node-key
    可以决定树初始化时选中哪个节点
    但是如果该节点默认没有default-expand-all被展开 的话 tree是不会自动展开的
  </p>

  <p>
    current-node-key 控制的是默认选中节点 但是这个属性不是双向绑定的 因此
    改变current-node-key会改变默认选中 但手动切换选中不会更新current-node-key
    这就会出现上面的问题 如果我一开始给current-node-key赋值了通过按钮事件
    后续自己手动切换后 再点击按钮 current-node-key还是没有改变 并且
    tree不会切换选中id为7的节点
  </p>

  <p>
    如果el-tree绑定的数据被重新赋值改变了，那么current-node-key会重新选中一开始初始化时
    赋值的那个节点 也就是beforeMount时current-node-key的值
    而beforeMount后重新赋值的current-node-key值改变不会影响绑定的数据重新赋值改变的current-node-key
    但是如果数据被替换后又修改了current-node-key的话 对应的node 会被选中
    初步猜测是子组件mounted时 存了旧的current-node-key作为初始值。
  </p>

  <p>这一点在el很多组件中 初始值都是如此设计的 比如form</p>

  <p>
    el-form data被重新赋值后 默认展开取得是最新得默认展开得值
    而不会像默认选中一样取初始值。 并且如果 原先数据 展开了多个节点 替换数据后
    只会展开 默认得节点
  </p>

  <p>default-expand-all 大于default-expanded-keys</p>
  <p>默认勾选数据和默认展开一致 切换数据也以当前数据为准</p>

  <p>
    node.id是 el自己的id 自增生成的每次数据重新赋值 node.id都会自增
    而node.data.id 才是自己的
  </p>

  <p>以上所有属性均不支持v-model</p>
</template>
