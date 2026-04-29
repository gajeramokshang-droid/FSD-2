
const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Create the 'JESUS' directory if it doesn't exist
const uploadDir = path.join(__dirname, 'JESUS');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: 'JESUS',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve static files from the 'JESUS' directory
app.use('/JESUS', express.static(path.join(__dirname, 'JESUS')));

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file was uploaded.');
  }
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

