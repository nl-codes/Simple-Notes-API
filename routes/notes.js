import express from "express";
import {
    createNote,
    deleteNote,
    getAllNotes,
    getNoteById,
    updateNote,
} from "../controllers/notesControllers.js";
const router = express.Router();

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
