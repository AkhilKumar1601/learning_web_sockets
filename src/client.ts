import WebSocket, { WebSocketServer } from "ws";
const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
  console.log("You are now connected with server");

  const arr = new Uint8Array([1,3,6]);
  socket.send(arr);
  console.log("Send the binary data to server", arr.length);
})

socket.on("message",(data) => {
 if (typeof data === "string") {
  console.log("Data is of string that is sent by the server:",data)
 } else if (data instanceof Buffer) {
  console.log("Server sent the binary :", data)
 }
})

socket.on("close",() => {
  console.log("Disconnected from server");
})