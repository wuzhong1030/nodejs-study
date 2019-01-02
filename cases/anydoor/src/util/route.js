const fs = require("fs");
const path = require("path")
const promisify = require("util").promisify;

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const config = require("../config")

const handleBars = require("handlebars")

const mimeTypes = require("./mime")

const source = fs.readFileSync(path.join(__dirname, "../template/dir.tpl"))
const template = handleBars.compile(source.toString())

module.exports = async function(req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.statusCode = 200;
      const mime = mimeTypes(filePath)
      res.setHeader("Content-Type", mime);
      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      //文件夹
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      const dir = path.relative(config.root, filePath)
      const data = {
        files,
        dir: dir ? `/${dir}` : '',
        title: path.basename(filePath)
      }
      res.end(template(data));
    }
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end(`error: \n ${error.toString()}`);
  }
};
