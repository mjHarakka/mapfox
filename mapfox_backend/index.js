const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan')
const errorhandler = require('errorhandler')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'))
app.use(errorhandler())
dotenv.config();

console.log(process.env.MONGO_USERNAME)
const mongo_username = process.env.MONGO_USERNAME
const mongo_password = process.env.MONGO_PASSWORD
const mongo_hostname= process.env.MONGO_HOSTNAME
const mongo_port = process.env.MONGO_PORT
const mongo_db = process.env.MONGO_DB

//import routes
const eventsRoute = require('./routes/events')

app.use('/events', eventsRoute);

// Currently for development only
// TODO get the 
const url = process.env.DB_CONNECTION 
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

