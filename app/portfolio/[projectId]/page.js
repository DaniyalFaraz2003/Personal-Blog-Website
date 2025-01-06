"use client";

import React, { useEffect, useState } from 'react'
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from 'next/link';
import axios from "axios"

const titleTypography = "scroll-m-20 text-2xl font-semibold tracking-tight"
const descriptionTypography = "leading-7 [&:not(:first-child)]:mt-6 text-lg"

function Separator() {
    return (
        <div className={`w-full h-[1px] bg-[#18181b] my-5`} />
    )
}

function HeadingSeparator() {
    return (
        <div className={`w-full my-4`} />
    )
}

function CopyRightAlert({ copyRightInfo }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost">© Copyright info</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Copyright Info</AlertDialogTitle>
                    <AlertDialogDescription>
                        {copyRightInfo}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Got it</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

function BodySection({ problem, solution, features, techStack, copyRightInfo, demoUrl }) {
    return (
        <section className={`flex w-full gap-7`}>
            <Card className={`basis-[3/5] w-full pt-7`}>
                <CardContent>
                    <CardTitle className={`${titleTypography}`}>Problem Statement</CardTitle><HeadingSeparator />
                    <CardDescription className={`${descriptionTypography}`}>
                        {problem}
                    </CardDescription>
                    <Separator />
                    <CardTitle className={`${titleTypography}`}>Solution</CardTitle><HeadingSeparator />
                    <CardDescription className={`${descriptionTypography}`}>
                        {solution}
                    </CardDescription>
                    <Separator />
                    <CardTitle className={`${titleTypography}`}>Key Features</CardTitle>
                    <div className={`w-full my-6`} />
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`mb-4 grid first:mt-2 grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0`}
                        >
                            <span className="flex h-2 w-2 translate-y-2 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <CardTitle className={`${descriptionTypography}`}>
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className={`text-md`}>
                                    {feature.description}
                                </CardDescription>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className={`basis-2/5 w-full`}>
                <CardHeader>
                    <Link href={demoUrl}>
                        <Button variant={"outline"} className={`w-fit`}>
                            Open Demo
                            <ArrowUpRight />
                        </Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    {techStack.map((tech, index) => (
                        <Badge key={index} variant={'secondary'} className={`m-1 rounded-sm text-sm`}>{tech}</Badge>
                    ))}
                </CardContent>
                <CardFooter>
                    <CopyRightAlert copyRightInfo={copyRightInfo} />
                </CardFooter>
            </Card>
        </section>
    )
}

function HeaderSection({ title, githubUrl }) {
    return (
        <section className={``}>
            <Card className={`flex justify-between h-fit py-5 px-7`}>
                <CardTitle className={"text-3xl font-extrabold"}>{title}</CardTitle>
                <Link href={githubUrl}>
                    <Button variant={'secondary'} className={`flex gap-3 h-full`}>
                        Open in GitHub
                        <ArrowUpRight />
                    </Button>
                </Link>
            </Card>
        </section>
    )
}

export default function Page({ params }) {
    const { projectId } = params;
    const [projectData, setProjectData] = useState({
        id: "",
        title: "",
        description: "",
        image: "", // path of the image on the file system
        githubUrl: "",
        demoUrl: "",
        copyRightInfo: "",
        problem: "",
        solution: "",
        techStack: ["", "", ""],
        features: [
            {
                title: "",
                description: ""
            },
            {
                title: "",
                description: ""
            },
            {
                title: "",
                description: ""
            }
        ]
    })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjectData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/projects/${projectId}`);
                setProjectData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getProjectData();
    }, [])

    console.log(projectData);
    
    return (
        <ContentLayout pathname={`portfolio/${projectData.title}`}>
            <HeaderSection 
                title={projectData.title}
                githubUrl={projectData.githubUrl} 
            />
            
            <div className={`my-10 w-full justify-center flex`}>
                <Image src={projectData.image} alt={'Project Image'} width={"800"} height={"400"} />
            </div>
            <BodySection  
                problem={projectData.problem}
                solution={projectData.solution}
                features={projectData.features}
                techStack={projectData.techStack}
                copyRightInfo={projectData.copyRightInfo}
                demoUrl={projectData.demoUrl}
            />
        </ContentLayout>
    )
}