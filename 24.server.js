var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req, res) {
  fs.readFile(__dirname + '/' + 'user.json', 'utf8', function(err, data) {
    console.log(data);
    res.end(data);
  });
});


//添加的新用户数据
var user = {
  user4: {
    name: 'mohit',
    password: 'password4',
    profession: 'teacher',
    id: 4,
  },
};

app.get('/addUser', function(req, res) {
  
  // 读取已存在的数据
  fs.readFile(__dirname + '/' + 'user.json', 'utf8', function(err, data) {
    data = JSON.parse(data);
    if (!data.user4) {
      data['user4'] = user['user4'];
      const temp = JSON.stringify(data)
      fs.writeFile(__dirname + '/' + 'user.json', temp, { encoding: "utf8" }, err => {
        if (err) throw err;
        console.log("done");
      });
    } else {
      res.write("已经添加")
      res.end()
    }
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
