var mongoose = require('mongoose');
var schema = mongoose.Schema;

const Data = new mongoose.Schema({

	Age:Number,
	Sex:String,
	Phone:Number,
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


module.exports = mongoose.model('Data', Data);
