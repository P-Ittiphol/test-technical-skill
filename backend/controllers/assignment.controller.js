const Assignment = require('../Model/assignment.model');

exports.submitAssignment = async (req, res) => {
    try {
        const { fullname, answers } = req.body;

        if (!fullname || !answers || answers.length < 2) {
            return res.status(400).json({ message: 'กรอกข้อมูลให้ครบถ้วน' });
        }

        const [q1, q2] = answers;

        let score = 0;
        if (Number(q1) === 11) score++;
        if (Number(q2) === 2) score++;

        const newAssignment = new Assignment({
            fullname,
            answers: { q1, q2 },
            score: score
        });

        await newAssignment.save();

        res.json({ message: 'ส่งคำตอบเรียบร้อย',fullname, score });
        
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.getResults = async (req, res) => {
    try {
        const assignments = await Assignment.find().sort({ createdAt: -1 });
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};