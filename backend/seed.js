const mongoose = require('mongoose');
const Question = require('./Model/question.model');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('เชื่อมต่อฐานข้อมูลสำเร็จ'))
    .catch(err => console.log('เชื่อมต่อฐานข้อมูลล้มเหลว', err));

const questions = [
  {
    question: 'ข้อใดต่างจากข้ออื่น',
    choices: ['3', '5', '9', '11'],
    answer: '11'
  },
  {
    question: 'x + 2 = 4',
    choices: ['1', '2', '3', '4'],
    answer: '2'
  }
];

async function seed() {
  await Question.deleteMany();
  await Question.insertMany(questions);
  console.log('สร้างคำถามเรียบร้อยแล้ว');
  process.exit();
}

seed();