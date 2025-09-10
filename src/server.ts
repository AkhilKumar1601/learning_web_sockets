import WebSocket, { WebSocketServer } from "ws";

const server = new WebSocketServer( { port : 8080 });

console.log("WebSocket server running on ws://localhost:8080");

server.on("connection",(socket : WebSocket) => {
  console.log("New Client connected")

  socket.send("Welcome to web Socket server");

  socket.on("message",(message : string) => {
    console.log(message);
  });

  socket.on("close", () => {
    console.log("Client Disconnected");``
  })
})