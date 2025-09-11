import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port:8080 });

wss.on("connection", (ws) => {
  console.log("Client is connected");

  ws.send("Hello There");

  ws.on("message",(message) => {
    console.log(message.toString());

    if(message.toString() === "ping") {
      ws.send("pong");
    }
  })
})