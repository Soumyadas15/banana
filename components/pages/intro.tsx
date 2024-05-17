"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { PageTemplate } from "./page-template";
import { InstructionCard } from "../ui/instruction-card";
import { CardsPage } from "./cards-page";

enum STEPS {
    SCREEN_1 = 0,
    SCREEN_2 = 1,
    SCREEN_3 = 2,
    INSTRUCTION = 3,
    ACTIVITY = 4,
    REWARDS = 5,
}

export const Intro = () => {
    const [monkeImg, setMonkeImg] = useState('monke_smile.svg');
    const [buttonLabel, setButtonLabel] = useState('START');
    const [step, setStep] = useState(STEPS.SCREEN_1);
    const [backButtonVisibility, setBackButtonVisibility] = useState(false);

    useEffect(() => {
        if(step === STEPS.SCREEN_1){
            setButtonLabel('START');
        }
        else if (step === STEPS.SCREEN_2) {
            setButtonLabel('NEXT');
        } else if (step === STEPS.SCREEN_3) {
            setButtonLabel('YES');
        } else if (step === STEPS.INSTRUCTION) {
            setButtonLabel('PLAY');
        }
    }, [step]);

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const handleClick = () => {
        onNext();
    };


    let bodyContent = (
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
                <Image
                    src={`/images/${monkeImg}`}
                    width={500}
                    height={500}
                    alt="monkey"
                    className="mt-[8rem]"
                />
            </div>
            <div className="absolute top-[20%] left-[50rem]  transform bg-white border-[#11AEC6] border-0 shadow-lg p-8 rounded-3xl">
                <p className="text-[#11AEC6] text-2xl font-black">Welcome kiddo !</p>
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
        </>
    )

    if(step === STEPS.SCREEN_2){
        bodyContent = (
            <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
                    <Image
                        src={`/images/${monkeImg}`}
                        width={500}
                        height={500}
                        alt="monkey"
                        className="mt-[8rem]"
                    />
                </div>
                <div className="absolute top-[20%] left-[50rem]  transform bg-white border-[#11AEC6] border-0 shadow-lg p-8 rounded-3xl">
                    <p className="text-[#11AEC6] text-2xl font-black">Hi , I am Mizo ! and I love bananas</p>
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
            </>
        )
    }

    if(step === STEPS.SCREEN_3){
        bodyContent = (
            <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
                    <Image
                        src={`/images/${monkeImg}`}
                        width={500}
                        height={500}
                        alt="monkey"
                        className="mt-[8rem]"
                    />
                </div>
                <div className="absolute top-[20%] left-[50rem]  transform bg-white border-[#11AEC6] border-0 shadow-lg p-8 rounded-3xl">
                    <p className="text-[#11AEC6] text-2xl font-black">Can you help me get some ? </p>
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
            </>
        )
    }


    if(step === STEPS.INSTRUCTION){
        bodyContent = (
            <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
                    <div className="w-full flex gap-[8rem] items-center">
                        <InstructionCard
                            title="Select a pink card."
                            subTitle="it has images"
                            stepLabel="1"
                            stepColor="orange"
                            cardImage="card_1.svg"
                        />
                        <InstructionCard
                            title="Select a blue card."
                            subTitle="it has alphabets"
                            stepLabel="2"
                            stepColor="orange"
                            cardImage="card_2.svg"
                        />
                        <InstructionCard
                            title="Its a match !"
                            subTitle="otherwise retry :("
                            stepLabel="3"
                            stepColor="orange"
                            cardImage="card_3.svg"
                        />
                    </div>
                </div>
                
            </>
        )
    }

    if(step === STEPS.ACTIVITY){
        bodyContent = (
            <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <CardsPage/>
                </div>
                
            </>
        )
    }



    return (
        <PageTemplate
            body={bodyContent}
            buttonLabel={buttonLabel}
            showButton={!(step === STEPS.ACTIVITY)}
            showProgressBar={!(step === STEPS.SCREEN_1 || step === STEPS.SCREEN_2)}
            showBackButton={!(step === STEPS.SCREEN_1)}
            primaryButtonAction={handleClick}
            backButtonAction={onBack}
        />
    );
};