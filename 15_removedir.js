const fs = require("fs")

fs.rmdir("./testdir", err => {
    if (err) throw err
    console.log("done")
})