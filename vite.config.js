import { defineConfig,loadEnv } from 'vite'
// 这个插件作用是 让vite可以解析.vue后缀的文件。
import vue from '@vitejs/plugin-vue'

// element-plus 自动导入功能
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// unplugin-vue-components介绍  https://blog.csdn.net/weixin_44162077/article/details/129690764 支持很多第三方库自动导入

// 更多自动导入 查看 https://blog.csdn.net/qq_37214137/article/details/129303773
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(
  ({ mode }) => {
    // loadEnv方法 加载环境变量
    // import.meta.env 是在运行时获取环境变量的值，适用于应用程序代码中需要动态获取环境变量的场合。（配置文件中获取不到，因为配置文件是在构建时被读取！！！）

    // 而 loadEnv 则是在构建时加载环境变量，适用于打包时（构建时）需要引用环境变量的场合。  https://blog.csdn.net/weixin_42373175/article/details/131080666
    const env = loadEnv(mode, process.cwd()); // https://developer.aliyun.com/article/949754 loadEnv的三个参数  第一个是模式 也就是当前的--mode 第二个参数环境变量所在目录 可以是process.cwd 也可以是./ 第三个参数 是环境变量的前缀 默认是VITE_ 可以改成自定义的前缀
    console.log(process.cwd()); // 获取当前执行命令的文件目录 绝对路径   https://blog.csdn.net/weixin_44864084/article/details/120868472   process.cwd()和__dirname区别
    console.log(env);
  return {
    // index.html所在路径，影响打包后导入js，css路径
    base: '/',
    plugins: [
      vue(),
      // 自动导入方法
      AutoImport({
        // resolvers指定什么解析器来解析自动导入的内容 这里我们希望自动导入Elementplus 就用这个 下面的组件同理 
  
        /**
         * 在这段代码中，`resolvers`是用来指定解析器（resolver）的。解析器在Vite插件中扮演着重要的角色，用于解析模块路径、处理导入语句等操作。
        *  具体来说，在`AutoImport`和`Components`插件中，通过配置`resolvers: [AntDesignVueResolver()]`，指定了使用`AntDesignVueResolver`解析器来处理自动导入操作。这意味着当插件需要自动导入模块或Vue组件时，会使用`AntDesignVueResolver`解析器来解析模块路径，确定导入内容，并执行相应的导入操作。
        *  通过配置解析器，可以灵活地定制插件的行为，根据项目的需求来选择不同的解析器，以实现更加个性化的自动导入功能。解析器的作用是帮助插件正确解析模块路径，找到正确的导出内容，并完成自动导入的操作。
         */
        // 也就是说遇到elementplus的方法或者组件 会去执行其对应的解析器 遇到vant的会去执行其对应的解析器解析自动导入的内容
        resolvers: [ElementPlusResolver()],
        // include的作用声明了哪些文件类型需要自动导入，可以是正则表达式，也可以是文件路径。 感觉这个没啥用啊，写了也没有自动导入我自己封装的js文件,意思就是哪些文件里需要咱们自动导入 正常来讲也就只有ts js vue
  
        // 自动导入只能导入 已知的插件的内容，自己写的不行，因为自己写的谁知道是什么api 因为如果自动导入自己的api 自己写一个ref 此时应该用哪个
  
        // 更多配置 https://blog.csdn.net/Sophie_U/article/details/128293101
  
        // https://huaweicloud.csdn.net/638f0fa0dacf622b8df8e1f9.html  ts使用   https://www.jianshu.com/p/daf6c45ce12c
        // 知道了 写这个是为了告诉自动导入我们需要自动导入的包里的哪些内容需要自动导入 如果不声明 那么即便声明了自动导入imports 遇到没有include的内容也不会自动导入 不写include的话默认导入全部
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.css$/, // css
          /\.vue$/,
          // 这个不知道为什么后面带问号
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        // 自动导入vue 与 vue router  https://github.com/unplugin/unplugin-auto-import 更多配置
        // 自动导入的内容声明
        imports: ['vue', 'vue-router','pinia'],
        // 生成auto-import.d.ts声明文件
       dts: 'src/auto-import.d.ts',
      }),
      // 组件自动导入
      Components({
        // 组件貌似只支持 在template中使用的才自动导入 main.js中 使用app挂在这种 不会自动导入App组件 正常肯定是组件编译时候遇到template中不认识的组件才会自动导入的。
        dts:true,
        // 自动生成ts配置文件
        // 注意默认情况下，这个插件会导入 src/components 路径中的组件。你可以使用 dirs 选项自定义它。
        dirs: ['src/components', 'src/views'], // 按需加载的文件夹  不要src/ 避免把其他js文件也自动导入了
        // 组件的有效拓展名
        extensions: ['vue', 'jsx', 'tsx', 'ts', 'js'],
        // resolvers属性 ：设置 UI 框架 自动加载 ， 注意不要向 main.js 中 导入UI 框架
        // 同时打包时 ，用多少UI组件，打包多少。
        // 也可以写自定义解析器  https://github.com/unplugin/unplugin-vue-components#readme
        resolvers: [ElementPlusResolver()],
      }),
      
    ],
    // `resolve`字段是用来配置模块解析的选项。比如指定模块的别名、指定模块的扩展名、指定模块的搜索路径等。这样可以帮助Vite找到正确的模块路径，从而正确地解析模块依赖关系，确保项目能够正确地构建和运行。
    resolve:{
      alias: {
        // 配置别名
        '@': '/src/',      //格式一定要写对喽不然没有代码提示或者报错
        'views':'/src/views/'
      },
      // 忽略后缀名的配置选项  .vue 扩展名不建议忽略 因为它会影响 IDE 和类型支持。 https://blog.csdn.net/u010281877/article/details/116491779
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json','png']
    },
    // css预处理 https://vitejs.dev/guide/features.html#css-pre-processors
    css: {
      // css选项是用来配置
      preprocessorOptions: {
        // 通过preprocessorOptions配置，您可以对CSS预处理器（如Sass、Less等）进行特定的设置，例如指定全局变量、函数、混入等。
  
        // 我们使用additionalData选项将@import "@/styles/variables.scss";添加到每个Sass文件的顶部。这样，所有的Sass文件都可以访问variables.scss文件中定义的变量，而无需在每个文件中单独引入。
        // https://blog.csdn.net/Frank_colo/article/details/132325715 vite内部支持scss和less 因此无需安装其对应loader 只需要安装对应依赖scss和less即可  也就是说scss-loader和lessloader 作用是将scss和less解析成普通css 但vite内部已经支持了scss和less的解析 所以无需安装其对应的loader 我们只需要安装scss 和less 支持书写即可
        // 并且这里是可以使用alias中配置的别名的
        scss: {
          // additionalData属性：用来指定额外的Sass代码，这些代码将会在Sass编译之前，先被添加到Sass文件中。 这个scss 文件是 被所有scss文件引入的 因此必须main.js导入了其它scss 它才能生效
          additionalData: ` @import "@/assets/styles/index.scss";   `
        },
  
        // less预处理器选项
        less: {
          // 这个选项用于修改Less样式中的变量。 这样在Less样式中使用这些变量时，会被替换为相应的数值。 可以认为是样式覆盖/替换  一般用于定制主题 修改ui组件库的全局样式
          modifyVars: {
            'primary-color': '#1890ff',
            'link-color': '#1890ff',
            'border-radius-base': '2px',
          },
          // javascriptEnabled: 这个选项设置为true，表示启用Less中的JavaScript表达式。
          javascriptEnabled: false
        }
      }
    },
    // 服务配置
    server: {
      // 服务端口
      port: 3000,
      // 服务端口
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      // 服务端口 host设置0.0.0.0 可局域网内访问 和在packagejson中配置host 一样 port同理
      host: '0.0.0.0',
      cors: true, // 开启跨域
      proxy: {
        // 代理配置  本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
       [env.VITE_BASE_API]: {
          // 代理目标地址
          target: 'http://36.154.171.222:65349/xgxf-server',
          // 代理配置
          changeOrigin: true,
          // 代理配置
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        'test': {
          target: 'http://36.154.171.222:63105/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/test/, '')
        }
      }
    }
  }
})
