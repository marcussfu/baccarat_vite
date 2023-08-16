import { VueSignalR } from "@dreamonkey/vue-signalr";
import { HubConnectionBuilder } from "@microsoft/signalr";

import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
// import socket from './socket'
import router from "./router/index";

const connection = new HubConnectionBuilder().withUrl("http://localhost:5214/chatHub").build();

const app = createApp(App);
app.use(router);
app.use(VueSignalR, { connection });
// app.provide('socket', socket)
app.mount("#app");
