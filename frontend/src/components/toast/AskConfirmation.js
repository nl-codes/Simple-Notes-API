import Swal from "sweetalert2";

const AskConfirmation = ({ title, icon = "warning", text = "" }) => {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        background: "#3a2258",
        color: "#ffebcd",
        confirmButtonColor: "#6b46c1",
        cancelButtonColor: "#999",
    });
};

export default AskConfirmation;
