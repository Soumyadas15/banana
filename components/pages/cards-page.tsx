"use client"


import { Apple, Cherry } from "lucide-react";
import { GiBanana, GiLemon, GiOrange, GiStrawberry } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useCardStore } from "@/hooks/use-card-store";
import { Card } from "./card";
import { useCards } from "@/contexts/card-context";
import { useModal } from "@/hooks/use-modal-store";
import { FruitIcon } from "../icons/fruit-icon";


export const CardsPage = () => {

    const { fruitName, fruitLetter, setTotalScore, totalScore } = useCards();
    const [counter, setCounter] = useState(0);
    const { onOpen } = useModal();

    console.log(fruitName);
    console.log(fruitLetter);

    useEffect(() => {
        if (fruitName?.charAt(0) === fruitLetter) {
            //@ts-ignore
            setTotalScore(previous => previous + 1)
            if(totalScore && totalScore !== 4) {
                onOpen('matchModal', fruitName, fruitLetter)
            }
            else if (totalScore && totalScore === 4){
                onOpen('finishModal')
            }
        }
        
    }, [fruitName, fruitLetter]);

    return (
        <div className='h-full w-full flex gap-16'>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex items-center gap-4'>
                    <Card 
                        type='red' 
                        keyLabel='apple' 
                        icon={<FruitIcon imageSrc="apple.png" />} 
                        onClick={() => {}} 
                    />
                    <Card 
                        type='red' 
                        keyLabel='orange' 
                        icon={<FruitIcon imageSrc="orange.png" />} 
                        onClick={() => {}} 
                    />
                    <Card 
                        type='red' 
                        keyLabel='banana' 
                        icon={<FruitIcon imageSrc="banana.png" />} 
                        onClick={() => {}} 
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <Card 
                        type='red' 
                        keyLabel='lemon' 
                        icon={<FruitIcon imageSrc="lemon.png" />} 
                        onClick={() => {}} 
                    />
                    <Card 
                        type='red' 
                        keyLabel='cherry' 
                        icon={<FruitIcon imageSrc="cherry.png" />} 
                        onClick={() => {}}
                    />
                    <Card 
                        type='red' 
                        keyLabel='strawberry' 
                        icon={<FruitIcon imageSrc="strawberry.png" />} 
                        onClick={() => {}}
                    />
                </div>
            </div>



            <div className='flex flex-col items-center gap-4'>
                <div className='flex items-center gap-4'>
                    <Card 
                        type='blue' 
                        letter='a' 
                        onClick={() => {}}
                    />
                    <Card 
                        type='blue' 
                        letter='o' 
                        onClick={() => {}}
                    />
                    <Card 
                        type='blue' 
                        letter='b' 
                        onClick={() => {}}
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <Card 
                        type='blue' 
                        letter='l' 
                        onClick={() => {}}
                    />
                    <Card 
                        type='blue' 
                        letter='c' 
                        onClick={() => {}}
                    />
                    <Card 
                        type='blue' 
                        letter='s' 
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};
