<script setup>
import { ref, onMounted, inject } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Chat from './components/Chat.vue';

onMounted(() => {
  const socket = inject("socket");
  const ws = socket("websocket/message");

  let receiveData = ref("");
  let aa = '23232323';
  ws.onopen = () => {
    let msg = "hello world";
    // {
    //   type: 'screen',
    //   classId: 1
    // }
    // ws.send(JSON.stringify(msg));
    console.log('open connection');
  };
  ws.onmessage = ({ data }) => {
    aa = data;
    receiveData.value = data;
    console.log('receive: ', receiveData.value);
  };
  ws.onclose = () => {
    console.log('close connection');
  };
});
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue123" /> -->
  <Chat :receiveData="aa" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
