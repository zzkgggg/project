import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';

const app=createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
export default {
    name:'main',
    // 后端地址
    url:"http://127.0.0.1:9090"
}
