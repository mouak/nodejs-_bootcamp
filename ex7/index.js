var http = require('http');

// //create an HTTP server
// var srv = http.createServer(function (req, res){
// res.writeHead(200, {'Content-Type':" text/html"});
// res.end('Hello World it is now' + new Date());
// });
// srv.listen(3000, function(err){
//   console.log("Server is now listening on port 3000");
// });


//create an HTTP server with request for each page html
// var routes = {
//   "/":'Hello Home',
//   "/page1": "Hello Home",
//   "/page1": "Hello Page 1",
//   "/page2": "Hello Page 2"
// }
// //create an HTTP server with request
// var srv = http.createServer(function (req, res){
//   console.log(req.url);
//   if(routes[req.url]){
//     res.writeHead(200, {'Content-Type': " text/html"});
//     res.end(routes[req.url]);
//   } else {
//     res.writeHead(404);
//     res.end('the url: ' +req.url+ "don't exist");
//     }
// });
// srv.listen(3000, function(err){
//   console.log("Server is now listening on port 3000");
// });

//read two page html with their link
var fs = require('fs');
var routes = {
"/":'templates/index.html',
"/Page1":"templates/Page1.html"
}
//create an HTTP server with request
var srv = http.createServer(function (req, res){
  console.log(req.url);
  if(routes[req.url]){
    res.writeHead(200, {'Content-Type': " text/html"});
    var routeFile = routes[req.url];
    fs.readFile(routeFile, function(err, data){
      if (err) throw err;
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('the url: ' +req.url+ "don't exist");
    }
});
srv.listen(3000, function(err){
  console.log("Server is now listening on port 3000");
});
