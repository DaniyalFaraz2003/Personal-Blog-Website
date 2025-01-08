"use client"

import React, { useState, useEffect } from 'react'
import { ContentLayout } from "@/Components/admin-panel/content-layout";
import { Github, Facebook, Instagram, Linkedin, Terminal } from 'lucide-react';
import { CardDescription, CardTitle, Card } from '@/Components/ui/card';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/Components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
import { Textarea } from '@/Components/ui/textarea';
import { Spinner } from '@/Components/ui/spinner';
import { Alert, AlertTitle, AlertDescription } from '@/Components/ui/alert';
import Link from 'next/link';
import axios from "axios"



const formSchema = z.object({
    name: z.string({ invalid_type_error: "Name must be string" }).min(2, "Name must be at least 2 characters").max(50).nonempty("Name is required"),
    email: z.string().email({ message: "Invalid email address" }).nonempty("Email is required"),
    message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters").nonempty("Message is required"),
})

function AlertMessage({ title, message, visible, setVisible }) {

    useEffect(() => {

        // Hide the alert after 2 seconds
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 3000);

        // Cleanup timeout
        return () => clearTimeout(timeout);
    }, [visible]);

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <Alert className="relative z-10 w-96">
                <Terminal className="h-4 w-4" />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </div>
    );
}

export function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
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
    async function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            setSubmitting(true);
            const response = await axios.post("/api/contact", values);
            if (response.status === 200) {
                setShowAlert(true);
            }
        } catch (err) {
            console.error(err)
        } finally {
            setSubmitting(false);
            form.reset()
        }

    }

    return (
        <Form {...form}>
            <AlertMessage visible={showAlert} setVisible={setShowAlert} title={"Sucess!"} message={"Message sent successfully"}/>
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
                <Button type="submit" className="w-24">
                    {!submitting && "Submit"}
                    {submitting && <Spinner className={"text-white dark:text-black"} />}
                </Button>
            </form>
        </Form>
    )
}



export default function Page() {
    return (
        <ContentLayout pathname={"Contact"}>

            <section className='flex flex-col md:flex-row lg:flex-row gap-5'>
                <div className='basis-1/2 flex flex-col gap-7 justify-center'>
                    <div className='flex gap-4'>
                        <Link href={"https://github.com/DaniyalFaraz2003"}><Github size={24} /></Link>
                        <Link href={"https://www.facebook.com/daniyal.faraz.37/"}><Facebook size={24} /></Link>
                        <Link href={"https://www.instagram.com/daniyalfaraz2003/"}><Instagram size={24} /></Link>
                        <Link href={"https://www.linkedin.com/in/daniyal-faraz-911360242/"}><Linkedin size={24} /></Link>
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