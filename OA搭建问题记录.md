## 浏览器下载多个文件会弹出框询问，即便下载时加了定时器，浏览器也能检测出是下载多个文件

知道了 如果禁止浏览器下载多个文件 那么除了第一次下载文件 后续无论是手动还是自动点击下载文件都会被阻止，浏览器只会下载第一次。刷新页面重置次数。

## NPM 这 6 个有趣实用的知识点，你知道几个？

https://blog.csdn.net/qq_39221436/article/details/124684168

## tsconfig.json配置

**"files"**:**[**] 表示不直接指定任何需要编译的 TypeScript 文件，实际编译范围由子项目配置决定。

**"references"**:**[**
**{**"path"**:**"./tsconfig.app.json"**}**,
**{**"path"**:**"./tsconfig.node.json"**}**
**]**

- 将项目拆分为两个子配置：
  - `tsconfig.app.json`：通常用于前端应用配置（如 Vue/React）
  - `tsconfig.node.json`：通常用于 Node.js 服务端配置

<pre><div class="answer-code-wrap"><div node="[object Object]" class="answer-code-wrap-body" requestid="58955297-d0a0-4840-951c-6b75e3c1a236" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"extends"</span><span class="token">:</span><span></span><span class="token">"@vue/tsconfig/tsconfig.dom.json"</span></code></div></div></pre>

- 继承 Vue 官方提供的 DOM 环境基础配置
- 默认包含浏览器相关配置（如 `"lib": ["DOM", "ES2022"]` 等）
- 基础配置来源：`@vue/tsconfig` npm 包

<pre><div class="answer-code-wrap"><div node="[object Object]" class="answer-code-wrap-body" requestid="58955297-d0a0-4840-951c-6b75e3c1a236" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"tsBuildInfoFile"</span><span class="token">:</span><span></span><span class="token">"./node_modules/.tmp/tsconfig.app.tsbuildinfo"</span></code></div></div></pre>

- 将增量编译信息文件存储到临时目录
- 避免污染项目源码目录
- 提升后续编译速度（通过复用编译信息）

<pre><div class="answer-code-wrap"><div node="[object Object]" class="answer-code-wrap-body" requestid="58955297-d0a0-4840-951c-6b75e3c1a236" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"strict"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noUnusedLocals"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noUnusedParameters"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noFallthroughCasesInSwitch"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noUncheckedSideEffectImports"</span><span class="token">:</span><span></span><span class="token">true</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

| 配置项                         | 作用                         |
| ------------------------------ | ---------------------------- |
| `strict`                       | 启用所有严格类型检查         |
| `noUnusedLocals`               | 禁止未使用的局部变量         |
| `noUnusedParameters`           | 禁止未使用的函数参数         |
| `noFallthroughCasesInSwitch`   | 防止 switch 语句中 case 穿透 |
| `noUncheckedSideEffectImports` | 禁止未经验证的副作用模块导入 |

<pre><div class="answer-code-wrap"><div node="[object Object]" class="answer-code-wrap-body" requestid="58955297-d0a0-4840-951c-6b75e3c1a236" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"include"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">"src/**/*.ts"</span><span class="token">,</span><span></span><span class="token">"src/**/*.tsx"</span><span class="token">,</span><span></span><span class="token">"src/**/*.vue"</span><span class="token">]</span></code></div></div></pre>

- 包含 `src` 目录下所有：
  - TypeScript 文件 (`.ts`)
  - TypeScript + JSX 文件 (`.tsx`)
  - Vue 单文件组件 (`.vue`)

<pre><div class="answer-code-wrap"><div node="[object Object]" class="answer-code-wrap-body" requestid="b8c4086c-d58b-465f-a0d3-7525e76965a8" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"extends"</span><span class="token">:</span><span></span><span class="token">"./tsconfig.json"</span></code></div></div></pre>

- 继承自同目录下的基础配置 `tsconfig.json`
- 形成层级配置结构，避免重复定义通用规则

<pre><div class="answer-code-wrap"><div node="[object Object]" class="answer-code-wrap-body" requestid="b8c4086c-d58b-465f-a0d3-7525e76965a8" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"lib"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">"ES2020"</span><span class="token">,</span><span></span><span class="token">"DOM"</span><span class="token">,</span><span></span><span class="token">"DOM.Iterable"</span><span class="token">]</span></code></div></div></pre>

| 值             | 作用说明                                                    |
| -------------- | ----------------------------------------------------------- |
| `ES2020`       | 支持 ES2020 语言特性（如可选链 `?.`、空值合并运算符 `??`）  |
| `DOM`          | 提供浏览器 DOM API 类型定义（如 `document.getElementById`） |
| `DOM.Iterable` | 支持可迭代的 DOM API（如 `NodeList` 的 `forEach` 方法）     |

<pre><div class="answer-code-wrap"><div node="[object Object]" class="answer-code-wrap-body" requestid="b8c4086c-d58b-465f-a0d3-7525e76965a8" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">]</span></code></div></div></pre>

- **空数组的作用** ：禁用自动加载 `@types` 声明文件
- **解决的问题** ：防止意外引入 Node.js 类型（如 `require`）到浏览器环境中
- **使用场景** ：纯前端项目不需要 Node.js 类型定义时使用

这段 `tsconfig.json` 是 Vue 官方提供的 **基础 TypeScript 配置** ，为 Vue 生态项目（特别是配合 Vite）提供了标准化配置。以下是关键配置项的深度解析：

---

### 一、核心编译策略

| 配置项               | 值          | 说明                                                                        |
| -------------------- | ----------- | --------------------------------------------------------------------------- |
| `"noEmit"`           | `true`      | **不生成编译输出** ，适用于构建工具（如 Vite）接管编译的场景                |
| `"target"`           | `"ESNext"`  | **编译目标为最新 ES 标准** ，实际构建目标由 Vite 的 `build.target` 配置决定 |
| `"module"`           | `"ESNext"`  | **输出 ESM 模块格式** ，适配现代打包工具链                                  |
| `"moduleResolution"` | `"Bundler"` | 专为打包工具设计的模块解析策略（支持 `node_modules` 和裸模块）              |

---

### 二、模块系统强化

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="202eb84a-6ff0-48cc-bb97-c016b00a666d" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"moduleDetection"</span><span class="token">:</span><span></span><span class="token">"force"</span><span class="token">,</span><span>
</span><span></span><span class="token">"resolveJsonModule"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"allowImportingTsExtensions"</span><span class="token">:</span><span></span><span class="token">true</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

- **`moduleDetection: "force"`** ：强制所有文件视为 ES 模块，避免 `Cannot redeclare block-scoped variable` 错误
- **支持直接导入** ：JSON 文件 (`.json`) 和 TypeScript 扩展文件 (`.ts`, `.tsx`)
- **构建工具友好** ：与 Vite/Rollup 的模块处理策略深度对齐

---

### 三、Vue 专项配置

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="202eb84a-6ff0-48cc-bb97-c016b00a666d" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"jsx"</span><span class="token">:</span><span></span><span class="token">"preserve"</span><span class="token">,</span><span>
</span><span></span><span class="token">"jsxImportSource"</span><span class="token">:</span><span></span><span class="token">"vue"</span><span class="token">,</span><span>
</span><span></span><span class="token">"verbatimModuleSyntax"</span><span class="token">:</span><span></span><span class="token">true</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

| 配置项                   | 作用                                                        |
| ------------------------ | ----------------------------------------------------------- |
| `jsx: "preserve"`        | 保留 JSX 语法供后续工具（如 Vite）处理                      |
| `jsxImportSource: "vue"` | 指定 JSX 的运行时为 Vue 的 `h` 函数                         |
| `verbatimModuleSyntax`   | 保留未修饰的导入语句，兼容 Vue SFC 的 `<script setup>` 语法 |

---

### 四、严格类型检查

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="202eb84a-6ff0-48cc-bb97-c016b00a666d" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"strict"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noImplicitThis"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"useDefineForClassFields"</span><span class="token">:</span><span></span><span class="token">true</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

- **`strict: true`** ：启用所有严格类型检查规则（包含 7 个子规则）
- **`noImplicitThis`** ：禁止隐式 `any` 类型的 `this`（增强 Vue 选项 API 类型推导）
- **`useDefineForClassFields`** ：符合 ES 规范的类字段声明方式（默认启用）

---

### 五、工程化最佳实践

| 配置项                               | 值     | 优势                                                 |
| ------------------------------------ | ------ | ---------------------------------------------------- |
| `"esModuleInterop"`                  | `true` | 改善 CommonJS 与 ESM 的互操作性                      |
| `"forceConsistentCasingInFileNames"` | `true` | 强制文件名大小写敏感，避免跨平台问题                 |
| `"skipLibCheck"`                     | `true` | 跳过库类型检查，提升编译速度（Vue CLI 历史问题优化） |

---

### 六、与 Vite 的协同设计

通过代码注释体现的协作逻辑：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">js</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="202eb84a-6ff0-48cc-bb97-c016b00a666d" tasktype="FREE_INPUT"><code class="language-js"><span class="token">// A few notes:</span><span>
</span><span></span><span class="token">// - For Vite, the actual compilation target is determined by...</span><span>
</span><span></span><span class="token">// - So don't change the `target` field here...</span></code></div></div></pre>

- **编译解耦** ：实际构建目标由 Vite 的 `build.target` 控制
- **最低要求** ：`target` 必须 ≥ `ES2020` 以支持动态导入（`import()`）和 `import.meta`
- **灵活性** ：非 Vite 项目可自由覆盖 `target` 配置

