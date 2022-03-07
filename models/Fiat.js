const mongoose = require('mongoose');

const fiatSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },


  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,

  },
  type: {
    type: String,
    default: 'fiat'
  },

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('fiat', fiatSchema)