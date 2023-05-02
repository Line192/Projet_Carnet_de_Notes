const express = require("express");
// importer l'api :
const notes = require("./note.json");
const app = express();
const fs = require("fs");

// Middleware !important pour la méthode POST
app.use(express.json());

// GET /notes => toutes les notes
app.get("/note/", (req, res) => {
  res.status(200).json(notes);
});
// GET /notes/:id => une note
app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.notes.find((note) => note.id === id);
  res.status(200).json(note);
});

// POST /note=> créer une note

app.post("/note/", (req, res) => {
  notes.notes.push(req.body);
  fs.writeFile("note.json", JSON.stringify(notes), function (err) {});
  res.status(200).json(notes);
});

// PUT /notes/:id => modifier une note
app.put("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  let note = notes.find((note) => note.id === id);
  (note.auteur = req.body.auteur),
    (note.titre = req.body.titre),
    res.status(200).json(note);
});
// DELETE /notes/:id => supprimer une note
app.delete("/note/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let note = notes.notes.find((note) => note.id === id);
  notes.notes.splice(notes.notes.indexOf(note), 1);
  res.status(200).json(notes.notes);
});

app.listen(4000, () => {
  console.log("serveur lancé");
});
