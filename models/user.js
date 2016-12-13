var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
	local:{
  userName: String,
  password: String,
  //stocks:[StockSchema]
}});

UserSchema.methods.encrypt = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
};


var User = mongoose.model('User', UserSchema);

module.exports = User;