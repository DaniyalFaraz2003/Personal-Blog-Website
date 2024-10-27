import * as React from "react"

import { Button } from "@/Components/ui/button"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import {Badge} from "@/Components/ui/badge"
import user from "../assets/user.png"
import {motion} from "framer-motion";

export function BlogCard({date, title, description, badges, image, username, latest}) {
    return (
        <div className={"flex flex-row gap-5"}>
            <Card className="basis-[75%]">
                <CardHeader className={"flex flex-row items-center"}>
                    <CardDescription className={"text-lg"}>📝 Blog Post</CardDescription>
                    {latest && <Badge className={"ml-auto text-md"} variant="secondary">Latest</Badge>}
                </CardHeader>
                <CardContent className={"space-y-4"}>
                    <CardTitle className={"font-extrabold text-5xl hover:underline hover:cursor-pointer"}>{title}</CardTitle>
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
                        <Image src={image} alt={"user"} className='w-16 h-16 object-contain z-10'/>
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

export default function HomeBlogs () {
    const blogData = [
        {
            username: "Daniyal Faraz",
            date: new Date().toDateString(),
            title: "Chris Corner: Open Striped",
            description: "Recently Heikki Lotvonen cooked up a very cool idea: what if the colorization of code output on the web could be handled by the font itself. Syntax highlighting, as it were. So rather than accomplish this with a heaping pile of <span>s with classes to colorize the text, the font file knows how to apply […]",
            badges: ["C++", "Programming", "Problem-Solving"],
            image: user,
            latest: true
        },
        {
            username: "Daniyal Faraz",
            date: new Date().toDateString(),
            title: "WebAssembly vs JavaScript: A Comparison",
            description: "WebAssembly and JavaScript are two pivotal technologies in modern web development, each with distinct strengths and applications. This article provides a comparison of WebAssembly and JavaScript, examining their performance, portability, ease of use, security, and community support [..]",
            badges: ["JavaScript", "Programming"],
            image: user,
            latest: true
        }
    ]

    return (
        <>
            <section className='z-0 flex flex-col mb-10 mt-10'>
                <div className="z-0">
                    <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Read</p>
                    <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>My Blog</p>
                    <p className={"text-muted-foreground md:text-[20px] sm:text-[13px] xs:text-[10px] text-[10px]"}>To gain insights on problem solving and information on latest tech trends.</p>

                </div>
                <div className={"flex flex-col gap-5 my-10"}>
                    {blogData.map((blog, index) => {
                        return <BlogCard key={index} {...blog}/>
                    })}
                </div>
            </section>
        </>
    )
}