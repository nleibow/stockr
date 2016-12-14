var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/stockr" );



module.exports.User = require("./user.js");
module.exports.Stock = require("./stock-model.js");