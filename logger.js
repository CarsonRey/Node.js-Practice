const EventEmitter = require('events')



// We want to create our own class that inherits (via 'extends') from the EventEmitter class so we can use its given methods and add our own customizations (like sending an HTTP request)

  class Logger extends EventEmitter {
    // functions inside of a class are called methods
    log(message){
      console.log(message)

      // We raise an event in this method so that it will automatically iterate over any listeners where it's called (possibily other modules where it's imported) and
      this.emit('messageLogged', {id: 1, url:'hello.com'})
    }
  }

module.exports = Logger;
