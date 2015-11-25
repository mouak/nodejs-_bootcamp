'use strict';
let moment = require('moment'),
http = require('http'),
express = require('express'),
bodyParser = require('body-parser'),
friends = require(__dirname+'/modules/friends'),
myFriends = friends(initApp);
function initApp(){
  let app = express();

  app.use(bodyParser.json());

  app.use(function (req, res, next) {
    console.log(moment().format()+'||'+req.url+'||'+req.method+'||'+req.ip);
    next();
  })
  app.get('/api/friends', function(req,res){
    res.json(myFriends.getAllFriends());
  });
  app.get('/api/friends/:id', function(req,res){
    let id = parseInt(req.params.id);
    res.json(myFriends.getFriend(id));
  });

  app.post('/api/friends', function(req,res){
    res.json( myFriends.setFriend(req.body));
  });
  app.put('/api/friends', function(req,res){
    res.json( myFriends.setFriend(req.body));
  });

  app.delete('/api/friends/:id', function(req,res){
    res.json( myFriends.deleteFriend(req.params.id));
  });

  app.use(function(req, res){
    res.status(404);
    res.send("The page "+ req.url+" don't exist");
  });

 http.createServer(app).listen(80,function(){
    console.log("Express started on localhost:3000 \n Press CTRL+c to terminate")
  });
}
