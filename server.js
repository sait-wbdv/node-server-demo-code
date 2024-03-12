"use strict";
import http from "http";
import fs from "fs";
import { pageData } from "./pageData.js";
// DONE: set host and port as variables
const host = "localhost";
const port = 3000;

const serverMessageListener = (req, res) => {
  res.writeHead(200);
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

// const server = http.createServer(htmlMessageListener);

// DONE: serve the index.html file
const server = http.createServer((req, res) => {
  // parse the path for the html file
  let filePath = "." + req.url;
  // set the path to be equal to where it's served
  if (filePath === "./") {
    filePath = "./index.html";
  }
  // read the file and serve it to the client
  fs.readFile(filePath, (error, content) => {
    // send content
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port} `);
});
