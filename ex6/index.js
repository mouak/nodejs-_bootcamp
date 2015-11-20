var http = require('http');
var cheerio = require('cheerio');
http.get("http://www.technocite.be", function(res){
  console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(data){
    var $= cheerio.load(data);
    $('a').each(function(i,element){
      console.log(element.attribs.href);
     });
  });
    res.on('error', function(err){
    console.log(err);
    });
});









//Cette function est juste pour chercher le texte du html du site mentionné

// var http = require('http');
// http.get("http://www.technocite.be", function(res){
//   console.log("Got response: " + res.statusCode);
//   res.setEncoding('utf8');
//   res.on('data', function(data){
//     console.log(data);
//     console.log("----------------------------------------------");
//     });
//     res.on('error', function(err){
//     console.log(err);
//     });
// });
