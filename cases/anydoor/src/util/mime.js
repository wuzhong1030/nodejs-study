const path = require("path");
const MIME = {
  css: "text/css",
  js: "text/javascript",
  html: "text/html",
  jpg: "image/jpeg",
  json: "application/json",
  txt: "text/plain"
};

module.exports = filePath => {
  let ext = path
    .extname(filePath)
    .split(".")
    .pop()
    .toLocaleLowerCase();

  if (!ext) {
    ext = filePath;
  }

  return MIME[ext] || MIME[txt];
};
