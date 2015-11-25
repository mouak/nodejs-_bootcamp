'use strict';
let express = require('express'),
fs = require('fs'),
http = require('http'),
morgan = require('morgan'),
bodyParser = require('body-parser');

//ROUTES
let restaurants =  require(`${__dirname}/routes/restaurants`);

let app = express();
//LOGGER IN PLACE
let accessLogStream = fs.createWriteStream(`${__dirname}/logs/acces.log`,{flags:'a'});
app.use(morgan('combined',{stream:accessLogStream}));

//USE STATIC ASSETS
app.use(express.static(`${__dirname}/public`));

//USER BODYPARSER FOR POST REQUEST
app.use(bodyParser.json());

// SET APP ROUTES AS MIDDLEWARES
app.use('/api/restaurants', restaurants);



http.createServer(app).listen(80,function(){
   console.log("Express started on localhost:3000 \n Press CTRL+c to terminate")
 });
