var fs = require('fs'),
moment = require('moment'),
express = require('express'),
app = express();

app.use(function (req, res, next) {
  console.log(moment().format()+'||'+req.url+'||'+req.method+'||'+req.ip);
  next();
})

app.get('/api/friends', function(req,res){
  fs.readFile('datas/datas.json', function(err, data){
    if(err) throw err;
    res.json(JSON.parse(data.toString('utf8')));
  })
});

app.use(function(req, res){
  res.status(404);
  res.send("The page "+ req.url+" don't exist");
});



app.listen(3000,function(){
  console.log("Express started on localhost:3000 \n Press CTRL+c to terminate")
})
