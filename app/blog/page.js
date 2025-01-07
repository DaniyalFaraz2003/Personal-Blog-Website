//page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios"

function SkeletonCard() {
    return (
        <div className={"flex flex-row gap-5 mb-5"}>
            <div className="basis-[75%]">
                <div className={"space-y-4"}>
                    <Skeleton className={"w-[600px] h-[50px]"} />
                    <Skeleton className={"w-[600px] h-5"} />
                    <Skeleton className={"w-[550px] h-5"} />
                    <Skeleton className={"w-[570px] h-5"} />
                    <Skeleton className={"w-[520px] h-5"} />
                </div>
                <div className="flex mt-5 justify-between">
                    <div className={"flex gap-3"}>
                        {[1, 2, 3, 4].map((badge, index) => <Skeleton key={index} className={"w-16 h-5"} />)}
                    </div>
                </div>
            </div>
            <div className={"basis-[25%] h-fit w-fit"}>
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeroSection() {
    return (
        <section className={"flex flex-col gap-7"}>
            <h1 className={"text-7xl font-extrabold"}>Blog</h1>
            <p className={"text-xl font-leading w-[50%] text-wrap"}>This is where I post tips and tricks for problem solving as well as new technology trends and resources.</p>
        </section>
    )
}

function Blogs({ loading, blogs }) {
    return (
        <section>
            <div className={"flex flex-col gap-5 my-10"}>
                {
                    loading && [1, 2, 3].map((_, index) => <SkeletonCard key={index} />)
                }
                {
                    !loading && blogs.map((blog, index) => {
                        return <BlogCard key={index} {...blog} />
                    })
                }
            </div>
        </section>
    )
}

export function BlogCard({ _id, date, title, description, badges, image, username, latest }) {
    return (
        <div className={"flex md:flex-row lg:flex-row flex-col-reverse gap-5"}>
            <Card className="basis-[75%]">
                <CardHeader className={"flex flex-row items-center"}>
                    <CardDescription className={"text-lg"}>📝 Blog Post</CardDescription>
                    {latest && <Badge className={"ml-auto text-md"} variant="secondary">Latest</Badge>}
                </CardHeader>
                <CardContent className={"space-y-4"}>
                    <Link href={`/blog/${_id}`} key={_id}>
                        <CardTitle className={"font-extrabold text-5xl hover:underline hover:cursor-pointer"}>{title}</CardTitle>
                    </Link>
                    <CardDescription className={"text-xl"}>
                        {description}
                    </CardDescription>
                </CardContent>
                <CardFooter className="flex mt-5 justify-between">
                    <CardDescription className={"flex gap-3"}>
                        {badges.map((badge, index) => <Badge key={index}>{badge}</Badge>)}
                    </CardDescription>
                </CardFooter>
            </Card>
            <Card className={"basis-[25%] h-fit w-fit"}>
                <CardHeader className={"space-y-2"}>
                    <CardDescription>{date}</CardDescription>
                    <div className={"flex gap-3"}>
                        <Image src={image} alt={"user"} width={"64"} height={"64"} className='object-contain z-10' />
                        <div className={""}>
                            <CardTitle className={"text-lg"}>{username}</CardTitle>
                            <CardDescription>Author</CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}


export default function Page() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                setLoading(true);
                const response = await axios.get("/api/blogs");
                setBlogs(response.data.blogs);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getBlogs();
    }, [])

    return (
        <ContentLayout pathname="Blog">
            <HeroSection />
            <Blogs loading={loading} blogs={blogs} />
        </ContentLayout>
    );
}