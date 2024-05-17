import React from "react";
import Image from 'next/image'


interface FruitIconProps{
    imageSrc: string;
}

export const FruitIcon: React.FC<FruitIconProps> = ({
    imageSrc,
}) => {
    return (
        <Image
            src={`/images/fruits/${imageSrc}`}
            alt="fruit"
            width={100}
            height={100}
            className=""
        />
    )
}