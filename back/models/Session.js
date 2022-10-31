const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
  date: {type: Date, required: true},
  userId: {type: String, required: true},
  projectId: {type: String, required: true},
  event: {type: String, required: true},
  chapter: {type: Number, required: true},
  totalSessionWord: {type: Number, required: true},
})

module.exports = mongoose.model('Session', sessionSchema);