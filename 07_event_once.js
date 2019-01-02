const EventEmitter = require('events')

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent()

ce.once('test-once', () => {
    console.log('this is a test-once')
})

setInterval(() => {
    ce.emit('test-once')
}, 1000)