---

### 七、配置继承关系

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">mermaid<span><span class="ant-dropdown-trigger mermaid-menu-avatar"><span role="img" class="anticon yunxiao-icon mermaid-icon-16px"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-code-line"></use></svg></span><span><span role="img" class="anticon yunxiao-icon mermaid-icon-16px"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-trilateral-down-fill"></use></svg></span></span></span></span></div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span><span class="ai-button noBg false false dark undefined"><span role="img" class="anticon yunxiao-icon mermaid-icon-16px"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-arrow-up-2-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="202eb84a-6ff0-48cc-bb97-c016b00a666d" tasktype="FREE_INPUT"><code class="language-mermaid"><span class="token">graph</span><span> TD
</span><span>    A</span><span class="token text">[项目 tsconfig.app.json]</span><span></span><span class="token arrow">--></span><span> B</span><span class="token text">[tsconfig.dom.json]</span><span>
</span><span>    B </span><span class="token arrow">--></span><span> C</span><span class="token text">[当前 tsconfig.json]</span><span>
</span><span>    C </span><span class="token arrow">--></span><span> D</span><span class="token text">[TypeScript 默认配置]</span></code></div></div></pre>

- **设计理念** ：通过层级继承实现配置复用
- **用户收益** ：新项目只需 `extends` 即可获得最佳实践配置
- **可维护性** ：Vue 团队统一维护基础配置，降低生态项目升级成本

---

### 八、典型应用场景

1. **Vue 3 + Vite 新项目初始化**
2. **Vue 生态库开发** （需调整 `noEmit` 为 `false`）
3. **微前端主应用的类型配置基座**
4. **Vite 插件开发环境** （Vitest/Vite SSR 等）

此配置集中体现了 Vue 团队对现代前端工程化的理解，建议非特殊情况不要修改基础配置，如需定制应通过项目级 `tsconfig.json` 覆盖。

这段 `tsconfig.node.json` 是用于 **Node.js 环境** （如 Vite 配置、服务端脚本等）的 TypeScript 配置文件，与前端配置分离以避免编译目标冲突。以下是关键配置解析：

---

### 一、核心编译配置

| 配置项               | 值     | 说明                                                       |
| -------------------- | ------ | ---------------------------------------------------------- |
| `"target": "ES2022"` | ES2022 | 编译输出目标为 ES2022 语法                                 |
| `"lib": ["ES2023"]`  | ES2023 | 使用 ES2023 标准库类型（需 Node.js 18+）                   |
| `"module": "ESNext"` | ESNext | 输出 ESM 模块格式（需 `.mjs` 扩展名或 `"type": "module"`） |
| `"noEmit": true`     | true   | **仅类型检查** ，不生成编译文件（适合开发阶段）            |

---

### 二、模块解析策略

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="02542f21-758d-41b0-9ac7-c19d468fe90c" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"moduleResolution"</span><span class="token">:</span><span></span><span class="token">"bundler"</span><span class="token">,</span><span>
</span><span></span><span class="token">"allowImportingTsExtensions"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"isolatedModules"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"moduleDetection"</span><span class="token">:</span><span></span><span class="token">"force"</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

- **`bundler` 解析** ：模拟 Rollup/Vite 等工具的模块解析逻辑
- **支持直接导入** ：`.ts` 文件扩展名（需打包工具配合）
- **强制模块检测** ：所有文件视为 ES 模块，避免作用域污染

---

