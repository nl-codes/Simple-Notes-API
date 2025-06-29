import Button from "./buttons/Button";

const NoteCard = ({
    title,
    description,
    handleView,
    handleDelete,
    handleEdit,
}) => {
    return (
        <div className="bg-primary text-light flex flex-col items-center w-[300px] rounded-sm border-4 border-dark border-t-0 cursor-pointer transform transition duration-300 hover:scale-120 hover:shadow-xl">
            <div className="flex bg-dark justify-center text-light text-xl font-bold w-full py-2 text-center h-10 overflow-clip">
                {title}
            </div>
            <div
                className="text-md font-bold px-10 text-justify pt-2 h-[150px] overflow-clip"
                onClick={handleView}>
                {description}
            </div>
            <div className="w-full flex bg-light py-2 justify-between px-8">
                <Button
                    type="edit"
                    light={false}
                    title="Edit"
                    handleOnClick={handleEdit}
                />
                <Button
                    type="delete"
                    light={false}
                    title="Delete"
                    handleOnClick={handleDelete}
                />
            </div>
        </div>
    );
};

export default NoteCard;
