const Notes = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Notes.find({ user: req.user._id });
  res.json(notes);
});

const createNotes = asyncHandler(async (req, res) => {
  const { title, content, category, picture } = req.body;
  

  const note = new Notes({
    user: req.user._id,
    title,
    content,
    category,
    picture,
  });
  const createdNote = await note.save();
  if (createdNote) {
    res.status(200).json(createdNote);
  } else {
    res.status(400);
    throw new Error("Error occurred ");
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content, category, picture } = req.body;
  const note = await Notes.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not allowed to update this note");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;
    note.picture = picture;
    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(400);
    throw new Error("Note not found");
  }
});
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not allowed to delete this note");
  }
  if (note) {
    await note.remove();
    res.json({ message: "Note deleted" });
  } else {
    res.status(400);
    throw new Error("Note not found");
  }
});

module.exports = { getNotes, createNotes, getNoteById, updateNote, deleteNote };