### 三、路径别名映射

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="02542f21-758d-41b0-9ac7-c19d468fe90c" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"paths"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"@/*"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">"./src/*"</span><span class="token">]</span><span class="token">,</span><span></span><span class="token">// 源码目录别名</span><span>
</span><span></span><span class="token">"views/*"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">"./src/views/*"</span><span class="token">]</span><span class="token">,</span><span> 
</span><span></span><span class="token">"/*"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">"./*"</span><span class="token">]</span><span class="token">,</span><span></span><span class="token">// 根目录直接引用</span><span>
</span><span></span><span class="token">"imgs/*"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">"./src/assets/images/*"</span><span class="token">]</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

- **典型应用场景** ：
- `import api from '@/api'` → `src/api`
- `import logo from 'imgs/logo.png'` → `src/assets/images/logo.png`
- **需配套工具** ：需 Vite/Webpack 等配置别名解析规则

---

### 四、严格代码质量

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="02542f21-758d-41b0-9ac7-c19d468fe90c" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"strict"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noUnusedLocals"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noUnusedParameters"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noFallthroughCasesInSwitch"</span><span class="token">:</span><span></span><span class="token">true</span><span class="token">,</span><span>
</span><span></span><span class="token">"noUncheckedSideEffectImports"</span><span class="token">:</span><span></span><span class="token">true</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

| 规则                           | 作用                  |
| ------------------------------ | --------------------- |
| `strict`                       | 启用所有严格类型检查  |
| `noUnused*`                    | 禁止未使用的变量/参数 |
| `noFallthroughCasesInSwitch`   | 防止 switch case 穿透 |
| `noUncheckedSideEffectImports` | 验证副作用模块导入    |

---

### 五、增量编译优化

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="02542f21-758d-41b0-9ac7-c19d468fe90c" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"tsBuildInfoFile"</span><span class="token">:</span><span></span><span class="token">"./node_modules/.tmp/tsconfig.node.tsbuildinfo"</span></code></div></div></pre>

- **存储位置** ：`node_modules/.tmp` 临时目录
- **优势** ：
- 避免污染项目目录
- 提升后续编译速度（复用编译缓存）

---

### 六、文件包含范围

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="02542f21-758d-41b0-9ac7-c19d468fe90c" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"include"</span><span class="token">:</span><span></span><span class="token">[</span><span class="token">"vite.config.ts"</span><span class="token">]</span></code></div></div></pre>

- **主要用途** ：为 Vite 配置文件提供类型支持
- **典型场景** ：
- 类型检查 `vite.config.ts` 中的配置
- 确保 Vite 插件 API 的类型安全
- **扩展建议** ：可添加其他 Node.js 工具脚本（如 `scripts/**/*.ts`）

---

### 七、与主配置关系

在根目录 `tsconfig.json` 中引用：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="02542f21-758d-41b0-9ac7-c19d468fe90c" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"references"</span><span class="token">:</span><span></span><span class="token">[</span><span>
</span><span></span><span class="token">{</span><span></span><span class="token">"path"</span><span class="token">:</span><span></span><span class="token">"./tsconfig.app.json"</span><span></span><span class="token">}</span><span class="token">,</span><span></span><span class="token">// 前端配置</span><span>
</span><span></span><span class="token">{</span><span></span><span class="token">"path"</span><span class="token">:</span><span></span><span class="token">"./tsconfig.node.json"</span><span></span><span class="token">}</span><span></span><span class="token">// Node 配置</span><span>
</span><span></span><span class="token">]</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

- **编译命令** ：使用 `tsc -b` 联合构建
- **隔离优势** ：避免浏览器与 Node.js 环境配置冲突（如 `setTimeout` 类型差异）

---

### 八、版本适配建议

| 配置项     | 要求                                      |
| ---------- | ----------------------------------------- |
| `ES2022`   | Node.js 16+（建议 18+）                   |
| `ES2023`   | Node.js 20+ 原生支持                      |
| `ESModule` | 需 `package.json` 设置 `"type": "module"` |

此配置特别适合 **Vite 生态项目** ，既能保证配置文件的类型安全，又能与前端代码共享严格的质量规则。

## ESlint配置补充

看网上有的文章写了eslint需要安装

pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser

但我之前的ts项目安装的是

"@typescript-eslint/eslint-plugin": "^7.3.1",

    "@typescript-eslint/parser": "^7.3.1",

"@vue/eslint-config-typescript": "^13.0.0",

"eslint": "^8.57.0",

"eslint-plugin-vue": "^9.23.0",

而现在通过pnpm i eslint npx eslint --init安装的是

"typescript-eslint": "^8.29.1","eslint-plugin-vue": "^10.0.0","eslint": "^9.24.0", 其他没了

## .eslintrc.cjs和eslint.config.js

https://juejin.cn/post/7460799864478122047 eslint.config.js是新版eslint的配置文件

https://blog.csdn.net/u011296285/article/details/138068985

我们之前的

"@typescript-eslint/eslint-plugin": "^7.3.1",

    "@typescript-eslint/parser": "^7.3.1",

"@vue/eslint-config-typescript": "^13.0.0",

"eslint": "^8.57.0",

"eslint-plugin-vue": "^9.23.0", 就是eslint 8 npx init后自动装的插件 而后面的"typescript-eslint": "^8.29.1","eslint-plugin-vue": "^10.0.0","eslint": "^9.24.0" 则是eslint 9 npx init后自动装的插件

## vite.config.ts中引入vite-plugin-eslint插件报错解决办法

https://blog.csdn.net/qq_59561799/article/details/146380334

vite-plugin-eslint插件中有类型文件，只是声明类型文件的方式用的还是老的，需要手动改成兼容最新的ESM typescript的方式

或者安装替代方案 @nabla/vite-plugin-eslint

在 `package.json` 中同时使用 `types` 和 `exports` 字段来声明类型文件路径，是为了解决 **不同工具链的兼容性** 和 **模块解析策略的演进** 问题。它们的协作逻辑如下：

---

### 一、核心差异解析

| 字段              | 作用对象       | 优先级 | 设计目标             |
| ----------------- | -------------- | ------ | -------------------- |
| `types`/`typings` | TypeScript     | 低     | 旧版TS兼容方案       |
| `exports.types`   | 现代构建工具链 | 高     | Node.js ESM 规范支持 |

---

### 二、为什么要双写？

1. **兼容性兜底**

   - 旧版本 TypeScript（4.7 之前）和部分工具（如 Webpack 4）**无法识别 `exports` 字段**
   - 保留 `types` 字段作为备用路径，确保旧环境能找到类型声明

2. **模块入口精细化控制**

   <pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="f0846a3e-e3a3-4304-9a3d-c9d0c302c19b" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token">"."</span><span class="token">:</span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token">"import"</span><span class="token">:</span><span></span><span class="token">"./dist/esm/index.js"</span><span class="token">,</span><span></span><span class="token">// ESM 入口</span><span>
   </span><span></span><span class="token">"require"</span><span class="token">:</span><span></span><span class="token">"./dist/cjs/index.js"</span><span class="token">,</span><span></span><span class="token">// CJS 入口</span><span>
   </span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/types/index.d.ts"</span><span></span><span class="token">// 专属类型入口</span><span>
   </span><span></span><span class="token">}</span><span class="token">,</span><span>
   </span><span></span><span class="token">"./utils"</span><span class="token">:</span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/types/utils.d.ts"</span><span></span><span class="token">// 子路径类型声明</span><span>
   </span><span></span><span class="token">}</span><span>
   </span><span></span><span class="token">}</span></code></div></div></pre>

   - 当存在子路径导出时（如 `import 'pkg/utils'`），必须通过 `exports` 声明子模块类型路径
   - `types` 字段只能声明主入口类型，无法处理子路径

3. **类型隔离需求**

   - 当 ESM 和 CJS 构建产物需要不同的类型声明时：
     <pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="f0846a3e-e3a3-4304-9a3d-c9d0c302c19b" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
     </span><span></span><span class="token">"."</span><span class="token">:</span><span></span><span class="token">{</span><span>
     </span><span></span><span class="token">"import"</span><span class="token">:</span><span></span><span class="token">{</span><span>
     </span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./esm/index.d.ts"</span><span class="token">,</span><span>
     </span><span></span><span class="token">"default"</span><span class="token">:</span><span></span><span class="token">"./esm/index.js"</span><span>
     </span><span></span><span class="token">}</span><span class="token">,</span><span>
     </span><span></span><span class="token">"require"</span><span class="token">:</span><span></span><span class="token">{</span><span>
     </span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./cjs/index.d.ts"</span><span class="token">,</span><span> 
     </span><span></span><span class="token">"default"</span><span class="token">:</span><span></span><span class="token">"./cjs/index.js"</span><span>
     </span><span></span><span class="token">}</span><span>
     </span><span></span><span class="token">}</span><span>
     </span><span></span><span class="token">}</span></code></div></div></pre>

---

### 三、现代工具链的解析顺序

当同时存在 `types` 和 `exports.types` 时：

1. TypeScript 4.7+ / Node.js 16+ 优先使用 `exports.types`
2. 旧工具回退到 `types` 字段
3. 如果两者不一致，可能导致类型解析错误（需保持路径一致）

---

### 四、实际案例演示

#### 错误配置示例

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="f0846a3e-e3a3-4304-9a3d-c9d0c302c19b" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./old-types/index.d.ts"</span><span class="token">,</span><span>
</span><span></span><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"."</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./new-types/index.d.ts"</span><span>
</span><span></span><span class="token">}</span><span>
</span><span></span><span class="token">}</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

- **后果** ：不同工具链会加载不同的类型文件，导致类型不一致

#### 正确配置示例

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="f0846a3e-e3a3-4304-9a3d-c9d0c302c19b" tasktype="FREE_INPUT"><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/index.d.ts"</span><span class="token">,</span><span>
</span><span></span><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"."</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/index.d.ts"</span><span class="token">,</span><span>
</span><span></span><span class="token">"import"</span><span class="token">:</span><span></span><span class="token">"./dist/esm/index.js"</span><span class="token">,</span><span>
</span><span></span><span class="token">"require"</span><span class="token">:</span><span></span><span class="token">"./dist/cjs/index.cjs"</span><span>
</span><span></span><span class="token">}</span><span>
</span><span></span><span class="token">}</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

---

### 五、演进趋势

| 阶段   | 方案                | 代表工具             |
| ------ | ------------------- | -------------------- |
| 过去   | `types` + `main`    | TS 3.x, Webpack 4    |
| 过渡期 | `types` + `exports` | TS 4.5, Webpack 5    |
| 未来   | 纯 `exports` 定义   | TS 5.0+, Node.js 20+ |

**最佳实践** ：现阶段同时维护两个字段，直到旧版本工具完全淘汰。

## Node.js中npm 和 peerDependencies的使用

https://www.jb51.net/javascript/334955zfm.htm

测试发现peerDependencies的依赖的确会安装

## 在 Node.js 的 `package.json` 中，`exports` 字段的 `"."` 和 `"./utils"` 是 **模块导出路径的声明规则** ，它们分别对应不同的导入场景：

---

### 一、基础含义解析

| 路径声明    | 作用场景                    | 示例代码                             |
| ----------- | --------------------------- | ------------------------------------ |
| `"."`       | **主入口** （默认导出）     | `import pkg from 'your-pkg'`         |
| `"./utils"` | **子路径导出** （特定模块） | `import utils from 'your-pkg/utils'` |

---

### 二、详细作用说明

#### 1. `"."` 主入口

- **功能** ：定义包的默认导入路径
- **典型配置** ：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
  </span><span></span><span class="token">"."</span><span class="token">:</span><span></span><span class="token">{</span><span>
  </span><span></span><span class="token">"import"</span><span class="token">:</span><span></span><span class="token">"./dist/esm/index.js"</span><span class="token">,</span><span></span><span class="token">// ESM 环境入口</span><span>
  </span><span></span><span class="token">"require"</span><span class="token">:</span><span></span><span class="token">"./dist/cjs/index.js"</span><span class="token">,</span><span></span><span class="token">// CJS 环境入口</span><span>
  </span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/types/index.d.ts"</span><span></span><span class="token">// 类型声明入口</span><span>
  </span><span></span><span class="token">}</span><span>
  </span><span></span><span class="token">}</span></code></div></div></pre>

- **使用场景** ：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">javascript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-jsx"><span class="token">// ESM</span><span>
  </span><span></span><span class="token module">import</span><span></span><span class="token imports">pkg</span><span></span><span class="token module">from</span><span></span><span class="token">'your-pkg'</span><span class="token">;</span><span> 
  </span>
  <span></span><span class="token">// CJS</span><span>
  </span><span></span><span class="token">const</span><span> pkg </span><span class="token">=</span><span></span><span class="token">require</span><span class="token">(</span><span class="token">'your-pkg'</span><span class="token">)</span><span class="token">;</span></code></div></div></pre>

#### 2. `"./utils"` 子路径导出

- **功能** ：定义包的子模块路径（类似文件系统路径）
- **典型配置** ：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
  </span><span></span><span class="token">"./utils"</span><span class="token">:</span><span></span><span class="token">{</span><span>
  </span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/types/utils.d.ts"</span><span class="token">,</span><span></span><span class="token">// 子模块类型声明</span><span>
  </span><span></span><span class="token">"import"</span><span class="token">:</span><span></span><span class="token">"./dist/esm/utils.js"</span><span class="token">,</span><span></span><span class="token">// 子模块ESM入口</span><span>
  </span><span></span><span class="token">"require"</span><span class="token">:</span><span></span><span class="token">"./dist/cjs/utils.cjs"</span><span></span><span class="token">// 子模块CJS入口</span><span>
  </span><span></span><span class="token">}</span><span>
  </span><span></span><span class="token">}</span></code></div></div></pre>

- **使用场景** ：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">javascript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-jsx"><span class="token">// ESM</span><span>
  </span><span></span><span class="token module">import</span><span></span><span class="token imports">utils</span><span></span><span class="token module">from</span><span></span><span class="token">'your-pkg/utils'</span><span class="token">;</span><span>
  </span>
  <span></span><span class="token">// CJS</span><span>
  </span><span></span><span class="token">const</span><span> utils </span><span class="token">=</span><span></span><span class="token">require</span><span class="token">(</span><span class="token">'your-pkg/utils'</span><span class="token">)</span><span class="token">;</span></code></div></div></pre>

---

### 三、关键设计原则

#### 1. 路径匹配规则

| 规则                 | 示例                                    | 说明                   |
| -------------------- | --------------------------------------- | ---------------------- |
| 必须**以 `./` 开头** | `"./lib"` ✔️ `"lib"` ❌                 | 避免与第三方包名称冲突 |
| **支持通配符**       | `"./features/*": "./src/features/*.js"` | 批量导出子路径         |

#### 2. 优先级逻辑

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"."</span><span class="token">:</span><span></span><span class="token">{</span><span class="token">}</span><span class="token">,</span><span></span><span class="token">// 最低优先级</span><span>
</span><span></span><span class="token">"./utils"</span><span class="token">:</span><span></span><span class="token">{</span><span class="token">}</span><span class="token">,</span><span></span><span class="token">// 中等优先级</span><span>
</span><span></span><span class="token">"./utils/math"</span><span class="token">:</span><span></span><span class="token">{</span><span class="token">}</span><span class="token">// 最高优先级（精确匹配优先）</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

#### 3. 类型声明隔离

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"."</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/index.d.ts"</span><span></span><span class="token">// 主类型</span><span>
</span><span></span><span class="token">}</span><span class="token">,</span><span>
</span><span></span><span class="token">"./utils"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"types"</span><span class="token">:</span><span></span><span class="token">"./dist/utils.d.ts"</span><span></span><span class="token">// 子模块独立类型</span><span>
</span><span></span><span class="token">}</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

> 💡 当用户导入 `your-pkg/utils` 时，TypeScript 会自动加载 `./dist/utils.d.ts`

---

### 四、错误配置示例

#### 错误1：缺少主入口

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"./utils"</span><span class="token">:</span><span></span><span class="token">{</span><span class="token">}</span><span></span><span class="token">// 缺少 "." 主入口声明</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

**后果** ：`import pkg from 'your-pkg'` 将报错

#### 错误2：路径格式错误

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">json</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="c70db2db-eae5-4a2e-98ec-96810ced51de" tasktype="FREE_INPUT"><code class="language-json"><span class="token">"exports"</span><span class="token">:</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">"utils"</span><span class="token">:</span><span></span><span class="token">{</span><span class="token">}</span><span></span><span class="token">// 缺少 "./" 前缀</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

**后果** ：Node.js 会将其解析为第三方包 `utils` 的导入

---

### 五、演进趋势

| 阶段     | 方案             | 特点                     |
| -------- | ---------------- | ------------------------ |
| 传统方式 | `main` + `types` | 无法处理多环境、子路径   |
| 现代方案 | `exports` 字段   | 精细化控制导出路径和类型 |

通过这种设计，开发者可以实现：

1. **环境隔离** ：ESM/CJS 双模式支持
2. **类型安全** ：精准匹配子模块类型声明
3. **封装性** ：隐藏源码目录结构，仅暴露声明过的路径

## 提示.vue文件没有导出类型需要配置.vue的导出类型拓展

```typescript
declare module "*.vue" {
  import { App, defineComponent } from "vue"
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}
```

必须要在.d.ts中

## 如果是个人开发的项目 只需要安装prettier插件就可以格式化代码了

如果是团队开发则需要安装prettier插件和eslint-prettier插件 以便于不安装prettier插件通过script命令格式化代码。

https://juejin.cn/post/7462253928265302068

安装eslint-config-prettier eslint-plugin-prettier 同理都是eslint命令执行时执行

## eslint --fix也可以格式化代码 需要配置正确

eslint9.0后配置规则变了与之前的eslintrc.cjs配置不一样 不可以直接用

文件目录编译器配置要配置在app.json中而不是node.json

## Typescript:在.d.ts文件中声明类型并在不导入的情况下使用它

https://cloud.tencent.com.cn/developer/information/Typescript%3A%E5%9C%A8.d.ts%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B%E5%B9%B6%E5%9C%A8%E4%B8%8D%E5%AF%BC%E5%85%A5%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E4%BD%BF%E7%94%A8%E5%AE%83

有些文章说.d.ts中声明interface或type必须用 declare 这里没用也没报错

https://juejin.cn/post/7347297033085812777

根据 TypeScript 的类型声明机制，`.d.ts` 文件中是否需要使用 `declare` 关键字的差异主要体现在以下场景：

### 1. **全局声明场景（无模块化）**

当你的 `.d.ts` 文件是 **全局声明文件** （即不含任何 `import/export` 语句）时：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="1ee233e2-e771-46b9-b623-4d8e7843d9c5" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">// types.d.ts</span><span>
</span><span></span><span class="token">interface</span><span></span><span class="token">A</span><span></span><span class="token">{</span><span></span><span class="token">// ✅ 无需 declare</span><span>
</span><span>  name</span><span class="token">:</span><span></span><span class="token">string</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

- 这种情况下 TypeScript 会自动将接口视为全局可用类型
- **不报错原因** ：你当前的项目配置可能处于全局声明环境（检查 tsconfig.json 的 `module` 配置）

### 2. **模块化场景**

当文件中存在 `import/export` 语句时（即成为模块文件）：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="1ee233e2-e771-46b9-b623-4d8e7843d9c5" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">// types.d.ts</span><span>
</span><span></span><span class="token module">export</span><span></span><span class="token exports">{</span><span class="token exports">}</span><span></span><span class="token">// 使文件成为模块</span><span>
</span>
<span></span><span class="token">declare</span><span> global </span><span class="token">{</span><span></span><span class="token">// ✅ 必须使用 declare global</span><span>
</span><span></span><span class="token">interface</span><span></span><span class="token">A</span><span></span><span class="token">{</span><span>
</span><span>    name</span><span class="token">:</span><span></span><span class="token">string</span><span>
</span><span></span><span class="token">}</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

### 3. **最佳实践建议**

虽然你的写法目前未报错，但更推荐显式声明：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="1ee233e2-e771-46b9-b623-4d8e7843d9c5" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">declare</span><span></span><span class="token">interface</span><span></span><span class="token">A</span><span></span><span class="token">{</span><span></span><span class="token">// ✅ 显式声明更规范</span><span>
</span><span>  name</span><span class="token">:</span><span></span><span class="token">string</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

## /// <referencetypes="vite/client"/>

引入vite/client 这个类型文件 删掉这行代码 vite的类型会各种报错 比如导入css 导入scss 提示没有类型说明

## scss可通过变量来定义若干 重复的类名

```scss
@for $i from 0 through 100 {
  .mt-#{$i} {
    margin-top: #{$i}px;
  }
  .mb-#{$i} {
    margin-bottom: #{$i}px;
  }
  .ml-#{$i} {
    margin-left: #{$i}px;
  }
  .mr-#{$i} {
    margin-right: #{$i}px;
  }
  .fs-#{$i} {
    font-size: #{$i}px;
  }
  .pt-#{$i} {
    padding-top: #{$i}px;
  }
  .pb-#{$i} {
    padding-bottom: #{$i}px;
  }
  .pl-#{$i} {
    padding-left: #{$i}px;
  }
  .pr-#{$i} {
    padding-right: #{$i}px;
  }
  .px-#{$i} {
    padding-left: #{$i * 0.5}px;
    padding-right: #{$i * 0.5}px;
  }
  .py-#{$i} {
    padding-top: #{$i * 0.5}px;
    padding-bottom: #{$i * 0.5}px;
  }
}
```

## 行内块元素 button inline-block img input等 margin会和块元素margin叠加

## ts的.d.ts和declare究竟是干嘛用的

https://blog.csdn.net/m0_67401761/article/details/123352229

ts和.d.ts中都可以使用declare 前者使用declare global可声明全局类型 后者没有export/import的情况下 无需declare即可声明全局类型

因为一个.ts文件就是一个模块 必须要导入导出 或者说declare global 而d.ts就是纯类型文件 没有import export的情况下不是模块

## ESlint9 解决 eslint 提示ref 等变量 not define办法

```javascript
{
    languageOptions: {
      // [!code focus:5]
      globals: {
        ...autoImportGlobals.globals // 合并自动导入的全局变量
      }
    }
  }
