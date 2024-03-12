"use strict";
import http from "http";

// DONE: set host and port as variables
const host = "localhost";
const port = 3000;

// DONE: Extract server message into it's own function
const serverMessageListener = (req, res) => {
  res.writeHead(200);
  // render data
  res.end("This is better server code running!");
};

// DONE: Create a server
const server = http.createServer(serverMessageListener);

// DONE: Set the server to listen
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port} `);
});
