import React from 'react'
import { ContentLayout } from "@/Components/admin-panel/content-layout";
import Image from 'next/image'
import MeImage from "@/public/Me.jpg";
import { CardContent, CardTitle, CardDescription } from '@/Components/ui/card';

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
                    I am a student, programmer and musician. I love to code and play music. I have been coding for the past 5 years and have worked on a variety of projects made in languages like python, C++, Java and JavaScript. I am currently studying computer science at a leading university in Pakistan named FAST National University of Computing And Emerging Sciences. I am passionate about technology and its potential to change the world
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
            <Image src={MeImage} alt={"My Image"} className={`w-[30%] h-[30%] md:w-[15%] md:h-[15%] lg:w-[15%] lg:h-[15%] rounded-3xl animate-float`}></Image>
            <h1 className={"text-7xl font-extrabold text-center mt-5"}>Daniyal Faraz</h1>
            <p className={"text-xl font-leading w-[50%] text-wrap text-center"}>Student, Programmer and Musician.</p>
        </section>
    )
}

const timelineData = [
    {
        date: "Current",
        title: "Freelancer and Student",
        description: "Currently I am working as a freelancer and continuing my studies in computer science."
    },
    {
        date: "June 2024",
        title: "Second Internship",
        description: "I landed a second internship as a DevOps intern at a leading software company in Pakistan called Contour Software where I developed exceptional public speaking skills and confidence to speak to a large audience as well as DevOps practices and tools like AWS and Microsoft Azure."
    },
    {
        date: "July 2023",
        title: "First Internship",
        description: "I got my first internship as a software developer at Intgrated Health Services company in Pakistan where I learnt web development and deployed my skills in creating amazing full stack projects."
    },
    {
        date: "August 2022",
        title: "Joined FAST National University",
        description: "I had completed my A levels with 3A*s and joined FAST National University, enrolling for the bachelors of computer science degree."
    },
    {
        date: "June 2023",
        title: "Completed advanced python course",
        description: "I completed the python bootcamp course enabling me to make interesting projects using the python language."
    },
    {
        date: "January 2019",
        title: "Started off with my first program",
        description: "I wrote my first hello world program in python as part of my new year's resolution to learn to code this year."
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