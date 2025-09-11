import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer( { port : 8080 } );

wss.on("connection",(ws : WebSocket) => {
  console.log("Welcome to WebSocker Server!");

  ws.on("message",(data : WebSocket.RawData) => {
    wss.clients.forEach((client) => {
     if (client.readyState === WebSocket.OPEN) {
      client.send(data.toString());
     }
    })
  })

  ws.on("close",() => {
    console.log("Server Disconnected");
  })
})