```

globals:globals.browser 是eslint提供的浏览器全局变量

## ESlint.config.js 配置

```javascript
import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import pluginPrettier from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"
import autoImportGlobals from "./.eslintrc-auto-import.json" assert { type: "json" }
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    languageOptions: {
      // [!code focus:5]
      globals: {
        ...autoImportGlobals.globals // 合并自动导入的全局变量
      }
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false, // 使用双引号
          semi: false, // 末尾添加分号 var a=1
          tabWidth: 2, //tab=2
          trailingComma: "none", // {a:1,}有无逗号
          useTabs: false,
          endOfLine: "auto"
        }
      ]
    }
  },
  prettierConfig, // 这个不用也不影响 这个是关闭eslint与prettier冲突的规则 格式化还是用的上面的pluginPrettier插件
  {
    rules: {
      "no-debugger": 0,
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off" //组件命名校验关闭
      // 自定义规则// 自带的prettier规则
    }
  }
])
```

## document.documentElement === document.querySelector('html')

## elementplus的主题切换动画

https://blog.csdn.net/m0_71349739/article/details/145552894

最正确的实现方式

https://blog.csdn.net/qq_64039125/article/details/145910660

https://juejin.cn/post/7326707110212485130

https://juejin.cn/post/7444109900878151731

这个是最能还原官网的切换 因为其他的并没有设置pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)' 导致动画都是从一个方向到另外一个方向，而没有来回的效果。

## nextjs-一个基于React的全栈框架

https://blog.csdn.net/qq_44586361/article/details/133933244

## 解决el-dropdown菜单黑边问题

```css
.el-dropdown {
  cursor: pointer;
  > span {
    outline: none;
  }
}
```

## async 函数中 只有 throw new Error 或者 return promise.reject 才会走catch

## form表单 如果设置了 按钮的click事件那么 input框不写事件 回车也会触发 click提交事件

submit事件可以绑定到form上 这样click点击和input也可直接触发提交

## height:100% 子元素继承的是父元素高度 - 父元素padding的高度

## 动态路由导入组件要用import.meta.glob 因为import方法只能导入变量为一层结构的多层的它搞不定

## pinia注册时机晚于router 因此router中如果导入的内容用到了pinia要注意使用时机

## css 选择包含某段string的class

```css
.dark .el-table tr[class*="row--level"]:not([class*="row--level-0"]) {
  background-color: #1a233f;
}
```

## 组件二次封装时，如果template中直接放组件 如el-dialog 那么在父组件中使用这个子组件时可以直接传递属性 或者v-model之类的 因为本质上父组件就是直接给el-dialog组件传递属性的 因为它外面并没有包裹其他元素

但可以在子组件中定义props 最终dialog接受的属性是 父组件合并子组件传递的

！！但插槽需要定义哦

## el-option label和value都要设置 插槽label不需要

## forof循环要用continue 跳出而不是return return 会跳出函数

el级联选择器组件 设置emitPath: false 得到的单个value 而不是数组 否则默认和多选的情况都是数组

## [vue el-table 窗口改变 宽度不能响应式问题处理](https://my.oschina.net/u/3455362/blog/8591972)

https://my.oschina.net/u/3455362/blog/8591972

el-table 如果想要自适应 遇到它外面的容器 flex：1 并且overflow：auto 并不一定的父元素 祖先元素也可

如果没有overflow auto 会自适应变大 但不会变小 这是对于 flex布局时其他元素大小未知的情况 如果其他元素大小已知 或者百分比确定 直接设置el-table的容器元素宽度为 固定百分比即可 无需设置flex1和overflow：auto

## el-menu menu-item 折叠不显示图标问题

https://blog.csdn.net/Boneex/article/details/130806744

el-sub-menu 可以把图表和title都写在title插槽里 折叠会显示图标 但el-menu-item 不可以如果把icon和title都写在el-menu-item的title插槽里的话 折叠不会显示图标了 悬浮时展示图标+title 因此要把icon提到外面来写在default插槽里

el-menu 折叠显示的图标看的时哪个在前展示哪个就算不是el-icon也没事

## el-menu折叠时会有可能出现卡顿的情况

看网上解决办法是取消掉自带的过渡动画 自己写一个宽度的过渡

## 折叠的菜单如果加了:persistent="false" 折叠的图标不会显示选中颜色

## el-menu 如果想要给菜单添加一些特定样式 则需要用到el-menu-group来包裹el-menu-item 否则只有el-menu-item一层元素 无法设置一些需要两个元素组合显示的样式

## 16进制的颜色也可设置透明度

## route.beforeEach里一条条件分支不可出现多个next会报警告解决办法是使用router.push来跳转动态路由的跳转

即便加了await来添加动态路由 next也不会跳转 不知道为什么可能是一开始判断那个路由不存在next就不执行了吧 但router.push会执行

准确来说是一次导航保护中不可执行多个next 场景是比如动态路由添加路由后next next执行时又出发beforeEach 注意这里并未加载出路由页面而又执行next则会提示一次路由导航保护不可多次next

## align-center attr el-dialog强制垂直对齐

## keepalive使用

`<KeepAlive>` 包裹动态组件时，会缓存不活跃的组件实例，而不是销毁它们。

（存在内存里 等待下次挂载 而不是销毁组件）

与 `<Transition>` 一起使用：

```html
<Transition>
  <KeepAlive>
    <component :is="view"></component>
  </KeepAlive>
