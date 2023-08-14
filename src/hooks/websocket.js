
const useWebSocket = (handleMessage) => {
  const baseUrl = import.meta.env.BASE_URL;
  const port = import.meta.env.WS_PORT;
  const wsUrl = `ws://${baseUrl}:${port}/`;
  const ws = new WebSocket(wsUrl);

  const init = () => {
    bindEvent();
  };

  const bindEvent = () => {
    ws.addEventListener("open", handleOpen, false);
    ws.addEventListener("close", handleClose, false);
    ws.addEventListener("error", handleError, false);
    ws.addEventListener("message", handleMessage, false);
  };

  const handleOpen = (e) => {
    console.log("websocket open", e);
  };
  const handleClose = (e) => {
    console.log("websocket close", e);
  };
  const handleError = (e) => {
    console.log("websocket error", e);
  };

  init();

  return ws;
};

export default useWebSocket;
