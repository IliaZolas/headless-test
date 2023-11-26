import React from "react";

interface ButtonProps {
    link: string;
    text: string;
  }

const Button: React.FC<ButtonProps> = ({link, text}) => {
    return (
        <div>
            <div className="py-5 px-10 bg-red-800 rounded-md text-center">
                <a href={link} >{text}</a>
            </div>
        </div>
    )
}

export default Button;