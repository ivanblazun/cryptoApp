const mongoose = require('mongoose');

const AvatarSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String
  }
})

module.exports = mongoose.model('avatar', AvatarSchema)