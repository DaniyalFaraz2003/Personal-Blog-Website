"use client";

import TypingAnimator from 'react-typing-animator';
import { Button } from "@/components/ui/button";

export default function HeroSectionWithEmailInput() {
    const textArray = ["Software Engineer", "Full-Stack Developer", "Team Lead"]
    return (
        <>
            {/* Hero */}
            <div className="container">
                {/* Grid */}
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <p className="mt-3 text-xl text-muted-foreground">
                            Hello I am,
                        </p>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Daniyal Faraz
                        </h1>
                        <TypingAnimator
                            textArray={textArray}
                            cursorColor="#333"
                            textColor="#555"
                            fontSize="24px"
                            loop
                            typingSpeed={60}
                            delaySpeed={1000}
                            backspace
                            height="60px"
                            dynamicDelay
                            style={{fontFamily: "Helvetica" , fontWeight: "bold", marginTop: "10px"}}
                        />

                        {/* Brands */}
                        <div className="mt-6 lg:mt-12">
                            <span className="text-xs font-medium uppercase">my toolbox:</span>
                            <div className="mt-4 flex gap-x-8">
                                <img alt="Static Badge" src="https://img.shields.io/badge/with%20a%20logo-grey?style=for-the-badge&logo=javascript"/>
                            </div>
                        </div>
                        {/* End Brands */}
                    </div>
                    {/* End Col */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <img
                            className="w-full rounded-xl"
                            src="https://placehold.co/700x540"
                            alt="Image Description"
                        />
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Hero */}
        </>
    );
}
