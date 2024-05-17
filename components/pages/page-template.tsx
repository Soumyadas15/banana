"use client"

import Image from "next/image";
import Button from "../ui/button";
import { ProgressBar } from "../ui/progress-bar";
import { useCards } from "@/contexts/card-context";

interface PageTemplateProps{
    body: React.ReactNode;
    buttonLabel?: string;
    showButton?: boolean;
    showBackButton?: boolean;
    showProgressBar?: boolean;
    backButtonAction?: () => void;
    primaryButtonAction?: () => void;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
    body,
    buttonLabel,
    showButton,
    showProgressBar,
    showBackButton,
    backButtonAction,
    primaryButtonAction,
}) => {

    const { totalScore } = useCards();

    return (
        <div className="bg-white w-full h-full text-black overflow-hidden relative">
            <Image
                src={'/images/bg.svg'}
                layout="fill"
                objectFit="cover"
                alt="background"
            />
            {showProgressBar && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-[9999]">
                    <ProgressBar score={totalScore} />
                </div>
            )}
            
            {body}
            {showButton && (
                <Button
                    className="absolute bottom-10 right-16 rounded-3xl z-[9999]"
                    onClick={primaryButtonAction}
                >
                    <p className="text-6xl font-black text-white">{buttonLabel}</p>
                </Button>
            )}
            {showBackButton && (
                <div 
                    onClick={backButtonAction}
                    className={`absolute top-[1rem] left-[1rem] z-[9999] cursor-pointer
                        
                `}>
                    <Image
                        src={`/images/back.svg`}
                        width={100}
                        height={100}
                        alt="back"
                        
                    />
                </div>
            )}
        </div>
    )
}