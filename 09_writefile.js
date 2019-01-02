const fs = require("fs");

fs.writeFile("./test.txt", "this is test file", { encoding: "utf8" }, err => {
  if (err) throw err;
  console.log("done");
});
