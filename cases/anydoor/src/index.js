const http = require("http");
const config = require("./config");
const path = require("path");
const fs = require("fs");
const promisify = require("util").promisify;

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const server = http.createServer((req, res) => {
  const filePath = path.join(config.root, req.url);
  try {
    const stats = stat(filePath);
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      fs.createReadStream(filePath).pipe(res);
    } else if (stat.isDirectory()) {
      //文件夹
      fs.readdir(filePath, (err, files) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(files.join(","));
      });
    }
  } catch (error) {}
  
});

server.listen(config.port, config.host, () => {
  console.log(`your server is runing http://${config.host}:${config.port}`);
});
