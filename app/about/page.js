import React from 'react'
import { ContentLayout } from "@/components/admin-panel/content-layout";
import Image from 'next/image'
import MeImage from "@/public/Me.jpg";

function HeroSection() {
    return (
        <section className={`flex flex-col items-center justify-center gap-5`}>
            <Image src={MeImage} alt={"My Image"} className={`w-[15%] h-[15%] rounded-3xl animate-float`}></Image>
            <h1 className={"text-7xl font-extrabold text-center mt-5"}>Daniyal Faraz</h1>
            <p className={"text-xl font-leading w-[50%] text-wrap text-center"}>Student, Programmer and Musician.</p>
        </section>
    )
}

export default function Page() {
    return (
        <ContentLayout pathname={"About"}>
            <HeroSection />
        </ContentLayout>
    )
}