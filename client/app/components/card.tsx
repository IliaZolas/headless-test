import React from "react";
import Image from "next/image";
import Button from "./button";

interface CardProps {
    id: string;
    image_url: string;
    title: string;
    description: string;
}

interface ButtonProps {
    link: string;
    buttonText: string;
}

const Card: React.FC<CardProps & ButtonProps> = ({id, image_url, title, description, link, buttonText}) => {

    return(
        <div id={id}>
            <Image src={image_url} alt="test" width={200} height={200} />
            <h1>{title}</h1>
            <p>{description}</p>
            <Button link={link} text={buttonText} />
        </div>
    )
}

export default Card;