var fs = require("fs");
var utils = require('../modules/utils');
fs.readdir('../', function(err, files) {
  if (err) throw err;
  fs.writeFile('result.txt',
  utils.createNiceListofFiles(files),
  function(err, data) {
      if (err) throw err;
      console.log("great");
      });
  });


//Cette function est appelée depuis le fichier utils.js
// function createNiceListofFiles(arrFiles){
//   return arrFiles.join('\n');
// }
