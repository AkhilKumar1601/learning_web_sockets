//Whenever new client(websockets) are connected send them Greeting.
//Message counter -> keep track how many message is sent.

import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer( { port : 8080 } );
console.log("Connected with Web Socket Server :- 8080");

wss.on("connection",(ws : WebSocket) => {
   ws.send("Welcome to web socket server");

   let counter = 0;

   ws.on("message",(message : WebSocket.RawData) => {
    console.log(message);
    ws.send(message);
    counter += 1;
    ws.send(`You have sent ${counter} messages so far.`)
   })

   ws.on("close",() => {
    console.log("Server disconnected");
   })
})