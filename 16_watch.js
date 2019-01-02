const fs = require("fs");

fs.watch(
  "./",
  {
    recursive: true
  },
  (eventType, filename) => {
    console.log(eventType);
    console.log(filename);
  }
);
