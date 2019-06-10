const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./Models/User');
const Data = require('./Models/Data');
const Perms = require("./Models/Permissions");
const Loco = require("./Models/Location");
const Pay  = require("./Models/Pay");
const path = require('path');

const dbRoute = 'mongodb+srv://Aydn:F1s2t7r9aw10%21@database-tsy14.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const API_PORT = process.env.PORT || 3100;

const app = express()
	.use(cors())
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(logger('dev'));

app
	.use(express.static(path.resolve('./Client/build')));
	
const router = express.Router()

router.get('/getData', (req, res) => {
	User.find((err, user) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, user: user })
	});
});

router.get('/get-Data', (req, res) => {
	Data.find((err, data) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data })
	});
});

router.get('/get-Location', (req, res) => {
	Loco.find((err, loco) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, loco: loco })
	});
});

router.get('/get-Permissions', (req, res) => {
	Perms.find((err, perms) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, perms: perms })
	});
});
router.get('/get-payment', (req, res) => {
	Pay.find((err, pay) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, pay: pay })
	});
});
//Register
router.post('/putData', async (req, res) => {
		const user = await
		User.create(req.body);
		console.log(user);
	});

//SetUp
router.post('/put-Data', async (req, res) => {
		const data = await
		Data.create(req.body);
		console.log(data);
	});

router.post('/put-Location', async (req, res) => {
		const loco = await
		Loco.create(req.body);
		console.log(loco);
	
});

router.post('/put-Permissions', async (req, res) => {
		const perms = await
		Perms.create(req.body);
		console.log(perms);
});

router.post('/put-payment', async (req, res) => {
		const pay = await
		Pay.create(req.body);
		console.log(pay);
});
app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));