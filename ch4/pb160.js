const express = require('express');
const app = express();

app.use(express.json()); // important for PUT body

app.put('/jesus/:id', (req, res) => {
    res.send(`Updated ID: ${req.params.id}`);
});

app.listen(10000, () => {
    console.log('Server running on port 10000');
});