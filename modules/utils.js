function utils(){
  //API PRIVEE
  function createNiceListofFiles(arrFiles){
    return arrFiles.join('\n');
  }
  //API PUBLIC
  var that = {};
  that.createNiceListofFiles = createNiceListofFiles;
  return that;
}
module.exports = utils();
