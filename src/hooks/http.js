/**
 * function
 * @name useHttp
 * url 请求路径
 * options 请求参数
 * requestCallback 请求拦截器
 * responseCallback 响应拦截器
 * failCallback 请求失败回调
 */
import { ref } from "vue"

const baseURL = "http://192.168.100.234:49000"
export function useHttp(
  url,
  options = {},
  requestCallback,
  responseCallback,
  failCallback
) {
  if (typeof url !== "string" && url instanceof Request && url instanceof URL) {
    console.warn("url参数类型错误")
  }
  if (options.headers && typeof options !== "object") {
    console.warn("options参数类型错误")
  }
  const result = ref(null)
  const fail = ref(null)

  function onRequest() {
    if (!options.headers?.["Content-Type"]) {
      options.headers = Object.assign({}, options.headers)
      options.headers["Content-Type"] = "application/json"
      options.body = JSON.stringify(options.body)
    }
    // 请求拦截器
    requestCallback && requestCallback()
  }
  onRequest()
  fetch((baseURL || options.baseURL) + url, options)
    .then((res) => {
      console.log(res)
      if (res.ok) {
        if (options.responseType === "blob") return res.blob()
        else if (options.responseType === "text") return res.text()
        else if (options.responseType === "arrayBuffer")
          return res.arrayBuffer()
        return res.json()
      } else {
        throw new Error("请求失败")
      }
    })
    .then((res) => {
      // 响应拦截器
      responseCallback && responseCallback(res)
      result.value = res
    })
    .catch((err) => {
      // console.log(err)
      // 错误拦截器
      failCallback && failCallback(err)
      fail.value = err
    })

  return {
    result,
    fail
  }
}
