const express = require('express');
const app = express();

app.use(express.json()); // parse JSON body

app.put('/update/:id', (req, res) => {
    const studentId = req.params.id;   // from URL
    const newName = req.body.name;     // from request body
    const newCourse = req.body.course; // from request body

    res.send(`Updated student ${studentId} with name: ${newName}, course: ${newCourse}`);
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});