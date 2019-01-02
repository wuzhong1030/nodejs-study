const EventEmitter = require('events')

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent()

ce.on('test', (param) => {
    console.log(`param is ${param}`)
})

ce.emit('test', 'xxxxx')