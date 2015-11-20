var http = require('http');
http.get("http://www.technocite.be", function(res){
  console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(data){
    console.log(data);
    console.log("----------------------------------------------");
    });
    res.on('error', function(err){
    console.log(err);
    });
});
