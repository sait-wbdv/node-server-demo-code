"use strict";
import http from "http";

const host = "localhost";
const port = 3000;

// DONE: Create a server
const server = http.createServer((request, response) => {
  response.writeHead(200);
  // render data
  response.end("This is a running server!");
});

// DONE: Set the server to listen
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port} `);
});
