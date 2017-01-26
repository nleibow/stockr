var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var stocksController = require('../controllers/stocks');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next){
	if (req.isAuthenticated()) return next();
	res.redirect('/');
}

router.route('/api')
	.post(stocksController.postStock)
	.get(stocksController.getStock)


router.route('/signUp')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)  

 router.get('/', function (req, res) {
  res.render( 'index.ejs', {message: req.flash('signupMessage')});
});

router.get('/loggedIn', function loggedpage (req, res) {
  res.render('loggedIn.ejs');
});
router.post('/loggedIn', usersController.postLogin);

router.get('/searchPage', function searchpage (req, res) {
  res.render('searchPage.ejs');
});

router.get('/homePage', function homepage (req, res) {
  res.render('homePage.ejs');
});


router.route("/logout")
  .get(usersController.getLogout)

 	

module.exports = router;