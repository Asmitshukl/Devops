import { WebSocketServer } from "ws";

const wss=new WebSocketServer({port:8000});

wss.on('connection',function connection(ws){
    ws.on('message',function message(data){
        console.log("recieved data" + data);
        ws.send("hi there from the server")
    })
})