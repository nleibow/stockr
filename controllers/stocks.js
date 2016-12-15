var request = require('request');
var express = require('express');
var mongoose = require("mongoose");
var app = express();
var db = require('../models');
var passport = require('passport');
var routes = require('../config/routes');


function postStock(req, res){
	db.Stock.create(req.body, function it(err, stocks){
		res.json(stocks);
	})

}

function getStock(req, res){
	db.Stock.find({}, function(err, stocks){
		res.json(stocks);
	})
}


module.exports = {
	postStock: postStock,
	getStock: getStock
}