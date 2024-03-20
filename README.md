# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 初始化git并与远程仓库建立连接

```
git remote add origin https://github.com/I-love-learn/integration-test.git
```

https后面是远程仓库

初始化仓库后 不要立马着急 add . 要先git pull origin master 否则会报错

如果建立完毕后，执行add . 和commit 正常就行，不正常尝试在执行一下git clone远程地址。

git pull 拉代码 git push推代码 如果有报错 查看这里  https://blog.51cto.com/u_15688254/5391696

## dist 和 node_modules两个文件夹默认会被git排除

## jsconfig.json 除了path选项 其他的exclude设置了和没设置没发现不同

https://baijiahao.baidu.com/s?id=1765655360453915052&wfr=spider&for=pc  我觉得可能是这个，include和exclude也是继承自tsconfigjson 意味着哪些编译的时候需要排除和包含

path的确有用 设置/ 可以获取到当前根目录下的public和src文件夹 不设置这个只能获取 当前文件根目录下的内容

在Vue项目中，`jsconfig.json`文件是用来配置JavaScript项目的选项的文件，通常用于提供编辑器的代码智能提示和自动补全功能。`exclude`和 `include`是 `jsconfig.json`文件中常用的两个属性，它们的作用如下：

1. `exclude`属性：

   - `exclude`属性用于指定哪些文件或文件夹应该被排除在项目之外，不包含在代码智能提示和自动补全的范围内。
   - 通过在 `exclude`属性中列出不需要处理的文件或文件夹，可以提高编辑器的性能和减少不必要的干扰。
2. `include`属性：

   - `include`属性用于指定哪些文件或文件夹应该被包含在项目中，以便编辑器可以对其进行代码智能提示和自动补全。
   - 通过在 `include`属性中列出需要处理的文件或文件夹，确保编辑器可以正确地识别和处理这些文件，提高开发效率。

示例：

```json
{
  "exclude": [
    "node_modules",
    "dist"
  ],
  "include": [
    "src"
  ]
}
```

在上面的示例中，`exclude`属性指定了排除 `node_modules`和 `dist`文件夹，而 `include`属性指定了包含 `src`文件夹，以便编辑器可以正确处理项目中的代码。

通过合理配置 `exclude`和 `include`属性，你可以优化编辑器的工作效率，确保编辑器只处理必要的文件和文件夹，提高开发效率。希望这个解释对你有帮助！如果你有任何其他问题，我很乐意为你解答。

这是chatgpt说的，具体我倒是没有测试出不同。 除了path有用。

## setup语法糖下如何给组件设置name

https://blog.csdn.net/weixin_48040732/article/details/136171101  npm install vite**-**plugin**-**vue**-**setup**-**extend **-**D

```javascript
npm install vite-plugin-vue-setup-extend -D
```

## ReactiveFlags _v_skip 、__v_raw、__v_reactive 作用

https://zhuanlan.zhihu.com/p/339358615

## vetur开发vue3项目的时候最好禁用掉，使用volar或者新出的vue-official 否则vetur会和后面两个冲突

volar改名了 现在叫vue-official

## CSS变量注意事项

无论是scss，less定义的变量只能在当前模块/文件中使用，和js模块化一样需要导入导出才能使用，或者就用vue.config.js的配置 给每个css模块部分前面都导入一个公共的变量模块。

css不用 因为css的变量是定义在 :root中的 全局可访问。

:root是一个伪类选择器，表示当前文档的根元素，在html中当前文档的根元素毋庸置疑是html。

root和html权重不同 :root权重是(0,1,0),html权重（0,0,1）

一个文档中可能有多个html元素 如果你想的话，但根元素只有一个、

less和scss中 不可在root中定义 less和scss定义变量的方式定义的css变量，但可正常使用css定义变量的方式。

如果在root或者其他非全局的类名或者伪类 id选择器下通过 less或者scss的方式定义变量，只能在当前选择器下使用，就算是被@import导入到其他的地方了 也无法获取变量。

## process.env.ENV_MODE的使用

https://blog.csdn.net/weixin_46769087/article/details/128120034
