const notes = require("express").Router();
const db = require('../db/db.json');

notes.get("/notes", (req, res) => {
  res.json();
  getNotes();
});


// the first param is the path or end point. second arg is controller that controlls what happens when get to endpoint
notes.post("/notes", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
    console.log(req.body)
  const {noteTitle, noteText } = req.body;

  if (noteTitle && noteText) {
    // Variable for the object we will save
    const newNote = {
      noteTittle,
      noteText,
    };

    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);

    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting notes");
  }
});

module.exports = notes;
