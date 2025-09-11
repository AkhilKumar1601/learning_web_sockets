import WebSocket, { WebSocketServer } from "ws";

const server = new WebSocketServer( { port : 8080 } );
console.log("You are now connected with the Web Connected Server :- 8080");

server.on("connection",(socket : WebSocket) => {
  console.log("You are connected with Client");
  
  const buf = Buffer.from([1,3,5]);
  socket.send(buf);

  socket.on("message",(data) => {
    if ( typeof data === "string") {
       console.log(`Received data from the client is of type :- string`, data);
    } else if ( data instanceof Buffer) {
       console.log(`Received binary data`, data);
       console.log(`Received binary data of length`, data.length);
       socket.send(`Received binary data of length ${data.length}`);
    }  
  })

    socket.on("close",() => {
      console.log("Client disconnected");
    })
  
})