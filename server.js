"use strict";
import http from "http";
import { pageData } from "./pageData.js";
// DONE: set host and port as variables
const host = "localhost";
const port = 3000;

// DONE: Extract server message into it's own function
const serverMessageListener = (req, res) => {
  res.writeHead(200);
  // render data
  res.end("This is better server code running!");
};

const htmlMessageListener = (req, res) => {
  // set the header
  res.setHeader("Content-Type", "text/html");
  // write the status code to the head
  res.writeHead(200);
  // send it some html
  res.end(pageData);
};

// const server = http.createServer(serverMessageListener);

// DONE: Create a server that serves html
const server = http.createServer(htmlMessageListener);

server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port} `);
});
