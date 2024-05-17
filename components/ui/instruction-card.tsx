"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

interface InstructionCardProps{
    title: string;
    subTitle: string;
    stepLabel: string;
    stepColor: string;
    cardImage: string;
}

export const InstructionCard: React.FC<InstructionCardProps> = ({
    title,
    subTitle,
    stepLabel,
    stepColor,
    cardImage,
}) => {

    const [imgSize, setImgSize] = useState(200);

    useEffect(() => {
        if(stepLabel === '3'){
            setImgSize(400);
        }
    }, [stepLabel]);

    return (
        <div className="relative">
            <div className="flex flex-col items-center gap-4 bg-white rounded-[5rem] h-[25rem] w-[20rem] p-4 z-[9999]">
                <div className=" h-[70%] w-full rounded-[5rem] flex items-center justify-center relative z-10">
                    <Image
                        alt="img"
                        src={`/images/${cardImage}`}
                        height={imgSize}
                        width={imgSize}
                        className={`
                            ${stepLabel === '3' ? 'mt-16' : ''}
                        `}
                    />
                </div>
                <div className="flex flex-col gap-1 items-center w-[70%]">
                    <h1 className="text-3xl font-bold text-[#11AEC6] text-center">{title}</h1>
                    <p className="font-bold text-lg text-[#A6C930] text-center">{subTitle}</p>
                </div>
            </div>
            <div className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 h-16 w-[25rem] bg-[#9FC514] rounded-full -z-20"></div>
        </div>
    )
}
