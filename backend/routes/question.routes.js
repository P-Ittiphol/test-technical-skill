const express = require('express');
const router = express.Router();
const Question = require('../Model/question.model');

router.get('/', async (req, res) => {
    const questions = await Question.find().select('-answer');
    res.json(questions);
});

module.exports = router;