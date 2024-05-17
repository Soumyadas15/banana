"use client"


import { Modal } from "./modal"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useModal } from "@/hooks/use-modal-store"
import { useRouter } from "next/navigation"
import { FruitIcon } from "../icons/fruit-icon"

export const MatchModal = () => {

    const router = useRouter();
    
    


    const { onOpen, isOpen, onClose, type, fruitName, fruitLetter } = useModal();

    const isModalOpen = isOpen && type === "matchModal";

    const handleClose = useCallback(() => {
        onClose();
    }, [])

    
    


    let bodyContent = (
        <div className="w-full h-full relative">
            <div className="w-full h-full flex items-center justify-center gap-2">
                <div
                    className={`
                        border-white border-8 
                        rounded-xl 
                        w-[16rem] 
                        h-[20rem] flex items-center 
                        cursor-pointer
                        
                        transition
                        duration-200
                        justify-center
                        bg-pink-400
                        -rotate-12
                    `}
                >
                    <FruitIcon imageSrc={`${fruitName}.png`} />
                </div>

                <div
                    className={`
                        border-white border-8 
                        rounded-xl 
                        w-[16rem] 
                        h-[20rem] flex items-center 
                        cursor-pointer
                        
                        transition
                        duration-200
                        justify-center
                        bg-blue-400
                        mt-[12rem]
                        transform 
                        rotate-12
                    `}
                >
                    <h1 className='font-black text-8xl'>{fruitLetter}</h1>
                </div>
            </div>
            <p className="absolute top-0 right-0 m-4 mt-8 text-[#EF8F35] text-6xl font-black font-outline-2">
                It&apos;s a match !
            </p>
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