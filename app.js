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
// const EventEmitter = require('events')
//
// const Logger = require('./logger')
// const logger = new Logger();
//
// logger.on(`messageLogged`, (arg) => {
//   console.log(`${arg.url} is the url from logger`)
// })
//
// // Adding an event with .emit (this iterates over all listeners and calls them synchronously)
// // emitter.emit('Greeting', "Carson")
//
//
//
// logger.log('Hello')
// --------------------------------------
// WORKING WITH HTTP MODULE
// --------------------------------------

// const http = require ('http')
//
// // this server is actually an instance of EventEmitter
// // http.Server < net.Server < EventMitter
// const server = http.createServer()
//
// // 'connection' is convention/ in the docs for this .on method. The method also takes a callback function as its second argument.
// // This is an event handler
// server.on('connection', (socket) => {
//   console.log('New connection...')
// } )
//
// server.listen(3000)
//
// console.log('Listening on port 3000...')
// // When we run the application, we can see the above console log. When we navigate to the port that we're listening to, we get the 'New connection...' message


const http = require('http');

const server = http.createServer((req, resp) => {
  if (req.url === '/'){
    resp.write('Hello World')
    resp.end()
  }

  if (req.url === '/api/example'){
    resp.write(JSON.stringify(['usually an array of DB objects', 'but now just an array of strings']))
    resp.end()
  }
})

// we use express so we don't have to worry about piling on if statements to compensate for how many routes there are on our server

server.listen(3000)


console.log('Listening on port 3000...')
