const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');



const mapURI = process.env.MAP_ENDPOINT || 'http://open-api.myhelsinki.fi/v1/places/';

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();



//import routes
const eventsRoute = require('./routes/events')

app.use('/events', eventsRoute);


//connect To DB
mongoose.connect(process.env.DB_CONNECTION,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => console.log('connection succeeded')
);

app.listen(port);

console.log(`Listening port ${port}`);

