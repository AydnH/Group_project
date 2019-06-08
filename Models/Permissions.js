var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PermissionSchema = new Schema({
	
	Location:String,
	Camera:String,
	Microphone:String, 
	Contacts:String, 
	CameraRoll:String, 
	History:String,
	ThirdParty:String
	
});

module.exports = mongoose.model('Perms', PermissionSchema);
