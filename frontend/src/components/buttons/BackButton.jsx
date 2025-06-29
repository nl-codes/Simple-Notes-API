import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };
    return (
        <div
            className=" bg-light font-bold text-dark rounded-2xl px-4 py-3 cursor-pointer flex gap-2 w-fit"
            onClick={handleOnClick}>
            <svg
                className="w-6 h-6 text-gray-800 dark:text-dark"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m15 19-7-7 7-7"
                />
            </svg>
            <span>Home</span>
        </div>
    );
};

export default BackButton;
