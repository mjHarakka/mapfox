const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

module.exports = mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }

})
