const http = require("http");
const config = require("./config");
const path = require("path");
const route = require("./util/route");

const server = http.createServer((req, res) => {
  const filePath = path.join(config.root, req.url);
  route(req, res, filePath);
});

server.listen(config.port, config.host, () => {
  console.log(`your server is runing http://${config.host}:${config.port}`);
});
