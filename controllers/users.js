var passport = require("passport");

// GET /signup
function getSignup(request, response) {
	response.render('signup.ejs', {message: request.flash('signupMessage')});
}

// POST /signup
function postSignup(request, response, next) {
	console.log('posting signup');
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect : '/loggedIn',
		failureRedirect : '/',
		failureFlash : true
	});

	return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response) { 
	response.render('loggedIn.ejs', {message: request.flash('signupMessage')});
	}

// POST /login 
function postLogin(request, response, next) {
	console.log('logged in as user');
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect : '/loggedIn',
		failureRedirect : '/',
		failureFlash : true
	});

	return loginStrategy(request, response, next);
};

// GET /logout
function getLogout(request, response) {
	request.logout();
	response.redirect('/');
}


// function secret(request, response){
// 	render("its a secret!");
// }

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
}