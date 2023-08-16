<template>
  <div>
    <ul>
      <li v-for="item of msgList" :key="item.id">
        <span>{{ item.username }}：{{ item.message }}</span>
      </li>
    </ul>
    <input type="text" placeholder="请输入消息" v-model="msg" />
    <button @click="handleSendBtnClick">发送</button>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
//import { useWebSocket } from '../hooks'
import * as signalR from "@microsoft/signalr";
import { useSignalR } from "@dreamonkey/vue-signalr";

export default {
  name: "Home",
  setup() {
    const router = useRouter();
    //const ws = useWebSocket(handleMessage)
    const state = reactive({
      msg: "",
      msgList: [],
    });

    let username = "";
    let hub = reactive({
      connection: {},
      HubConnId: "",
      resultInfo: {},
    });

    /*const connectionServer = (hub.connection = 
      new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5214/chatHub")
        .build())
    connectionServer
      .start()
      .then(() => {
        console.log("connection success");
      })
      .catch((error) => {
        console.log("connection fail");
      })
    connectionServer.onclose((error) => {
      console.log("connection close");
    })*/

    //connectionServer.on()

    const signalr = useSignalR();

    onMounted(() => {
      username = localStorage.getItem("username");

      if (!username) {
        router.push("/login");
        return;
      }
    });

    const handleSendBtnClick = () => {
      /*const _msg = state.msg

      if (!_msg.trim().length) {
        return
      }

      ws.send(
        JSON.stringify({
          id: new Date().getTime(),
          user: username,
          dateTime: new Date().getTime(),
          msg: state.msg,
        })
      )

      state.msg = ''*/

      signalr.invoke("SendMessage", username, state.msg);
    };

    signalr.on("ReceiveMessage", (username, message) => {
      state.msgList.push({
        id: new Date().getTime(),
        username: username,
        message: state.msg,
      });
    });

    function handleMessage(e) {
      // console.log(e)
      const _msgData = JSON.parse(e.data);
      state.msgList.push(_msgData);
    }

    return { ...toRefs(state), handleSendBtnClick };
  },
};
</script>
