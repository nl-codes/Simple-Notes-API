// index.js
import express from "express";
import noteRoutes from "./routes/notes.js";
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.use("/api/notes", noteRoutes);
