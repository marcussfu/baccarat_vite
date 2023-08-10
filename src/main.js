import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import socket from './socket'

const app = createApp(App)
app.provide('socket', socket)
app.mount('#app')
