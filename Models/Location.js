var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Locationchema = new Schema({
	
	Street:String,
	Number:String,
	Apartment:String, 
	Country:String, 
	City:String, 
	State:String,
	PostCode:String
});

module.exports = mongoose.model('Loco', Locationchema);
