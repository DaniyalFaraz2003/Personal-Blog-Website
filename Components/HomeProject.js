import React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function ProjectCard() {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>This is some content in card</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
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
