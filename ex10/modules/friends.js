'use strict';
var fs = require('fs'),
  _ = require('lodash');

function friends(cb) {
  //API PRIVEE
  //init data
  var friends = null;
  fs.readFile('datas/datas.json', function(err, data) {
    if (err) throw err;
    friends = JSON.parse(data.toString('utf8')).friends;
    cb();
  });

  function persistData()
  {
    var dataOut =JSON.stringify({"friends" : friends});
    fs.writeFile('datas/datas.json',dataOut, function(err){
      if(err) throw err;
      console.log("data well saved");
    })
  }

  function getAllFriends() {
    return (friends);
  }

  function getFriend(id) {
    return (_.find(friends, {
      'id': id
    }));
  }

  function deleteFriend(id){
    let index = _.findIndex(friends, { 'id': parseInt(id)})
    if(index !== -1){
          _.pullAt(friends,index)
    } else {
      console.log({"error":"no index was find"});
    }
    persistData();
    return friends;
  }

  function setFriend(ob) {
    if (!ob.id) {
      let maxId = _.max(friends, 'id').id;
      let currentId = maxId += 1;
      ob.id = currentId;
      friends.push(ob);
    } else {
      let index = _.findIndex(friends, { 'id': parseInt(ob.id)})
      if(index !== -1){
            friends[index] = ob;
      } else {
        console.log({"error":"no index was find"});
      }
    }
    persistData();
    return friends;
  }

  //API publique
  var that = {};
  that.getFriend = getFriend;
  that.getAllFriends = getAllFriends;
  that.setFriend = setFriend;
  that.deleteFriend = deleteFriend;
  return that;
}
module.exports = friends;
