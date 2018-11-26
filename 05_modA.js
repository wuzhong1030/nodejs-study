module.exports.test = 'A'

var modB = require('./06_modB')

console.log('modA: ', modB.test)

module.exports.test = 'AA'