const express = require('express');
const app = express();

const axios = require('axios');

const getData = () => {
	axios.get('http://open-api.myhelsinki.fi/v1/places/').then(response => {
		console.log(response.data)
	})
}

console.log(getData)

getData()

app.get('/', (req, res) => {
    res.send()
})

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
