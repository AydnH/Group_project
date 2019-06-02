const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./Models/User');
const Data = require('./Models/Data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router()

const dbRoute = 'mongodb+srv://Aydn:F1s2t7r9aw10%21@database-tsy14.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });


let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getData', (req, res) => {
	User.find((err, data) => {
		if (err) return res.json({ success: false, error: err});
		return res.json({success: true, data:data})
	});
});

router.post('/putData', (req, res) => {
	let user = new User();

	const {
		email,
		Name,
		password

	} = req.body;
	if((!email && email !=='') ||!Name, !password) {
		return res.json({
			success: false,
			error:"invalid",
		});
	}
	user.email = email;
	user.Name = firstName;
	user.password = password;
	user.save((err) => {
		if (err) return res.json({success: false, error: err});
		 // return res.json{( success: true)};
	});
});

app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));