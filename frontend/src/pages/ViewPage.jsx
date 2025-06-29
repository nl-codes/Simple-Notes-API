import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/buttons/Button.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Viewpage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [noteDetails, setNoteDetails] = useState({
        title: "",
        description: "",
    });

    const handleBackButton = () => {
        navigate("/");
    };

    useEffect(() => {
        const fetchNoteDetail = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/notes/${id}`
                );
                if (res.status === 200) {
                    const { title, description } = res.data;
                    setNoteDetails({ title, description });
                }
            } catch (err) {
                console.error("Error fetching note:", err);
            }
        };
        fetchNoteDetail();
    }, [id]);

    return (
        <div className="flex flex-col min-h-screen bg-primary px-4 py-8">
            <div className=" w-full flex mb-6 pl-8">
                <Button
                    type="back"
                    title="Home"
                    light={true}
                    handleOnClick={handleBackButton}
                />
            </div>

            <div className="max-w-4xl w-full mx-auto bg-dark rounded-xl p-10 shadow-xl">
                <div className="flex flex-col gap-6">
                    <div>
                        <label className="block text-xl font-bold mb-2 text-light">
                            Note Title
                        </label>
                        <div className="w-full bg-light text-dark px-4 py-3 rounded-md text-xl font-semibold break-words whitespace-pre-wrap">
                            {noteDetails.title}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xl font-bold mb-2 text-light">
                            Description
                        </label>
                        <div className="w-full bg-light text-dark px-4 py-3 rounded-md text-lg font-medium leading-relaxed break-words whitespace-pre-wrap">
                            {noteDetails.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewpage;
