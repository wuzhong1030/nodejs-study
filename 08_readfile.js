const fs = require("fs");

fs.readFile("./08_readfile.js", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
 
const data = fs.readFileSync("./07_event_remove.js", "utf8")
console.log(data)