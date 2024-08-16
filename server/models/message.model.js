
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let message = new Schema({
  message: {
    type: String,
  },
  _id:Number
},{
    collection: 'message'
});

module.exports = mongoose.model('message', message);