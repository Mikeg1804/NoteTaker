const notes = require("express").Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');

notes.get("/notes", (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  // res.json();
  // getNotes();
});

// DELETE Route for a specific note
// :note_id is the param for the specific note to be deleted.
notes.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  console.log(noteId)
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});


// the first param is the path or end point. second arg is controller that controlls what happens when get to endpoint
notes.post("/notes", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
    console.log(req.body)
  const {title, text } = req.body;

  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;