</Transition>
```

keepalive最终需要的子节点是动态组建 component

```html
<!-- 以英文逗号分隔的字符串 -->
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<!-- 正则表达式 (需使用 `v-bind`) -->
<KeepAlive :include="/a|b/">
  <component :is="view" />
</KeepAlive>

<!-- 数组 (需使用 `v-bind`) -->
<KeepAlive :include="['a', 'b']">
  <component :is="view" />
</KeepAlive>
```

它会根据组件的 [`name`](https://cn.vuejs.org/api/options-misc.html#name) 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive` 缓存，就必须显式声明一个 `name` 选项。

我们可以通过传入 `max` prop 来限制可被缓存的最大组件实例数。`<KeepAlive>` 的行为在指定了 `max` 后类似一个 [LRU 缓存](<https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)>)：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。

**template**

```html
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```

如果想要缓存路由组件，要使用router-view的插槽

```html
<router-view v-slot="{ Component }">
  <component :is="Component" />
</router-view>
```

上面的代码等价于不带插槽的 `<router-view />`，但是当我们想要获得其他功能时，插槽提供了额外的扩展性。

## KeepAlive & Transition

当在处理 [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html) 组件时，我们通常想要保持路由组件活跃，而不是 RouterView 本身。为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内：

**template**

```
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
```

类似地，插槽允许我们使用一个 [Transition](https://vuejs.org/guide/built-ins/transition.html) 组件来实现在路由组件之间切换时实现过渡效果：

**template**

```
<router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
```

我们也可以在 Transition 组件内使用 KeepAlive 组件：

**template**

```
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

关于更多 RouterView 组件和 Transition 组件之间的互动，请参考 [Transitions](https://router.vuejs.org/zh/guide/advanced/transitions.html) 指南。

正确的层级是routerview>transtion>keepalive>component

也就是说keepalive的插槽只能放component 而routerview不可以放在transition或者keepalive内部

keepalive 只能用KeepAlive或者keep-alive

routerView貌似是做了容错 不管是写router-view 还是RouterView 还是routerView 还是router-View都能用

## 使用TransitionGroup和KeepAlive 实现路由过渡时发现会报莫名的错误 暂时还是使用transition

只要报警告过渡效果就会失效

## el-date-picker设置一周从周一开始

需要设置国际化

https://cn.element-plus.org/zh-CN/guide/i18n.html

## 不在dom树中的元素也是可以正常触发事件的

因为咱们的事件是绑定在dom元素上的而不是浏览器渲染出的内容身上的，只要dom存在就能执行事件。

```typescript
export function uploadQuick(resType: number) {
  console.log("uploadQuick")
  const input = document.createElement("input")
  input.type = "file"
  input.click()
  input.addEventListener("change", () => {
    // e.target 本身就是input
    const file = input.files?.[0]
  })
}
```

## 当promise1的reslove返回的是另外一个promise2的时候那么promise1的状态并没有完成（但也可以说完成了） 而是要看2是什么状态

当通过 `new` 关键字调用 `Promise` 构造函数时，它会返回一个 Promise 对象。当 `resolveFunc` 或者 `rejectFunc` 被调用时，该 Promise 对象就会变为 _已解决_ （resolved）。请注意，如果你调用 `resolveFunc` 或 `rejectFunc` 并传入另一个 Promise 对象作为参数，可以说该 Promise 对象“已解决”，但仍未“敲定（settled）”。

```typescript
export function uploadQuick(resType: number, url?: string) {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input")
    input.type = "file"
    input.click()
    input.addEventListener("change", () => {
      console.log("a")
      const file = input.files?.[0]
      if (resType === 1) {
        // 如果这里用reject 则这个promise的状态一定是reject 无论fileToBase64(file!)返回的是成功还是失败，这里返回的是reject(prmoise)不会再进行进一步的解析 但如果这里是resolve则最终 这个promise返回的是最终敲定的值
        resolve(fileToBase64(file!))
      }
    })
  })
}

