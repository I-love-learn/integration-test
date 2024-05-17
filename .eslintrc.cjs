module.exports = {
    env: {
      // 环境 针对哪些环境的语言 window
      browser: true,
      es2021: true, //new Promise
      node: true
    },
    extends: [
      // 继承了哪些规则，别人写好的规则拿来用
      "eslint:recommended",
      "plugin:vue/vue3-essential", // eslint-plugin-vue
      "plugin:@typescript-eslint/recommended", // typescript 规则
      "@vue/eslint-config-prettier", //或者 @vue/prettier
      "./.eslintrc-auto-import.json"
    ],
    overrides: [],
    // 可以解析.vue文件
    parser: "vue-eslint-parser", // esprima babel-eslint @typescript-eslint/parser
    parserOptions: {
      parser: "@typescript-eslint/parser", // 解析ts文件的
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off", //组件命名校验关闭
      // 自定义规则// 自带的prettier规则
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
  }
  