const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');


const MONGO_USERNAME = 'mapfox';
const MONGO_PASSWORD = 'BlueJeansAreCool!';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'events';

const mapURI = process.env.MAP_ENDPOINT || 'http://open-api.myhelsinki.fi/v1/places/';

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();



//import routes
const eventsRoute = require('./routes/events')

app.use('/events', eventsRoute);

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
//connect To DB
mongoose.connect(url,
        {
                useNewUrlParser: true,
                useUnifiedTopology: true
        },
        () => console.log('connection succeeded')
);

app.listen(port);

console.log(`Listening port ${port}`);

