// store字典解析
const appStore = reactive({ dict: {} })

export const parseDict = function (
  value: string | number | undefined,
  dictCode: string
) {
  if (value === undefined) return ""
  if (!appStore.dict[dictCode]) {
    console.log("字典数据不存在，开1始请求22113322111")
    setTimeout(() => {
      appStore.dict[dictCode] = [
        {
          dictValue: "1",
          dictLabel: "男",
          dictCode: "1"
        },
        {
          dictValue: "2",
          dictLabel: "女",
          dictCode: "2"
        },
        {
          dictValue: "3",
          dictLabel: "未知",
          dictCode: "3"
        }
      ]
    }, 2000)
  }
  return (
    appStore.dict[dictCode]?.find((item) => item.dictValue == value)
      ?.dictLabel || ""
  )
}
console.log("appStore11121", appStore)
export let count = ref(15)
// if (import.meta.hot) {
//   // 这里如果写这个则每次更新的是本文件 这里不写这个每次更新的是index.vue
//   import.meta.hot.accept((newModule) => {
//     if (newModule) {
//       console.log("newModule", newModule)
//       count.value++
//       // newModule is undefined when SyntaxError happened
//       console.log("updated: count is now ", newModule.count)
//     }
//   })
// }
