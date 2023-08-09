let client = null
const connectSocket = (topic) => {
  const baseUrl = import.meta.env.VITE_APP_WS_URL
  const wsUrl = `ws://${baseUrl}/${topic}/` 
  if (client) {
    console.log(client);
    return client
  } else {
    client = new WebSocket(wsUrl)
  }
  return client

}

export default connectSocket