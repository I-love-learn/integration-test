import { defineStore } from 'pinia'
// 导入定义全局状态的方法

// 第一个参数必须是唯一的 可以认为是key 是id 他主要能和vue devtool搭配方便调试 如果重复了 devtool只会显示 后使用的那个
const useStore = defineStore('store', {
  state: () => {
    return {
      array: [
      ]
    }
  }
})

const useGlobal = defineStore('global', {
  state: () => {
    return {
      a: 1,
      b: {
        c: 2
      }
    }
  }
})

export {
  useStore,
  useGlobal
}