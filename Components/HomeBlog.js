"use client";

import * as React from "react"
import Link from 'next/link'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react";

function BlogCard({ date, title, description, badges, first, last }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={"flex gap-5"}>
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

const blogData = [
    {
        date: new Date().toLocaleDateString(),
        title: "Chris Corner: Open Striped",
        description: "Recently Heikki Lotvonen cooked up a very cool idea: what if the colorization of code output on the web could be handled by the font itself. Syntax highlighting, as it were. So rather than accomplish this with a heaping pile of <span>s with classes to colorize the text, the font file knows how to apply [...]",
        badges: ["C++", "Programming", "Problem-Solving"],

    },
    {
        date: new Date().toLocaleDateString(),
        title: "WebAssembly vs JavaScript: A Comparison",
        description: "WebAssembly and JavaScript are two pivotal technologies in modern web development, each with distinct strengths and applications. This article provides a comparison of WebAssembly and JavaScript, examining their performance, portability, ease of use, security, and community support [...]",
        badges: ["JavaScript", "Programming"],

    },
    {
        date: new Date().toLocaleDateString(),
        title: "Shift Networks",
        description: "In my recent view of homomorphic encryption, I under-emphasized the importance of data layout when working with arithmetic (SIMD-style) homomorphic encryption schemes. In the FHE world, the name given to data layout strategies is called 'packing', because it revolves around putting [...]",
        badges: ["Logic", "Networking", "Design"],

    }
]

export default function HomeBlogs() {

    return (
        <>
            <section className='z-0 flex flex-col mb-10 mt-10'>
                <div className="z-0">
                    <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Read</p>
                    <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>My Blog</p>
                    <p className={"text-muted-foreground md:text-[20px] sm:text-[13px] xs:text-[10px] text-[10px]"}>To gain insights on problem solving and information on latest tech trends.</p>

                </div>
                <div className={"flex flex-row space-x-0 my-10"}>
                    {blogData.map((blog, index) => {
                        return <BlogCard key={index} {...blog} first={index === 0 ? true : false} last={index === blogData.length - 1 ? true : false} />
                    })}
                </div>
            </section>
        </>
    )
}