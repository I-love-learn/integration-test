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
