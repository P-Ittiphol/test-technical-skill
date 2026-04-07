const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  fullname: { type: String, required: true },

  answers: {
    q1: { type: Number, required: true },
    q2: { type: Number, required: true }
  },

  score: { type: Number, default: 0 },
  
});

module.exports = mongoose.model('Assignment', assignmentSchema);