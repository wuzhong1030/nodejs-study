const fs = require("fs")

const rs = fs.createReadStream("./17_readstream.js")

rs.pipe(process.stdout)