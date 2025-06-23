import express from "express";
import { createNote } from "../controllers/notesControllers.js";
const router = express.Router();

router.post("/", createNote);

export default router;
