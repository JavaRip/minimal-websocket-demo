import express from 'express';
import WebSocket, { WebSocketServer } from 'ws';

const app = express();

const websocketPort = 7017;
const serverPort = 8082

const wss = new WebSocketServer({ port: websocketPort });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });
  ws.send('hello from the server side');
});

app.use(express.static('./client/'));

app.listen(serverPort);
console.log(`listening on port ${serverPort}`);
console.log(`websockerPort running on ${websocketPort}`);
