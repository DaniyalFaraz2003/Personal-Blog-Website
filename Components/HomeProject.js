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

import project1 from "../assets/Project1.jpeg"

function ProjectCard() {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <Image src={project1} alt="Project" />
                </CardHeader>
                <CardContent className={"flex flex-col gap-3"}>
                    <CardTitle className={"font-bold text-lg"}>Inventory Management System</CardTitle>
                    <CardDescription className={"text-md"}>An inventory management system designed to streamline items handling processes and automate inventory mangement tasks</CardDescription>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <Button variant="outline">Details</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default function HomeProject() {
    return (
        <>
            <section className='z-0 flex flex-col mb-10 mt-10'>
                <div className="z-0 mb-10">
                    <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Discover</p>
                    <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>My Projects</p>
                    <p className={"text-muted-foreground md:text-[20px] sm:text-[13px] xs:text-[10px] text-[10px]"}>That bring my ideas to life, showcasing my skills and creativity.</p>
                </div>
                <ProjectCard />
            </section>
        </>
    )
}
