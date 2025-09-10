import WebSocket from "ws";

const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
  console.log("Connected to server");

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  socket.send(`Client Generated the Random number : ${randomNumber  }`);
})

socket.on("message",(data) => {
  console.log("Server says :",data.toString());
})

socket.on("close", () => {
  console.log("Disconnected from the server");
})
