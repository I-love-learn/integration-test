// store字典解析
const appStore = reactive({dict:{}})

export const parseDict = function (
  value: string | number | undefined,
  dictCode:string
) {
  if(value === undefined) return ''
  if (!appStore.dict[dictCode]) {
    setTimeout(() => {
      
      appStore.dict[dictCode] = [{
            dictValue: "1",
            dictLabel: "男",
            dictCode: "1"
          }, {
            dictValue: "2",
            dictLabel: "女",
            dictCode: "2"
          }, {
            dictValue: "3",
            dictLabel: "未知",
            dictCode: "3"
          }]

    }, 2000);
  }
  return (
    appStore.dict[dictCode]?.find((item) => item.dictValue == value)
      ?.dictLabel || ""
  )
}