"use client";
import Link from 'next/link'
import axios from "axios";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react";

function BlogCard({ date, title, description, badges, first, last }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={"flex basis-1/3 gap-5"}>
            <Card className={`bg-transparent ${first && "border-l-0"} ${last && "border-r-0"} rounded-none border-y-0 dark:hover:bg-[#2e2e33] hover:bg-gray-200`}>
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
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get("/api/blogs");
                setBlogs(res.data.blogs.splice(0, 3));
            } catch (error) {
                console.error(error);
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
                <div className={"flex flex-row space-x-0 my-10"}>
                    {blogs.map((blog, index) => {
                        return <BlogCard key={index} {...blog} first={index === 0 ? true : false} last={index === blogs.length - 1 ? true : false} />
                    })}
                </div>
            </section>
        </>
    )
}