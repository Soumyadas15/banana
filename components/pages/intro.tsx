import Image from "next/image";

export const Intro = () => {
    return (
        <div className="bg-white w-full h-full text-black overflow-hidden">
            <Image
                src={'/images/bg.svg'}
                layout="fill"
                objectFit="cover"
                alt="background"
            />
        </div>
    );
};