export function fileToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}
```

## vue3 裁剪插件 vue-cropper@next

```typescript
// 实时预览截图
function realTime(data: any) {
  previews.value = data
  previewStyle.value = {
    width: previews.value.w + "px",
    height: previews.value.h + "px",
    overflow: "hidden",
    margin: "0",
    // 这里100 就是预览元素的固定高度为100px
    zoom: 100 / previews.value.h
  }
}
```

## el-select 多选项tags折叠显示配置

collapse-tags collapse-tags-tooltip

## scss 设置百分比循环

```scss
@for $i from 0 through 100 {
  .mt-#{$i}-per {
    margin-top: #{$i * 1%};
  }
  .mb-#{$i}-per {
    margin-bottom: #{$i * 1%};
  }
}
```

## form-create 适用于vue3的开源表单设计器

https://view.form-create.com/start_vue3

需要注意的是 mainjs中需要手动引入Elementplus及其样式 如果咱们的项目里使用了自动导入 并不会让表单设计器中用到的el组件自动导入及其样式

功能模块显隐

https://view.form-create.com/hidden-module

ts获取designer ref实例类型的方式

```typescript
import { FcDesigner } from "@form-create/designer"
const designer = ref<InstanceType<typeof FcDesigner>>()
```

这里FcDesigner是拓展的vue的DefineComponent构造函数方法 这里需要使用InstanceType 拿到InstanceType执行后的组件实例 而组件实例已经给我们定义好方法了。

https://blog.csdn.net/semicolon_hello/article/details/134986961

## export declare const FcDesigner 这段代码定义的是类型还是变量？

这段代码是 **变量声明** （带有类型描述），具体来说：

1. **变量声明**
   通过 `declare const` 声明了一个名为 `FcDesigner` 的常量变量，这是 TypeScript 的声明语法（常见于 [.d.ts](<javascript:void(0)>) 文件），表示该变量会在运行时存在
2. **类型描述**
   后面的复杂类型表达式 `import("vue").DefineComponent<...> & FcDesignerProtoType & Plugin & Record<string, any>` 是对该变量的类型描述

---

### 主要特点说明

| 特性             | 说明                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| **声明语法**     | `declare const` 表示这是全局/模块级别的变量声明                                                |
| **类型组合**     | 通过交叉类型 `&` 合并了 Vue 组件类型、原型方法、Plugin 类型和其他扩展类型                      |
| **运行时存在性** | 该变量会在运行时由库提供（比如通过 `import { FcDesigner } from '@form-create/designer'` 引入） |

---

### 使用场景示例

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="d95b043d-2869-48d6-8c61-51a10bddc190" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">// 导入组件（实际变量）</span><span>
</span><span></span><span class="token module">import</span><span></span><span class="token imports">{</span><span class="token imports"></span><span class="token imports maybe-class-name">FcDesigner</span><span class="token imports"></span><span class="token imports">}</span><span></span><span class="token module">from</span><span></span><span class="token">'@form-create/designer'</span><span class="token">;</span><span>
</span>
<span></span><span class="token">// 获取组件实例类型</span><span>
</span><span></span><span class="token">type</span><span></span><span class="token maybe-class-name">FcDesignerInstance</span><span></span><span class="token">=</span><span></span><span class="token maybe-class-name">InstanceType</span><span class="token"><</span><span class="token">typeof</span><span></span><span class="token maybe-class-name">FcDesigner</span><span class="token">></span><span class="token">;</span><span>
</span>
<span></span><span class="token">// 在 Vue 模板中使用（变量）</span><span>
</span><span></span><span class="token"><</span><span class="token">fc-designer</span><span class="token"></span><span class="token">ref</span><span class="token">=</span><span class="token">"</span><span class="token">designerRef</span><span class="token">"</span><span class="token"></span><span class="token">/></span><span>
</span>
<span></span><span class="token">// 通过 ref 获取实例（类型安全）</span><span>
</span><span></span><span class="token">const</span><span> designerRef </span><span class="token">=</span><span></span><span class="token generic-function">ref</span><span class="token generic-function generic"><</span><span class="token generic-function generic maybe-class-name">FcDesignerInstance</span><span class="token generic-function generic">></span><span class="token">(</span><span class="token">)</span><span class="token">;</span><span>
</span><span>designerRef</span><span class="token">.</span><span class="token property-access">value</span><span class="token">?.</span><span class="token method property-access">addComponent</span><span class="token">(</span><span class="token">/* ... */</span><span class="token">)</span><span class="token">;</span><span></span><span class="token">// 调用方法</span></code></div></div></pre>

---

### 如果需要单独提取类型，可以这样操作：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="d95b043d-2869-48d6-8c61-51a10bddc190" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">// 提取组件配置类型</span><span>
</span><span></span><span class="token">type</span><span></span><span class="token maybe-class-name">FcDesignerProps</span><span></span><span class="token">=</span><span></span><span class="token">typeof</span><span></span><span class="token maybe-class-name">FcDesigner</span><span class="token">[</span><span class="token">'__defaults'</span><span class="token">]</span><span class="token">;</span><span>
</span>
<span></span><span class="token">// 提取组件方法类型</span><span>
</span><span></span><span class="token">type</span><span></span><span class="token maybe-class-name">FcDesignerMethods</span><span></span><span class="token">=</span><span></span><span class="token">typeof</span><span></span><span class="token maybe-class-name">FcDesigner</span><span class="token">[</span><span class="token">'prototype'</span><span class="token">]</span><span class="token">;</span></code></div></div></pre>

## import type 也可导入变量 只要使用时当变量使用即可 当type使用会报错

```typescript
import type A from "@/type/a"
// 这里A是const定义的变量 此时
function test(a: string) {}
test(A) // 报错 A是import type导入的 无法作为值使用
// 如果定义
const a: A
// 此时会报另外一种错  A是变量 而这里却作为类型使用
// 这里要区分函数与变量类型声明时对于报错的显示有所不同 一种以导入时为准 一种以导出时为准了
```

## template 与v-show配合使用 会导致template真被渲染导致没内容

## Vue3的表单设计插件

Vform3

https://www.ganweicloud.com/docs/6.1.0/pages/d3e6d9/

FormCreate

https://form-create.com/

FormMaking（收费）

https://form.making.link/#/zh-CN/

[lowform](https://gitee.com/cai_xiao_feng/lowform)

https://gitee.com/cai_xiao_feng/lowform

## vue3 审批流程插件

ak-design

https://337547038.github.io/vue-form-design/#/design/flow

https://blog.csdn.net/dsyuan001/article/details/147572972

Antflow-Designer

https://gitee.com/ldhnet/Antflow-Designer/tree/master

beeflow

https://www.beeflow.top/license/

lowflow-design

https://demo.lowflow.vip/flow/design

https://gitee.com/cai_xiao_feng/lowflow-design

wflow

http://wflow.willianfu.top/

vue-workflow-diagram （最简单）

https://gitee.com/testcjw/vue-workflow-diagram/tree/main/

https://juejin.cn/post/7472664178194202660?searchId=20250515100852E89DE24131280868678A

**[Workflow](https://github.com/StavinLi/Workflow-Vue3)**

https://github.com/StavinLi/Workflow-Vue3

其他：

https://blog.csdn.net/sllailcp/article/details/125265256

五款国产开源工作流引擎，助你快速落地中国特色审批流 - Gitee的文章 - 知乎
https://zhuanlan.zhihu.com/p/700674639

## vue项目报错 Multiple assets emit different content to the same filename index.html

项目名有问题 不要带特殊符号或者中文

## tree懒加载时搜索功能实现

tree既可以使用load方法resolve的数据 也可使用data绑定的数据 可以搜索时刚给data附值即可 展开时自动触发load

## formCreate保存已拖拽好的数据的方法

不是getJson 表单配置需要rule和options这俩参数 前者是表单配置规则 后者是表单整体配置（配置表单模版时用的到）

## el-form 列表循环数据深层对象数据可以resetFields()吗？

## el的resetFields() 只可以重置prop存在的数据 假如form是tab切换的 v-if为false的不可重置

## el-drawer 中 v-if控制的可以tab切换的form 需要两次nexttick才能重置表单校验

```javascript
function add() {
  title.value = "新增" + modelName
  formModel.value = "add"
  dialogVisible.value = true
  initData(formData.value)
  // resetFormValid(formRef)
}
```

```javascript
  function resetFormValid(formRef: any) {
    nextTick(() => {
// 这里要在nextTick里再包一层nextTick才能重置校验 不知道为什么
      formRef.value.clearValidate()
    })
  }

```

## el-select设置为多选，当状态为disabled时，设置collapse-tags-tooltip后不生效

[[Component] [select] el-select设置为多选，当状态为disabled时，设置collapse-tags-tooltip后不生效 · Issue #20261 · element-plus/element-plus](https://github.com/element-plus/element-plus/issues/20261)

我通过添加全局样式暂时解决生产bug：

```
.el-select__wrapper.is-disabled {
  pointer-events: initial;
}
```

这是由于新版elementplus 禁用时pointer-events 设置为了none

## watch监听多个数据 多个数据同时变化触发几次watch回调

## fc-design 注意事项

直接通过JSON.stringify 转的getRule(他返回的是一个对象) json会丢失函数（jsjson规则） 因此需要使用fc提供的json方法 但json.parse可以解析出函数

getJson() 获取rule json

getOptionsJson() 获取options json

直接弄个对象保存这俩 然后用的时候使用formCreate.parseJson 完美

## white-space 会继承导致文字不会换行

## scale 不会改变元素css属性里的大小 但选中元素后显示的大小是 放大或者缩小后的大小

## fcDesigner是低代码拖拽配置表单设计器 而formCreate是json转form表单

这俩都是一个人开发的 官网也是同一个 不要搞混了

前者是拖拽生成表单的 后者是生成表单的json转成展示出来的form表单不含任何拖拽api

```html
<form-create
  v-if="template.rule?.length"
  v-model="formData"
  @submit="handleSubmit"
  v-model:api="api"
  :rule="template.rule"
  :option="template.options"
></form-create>
```

v-model:api获取 api的 这样可以直接使用api了

## 其实也可通过ref从实例上拿api

VUE template中绑定的 ref 要在script中也就是 $setup里要有 ref的定义 这样才能获取实例

## el-tree 的node id是自增的和node.data的id不同 data的id是和数据一致的 而node是自增的 并且不在组件内部 即便组件销毁了下次创建id还会继续++ 而不是从0开始

## dialog的closed事件有延迟 大约是v-model 变false后的400ms左右

## tree-select注意事项

tree-select的v-model绑定的参数 只包含最后一级选中项id的 而使用getCheckedKeys方法选中的参数 默认是包含全部节点的id

tree-select v-model绑定的参数改变后 需要在setTimeout中通过getcheckKeys 获取 而不能直接或者通过nextTick获取

## template中无法拿到window 想要使用window可以定义window = globalThis

## 如果设置鼠标mousedown事件了 那么click就不要设置事件了 否则会执行两次

如果想设置鼠标长按事件 则需要mousedown+计时器+mouseup 不需要click

## 浏览器缩小会影响el-table的overflow-y 导致表格没有底部边框了

## el-avatar遇到无法加载的图片会默认不展示 展示一个底色 而n-image会展示一个图片缩略图也就是默认的img标签加载不出来的效果

## vue-office

支持多种文件( **docx、excel、pdf、pptx** )预览的vue组件库，支持vue2/3。也支持非Vue框架的预览。

## el-upload focus的时候会提示按delete可删除

# [前端预览word几种方案](https://www.cnblogs.com/younghxp/p/18850306 "发布于 2025-04-27 19:51")

## 浏览器一些比较深入的bug 控制台不报错

## pinia vuex中的getters 按照组合式写法时其实就是写在state里的computed

## 事件可以绑定给el-form-item他会透传给target为真正的内部元素 但传递的参数和真正绑定在内部元素上不同

## el-tree只获取子叶节点的方法

getCheckedKeys(true) 这样避免选中父节点 导致后续新增子叶节点数据时会默认勾选

## ts的泛型是用在定义函数的时候，使用函数的时候才传真正的类型

https://blog.csdn.net/weixin_42960907/article/details/129424238

## 判断浏览器内核

https://cloud.tencent.com/developer/information/js%E5%88%A4%E6%96%ADedge%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8

## naiveui 无法使用base64作为图片下载地址（预览回显正常）

因为没有指定a.download

edge不支持createObjectURL创建的url不知道为什么

## disabled form优先级大于内部表单按钮的disabled优先级

## vue-tsc 带不带--noEmit都不会输出编译后的js

vue-tsc可以对ts和vue单文件进行类型检测 以及生成单文件组件的 `d.ts` 文件。

但是执行时并没有看到tsc生成类型文件（也许就是我们用的component.d.ts？）

真正编译的js需要靠vite build生成

## v-for与v-if在同一组件/元素上使用时 v-if优先级更高 因此if不能使用for里的元素

## css变量可以加important 但实际显示时以important的css变量展示的 但调试时显示的是后定义的css变量 火狐浏览器看是正确的

## 定义函数时使用/\*\*\*/写 注释 最终会在使用时 IDE直接提示参数

## el-table 的max-height 仅适用于 不含fixed=right fixed=right的表格

否则会出现表格滚动到底却展示不完整数据的问题 因为表格body的高度和表格一样了 而不是这种情况的时候 el-tablebody计算的高度是正确的 不含th

要改用height

(这属于特殊情况 以后测试) 因为正常情况下即便有fixed=right fixed=right 表格计算也正确

## 对象的key 不可以用`` 符号 但可以用单双引号

## const window = globalThis时 interface扩展的window变量的属性 没有了

这是由于 此时定义的window类型会变成 typeof window & globalThis 而globalThis上是没有那些自定义属性的

## satisfies 使用时前面的对象必须要没有定义类型而是自动推导出的

## el 日期选择器和日期时间选择器是同一个组件 type不同

## datepicker限制时分秒禁用 官网文档上没有的

https://www.jb51.net/javascript/33411958g.htm

https://juejin.cn/post/7155128587647975438

两种做法一种是disabled-hour

另外就是selectableRange

## 不要在template中对 数组的响应式变量使用reverse 因为他会改变原数组 导致无限触发响应式页面更新

可以修改成[`toReversed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)

