import { useState } from "react";
import axios from "axios";
import ShowMessage from "../components/toast/ShowMessage.js";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button.jsx";

const Createpage = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate("/");
    };

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

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
            const res = await axios.post(
                "http://localhost:5000/api/notes/",
                formData
            );
            if (res.status === 201) {
                await ShowMessage({
                    title: "Note Created Successfully",
                    icon: "success",
                });
                navigate("/");
            }
            setFormData({ title: "", description: "" });
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };
    return (
        <div className="flex flex-col bg-primary h-full pt-4">
            <div className="w-full flex pl-16">
                <Button
                    type="back"
                    title="Home"
                    light={true}
                    handleOnClick={handleBackButton}
                />
            </div>
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
            <div className="w-full flex  justify-center">
                <Button type="save" title="Save" handleOnClick={handleSubmit} />
            </div>
        </div>
    );
};

export default Createpage;
