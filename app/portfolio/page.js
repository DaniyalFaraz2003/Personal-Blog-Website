import React from 'react'
import {ContentLayout} from "@/Components/admin-panel/content-layout";
import Image from 'next/image'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import project1 from '@/public/Project1.png'
import project2 from '@/public/Project2.png'
import Link from 'next/link'

function HeroSection() {
    return (
        <section className={"flex flex-col gap-7"}>
            <h1 className={"text-7xl font-extrabold"}>Portfolio</h1>
            <p className={"text-xl font-leading w-[50%] text-wrap"}>This is where I showcase my projects and work experience.</p>
        </section>
    )
}

function ProjectCard({ id, title, description, image }) {
    return (
        <Card className="flex flex-row items-center w-full p-4 border rounded-lg shadow-lg">
            <CardContent className="basis-[3/5]">
                <Link href={`/portfolio/${id}`} key={id}>
                    <CardTitle className="font-extrabold text-3xl mb-2 hover:cursor-pointer hover:underline">{title}</CardTitle>
                </Link>
                <CardDescription className="text-xl">{description}</CardDescription>
            </CardContent>
            <Image
                src={image}
                alt="project"
                className="w-64 h-44 object-contain flex-shrink-0 ml-auto"
            />
        </Card>
    );
}


function Projects() {
    const projectData = [
        {
            id: 1,
            title: 'Inventory Management System',
            description: 'An inventory management system that helps businesses keep track of their inventory.',
            image: project1
        },
        {
            id: 2,
            title: 'Gym Management System',
            description: 'A gym management system that helps gym owners keep track of their members and their subscriptions.',
            image: project2
        },
    ]

    return (
        <section>
            <div className={'flex flex-col gap-5 my-10'}>
                {projectData.map((project, index) => {
                    return <ProjectCard key={index} {...project} />
                })}
            </div>
        </section>
    )
}

export default function Portfolio() {
    return (
        <ContentLayout pathname="Portfolio">
            <HeroSection />
            <Projects />
        </ContentLayout>
    )
}
