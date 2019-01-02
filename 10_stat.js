const fs = require("fs")

fs.stat("./10_stat.js", (err, stat) => {
    if (err) throw err
    console.log(stat.isDirectory())
    console.log(stat.isFile())
    console.log(stat)
})