import express from "express";
import {
    createNote,
    getAllNotes,
    getNoteById,
} from "../controllers/notesControllers.js";
const router = express.Router();

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

export default router;
