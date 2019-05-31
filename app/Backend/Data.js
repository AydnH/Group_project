var mongoose= require('mongoose');

var UserSchema = new mongoose.Schema({
	email: String,
	First_Name: String,
	Last_Name: String,
}, {timestamps: true});

mongoose.model('User', UserSchema);

