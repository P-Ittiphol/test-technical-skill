const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    choices: [{ type: String, required: true }],
    answer: { type: Number, required: true },
    score: { type: Number, default: 0 }
});

module.exports = mongoose.model('Question', questionSchema);