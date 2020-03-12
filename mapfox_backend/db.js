const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  //...
})

const db = client.db('kennel')

const collection = db.collection('locations')

collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {

})o
