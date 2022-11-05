const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  userId: {type: String, required: true},
  title: {type: String, required: true},
  type: {type: String, required: true},
  chapter: {type: Boolean, required: true},
  chapters: {type: Array, required: false},
  description: {type: String, required: false},
  genre: {type: String, required: false},
  theme: {type: String, required: false},
  logline: {type: String, required: false},
})

module.exports = mongoose.model('Project', projectSchema);