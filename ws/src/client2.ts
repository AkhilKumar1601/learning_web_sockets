import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8080");

ws.on("open",() => {
  console.log("Welcome to node Client!");

  ws.send("Hello, I am from Node.");
})

ws.on("message", (data) => {
  console.log("📩 Broadcast message received in Node client:", data.toString());
});

ws.on("close",() => {
  console.log("Disconnected from Node.")
})