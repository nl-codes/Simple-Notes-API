import { useEffect, useState } from "react";
import axios from "axios";
import ShowMessage from "../components/toast/ShowMessage.js";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/buttons/Button.jsx";
import AskConfirmation from "../components/toast/AskConfirmation.js";

const Editpage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        const fetchNoteDetail = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/notes/${id}`
                );
                if (res.status === 200) {
                    setFormData({
                        title: res.data.title,
                        description: res.data.description,
                    });
                }
            } catch (err) {
                console.error("Error adding note:", err);
            }
        };
        fetchNoteDetail();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (
            formData.title.trim() === "" ||
            formData.description.trim() === ""
        ) {
            await ShowMessage({
                title: "All fields are required",
                icon: "error",
            });
            return;
        }
        try {
            const res = await axios.put(
                `http://localhost:5000/api/notes/${id}`,
                formData
            );
            if (res.status === 200) {
                await ShowMessage({
                    title: "Note Edited Successfully",
                    icon: "success",
                });
                navigate("/");
            }
            setFormData({ title: "", description: "" });
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    const handleCancel = async () => {
        const result = await AskConfirmation({
            title: "Are you sure?",
            icon: "question",
            text: "Changes won't be saved.",
        });
        if (result.isConfirmed) {
            setFormData({ title: "", description: "" });
            navigate("/");
        }
        return;
    };
    return (
        <div className="flex flex-col bg-primary h-full pt-4">
            <form className="h-fit flex gap-20 py-8 justify-center">
                <div className="form-column">
                    <span className="form-label">Note Title</span>
                    <span className="form-label">Description</span>
                </div>
                <div className="form-column">
                    <input
                        className="form-input"
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className="form-textfield"
                        name="description"
                        id="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
            <div className="w-full flex justify-center gap-20">
                <Button
                    type="save"
                    title="Save"
                    handleOnClick={handleSubmit}
                    light={false}
                />
                <Button
                    type="cancel"
                    title="Cancel"
                    handleOnClick={handleCancel}
                    light={true}
                />
            </div>
        </div>
    );
};

export default Editpage;
