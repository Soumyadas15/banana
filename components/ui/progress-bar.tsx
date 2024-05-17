import Image from "next/image";
import { useEffect, useState } from "react";

interface ProgressBarProps {
    score?: number | null;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    score = 0,
}) => {
    const segments = 5;

    //@ts-ignore
    const filledSegments = Math.min(Math.max(score, 0), segments);

    const [banana, setBanana] = useState('banana_greyscale.svg')

    useEffect(() => {
        if(score === 5){
            setBanana('banana_color.svg')
        } else {
            setBanana('banana_greyscale.svg')
        }
    }, [score])

    return (
        <div className="relative flex items-center overflow-visible ">
            <div className="h-4 w-[20rem] bg-neutral-400 rounded-full flex overflow-hidden z-[9999]">
                {Array.from({ length: segments }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-full flex-1 ${
                            index < filledSegments ? 'bg-yellow-400' : 'bg-neutral-200'
                        }`}
                    ></div>
                ))}
            </div>
            
            <Image
                src={`/images/${banana}`}
                alt="banana"
                height={80}
                width={80}
                className="absolute left-[17rem] z-[9999] greyscale"
            />
            
        </div>
    );
}
