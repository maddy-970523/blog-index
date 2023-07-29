import { createApp } from 'vue'
import router from "@/router/index.js";
import './style.css'
import "./assets/font/iconfont.js"
import App from './App.vue'

createApp(App).use(router).mount('#app')
