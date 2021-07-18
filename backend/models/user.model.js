const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
      minlength: 3  /// we add validations for the name
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
//we create a model and we export it
module.exports = User;