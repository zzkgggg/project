import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import qs from 'qs'
// import 'lib-flexible'

const app=createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
app.config.globalProperties.$http = axios
app.config.globalProperties.$qs=qs
export default {
    name:'main',
    // 后端地址
    url:"http://192.168.50.105:8899"
}
