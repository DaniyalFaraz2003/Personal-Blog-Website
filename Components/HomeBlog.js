import * as React from "react"

import { Button } from "@/Components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import {Badge} from "@/Components/ui/badge"
import {motion} from "framer-motion";

export function CardWithForm({title, description, badges}) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardDescription className={"text-lg"}>📝 Blog Post</CardDescription>
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
    )
}

export default function HomeBlogs () {
    return (
        <>
            <section className='z-0 flex flex-col mb-10 mt-10'>
                <div className="z-0">
                    <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Read</p>
                    <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>My Blog</p>
                    <p className={"text-muted-foreground md:text-[20px] sm:text-[13px] xs:text-[10px] text-[10px]"}>To gain insights on problem solving and information on latest tech trends.</p>

                </div>
                <div className={"flex flex-col gap-5 my-10"}>
                    <CardWithForm title={"Chris Corner: Open Striped"} description={"Recently Heikki Lotvonen cooked up a very cool idea: what if the colorization of code output on the web could be handled by the font itself. Syntax highlighting, as it were. So rather than accomplish this with a heaping pile of <span>s with classes to colorize the text, the font file knows how to apply […]"}
                        badges={["C++", "Programming", "Problem-Solving"]}
                    />
                </div>
            </section>
        </>
    )
}