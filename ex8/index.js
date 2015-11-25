var fs = require('fs'),
  http = require('http');
var port = process.argv[2] || 3000;
var routes = {
  "/api/friends": "datas/datas.json"
}
var srv = http.createServer(function(req, res) {
  if (routes[req.url]) {
    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    var routeFile = routes[req.url];
    fs.readFile(routeFile, function(err, data) {
      if (err) throw err
    }
    })
  } else {
    res.writeHead(404);
    res.end('the url :' + req.url + " don't exist");
  }

}).listen(port, function() {
  console.log("server listening at port :" + port);
})
