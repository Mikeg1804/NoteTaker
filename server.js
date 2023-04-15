const express = require('express');
const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname,'/public/assets/notes.html'))
);

// GET request for reviews
app.get('/api/notes', (req, res) => {
  console.info(`GET /api/notes`);
  res.status(200).json(notes);
});












app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
