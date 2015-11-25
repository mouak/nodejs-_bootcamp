'use strict';
let mongoose = require('mongoose');
function Restaurants() {
  let dbURI = "mongodb://localhost/restaurants";
  mongoose.connect(dbURI);

  let restaurantSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    address: {
      street: String,
      number: Number,
      city: String,
      zip: String
    },
    phone: {
      type: String,
      required: true
    },
    web: {
      type: String,
      required: true
    },
    types: {
      type: Array,
      required: true
    },
    rating: {
      type: Number,
      required: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  let restaurant = mongoose.model('Restaurant', restaurantSchema);
  function getAll(next) {
    restaurant.find(null, function(err, data) {
      if (err) throw err;
      next(null,data);
    }).sort([['name','ascending']]);
  }
  function getById(id,next) {
    restaurant.findById(id, function(err, data) {
      if (err) throw err;
      next(null,data);
    });
  }
  function getBySpecifiedField(field, searchValue,next) {
    var query = {[field]:new RegExp(searchValue,"i")};
    restaurant.findOne(query, function(err, data) {
      if (err) throw err;
      console.log(data)
      next(null,data);
    });
  }
  
  function delRestaurant(id,next){
    restaurant.remove({_id:id}, function(err){
      next(err);
    })
  }

  function setRestaurant(ob, next){
    let resto = new restaurant(ob);
    if(!resto.id){
      resto.save(function(err){
        next(err);
      });
    } else{
      //version longue
      // restaurant.find({_id:ob._id}, function(err, doc){
      //   for (var elem in ob){
      //     doc[elem] = ob[elem];
      //     }
      //     doc.save(function(err){
      //       next(err);
      //     });
      // })
      // version courte
      restaurant.findByIdAndUpdate(ob._id,ob,function(err){
        next(err);
      })
    }
  }

  var that = {};
  that.getAll = getAll;
  that.getById = getById;
  that.getBySpecifiedField = getBySpecifiedField;
  that.setRestaurant = setRestaurant;
  return that;
}
module.exports = Restaurants;
