const Button = ({ type = "", title = "", handleOnClick, light = true }) => {
    if (!type) {
        console.warn("Button type missing");
        return null;
    }

    let color = light ? "primary" : "light";
    let background = light ? "light" : "primary";

    if (type === "save") {
        color = "light";
        background = "success";
    }

    if (type === "cancel") {
        color = "light";
        background = "light-red";
    }

    if (type == "edit") {
        color = "dark";
        background = "warning";
    }

    if (type == "delete") {
        color = "light";
        background = "error";
    }

    const icons = {
        create: (
            <svg
                className={`w-6 h-6 text-${color}`}
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        back: (
            <svg
                className={`w-6 h-6 text-${color}`}
                fill="none"
                viewBox="0 0 24 24">
                <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        edit: (
            <svg
                className={`w-6 h-6 text-${color}`}
                fill="none"
                viewBox="0 0 24 24">
                <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.304 4.844l2.852 2.852M7 7H4a1 1 0 00-1 1v10a1 1 0 001 1h11a1 1 0 001-1v-4.5m2.409-9.91a2.017 2.017 0 010 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 012.852 0z"
                />
            </svg>
        ),
        save: (
            <svg
                className={`w-6 h-6 text-${color}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        delete: (
            <svg
                className={`w-6 h-6 text-${color}`}
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                />
            </svg>
        ),
        cancel: (
            <svg
                className={`w-6 h-6 text-${color}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    };

    const icon = icons[type];

    return (
        <div
            className={`bg-${background} font-bold text-${color} rounded-2xl px-4 py-3 cursor-pointer flex items-center gap-2`}
            onClick={handleOnClick}>
            {icon}
            <span>{title}</span>
        </div>
    );
};

export default Button;
