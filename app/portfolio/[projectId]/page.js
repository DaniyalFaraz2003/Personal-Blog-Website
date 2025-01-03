import React from 'react'
import {ContentLayout} from "@/Components/admin-panel/content-layout";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';

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

function BodySection () {
    const features = [
    {
        title: "Real-Time Stock Tracking",
        description: "View up-to-date inventory levels across locations.",
    },
    {
        title: "Stock Alerts",
        description: "Notifications for low stock, reorder levels, or excess stock.",
    },
    {
        title: "Barcode Integration",
        description: "Efficient scanning for adding or retrieving stock information.",
    },
    ]
    return (
        <section className={`flex w-full gap-9`}>
            <Card className={`basis-[3/5] w-full pt-7`}>
                <CardContent>
                    <CardTitle className={`${titleTypography}`}>Problem Statement</CardTitle><HeadingSeparator />
                    <CardDescription className={`${descriptionTypography}`}>
                        Managing inventory manually or with outdated systems can lead to inefficiencies such as overstocking, stockouts, data errors, and poor tracking of goods. These challenges result in lost revenue, increased operational costs, and reduced customer satisfaction. Businesses also struggle to gain real-time visibility into inventory levels, making it difficult to make informed decisions and maintain optimal stock levels.
                    </CardDescription>
                    <Separator />
                    <CardTitle className={`${titleTypography}`}>Solution</CardTitle><HeadingSeparator />
                    <CardDescription className={`${descriptionTypography}`}>
                        An automated and software driven inventory management system streamlines the tracking, managing, and reporting of inventory.
                    </CardDescription>
                    <Separator />
                    <CardTitle className={`${titleTypography}`}>Key Features</CardTitle>
                    <div className={`w-full my-6`}/>
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
                    <Button variant={"outline"} className={`w-fit`}>
                        Open Demo
                        <ArrowUpRight />
                    </Button>
                </CardHeader>
                <CardContent>

                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </section>
    )
}

function HeaderSection() {
    return (
        <section className={``}>
            <Card className={`flex justify-between h-fit py-5 px-7`}>
                <CardTitle className={"text-3xl font-extrabold"}>Inventory Management System</CardTitle>
                <Button variant={'secondary'} className={`flex gap-3 h-full`}>
                    Open in GitHub
                    <ArrowUpRight />
                </Button>
            </Card>
        </section>
    )
}

export default function Page({params}) {
    const {projectId} = params;
    return (
        <ContentLayout pathname={`portfolio/${projectId}`}>
            <HeaderSection/>
            <div className={`my-10 w-full justify-center flex`}>
                <Image src={"/Project1.png"} alt={'Project Image'} width={"800"} height={"400"} />
            </div>
            <BodySection />
        </ContentLayout>
    )
}