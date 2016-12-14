var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/stockr");


module.exports.User = require("./user.js");
module.exports.Stock = require("./stock-model.js");