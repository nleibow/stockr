var request = require('request');
var express = require('express');
var mongoose = require("mongoose");
//  mongoose.connect( //process.env.MONGODB_URI || 
// //                   process.env.MONGOLAB_URI || 
// //                   process.env.MONGOHQ_URL || 
//                   "mongodb://localhost/stockr");

var app = express();
var db = require('./models');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./config/routes');
var rootDir = __dirname;



var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('views','./views');
app.engine('ejs',require('ejs').renderFile);
app.set('view engine',"ejs");



app.use(session({ secret: 'WDI-GA-EXPRESS' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./config/passport')(passport);




app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});
app.use(routes);




// app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(bodyParser());
// app.post('/api/stocks', function new_stock(req, res){
// 	console.log(res);
//   db.Album.create(req.body, function(err, albums) {
//   res.redirect('loggedIn.html');});
// });






// app.get('/', function indexpage (req, res) {
//   res.sendFile(__dirname + '/webpages/index.html');
// });

// app.get('/loggedIn.html', function logedpage (req, res) {
//   res.sendFile(__dirname + '/webpages/loggedIn.html');
// });

// app.get('/searchPage.html', function searchpage (req, res) {
//   res.sendFile(__dirname + '/webpages/searchPage.html');
// });

// app.get('/homePage.html', function homepage (req, res) {
//   res.sendFile(__dirname + '/webpages/homePage.html');
// });



 


// function getIt()
// 	{app.get('/:id', function(req, res){
// 	request('http://finance.google.com/finance/info?client=ig&q=NSE:'+ req.params.id, function (error, response, body){

// 		// console.log(req.params.id);
// 		var stockName = req.params.id
// 		var bodyRight =(body.substr(3));
// 			var answer = JSON.parse(bodyRight);
// 			res.send({"Ticker": answer[0].t, "Last Price": answer[0].l});
// 			if (array[0]== stockName){
// 				array.push(answer[0].l);
// 			}
// 				else{
// 					array.push(answer[0].t);
// 					array.push(answer[0].l);

// 			}
// 			console.log(array);
// 		// console.log(response);
// 	})});};
// getIt();

// var stockLook = function(){
// 	var stock = $("#stockLook").val();
// 	console.log(stock);
// 	var url = "http://finance.google.com/finance/info?client=ig&q=NSE:" + stock;
// 	console.log(url);
// 	var finalstock = $.get(url).done(function(data){
// 		var storedstock = jQuery.parseJSON(finalstock.responseText).url;
// 		console.log(finalstock);
// 	});
// }


// $(document).ready(function(){


//     $('#searchbtn').click(function(e){
//         stockLook();
//         e.preventDefault();
//     })});

// db.Stock.create(trueAnswer, function(err, stock){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new stock", stock._id)
//   process.exit(); // we're all done! Exit the program.
// })


// app.use(function(req, res, next) {
//     res.locals.currentUser = req.user;
//     next();
// });

// var routes = require('./config/routes');
// app.use(routes);





app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});