export default function myPlugin() {
  const virtualModuleId = "virtual:my-module"
  const resolvedVirtualModuleId = "\0" + virtualModuleId
  console.log(resolvedVirtualModuleId, "ok")
  // 虚拟模块就是可以像导入模块一样导入 一些根本不存在的模块其实是定义在插件里的内容
  return {
    name: "my-plugin", // 必须的，将会在 warning 和 error 中显示
    resolveId(id) {
      // console.log(id, "1")
      // 这里当使用到虚拟模块时执行这里
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      //  console.log(id, "2")
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`
      }
    }
  }
}
const fileRegex = /\.(my-file-ext)$/

/**
 * 
 * @returns [src](file://d:\html\开源 工具\integration-test\src\views\TestTwo.vue#L333-L333)

当前模块的原始源代码内容（字符串类型）
示例：假设处理一个 .my-file-ext 文件，[src](file://d:\html\开源 工具\integration-test\src\views\TestTwo.vue#L333-L333) 可能是该文件的原始文本内容如 "Hello {name}"
id

当前模块的绝对路径字符串（包含文件扩展名）
示例：类似 "/project/src/component.my-file-ext" 的完整路径
你代码中的 console.log(id) 可以打印验证具体路径
 */
export function myPlugin2() {
  return {
    name: "transform-file",
    enforce: "pre",
    transform(src, id) {
      // console.log(id)
      if (fileRegex.test(id)) {
        return {
          code: compileFileToJS(src),
          map: null // 如果可行将提供 source map
        }
      }
    }
  }
}

export const myPlugin3 = () => ({
  name: "configure-server",

  configureServer(server) {
    // 返回一个在内部中间件安装后
    // 被调用的后置钩子
    // console.log(server)
    return () => {
      server.middlewares.use((req, res, next) => {
        // console.log(req, res)
        next()
        // 自定义请求处理...
      })
    }
  }
})

export const myPlugin4 = () => ({
  name: "configure-preview-server",
  // 预览服务器插件钩子
  configurePreviewServer(server) {
    console.log(server)
    // 返回一个钩子，会在其他中间件安装完成后调用
    return () => {
      server.middlewares.use((req, res, next) => {
        // 自定义处理请求 ...
        next()
      })
    }
  }
})
