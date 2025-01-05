import React from 'react'
import { ContentLayout } from "@/components/admin-panel/content-layout";
import Image from 'next/image'
import MeImage from "@/public/Me.jpg";
import { CardContent, CardTitle, CardDescription } from '@/components/ui/card';

function AboutMe() {
    return (
        <div className='w-full mt-5 p-4 sm:p-7 flex flex-col text-center'>
            <div className="flex items-center gap-2 justify-center">
                <div className='h-[1px] flex-grow bg-slate-500'></div>
                <h2 className="text-3xl text-center font-bold">About Me</h2>
                <div className='h-[1px] flex-grow bg-slate-500'></div>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Who I am.</p>
            <div>
                <p className="text-lg mt-5">
                    I am a student, programmer and musician. I love to code and play music. I have been coding for the past 5 years and have worked on a variety of projects. I am currently studying computer science at a leading university in the United States. I am passionate about technology and its potential to change the world
                </p>
            </div>
        </div>
    )
}

function Timeline() {
    return (
        (<div className="p-4 sm:p-7">
            <div className="text-center mb-8">
                <div className="flex items-center gap-2 justify-center">
                    <div className='h-[1px] w-full bg-slate-500'></div>
                    <h2 className="text-3xl font-bold">Timeline</h2>
                    <div className='h-[1px] w-full bg-slate-500'></div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">A look back at my journey so far.</p>
            </div>
            <div
                className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
                {timelineData.map((data, index) => {
                    return (
                        <div className="grid gap-1 text-sm relative" key={index}>
                            <div
                                className="aspect-square w-3 bg-sky-500 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 " />
                            <CardDescription>{data.date}</CardDescription>
                            <CardContent className="mt-4">
                                <CardTitle className="text-xl mb-3">{data.title}</CardTitle>
                                <CardDescription className="text-[17px]">
                                    {data.description}
                                </CardDescription>
                            </CardContent>
                        </div>
                    )
                })}
            </div>
        </div>)
    );
}


function HeroSection() {
    return (
        <section className={`flex flex-col items-center justify-center gap-5`}>
            <Image src={MeImage} alt={"My Image"} className={`w-[15%] h-[15%] rounded-3xl animate-float`}></Image>
            <h1 className={"text-7xl font-extrabold text-center mt-5"}>Daniyal Faraz</h1>
            <p className={"text-xl font-leading w-[50%] text-wrap text-center"}>Student, Programmer and Musician.</p>
        </section>
    )
}

const timelineData = [
    {
        date: "March 14, 1879",
        title: "Invention of Quantum Computing",
        description: "Scientists at a leading research institution unveil a groundbreaking breakthrough in quantum computing."
    },
    {
        date: "April 1, 1939",
        title: "First Quantum Computer",
        description: "The first quantum computer is built by a team of researchers in a laboratory in the United States."
    },
    {
        date: "June 12, 1954",
        title: "Quantum Computing Research",
        description: "A group of scientists in Europe publish a paper on quantum computing research."
    },
    {
        date: "December 31, 1979",
        title: "Quantum Computing Breakthrough",
        description: "A team of researchers in Asia makes a significant breakthrough in quantum computing."
    }
]

export default function Page() {
    return (
        <ContentLayout pathname={"About"}>
            <HeroSection />
            <AboutMe />
            <Timeline />
        </ContentLayout>
    )
}