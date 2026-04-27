const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, "myfile"(Date.now())+ path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
app.get('/', (req, res) => {
    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="files" multiple />
            <button type="submit">Upload Files</button>
        </form>
    `);
});
app.post('/upload', upload.array('files'), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    const fileNames = req.files.map(file => file.filename);
    res.send(`Files uploaded successfully: ${fileNames.join(', ')}`);
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});