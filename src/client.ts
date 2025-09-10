import WebSocket from "ws";

const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
  console.log("Connected to server");

  socket.send("Hello from Client");
})

socket.on("message",(data) => {
  console.log("Server says :",data.toString());
})

socket.on("close", () => {
  console.log("Disconnected from the server");
})
