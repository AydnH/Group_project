const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./Models/Data');
const ExtraData = require('./Models/ExtraData');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router()

const dbRoute =
  'mongodb+srv://Aydn:F1s2t7r9aw10%21@database-tsy14.mongodb.net/test?retryWrites=true';

  mongoose.connect(dbRoute, { useNewUrlParser: true });


let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/get-Data', (function(req, res, next) {
	var resultAr = [];
mongo.connect(db, function(err, db){
	assert.equal(null, err);
	var cursor = db.collection('User-data').find();
	cursor.forEach(function(doc, err){
		assert.equal(null, err);
		resultAr.push(doc);

	}, function(){
		db.close();
		res.render('index', {UserData: resultAr});
	});
});


router.post('post-Data', function(req, res, next){
	var UserData = {
	email: req.body.email,
	First_Name: req.body.First_Name,
	Last_Name: req.body.Last_Name
	};
mongo.connect(db, function(err, db){
	assert.equal(null,err);
	db.collection('User-data').insertOne(UserData, function(err, result){
		assert.equal(null,err);
		console.log('Item insterted');
		db.close();
	});
});
});




app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));