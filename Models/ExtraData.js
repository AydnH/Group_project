const mongoose = require('mongoose');

let schema = mongoose.Schema;

const ExtraData = new mongoose.Schema({
	Age:Number,
	Sex:String,
	Phone:Number,
	Address:String,	
	Relationship:String,	
	Ethnicity:String,
	Security{
		MotherMaider:String,	
		FirstPet:String,
		CreditCard:Number,
		FirstJob:String,
	}
	
)