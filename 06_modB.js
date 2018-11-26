module.exports.test = 'B'

var modA = require('./05_modA')

console.log('modB: ', modA.test)

module.exports.test = 'BB'