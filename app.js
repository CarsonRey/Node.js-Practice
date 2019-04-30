// This is how to make a basic server with node.js

// http is a core module in node.js so we can just call it here without having to do 'npm install'
const http = require('http');

const hostname = '192.168.86.29';
const port = 3000;

// we're calling .createServer on the module (which I'm guessing is a native function included in node.js --  included in the http module according to the video)
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log('Server started on port ' + port)
})

// From here we can:
// run 'node app' to run the file
// Access the response by going to localhost:3000 or hostname:3000
