import React from 'react'
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Github, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CardDescription, CardTitle } from '@/Components/ui/card';


export default function Page() {
    return (
        <ContentLayout pathname={"Contact"}>
            <section className='flex'>
                <div className='basis-1/2 flex flex-col gap-7 justify-center'>
                    <div className='flex gap-4'>
                        <Github size={24} />
                        <Facebook size={24} />
                        <Instagram size={24} />
                        <Linkedin size={24} />
                    </div>
                    <CardTitle className="text-6xl">I Look Forward to <span className='text-sky-500'>Connecting</span> With You!</CardTitle>
                    <CardDescription className='text-lg font-bold'>
                        Whether you have a question, a collaboration idea, a thought to share, or just want to say hi, feel free to reach out.
                    </CardDescription>
                    <div className='flex flex-col'>
                        <CardDescription className="text-[16px]"><span className='font-bold text-sky-600'>Email: </span>daniyalfaraz2003@gmail.com</CardDescription>
                        <CardDescription className="text-[16px]"><span className='font-bold text-sky-600'>Phone: </span>+92 318 1187600</CardDescription>
                    </div>
                </div>
                <div className='basis-1/2'>

                </div>
            </section>
        </ContentLayout>
    )
}