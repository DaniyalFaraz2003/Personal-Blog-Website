import React from 'react'
import {ContentLayout} from "@/Components/admin-panel/content-layout";

function HeroSection() {
    return (
        <section className={"flex flex-col gap-7"}>
            <h1 className={"text-7xl font-extrabold"}>Portfolio</h1>
            <p className={"text-xl font-leading w-[50%] text-wrap"}>This is where I showcase my projects and work experience.</p>
        </section>
    )
}

export default function Portfolio() {
    return (
        <ContentLayout pathname="Portfolio">
            <HeroSection />
        </ContentLayout>
    )
}