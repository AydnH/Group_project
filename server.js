const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./Models/User');
const Data = require('./Models/Data');
const Perms = require("./Models/Permissions");
const Loco = require("./Models/Location");

const API_PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const router = express.Router()
// const path = require();

const dbRoute = 'mongodb+srv://Aydn:F1s2t7r9aw10%21@database-tsy14.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });


let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// serve static assests if in production
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


// if(process.env.NODE_ENV === 'production') {
// 	//set static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }


router.get('/getData', (req, res) => {
	User.find((err, user) => {
		if (err) return res.json({ success: false, error: err});
		return res.json({success: true, user:user})
	});
});
router.get('/get-Data', (req, res) => {
	Data.find((err, data) => {
		if(err) return res.json({success: false, error:err});
		return res.json({success: true, data:data})
	});
});

router.get('/get-Location', (req, res) => {
	Loco.find((err, loco) => {
		if(err) return res.json({success: false, error:err});
		return res.json({success: true, loco:loco})
	});
});

router.get('/get-Permissions', (req, res) => {
	Perms.find((err, perms) => {
		if(err) return res.json({success: false, error:err});
		return res.json({success: true, perms:perms})
	});
});


//Register
router.post('/putData', function(req, res){
	User.create(req.body).then(function(user){
		res.send(user);
		console.log(user);
		});
});


//SetUp
router.post('/put-Data', function(req, res){
	Data.create(req.body).then(function(data){
		res.send(data);
		console.log(data);
	});
});

router.post('/put-Location', function(req, res){
	Loco.create(req.body).then(function(loco){
		res.send(loco);
		console.log(loco);
	});
});
router.post('/put-Permissions', function(req, res){
	Perms.create(req.body).then(function(perms){
		res.send(perms);
		console.log(perms);
	});
});


app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));