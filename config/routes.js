var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next){
	if (req.isAuthenticated()) return next();
	res.redirect('/');
}

// router.route('/')
//   .get(staticsController.home);

router.route('/')
  .post(usersController.postSignup)

// router.route('/')
//   .get(usersController.getLogin)
//   .post(usersController.postLogin)
 router.get('/', function (req, res) {
  res.sendFile( '/stockr/webpages/index.html', {'root': '../'});
});

router.get('/loggedIn.html', function logedpage (req, res) {
  res.sendFile('/stockr/webpages/loggedIn.html', {'root': '../'});
});

router.get('/searchPage.html', function searchpage (req, res) {
  res.sendFile('/stockr/webpages/searchPage.html', {'root': '../'});
});

router.get('/homePage.html', function homepage (req, res) {
  res.sendFile('/webpages/homePage.html',{'root': '../'});
});


router.route("/logout")
  .get(usersController.getLogout)

router.route('/searchPage')
	.get(authenticatedUser, usersController.secret)  

router.route('/homePage')
	.get(authenticatedUser, usersController.secret)  

router.route('/loggedIn')
	.get(authenticatedUser, usersController.secret) 	

module.exports = router;