## el-upload 文件回显时 如果是放在form-item里时 无需设置宽度 但是如果放在el-descriptions-item里时则要设置宽度否则会出现莫名滚动条

就算是给附件设置calc()计算宽度也不可以 除非包括他的元素声明了宽度 或者直接设置宽度xxpx

## v-if和鉴权自定义指令同时使用的bug

https://juejin.cn/post/7477529172937965594

https://blog.csdn.net/wujing_16/article/details/148735252

v-if父元素不能用template而要用 div 否则v-if还是会作用到子元素身上

## fetch 把响应头和响应体分开处理 接收到响应头第一个promise就会返回状态 里面负责处理响应体 所以return 处理响应体的promise

## Fetch 请求失败时的 Error 对象详解

当 [fetch](<javascript:void(0)>) 请求失败时，捕获的 `error` 对象可能包含以下字段：

#### 1. **核心字段**

| 字段名                       | 类型     | 说明                     |
| ---------------------------- | -------- | ------------------------ |
| [name](<javascript:void(0)>) | `string` | 错误类型标识             |
| `message`                    | `string` | 可读的错误描述           |
| `stack`                      | `string` | 错误堆栈信息（开发环境） |

#### 2. **常见错误类型及字段**

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="9de01088-066f-4204-99bc-73166dff8d02" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token control-flow">catch</span><span></span><span class="token">(</span><span>error</span><span class="token">:</span><span></span><span class="token">any</span><span class="token">)</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token console">console</span><span class="token">.</span><span class="token method property-access">log</span><span class="token">(</span><span class="token">"错误类型:"</span><span class="token">,</span><span> error</span><span class="token">.</span><span class="token property-access">name</span><span class="token">)</span><span class="token">;</span><span>
</span><span></span><span class="token console">console</span><span class="token">.</span><span class="token method property-access">log</span><span class="token">(</span><span class="token">"错误信息:"</span><span class="token">,</span><span> error</span><span class="token">.</span><span class="token property-access">message</span><span class="token">)</span><span class="token">;</span><span>
</span>  
<span></span><span class="token">// 特定错误类型的附加字段</span><span>
</span><span></span><span class="token control-flow">switch</span><span class="token">(</span><span>error</span><span class="token">.</span><span class="token property-access">name</span><span class="token">)</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">case</span><span></span><span class="token">'TypeError'</span><span class="token">:</span><span>
</span><span></span><span class="token console">console</span><span class="token">.</span><span class="token method property-access">log</span><span class="token">(</span><span class="token">"是否是网络错误:"</span><span class="token">,</span><span> error</span><span class="token">.</span><span class="token property-access">cause</span><span></span><span class="token">instanceof</span><span></span><span class="token known-class-name">NetworkError</span><span class="token">)</span><span class="token">;</span><span>
</span><span></span><span class="token control-flow">break</span><span class="token">;</span><span>
</span>  
<span></span><span class="token">case</span><span></span><span class="token">'AbortError'</span><span class="token">:</span><span>
</span><span></span><span class="token console">console</span><span class="token">.</span><span class="token method property-access">log</span><span class="token">(</span><span class="token">"是否由AbortController触发:"</span><span class="token">,</span><span> error</span><span class="token">.</span><span class="token property-access">cause</span><span></span><span class="token">instanceof</span><span></span><span class="token maybe-class-name">AbortSignal</span><span class="token">)</span><span class="token">;</span><span>
</span><span></span><span class="token control-flow">break</span><span class="token">;</span><span>
</span><span></span><span class="token">}</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

#### 3. 具体错误场景分析

| 错误场景        | 典型 `error.name` | 附加信息                           |
| --------------- | ----------------- | ---------------------------------- |
| **网络断开**    | `TypeError`       | `message: "Failed to fetch"`       |
| **DNS解析失败** | `TypeError`       | `message: "Failed to fetch"`       |
| **CORS违规**    | `TypeError`       | `message: "Failed to fetch"`       |
| **请求被中止**  | `AbortError`      | 通过 `AbortController.signal` 触发 |
| **SSL证书错误** | `TypeError`       | `message: "Failed to fetch"`       |
| **响应超时**    | `TimeoutError`    | 自定义超时逻辑产生                 |

#### 4. 在您的代码中的优化建议

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="9de01088-066f-4204-99bc-73166dff8d02" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">// 修改后的错误处理</span><span>
</span><span></span><span class="token control-flow">catch</span><span></span><span class="token">(</span><span>error</span><span class="token">:</span><span></span><span class="token">any</span><span class="token">)</span><span></span><span class="token">{</span><span>
</span><span></span><span class="token">// 统一处理超时标记</span><span>
</span><span>  timeout </span><span class="token">=</span><span></span><span class="token">true</span><span class="token">;</span><span>
</span>  
<span></span><span class="token">// 分类处理错误</span><span>
</span><span></span><span class="token">let</span><span> errorMessage </span><span class="token">=</span><span></span><span class="token">"请求失败"</span><span class="token">;</span><span>
</span>  
<span></span><span class="token control-flow">if</span><span></span><span class="token">(</span><span>error</span><span class="token">.</span><span class="token property-access">name</span><span></span><span class="token">===</span><span></span><span class="token">'AbortError'</span><span class="token">)</span><span></span><span class="token">{</span><span>
</span><span>    errorMessage </span><span class="token">=</span><span></span><span class="token">"请求超时"</span><span class="token">;</span><span>
</span><span></span><span class="token">}</span><span></span><span class="token control-flow">else</span><span></span><span class="token control-flow">if</span><span></span><span class="token">(</span><span>error</span><span class="token">.</span><span class="token property-access">message</span><span class="token">?.</span><span class="token method property-access">includes</span><span class="token">(</span><span class="token">'Failed to fetch'</span><span class="token">)</span><span class="token">)</span><span></span><span class="token">{</span><span>
</span><span>    errorMessage </span><span class="token">=</span><span></span><span class="token">"网络连接失败"</span><span class="token">;</span><span>
</span><span></span><span class="token">}</span><span></span><span class="token control-flow">else</span><span></span><span class="token control-flow">if</span><span></span><span class="token">(</span><span>error</span><span class="token">.</span><span class="token property-access">response</span><span class="token">?.</span><span>status</span><span class="token">)</span><span></span><span class="token">{</span><span>
</span><span>    errorMessage </span><span class="token">=</span><span></span><span class="token template-string template-punctuation">`</span><span class="token template-string">服务器错误 (</span><span class="token template-string interpolation">${</span><span class="token template-string interpolation">error</span><span class="token template-string interpolation">.</span><span class="token template-string interpolation property-access">response</span><span class="token template-string interpolation">.</span><span class="token template-string interpolation property-access">status</span><span class="token template-string interpolation">}</span><span class="token template-string">)</span><span class="token template-string template-punctuation">`</span><span class="token">;</span><span>
</span><span></span><span class="token">}</span><span>
</span>  
<span></span><span class="token dom">window</span><span class="token">.</span><span class="token property-access">$message</span><span class="token">.</span><span class="token method property-access">error</span><span class="token">(</span><span>errorMessage</span><span class="token">)</span><span class="token">;</span><span>
</span><span></span><span class="token console">console</span><span class="token">.</span><span class="token method property-access">error</span><span class="token">(</span><span class="token">"完整错误对象:"</span><span class="token">,</span><span></span><span class="token">{</span><span>
</span><span>    name</span><span class="token">:</span><span> error</span><span class="token">.</span><span class="token property-access">name</span><span class="token">,</span><span>
</span><span>    message</span><span class="token">:</span><span> error</span><span class="token">.</span><span class="token property-access">message</span><span class="token">,</span><span>
</span><span>    stack</span><span class="token">:</span><span> error</span><span class="token">.</span><span class="token property-access">stack</span><span class="token">,</span><span>
</span><span>    cause</span><span class="token">:</span><span> error</span><span class="token">.</span><span class="token property-access">cause</span><span></span><span class="token">// 浏览器新增的标准字段</span><span>
</span><span></span><span class="token">}</span><span class="token">)</span><span class="token">;</span><span>
</span>  
<span></span><span class="token control-flow">return</span><span></span><span class="token known-class-name">Promise</span><span class="token">.</span><span class="token method property-access">reject</span><span class="token">(</span><span>error</span><span class="token">)</span><span class="token">;</span><span>
</span><span></span><span class="token">}</span></code></div></div></pre>

