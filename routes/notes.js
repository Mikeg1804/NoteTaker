const notes = require("express").Router();

notes.get("/api/notes", (req, res) => {
  res.json();
  getNotes();
});

notes.post("/api/notes", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);

  const { noteTitle, noteText } = req.body;

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
