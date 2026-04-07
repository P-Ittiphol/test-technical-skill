const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignment.controller');

router.post('/submit', assignmentController.submitAssignment);
router.get('/assignments', assignmentController.getResults);
router.delete('/assignments', async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: 'ลบข้อมูลเรียบร้อย' });
});

module.exports = router;