var request = require('request');
var express = require('express');
var mongoose = require("mongoose");
//  mongoose.connect( //process.env.MONGODB_URI || 
// //                   process.env.MONGOLAB_URI || 
// //                   process.env.MONGOHQ_URL || 
//                   "mongodb://localhost/stockr");

var app = express();
var db = require('../models');
var passport = require('passport');
var routes = require('../config/routes');


function postStock(req, res){
	console.log(req);
	console.log(res);
	db.Stock.create(req.body, function it(err, stocks){
	})

}

module.exports = {
	postStock: postStock
}