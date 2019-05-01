// This is how to make a basic server with node.js

// http is a core module in node.js so we can just call it here without having to do 'npm install'
// const http = require('http');
// // 'file system' is also a core module
// const fs = require('fs');
//
// const hostname = '192.168.86.29';
// const port = 3000;
//
//
// // stands for "file system"
// fs.readFile('index.html', (err, html) => {
//   if(err){
//     throw err;
//   }
//   // we're calling .createServer on the module (which I'm guessing is a native function included in node.js --  included in the http module according to the video)
//   const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     // we change from text/plain to text/html to read the html that we're writing on line 19
//     res.setHeader('Content-Type', 'text/html')
//     res.write(html)
//     res.end()
//   })
//
//   server.listen(port, hostname, () => {
//     console.log('Server started on port ' + port)
//   })
//
// })

// From here we can:
// run 'node [filename]' to run the file
// Access the response by going to localhost:3000 or hostname:3000

// --------------------------------------
// WORKING WITH EVENTS MODULE
// --------------------------------------

// we grab the event EventEmitter class from the events module
const EventEmitter = require('events')

const Logger = require('./logger')
const logger = new Logger();

logger.on(`messageLogged`, (arg) => {
  console.log(`${arg.url} is the url from logger`)
})

// Adding an event with .emit (this iterates over all listeners and calls them synchronously)
// emitter.emit('Greeting', "Carson")



logger.log('Hello')
