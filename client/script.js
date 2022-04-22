const connection = new WebSocket('ws://localhost:7017');

connection.onopen = () => {
  console.log('connection opened successfully');
  connection.send('hello from the client side');
}

connection.onerror = error => {
  console.log(`connection failed: ${JSON.stringify(error)}`);
}

connection.onmessage = e => {
  console.log(e.data);
}

