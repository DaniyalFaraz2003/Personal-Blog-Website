import React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import project1 from "../assets/Project1.png"
import project2 from "../assets/Project2.png"
import ghIcon from "../assets/gh-icon.png"

function ProjectCard({img, title, description}) {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <Image src={img} alt="Project" className={"w-full h-48"} />
                </CardHeader>
                <CardContent className={"flex flex-col gap-3"}>
                    <CardTitle className={"font-bold text-lg"}>{title}</CardTitle>
                    <CardDescription className={"text-md"}>{description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                        <Button variant="outline">Details</Button>
                        <Button className={"rounded-full w-fit p-0 h-fit bg-white"}><Image className={""} src={ghIcon} alt={"github"} /></Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default function HomeProject() {
    const projects = [
        {
            id: 1,
            img: project1,
            title: "Inventory Management System",
            description: "An inventory management system designed to streamline items handling processes and automate inventory management tasks"
        },
        {
            id: 2,
            img: project2,
            title: "Gym Management System",
            description: "A centralized system to handle members and trainers, along with their workout and diet plans, memberships and gym branches over a wide network"
        }

    ]
    return (
        <>
            <section className='z-0 flex flex-col mb-10 mt-10'>
                <div className="z-0 mb-10">
                    <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Discover</p>
                    <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>My Projects</p>
                    <p className={"text-muted-foreground md:text-[20px] sm:text-[13px] xs:text-[10px] text-[10px]"}>That bring my ideas to life, showcasing my skills and creativity.</p>
                </div>
                <div className={"flex flex-row gap-3 w-full justify-center"}>
                    {projects.map((project, index) => {
                        return <ProjectCard {...project} key={index} />
                    })}
                </div>
            </section>
        </>
    )
}
