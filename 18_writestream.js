const fs = require("fs")

const ws = fs.createWriteStream("./writestram.txt")

const timer = setInterval(() => {
    const radom = parseInt(Math.random() * 10)
    if (radom < 8) {
        console.log(radom)
        ws.write(radom + '')
    } else {
        clearInterval(timer)
        ws.end()
    }
}, 500)

ws.on("finish", () => {
    console.log("finish")
})