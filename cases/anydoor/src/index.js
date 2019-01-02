const http = require("http")
const config = require("./config")

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.write("<html><body><span style='color: red'>Hello world</span></body></html>")
    res.end()
})

server.listen(config.port, config.host, () => {
    console.log(`your server is runing http://${config.host}:${config.port}`)
})
