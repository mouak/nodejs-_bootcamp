var fs = require('fs');
fs.readFile('fait.txt', function(err, data) {
  if (err) throw err;
  console.log(data.toString());
var inData = data.toString();
var lineCount = inData.split('\n').length;
console.log(lineCount);
    });
