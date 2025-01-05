"use client";

import React, { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import { ContentLayout } from "@/components/admin-panel/content-layout";
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import axios from "axios"
import Link from 'next/link'

function SkeletonCard() {
    return (
        <div className="flex flex-row items-center mb-5 w-full p-4 rounded-lg">
            <CardContent className="w-full items-start flex flex-col gap-2">
                <Skeleton className="h-8 w-[80%] mb-2" />
                <Skeleton className="h-6 w-1/2" />
            </CardContent>
            <Skeleton className="w-64 h-32 flex-shrink-0 ml-auto" />
        </div>
    );
}

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
                width={"256"}
                height={"176"}
                className="object-contain flex-shrink-0 ml-auto"
            />
        </Card>
    );
}


function Projects() {
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjectData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/projects');
                setProjectData(response.data.projects);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getProjectData();
    }, [])


    return (
        <section>
            <div className={'flex flex-col gap-5 my-10'}>
                {
                    loading ? Array.from({ length: 2 }).map((_, index) => <SkeletonCard key={index} />) : null
                }
                {
                    projectData.map((project, index) => {
                        return <ProjectCard
                            key={index}
                            {...project} />
                    })
                }
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
