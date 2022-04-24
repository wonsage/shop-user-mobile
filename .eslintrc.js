module.exports = {
  env: {
    // 开启 Vue 3 中的全局对象，模块内使用无需手动引入，诸如 defineProps 等
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended', // 修改为Vue3推荐配置
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off' // 关闭组件名的多词要求
  }
}
