const fs = require("fs");
fs.rename("./testbuffer.txt", "buffertest.txt", err => {
  if (err) throw err;
  console.log("done");
});
