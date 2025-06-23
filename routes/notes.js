import express from "express";
import {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
} from "../controllers/notesControllers.js";
const router = express.Router();

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);

export default router;
