import { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/notes/"
                );
                setNotes(response.data);
            } catch (err) {
                console.error("Error fetching notes: ", err);
            }
        };
        fetchNotes();
    }, []);

    return (
        <div>
            {notes.map((note) => {
                <NoteCard note={note} key={note.id} />;
            })}
        </div>
    );
};

export default Homepage;
