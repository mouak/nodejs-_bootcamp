var fs = require("fs");

var utils = require('../modules/utils');
var args=process.argv;
var elements = null;
(args[2])? elements  = args[2].split(','): elements=[];
fs.stat('list.txt', function(err, stat){
  if (err == null) {
  console.log('File exists');
  updateFile();

} else if (err.code == 'ENOENT'){
  console.log('File don\'t exists');
  fs.writeFile('list.txt', '', function(err){
    if (err) throw err;
    updateFiel();
  });

} else {
 console.log('some other error: ', err.code);
}
});

function updateFile(){
 fs.readFile('list.txt', function(err, data){
   if (err) throw err;
   var fileData = data.toString('utf8').split('\n');
   var finalData = fileData.concat(elements);
   console.log(finalData);
   fs.writeFile('list.txt', utils.createNiceListofFiles(finalData), function(err){
     console.log("great done");
   });

 });

}

//Ceci remplace tout le code de fs.stat de la ligne7-22
// fs.appendFile('list.txt', utils.createNiceListofFiles(elements), function(err){
//   if (err) throw err;
//   console.log('great !');
// });
