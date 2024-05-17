"use client"


import { useCards } from '@/contexts/card-context';
import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface CardProps {
    type: 'blue' | 'red';
    icon?: React.ReactNode;
    letter?: string;
    keyLabel?: string;
    onClick: () => void;
    updateFruitName?: (name: string) => void;
    updateLetter?: (letter: string) => void;
}

export const Card: React.FC<CardProps> = ({
    type,
    icon,
    letter,
    keyLabel,
    onClick,
    updateFruitName,
    updateLetter,
}) => {
    
    const { setFruitName, setFruitLetter, fruitName, fruitLetter } = useCards();
    const [isClicked, setIsClicked] = useState(false);


    const handleClick = () => {
        setIsClicked(true);
        if(keyLabel) setFruitName(keyLabel);
        else if(letter) setFruitLetter(letter);
    };


    return (
        <div
            className={`
                border-white border-8 
                rounded-xl 
                bg-opacity-60 w-[10rem] 
                h-[13rem] flex items-center 
                cursor-pointer
                hover:bg-opacity-90
                transition
                duration-200
                justify-center ${type === 'red' ? 'bg-pink-400 ' : 'bg-blue-400'}
                ${isClicked ? 'transform scale-110' : ''}
            `}
            onClick={handleClick}
        >
            {isClicked ? (
                <div>
                    {type === 'blue' ? (
                        <h1 className='font-black text-8xl'>{letter}</h1>
                    ) : (
                        <div>{icon}</div>
                    )}
                </div>
            ) : (
                <Heart className='stroke-white fill-white mix-blend-overlay' size={40} />
            )}
        </div>
    );
};
