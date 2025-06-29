import Swal from "sweetalert2";

const ShowMessage = ({ title, icon, text }) => {
    return Swal.fire({
        title: title,
        icon: icon,
        background: "#3a2258",
        color: "#ffebcd",
        text: text || "",
    });
};

export default ShowMessage;
