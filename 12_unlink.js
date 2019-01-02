const fs = require("fs")

fs.unlink("./buffertest.txt", err => {
    if (err) throw err
    console.log("done")
})