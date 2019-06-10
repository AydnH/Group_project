var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaySchema = new Schema({
		decline:String
		});

module.exports = mongoose.model('Pay', PaySchema);
