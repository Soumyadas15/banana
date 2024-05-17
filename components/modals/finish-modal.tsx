"use client"


import { Modal } from "./modal"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useModal } from "@/hooks/use-modal-store"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Button from "../ui/button"

export const FinishModal = () => {

    const router = useRouter();
    
    


    const { onOpen, isOpen, onClose, type, fruitName, fruitLetter } = useModal();

    const isModalOpen = isOpen && type === "finishModal";

    const handleClose = useCallback(() => {
        onClose();
        router.refresh();
    }, [])

    
    


    let bodyContent = (
        <div className="w-full h-full relative">
            <div className="h-full w-full flex items-center justify-center">
                <div className="bg-[#FFF5D1] w-[15rem] h-[20rem] rounded-3xl relative p-4">

                    <div className="absolute -top-[7rem] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] flex items-center justify-center">
                        <Image
                            src={`/images/success_modal/header.svg`}
                            width={400}
                            height={400}
                            alt="header"
                            className="absolute inset-0"
                        />
                        <p className="absolute text-center mb-16 text-xl font-bold">Earned</p>
                        <p className="absolute text-center text-3xl mb-2 font-bold">5 Bananas</p>
                    </div>



                    <Image
                        src={`/images/success_modal/monke_banana.svg`}
                        width={170}
                        height={170}
                        alt="banana"
                        className="absolute inset-0 m-auto"
                    />

                    
                    <button
                        onClick={handleClose}
                        className={`
                            bg-[#FFDF6D]
                            p-2
                            rounded-3xl
                            absolute
                            m-auto
                            bottom-3
                        `}
                    >
                        <div 
                            className='
                                py-2 px-12
                                bg-[#FED33B]
                                rounded-3xl
                                shadow-[-9px_5px_0px_0px_rgba(205,163,78,1)_inset]	
                        '>
                            <p className='text-2xl font-bold'>YAY, OK</p>
                        </div>
                    </button>
                </div>
            </div>

            <Image
                src={`/images/banana_color.svg`}
                width={200}
                height={200}
                alt="banana"
                className="absolute inset-0 left-20 top-10 -rotate-12"
            />

            <Image
                src={`/images/banana_color.svg`}
                width={200}
                height={200}
                alt="banana"
                className="absolute inset-0 left-[40rem] top-14 -rotate-45"
            />

            <Image
                src={`/images/banana_color.svg`}
                width={200}
                height={200}
                alt="banana"
                className="absolute inset-0 left-[45rem] top-[15rem] rotate-45"
            />

            <Image
                src={`/images/banana_color.svg`}
                width={200}
                height={200}
                alt="banana"
                className="absolute inset-0 left-[5rem] top-[18rem] -rotate-45"
            />

            <Image
                src={`/images/banana_color.svg`}
                width={200}
                height={200}
                alt="banana"
                className="absolute inset-0 left-[38rem] top-[25rem] rotate-6"
            />
        </div>

    )

    return (
        <div>
            <Modal
                title="Enter your name"
                description="You can't continue without your name"
                onClose={handleClose}
                isOpen={isModalOpen}
                body={bodyContent}
            />
        </div>
    )
}