import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import 'postcss-pxtorem'
import './style/base.css'
import Vant from 'vant' // vant 组件库
import 'vant/lib/index.css' // vant 的样式

const app = createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')
