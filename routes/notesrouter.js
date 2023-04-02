const express = require("express");
const { getNotes,createNotes,getNoteById,updateNote,deleteNote } = require("../controllers/notesController");
const router = express.Router();
const {protect}= require('../middleware/authMiddleware')
router.route('/').get(protect,getNotes);
router.route("/create").post(protect,createNotes);
router.route("/:id").get(getNoteById).put(protect,updateNote).delete(protect,deleteNote);

module.exports = router;
