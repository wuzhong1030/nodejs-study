const fs = require("fs");
const promisify = require("util").promisify;

const read = promisify(fs.readFile);

async function test() {
  try {
    const data = await read("./20_async.js");
    console.log(data.toString());
  } catch (error) {
    throw error;
  }
}

test()
