"use client";
import Link from 'next/link'
import axios from "axios";
import { Skeleton } from "@/Components/ui/skeleton"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import { useEffect, useState } from "react";


function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3 mx-5">
            <Skeleton className="h-[40px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-[150px] w-[250px]" />
            </div>
        </div>
    )
}

function BlogCard({ date, title, description, badges, first, last }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={"flex basis-1/3 gap-5"}>
            <Card className={`bg-transparent border-x-0 md:border-x lg:border-x ${first && "md:border-l-0 lg:border-l-0"} ${last && "md:border-r-0 lg:border-r-0"} rounded-none border-y-0 dark:hover:bg-[#2e2e33] hover:bg-gray-200`}>
                <CardHeader className={"flex flex-row items-center"}>
                    <Link href="/blog">
                        <CardTitle className={`text-xl font-bold hover:cursor-pointer ${hovered ? "underline" : ""}`}>{title}</CardTitle>
                    </Link>
                </CardHeader>
                <CardContent className={"space-y-4"}>
                    <CardDescription>{date}</CardDescription>
                    <div className={"flex gap-3"}>
                        {badges.map((badge, index) => {
                            return (<CardDescription className={"text-sm font-bold"} key={index}>#{badge}</CardDescription>)
                        })}
                    </div>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}

export default function HomeBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getBlogs = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const res = await axios.get("/api/blogs");
                setBlogs(res.data.blogs.slice(0, 3)); // Use slice instead of splice
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Set loading to false after fetching, regardless of success
            }
        }

        getBlogs();
    }, [])

    return (
        <>
            <section className='z-0 flex flex-col mb-10 mt-10'>
                <div className="z-0">
                    <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Read</p>
                    <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>My Blog</p>
                    <p className={"text-muted-foreground md:text-[20px] sm:text-[13px] xs:text-[10px] text-[10px]"}>To gain insights on problem solving and information on latest tech trends.</p>

                </div>
                <div className={`flex flex-col md:flex-row lg:flex-row ${!loading && "space-x-0"} my-10 items-center justify-center`}>
                    {
                        loading && [0, 1, 2].map((index) => {
                            return <SkeletonCard key={index} />
                        })
                    }
                    {
                        !loading && blogs.map((blog, index) => {
                            return <BlogCard 
                                key={index} 
                                {...blog} 
                                first={index === 0 ? true : false} 
                                last={index === blogs.length - 1 ? true : false} />
                        })
                    }

                </div>
            </section>
        </>
    )
}