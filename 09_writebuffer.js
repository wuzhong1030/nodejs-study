const fs = require("fs")

const content = Buffer.from("this is 2 file")

fs.writeFile("./testbuffer.txt", content, err => {
    if (err) throw err
    console.log("done")
})