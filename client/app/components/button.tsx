import React from "react";

interface ButtonProps {
    link: string;
    text: string;
  }

const Button: React.FC<ButtonProps> = ({link, text}) => {
    return (
        <div>
            <div className="button">
                <a href={link} >{text}</a>
            </div>
        </div>
    )
}

export default Button;