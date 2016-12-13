var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StockSchema = new Schema({
  Ticker: String,
  LastPrice: Number
});

var Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;