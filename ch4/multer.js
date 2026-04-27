const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'lju/'); // Save files to the 'lju' directory
    },
    filename: (req, file, cb) => {
        // Use the current timestamp + original file extension as the filename
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// Serve a simple HTML form for testing
app.get('/', (req, res) => {
    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
        
            <input type="file" name="file" />
            <button type="submit">Upload</button>
        </form>
    `);
});

// Handle single file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file was uploaded.');
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});