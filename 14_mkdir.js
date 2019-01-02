const fs = require("fs")

fs.mkdir("testdir", err => {
    if (err) throw err
    console.log("done")
})