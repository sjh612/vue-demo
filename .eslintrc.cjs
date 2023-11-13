module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [`google`, `eslint:recommended`, `plugin:vue/vue3-essential`, `prettier`, `plugin:prettier/recommended`],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [`.eslintrc.{js,cjs}`],
      parserOptions: {
        sourceType: `script`,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: `latest`,
    sourceType: `module`,
  },
  plugins: [`vue`, `prettier`, `simple-import-sort`],
  rules: {
    'block-scoped-var': `error`, // 强制变量在其作用域内使用
    'class-methods-use-this': [
      // 强制class使用this
      `error`,
      { exceptMethods: [] },
    ],
    'no-debugger': `warn`,
    'no-console': `warn`,
    'no-undef': `off`,
    'no-unused-vars': `off`,
    'no-alert': `error`, // 禁用alert confirm
    'no-eval': `error`, // 金庸eval
    'no-multi-spaces': `error`, // 禁止使用多个空格
    'no-multi-str': `error`, // 禁止使用多行字符串
    'no-new-func': `error`, // 禁止使用new Function
    'no-new-wrappers': `error`, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-return-assign': `error`, // 禁止在return 中使用赋值语句
    'no-return-await': `error`, // 禁止不必要的return await
    radix: `error`, // 强制paserInt使用基数参数

    // 以下是代码风格
    semi: [`error`, `never`], // 没有分号
    'array-bracket-spacing': [`error`, `never`], // 中括号内禁用多余的空格或空行
    'array-bracket-newline': [`error`, `consistent`], // 中括号使用一致的换行规则
    'array-element-newline': [`error`, `consistent`], // 数组间使用一致的换行规则
    'block-spacing': `error`, // 左花括号前后必须有一个空格
    'comma-dangle': [`error`, `only-multiline`], // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号
    'comma-spacing': [`error`, { before: false, after: true }], // 逗号前禁止使用空格，逗号后使用必须一个或多个空额
    'comma-style': [`error`, `last`], // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'computed-property-spacing': [`error`, `never`], // 禁止在计算属性中括号中使用空格
    'eol-last': [`error`, `always`], // 禁止文件末尾存在空行
    indent: [`error`, 2], // 强制使用两个空格换行
    // 'id-length': ["error", { min: 3, max: 30 }], // 强制标识符的最大为20和最小长度为3
    'jsx-quotes': [`error`, `prefer-single`], // 强制所有不包含单引号的 JSX 属性值使用单引号
    'key-spacing': [`error`, { beforeColon: false, afterColon: true }], // 要求对象字面量冒号前无空格，冒号与值之间有一个空格
    'keyword-spacing': [`error`, { before: true, after: true }], // 强制关键字前后必须有一个空格
    'new-cap': `error`, // 要求构造函数首字母大写
    'no-console': `off`,
    'no-array-constructor': `error`, // 禁止使用Array构造函数
    'no-new-object': `error`, // 禁用Object构造函数
    'no-lonely-if': `error`, // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-multi-assign': `error`, // 禁止连续赋值
    'no-multiple-empty-lines': [`error`, { max: 2 }], // 强制连续换行不得大于两行
    'no-trailing-spaces': [`error`, { skipBlankLines: false, ignoreComments: false }], // 禁止在空行和块注释中使用空白符
    'no-unneeded-ternary': `error`, // 禁止在有更简单的表达式时使用三元操作符
    'no-whitespace-before-property': `error`, // 禁止点操作符前后有空白
    'nonblock-statement-body-position': [`error`, `beside`], // 禁止单行语句前有换行
    'object-curly-spacing': [`error`, `always`], // 要求花括号内有空格
    quotes: [`error`, `backtick`], // 要求尽可能地使用反引号
    'semi-spacing': [`error`, { before: false, after: true }], // 强制分号之后有空格，禁止分号之前有空格
    'space-before-blocks': `error`, // 要求块之前有空格
    'space-before-function-paren': `off`, // 要求function函数左圆括号之前有一个空格
    'space-in-parens': [`error`, `never`], // 强制圆括号内不能有空格
    'space-unary-ops': `error`, // 强制 words 一元操作符后空格和 nonwords 一元操作符之前或之后的空格的一致性

    // es6
    'arrow-spacing': `error`, // 强制箭头函数箭头左右有一个空格
    'no-var': `error`, // 禁用var
    'prefer-template': `error`, // 禁用字符串连接，使用模板字符串
    'prefer-const': `error`, // 不变量使用const

    'generator-star-spacing': `warn`,
    'no-global-assign': [`error`],
    'vue/no-unused-components': `off`,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/no-v-html': `off`,
    'no-dupe-keys': `off`,
    indent: `off`,
    'vue/html-self-closing': [
      `error`,
      {
        html: {
          void: `always`,
          normal: `always`,
          component: `always`,
        },
        svg: `always`,
        math: `always`,
      },
    ],
    'vue/component-name-in-template-casing': [
      `error`,
      `kebab-case`,
      {
        registeredComponentsOnly: false,
      },
    ],
    // 排序规则
    'simple-import-sort/imports': [
      `error`,
      {
        groups: [
          [`^vue$`, `^vue-router$`, `^ant-design-vue$`, `^echarts$`], // 你可以根据需要添加更多的内置模块
          [`.*\\.vue$`], // .vue 文件
          [`.*/assets/.*`, `^@/assets$`],
          [`.*/config/.*`, `^@/config$`],
          [`.*/hooks/.*`, `^@/hooks$`],
          [`.*/plugins/.*`, `^@/plugins$`],
          [`.*/router/.*`, `^@/router$`],
          [`^@/services$`, `^@/services/.*`],
          [`.*/store/.*`, `^@/store$`],
          [`.*/utils/.*`, `^@/utils$`],
          [`^`],
          [`^type `],
        ],
      },
    ],
  },
}
