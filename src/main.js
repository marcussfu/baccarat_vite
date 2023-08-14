import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
// import socket from './socket'
import router from './router/index'

const app = createApp(App)
app.use(router)
// app.provide('socket', socket)
app.mount('#app')