### 重要注意事项

1. **浏览器兼容性** ：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="9de01088-066f-4204-99bc-73166dff8d02" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">// 安全访问新字段</span><span>
   </span><span></span><span class="token">const</span><span> errorCause </span><span class="token">=</span><span> error</span><span class="token">.</span><span class="token property-access">cause</span><span></span><span class="token">??</span><span> error</span><span class="token">.</span><span class="token property-access">reason</span><span></span><span class="token">??</span><span></span><span class="token">{</span><span class="token">}</span><span class="token">;</span></code></div></div></pre>

1. **超时处理问题** ： 您当前的超时实现有缺陷：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="9de01088-066f-4204-99bc-73166dff8d02" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">setTimeout</span><span class="token">(</span><span class="token">(</span><span class="token">)</span><span></span><span class="token arrow">=></span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token control-flow">if</span><span></span><span class="token">(</span><span class="token">!</span><span>timeout</span><span class="token">)</span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token control-flow">throw</span><span></span><span class="token">new</span><span></span><span class="token known-class-name">Error</span><span class="token">(</span><span class="token">"请求超时"</span><span class="token">)</span><span class="token">;</span><span></span><span class="token">// 这个错误无法被捕获！</span><span>
   </span><span></span><span class="token">}</span><span>
   </span><span></span><span class="token">}</span><span class="token">,</span><span> options</span><span class="token">.</span><span class="token property-access">timeout</span><span class="token">)</span><span class="token">;</span></code></div></div></pre>

    **正确实现** ：

<pre><div class="answer-code-wrap"><div class="answer-code-wrap-header"><div class="answer-code-wrap-header-left">typescript</div><div class="answer-code-wrap-header-right"><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-insert-line1"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-copy-line"></use></svg></span></span><span class="ai-button noBg false selected dark undefined"><span role="img" class="anticon yunxiao-icon undefined"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#yunxiao-additive-code-file-line"></use></svg></span></span></div></div><div node="[object Object]" class="answer-code-wrap-body" requestid="9de01088-066f-4204-99bc-73166dff8d02" tasktype="FREE_INPUT"><code class="language-tsx"><span class="token">const</span><span> controller </span><span class="token">=</span><span></span><span class="token">new</span><span></span><span class="token maybe-class-name">AbortController</span><span class="token">(</span><span class="token">)</span><span class="token">;</span><span>
   </span><span></span><span class="token">const</span><span> timeoutId </span><span class="token">=</span><span></span><span class="token">setTimeout</span><span class="token">(</span><span class="token">(</span><span class="token">)</span><span></span><span class="token arrow">=></span><span> controller</span><span class="token">.</span><span class="token method property-access">abort</span><span class="token">(</span><span class="token">)</span><span class="token">,</span><span> options</span><span class="token">.</span><span class="token property-access">timeout</span><span class="token">)</span><span class="token">;</span><span>
   </span>
   <span></span><span class="token control-flow">try</span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token">const</span><span> response </span><span class="token">=</span><span></span><span class="token control-flow">await</span><span></span><span class="token">fetch</span><span class="token">(</span><span>url</span><span class="token">,</span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token spread">...</span><span>options</span><span class="token">,</span><span>
   </span><span>    signal</span><span class="token">:</span><span> controller</span><span class="token">.</span><span class="token property-access">signal</span><span>
   </span><span></span><span class="token">}</span><span class="token">)</span><span class="token">;</span><span>
   </span><span></span><span class="token">clearTimeout</span><span class="token">(</span><span>timeoutId</span><span class="token">)</span><span class="token">;</span><span>
   </span><span></span><span class="token">// ...</span><span>
   </span><span></span><span class="token">}</span><span></span><span class="token control-flow">catch</span><span></span><span class="token">(</span><span>error</span><span class="token">)</span><span></span><span class="token">{</span><span>
   </span><span></span><span class="token">clearTimeout</span><span class="token">(</span><span>timeoutId</span><span class="token">)</span><span class="token">;</span><span>
   </span><span></span><span class="token control-flow">if</span><span></span><span class="token">(</span><span>error</span><span class="token">.</span><span class="token property-access">name</span><span></span><span class="token">===</span><span></span><span class="token">'AbortError'</span><span class="token">)</span><span></span><span class="token">{</span><span>
   </span><span>    error</span><span class="token">.</span><span class="token property-access">message</span><span></span><span class="token">=</span><span></span><span class="token">"请求超时"</span><span class="token">;</span><span></span><span class="token">// 标准化错误消息</span><span>
   </span><span></span><span class="token">}</span><span>
   </span><span></span><span class="token">// ...</span><span>
   </span><span></span><span class="token">}</span></code></div></div></pre>

### 错误类型参考表

| 错误名        | 触发场景     | 是否可恢复 |
| ------------- | ------------ | ---------- |
| `TypeError`   | 网络层错误   | 部分可恢复 |
| `AbortError`  | 请求被中止   | 可重试     |
| `SyntaxError` | JSON解析失败 | 需修复数据 |
| `RangeError`  | 无效URL      | 需修复代码 |

> **总结** ：`fetch` 的错误处理需要区分网络错误、HTTP错误和业务错误。建议使用 `AbortController` 实现可靠超时，并分类处理不同错误类型以提供更好的用户体验。

## 超时的fetch 需要手动取消请求

```javascript
 let timeout = false

  const controller = new AbortController()
  try {
    setTimeout(() => {
      if (!timeout) {
	// 这里的abort() 是会触发catch的 nb 不需要手动去做发布订阅的操作
        controller.abort()
        window.$message.error("请求超时")
        throw new Error("请求超时")
      }
    }, options.timeout)
    const response = await fetch(
      (options.baseURL || options.baseURL === "" ? options.baseURL : baseURL) +
        (params ? options.url + "?" + params : options.url),
      { ...(options as any), signal: controller.signal }
    )
    console.log(response)
    timeout = true
}
```

## fetch请求设置mode 可以手动选择是否访问跨域的接口 cache设置请求缓存

## auto compete = new - password可以阻止密码自动填充

如果我们写修改密码时 浏览器会把 两个密码框当做 用户名和密码问是否要保存 而

```html
<el-input autocomplete="username" style="display: none" />
```

的写法则会提示是否更新密码 而不是是否保存用户名密码

浏览器之所以会提示，核心是检测了input上是否有type=password 和input是否在form内无关

解决这个的办法两种 第一种放三个el-input 另外两个才是我们真正填密码的 第二种是用原生input 两个 这两种情况都会提示更新密码而非保存

current-password会填充密码 而new-password不会

另外el-input 如果只放一个 保存时会提示 是否保存用户名密码 此时用户名密码相同 而input只放一个不会这样（在form内） 在form外两个都不会这样

浏览器自动填充也会触发input rules校验

## 计算属性的函数不能用 async函数 否则结果会返回promise 在template里显示 promise object的文字

计算属性本身就是函数 return 一个ref 只是template会自动解析ref.value 如果是async函数 value就变成promise对象了

## dayjs 计算某个月份有多少天

**dayjs**(**)**.**daysInMonth**(**)**;

## echarts vue3不展示 tooltip

https://blog.csdn.net/wintercee/article/details/148540245

## echarts dispatchAction 默认数据只展示不为0的

错误的 改了echarts容器高度后 发现又显示数据为0的了，应该还是和容器高度有关系，但并不是越矮的越好

## echarts的事件绑定 mouseover 和mouseout是鼠标放在具体数据点上触发的

相对图表整体做绑定要用 `globalover`/`globalout`

https://zhuanlan.zhihu.com/p/674810734

比如说折线图触发mouseover的时机是鼠标移到点位上

echarts的事件绑定和onclick onxx类似 会覆盖 而不像addEventListener 会叠加

## watch监听多个数据源时，每个数据源更新都会触发watch回调 并且数据列表 每个都是最新的数据，而不是说更新的才现实，没更新的不显示。

## dispatchAction 实现 饼图高亮展示

https://echarts.apache.org/handbook/zh/concepts/event/

如果想要鼠标自己的高亮与自动的不冲突则需要定义每次鼠标进入图标时清空所有的高亮

## 饼图设置容器高度为100% 会导致高度变高？

flex 元素中有三个元素 设置其中一个元素高度 其余两个元素100%高度 在两个元素的其中一个元素放置饼图 会导致高度超出设置的元素的高度

原因未知 需要测试flex 多个元素只设置一个高度的情况

## vite项目中 index.html中 不可用vite.config.js中配置的reslove别名路径

否则index最终编译的代码会把 reslove别名作为字符串 但是用src/assets 就没问题 最终会编译成正确的目录

el-options的label是select框中选中后回显的文字 如果el-options的插槽不写任何内容 那么插槽文字默认等于label 如果插槽自己配了 有可能插槽与select选中文字不同 但是配置插槽不配置label的话默认label=value而不是插槽
