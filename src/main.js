import { createApp } from 'vue'

import App from './App.vue'

import '../reset.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'amfe-flexible'
import ElementPlus from 'element-plus'
// 创建Vue应用程序并将其挂载到HTML元素上
const app = createApp(App)
app.use(ElementPlus)
app.mount(`#app`)
