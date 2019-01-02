const fs = require("fs")
const promisify = require("util").promisify

const read = promisify(fs.readFile)

read("./19_promisify.js").then((data) => {
    console.log(data.toString())
}).catch(err => {
    console.log(err)
})