"use client"

import React from 'react'
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Github, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CardDescription, CardTitle, Card } from '@/Components/ui/card';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/Components/ui/textarea';

const formSchema = z.object({
    name: z.string({ invalid_type_error: "Name must be string" }).min(2, "Name must be at least 2 characters").max(50).nonempty("Name is required"),
    email: z.string().email({ message: "Invalid email address" }).nonempty("Email is required"),
    message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters").nonempty("Message is required"),
})

export function ContactForm() {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })
    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type your message here" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}



export default function Page() {
    return (
        <ContentLayout pathname={"Contact"}>
            <section className='flex gap-5'>
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
                <div className='w-[10px]'></div>
                <div className='basis-1/2 flex flex-col justify-center'>
                    <ContactForm />
                </div>
            </section>
        </ContentLayout>
    )
}