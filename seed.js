var mongoose= require('mongoose');

var db = require('./models');

var Stock = require('./models/stock-model.js')
mongoose.connect('mongodb://localhost/stockr'); 

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open');
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 



var stockR = {
  Ticker: "AAPL",
  LastPrice: 103.9
}

db.Stock.create(stockR, function(err, stock){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new stock", stock._id)
  process.exit(); // we're all done! Exit the program.
})