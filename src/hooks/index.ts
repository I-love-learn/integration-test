
function getDict(params: { dictType: string }): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: [
          {
            dictCode: '1',
            dictLabel: '男',
            dictValue: '1'
          },
          {
            dictCode: '2',
            dictLabel: '女',
            dictValue: '2'
          }
        ]
      })
    }, 5000);
  })
}

export function useAnalysisDict(): (value: string | number | undefined, dictCode: string) => string {
  let string = ref('')
  return function (value: string | number | undefined, dictCode: string):string {
    if (!value) {
      return string.value
    }
    console.log(value);
    
    let dictData
    getDict({dictType:dictCode}).then((res) => {
      if (res.code === 0) {
        dictData = res.data

        dictData.some((item: { dictCode: string | number, dictLabel: string,dictValue:string }) => {
          if (value == item.dictValue) {
            string.value = item.dictLabel
          }
        }
        )
      }
    })
    console.log(string);
    // 之所以这里的string 我们需要用 ref而不是直接字符串 原因是因为 这里string的return是 同步的 而string的赋值是异步的 只有响应式对象 重新赋值后才会更新 而我们使用的其实是上一次的ref的值
    return string.value
  }
}