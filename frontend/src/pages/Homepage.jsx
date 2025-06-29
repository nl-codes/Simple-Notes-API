import { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "../components/NoteCard.jsx";
import Button from "../components/buttons/Button.jsx";
import { useNavigate } from "react-router-dom";
import AskConfirmation from "../components/toast/AskConfirmation.js";
import ShowMessage from "../components/toast/ShowMessage.js";

const Homepage = () => {
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    const handleCreate = () => {
        navigate("/notes/create");
    };

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

    const handleDelete = async (id) => {
        const result = await AskConfirmation({
            title: "Are you sure to delete note?",
            icon: "warning",
            text: "This action cannot be undone.",
        });
        if (result.isConfirmed) {
            const result = await axios.delete(
                `http://localhost:5000/api/notes/${id}`
            );
            if (result.status === 200) {
                ShowMessage({
                    title: "Note Deleted Successfully",
                    icon: "success",
                }).then((res) => {
                    if (res.isConfirmed || res.isDismissed) {
                        window.location.reload();
                    }
                });
            }
        } else {
            return;
        }
    };

    const handleEdit = (id) => {
        navigate(`/notes/edit/${id}`);
    };
    const handleView = (id) => {
        navigate(`/notes/view/${id}`);
    };

    return (
        <div className="bg-light px-8 flex flex-col gap-8 py-8">
            <div className="w-full flex justify-end pr-16">
                <Button
                    type="create"
                    light={false}
                    title="Add Note"
                    handleOnClick={handleCreate}
                />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-16 max-w-screen">
                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        title={note.title}
                        description={note.description}
                        handleView={() => handleView(note.id)}
                        handleEdit={() => handleEdit(note.id)}
                        handleDelete={() => handleDelete(note.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Homepage;
