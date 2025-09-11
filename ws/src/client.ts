import WebSocket from "ws";

// Connect to the server
const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("✅ Connected to server");
  ws.send("Hello from the Node client!");
});

ws.on("message", (message) => {
  console.log("📩 Message from server:", message.toString());
});

ws.on("close", () => {
  console.log("❌ Disconnected from server");
});

ws.on("error", (err) => {
  console.error("⚠️ WebSocket error:", err);
});
