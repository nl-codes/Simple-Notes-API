import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notesFile = path.join(__dirname, "../data/notes.json");

function readNotes() {
    const data = fs.readFileSync(notesFile, "utf8");
    return JSON.parse(data);
}

function writeNotes(notes) {
    fs.writeFileSync(notesFile, JSON.stringify(notes, null, 4));
}

export const createNote = (req, res) => {
    const notes = readNotes();
    const newNote = { id: uuidv4(), ...req.body };
    notes.push(newNote);
    writeNotes(notes);
    res.status(201).json(newNote);
};

export const getAllNotes = (req, res) => {
    const notes = readNotes();
    res.json(notes);
};

export const getNoteById = (req, res) => {
    const notes = readNotes();
    const note = notes.find((n) => n.id === req.params.id);
    note ? res.json(note) : res.status(404).json({ message: "Note not found" });
};

export const updateNote = (req, res) => {
    let notes = readNotes();
    const index = notes.findIndex((n) => n.id === req.params.id);
    if (index !== -1) {
        notes[index] = { id: req.params.id, ...req.body };
        writeNotes(notes);
        res.json(notes[index]);
    } else {
        res.status(404).json({ message: "Note not found" });
    }
};

export const deleteNote = (req, res) => {
    let notes = readNotes();
    const newNotes = notes.filter((n) => n.id !== req.params.id);
    if (notes.length === newNotes.length) {
        return res.status(404).json({ message: "Note not found" });
    }
    writeNotes(newNotes);
    res.json({ message: "Note deleted" });
};
