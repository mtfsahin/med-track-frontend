import React from "react";


const Button =({children, onClick, color = "primary"}, className, disabled ) => {

    const colors = {
        primary:'bg-primaryColor hover:bg-lightPurple',
        seconday:'bg-red hover:bg-lightRed',
    }

    const colorClass = colors[color] || colors.primary;

    return(
        <button disabled={disabled} onClick={onClick} className={`py-1 text-white px-2 text-xs ${colorClass} transition-all duration-300 text-primary-950 font-sans shadow-2xl shadow-secondary-500  focus:outline-none ml-auto  ${className}`}>
            {children}
        </button>
    )
}

export default Button;