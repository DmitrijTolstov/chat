
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let auth = new Schema({
    _id:Number,
    avatar:{},
    firstName: {
      require: true,
      type: String
    },
    lastName: {
      require: true,
      type: String
    },
    phone: { 
      require: true,
      type: String
    },
    chat: {
      type:Boolean,
      default: false
    }
  
},{
    collection: 'authorization'
});

module.exports = mongoose.model('auth', auth);
