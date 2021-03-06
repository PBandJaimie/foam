const mongoose = require('mongoose');
const dbAddress = 'mongodb://localhost/foam';
const db =
mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db
  .then((db) => console.log('Connected to mongoDB'))
  .catch((err) => {
    console.log('MongoDB connection error: ', err)
  })

module.exports = {
  db
}