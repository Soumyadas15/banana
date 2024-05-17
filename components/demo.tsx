import Image from "next/image";
import Button from "./ui/button";

const Demo = () => {
    return ( 
        <div className="bg-white w-full h-full text-black overflow-hidden relative">
            <Image
                src={'/images/bg.svg'}
                layout="fill"
                objectFit="cover"
                alt="background"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
                <Image
                    src={`/images/monke.svg`}
                    width={500}
                    height={500}
                    alt="monkey"
                    className="mt-[8rem]"
                />
            </div>
            <div className="absolute top-[20%] left-[50rem]  transform bg-white border-[#11AEC6] border-0 shadow-lg p-8 rounded-3xl">
                <p className="text-[#11AEC6] text-2xl font-black">Hello</p>
            </div>
            <div className="absolute bottom-[80rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                    src={`/images/bg_shadow.svg`}
                    width={800}
                    height={800}
                    alt="shadow"
                    className="mt-[3rem] mr-[5rem]"
                />
            </div>

           <div 
            
            className={`absolute top-[1rem] left-[1rem] z-[9999] cursor-pointer
                        
           `}>
                <Image
                    src={`/images/back.svg`}
                    width={100}
                    height={100}
                    alt="back"
                    
                />
            </div>
            
            <Button
                className="absolute bottom-10 right-16 rounded-3xl"
                
            >
                Ok
            </Button>
        </div>
     );
}
 
export default Demo;