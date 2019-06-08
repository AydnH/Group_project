var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	_Id: String,
    email: String,
    username: String,
    name: String,
    password: String,
    hasAgreed: String,

});
module.exports = mongoose.model('User', UserSchema);