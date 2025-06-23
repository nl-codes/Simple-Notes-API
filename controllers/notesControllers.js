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
