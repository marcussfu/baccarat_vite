<script setup>
import { ref, inject } from "vue";
const socket = inject("socket");
let message = ref("");

const sendMessage = () => {
  const ws = socket("websocket/message");
  console.log("AAAAAAA", message);
  ws.send(message);
};
</script>

<template>
  <div class="card">
    <input v-model="message" placeholder="edit me" />
    <button type="button" @click="sendMessage">SEND</button>
  </div>
</template>