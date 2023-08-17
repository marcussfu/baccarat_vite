<!-- <script setup>
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
</style> -->

<!-- <template>
  <router-view />
</template> -->

<template>
  <div id="app">
    <router-view v-if="isH5" name="h5"></router-view>
    <router-view v-else name="pc"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  setup() {
    const isH5 = ref(true);

    onMounted(() => {
      isH5.value = checkH5() ? true : false;
      console.log("isH5", isH5.value);
    });

    const checkH5 = () => {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBroswer|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
      );
      return flag;
    };

    return {
      isH5,
    };
  },
};
</script>
