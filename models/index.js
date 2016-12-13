var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/stockr");

// module.exports.Campsite = require("./campsite.js.example");

module.exports.Stock = require("./stock-model.js");