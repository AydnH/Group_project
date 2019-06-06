var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
	Age:Number,
	Sex:String,
	Phone_number:Number,
	Address:String,	
	Relationship:String,	
	Ethnicity:String,
	Security: {
		MotherMaider:String,	
		FirstPet:String,
		CreditCard:Number,
		FirstJob:String,
	}
});

module.exports = mongoose.model('Data', DataSchema);
