"use client";

import { Card, CardDescription } from '@/components/ui/card'
import React, {useEffect} from 'react'
import Image from "next/image"
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import webdevLogo from "../public/web.png"
import botLogo from "../public/bot.png"
import softwareLogo from "../public/SD.png"
import testerLogo from "../public/tester.png"

const textVariant = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

const MatrixRain = ({ id }) => {
    const root = {
        wavecolor: {
            r: 255,
            g: 255,
            b: 255,
        },
        rainbowSpeed: 0.5,
        rainbow: true,
        matrixspeed: 50,
    };

    const characters = "01".split("");
    const font_size = 5;

    let drops = [];
    let hueFw = false;
    let hue = -0.01;

    useEffect(() => {
        const canvas = document.getElementById(`${id}`);
        const ctx = canvas.getContext("2d");

        const onResize = () => {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            drops = Array(Math.floor(canvas.width / font_size)).fill(1);
        };

        onResize();

        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#BBB";
            ctx.font = font_size + "px arial";

            for (let i = 0; i < drops.length; i++) {
                ctx.fillStyle = "rgba(10,10,10, 1)";
                ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);
                const text = characters[Math.floor(Math.random() * characters.length)];

                if (root.rainbow) {
                    hue += hueFw ? 0.01 : -0.01;
                    const rr = 255;
                    const rg = 255;
                    const rb = 255;
                    ctx.fillStyle = 'rgba(' + rr + ',' + rg + ',' + rb + ')';
                } else {
                    ctx.fillStyle = 'rgba(' + root.wavecolor.r + ',' + root.wavecolor.g + ',' + root.wavecolor.b + ')';
                }

                ctx.fillText(text, i * font_size, drops[i] * font_size);
                drops[i]++;

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
            }
        };

        window.onresize = onResize;

        const intervalId = setInterval(draw, root.matrixspeed);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <canvas id={`${id}`} style={{ display: 'block', height: '100%', width: '100%', alignSelf: 'center' }}></canvas>
    );
};


const ServiceCard = ({ index, title, icon, id }) => {
    return (
        <Tilt className='w-full border-2 border-white rounded-md'>
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
                <Card>
                    <div options={{max: 45, scale: 1, speed: 450}} style={{
                            borderColor: "rgba(255, 255, 255, 0.5)",
                            animation: "glow 2s infinite",
                            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5)",
                        }}
                         className='relative rounded-md py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                        {/*
                        <div className='absolute h-full w-full overflow-hidden rounded-[20px]'>
                            <MatrixRain id={id}/>
                        </div>
                        */}
                        <Image src={icon} alt={title} className='w-16 h-16 object-contain z-10'/>
                        <CardDescription className='text-[20px] font-bold text-center z-10'>{title}</CardDescription>
                    </div>
                </Card>
            </motion.div>
        </Tilt>
    );
}

const Overview = () => {
    const services = [
        {
            title: "Web Developer",
            icon: webdevLogo,
        },
        {
            title: "Bot Developer",
            icon: botLogo,
        },
        {
            title: "Software Developer",
            icon: softwareLogo,
        },
        {
            title: "Unit Tester",
            icon: testerLogo,
        },
    ];
    return (
        <>
            <span className='hash-span'></span>
            <section className='z-0 flex flex-col mb-16 mt-10'>
                <div className="z-0">
                    <motion.div variants={textVariant()}>
                        <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Introduction</p>
                        <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Overview</p>
                    </motion.div>
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-[17px] max-w-3xl leading-[30px]'>
                        I am Daniyal Faraz and I have been in tech for almost 5 years now. Gaining proficiency in
                        advanced python I moved to web development gaining insights in MERN stack and NEXT Js. Currently
                        along with development I have been working as a DevOps engineer setting CI/CD pipelines and
                        deploying full stack web applications on AWS using GitHub Actions along with building serverless
                        web applications on Microsoft Azure.

                    </motion.p>

                    <div className='mt-16 flex md:flex-row lg:flex-row gap-5 flex-col'>
                        {services.map((service, index) => {
                            return (<ServiceCard key={service.title} index={index} id={index} {...service} />)
                        })}
                    </div>
                </div>
            </section>
        </>
    );

}

export default Overview;