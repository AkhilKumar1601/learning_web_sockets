import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [message,setMessage] = useState("");
  const [socket,setSocket] = useState<WebSocket | null>(null)

  function sendMessage() {
    if(socket) {
      socket.send(message);
      setMessage("");
    }
  } 

  useEffect(() => {
     const ws = new WebSocket("ws://localhost:8080");
     
     ws.onopen = () => {
      setSocket(ws);
      ws.send("Hello from browser");
     }

     ws.onmessage = (e) => {
      alert(e.data);
     }

     return () => {
      ws.close();
     }
  },[])

  return (
   <div>
    <input
    type="text"
    placeholder="Enter the message you want to send"
    onChange={e => setMessage(e.target.value)}     
    value={message}
    />
    <button onClick={sendMessage} disabled={!socket}>Send Message</button>
   </div>
  )
}

export default App
