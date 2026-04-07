const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectassignmentDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectassignmentDB();

const assignmentRoutes = require('./routes/assignment.routes');
app.use('/api', assignmentRoutes);

const questionRoutes = require('./routes/question.routes');
app.use('/api/questions', questionRoutes);

app.get('/', (req, res) => {
  res.send('Server OK');
});

app.get('/api', (req, res) => {
  res.send('API OK');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});