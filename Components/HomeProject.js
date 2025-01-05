"use client";

import React, { useState, useEffect } from "react"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import ghIcon from "../public/gh-icon.png"

function ProjectCard({ image, title, description, githubUrl }) {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <Image src={image} alt="Project" width={"350"} height={"192"} className={"w-full h-48"} />
                </CardHeader>
                <CardContent className={"flex flex-col gap-3"}>
                    <CardTitle className={"font-bold text-lg"}>{title}</CardTitle>
                    <CardDescription className={"text-md"}>{description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href="/portfolio">
                        <Button variant="outline">Details</Button>
                    </Link>
                    <Link href={githubUrl}>
                        <Button className={"rounded-full w-fit p-0 h-fit bg-white"}><Image className={""} src={ghIcon} alt={"github"} /></Button>
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default function HomeProject() {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("/api/projects")
                setProjects(res.data.projects.splice(0, 2))
            } catch (error) {
                console.log(error)
            }
        }

        fetchProjects();
    }, [])

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
