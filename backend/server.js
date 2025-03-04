const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('./firebase');

const app = express();
const port = 5000;

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

app.use(express.json());
app.use(express.static('uploads'));

// GET /models - Fetch models list
app.get('/models', async (req, res) => {
  try {
    const modelsRef = db.collection('models');
    const snapshot = await modelsRef.get();
    const models = snapshot.docs.map(doc => doc.data());
    res.json(models);
  } catch (error) {
    res.status(500).send('Error fetching models');
  }
});

// POST /upload - Upload a new 3D model
app.post('/upload', upload.single('model'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const modelUrl = `http://localhost:${port}/${req.file.filename}`;
    const newModel = {
      name,
      description,
      url: modelUrl,
    };

    await db.collection('models').add(newModel);
    res.status(200).send('Model uploaded successfully');
  } catch (error) {
    res.status(500).send('Error uploading model');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
