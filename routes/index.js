const express = require('express');
const path = require('path');
// import modular routes for notes.
const notesRouter = require('./notes');


const app = express();

app.use('/api', notesRouter);

//need to create a new notes.js only for the hopme page/ likes 12 to 14 needs to go there.
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname,'../public/index.html'))
);


app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
); 

module.exports = app;
