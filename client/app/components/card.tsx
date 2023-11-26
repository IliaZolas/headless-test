import React from "react";
import Image from "next/image";

interface CardProps {
    id: string;
    image_url: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({id, image_url, title, description}) => {

    return(
        <div id={id}>
            <Image src={image_url} alt="test" width={200} height={200} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Card;