"use client";

import React, { Suspense } from "react";

import Image from 'next/image'
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";


import css from '../assets/css.png'
import docker from '../assets/docker.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import js from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import nodejs from '../assets/nodejs.png'
import nextjs from '../assets/NEXT.png'
import python from '../assets/python.png'
import reactjs from '../assets/reactjs.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'


const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as='div'
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className='canvas-loader'></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};


const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl.src]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};



export default function HomeSkills() {
    // make the skills array of objects with icon: image and name: name
    const skills = [
        {
            icon: css,
            name: 'CSS'
        },
        {
            icon: docker,
            name: 'Docker'
        },
        {
            icon: figma,
            name: 'Figma'
        },
        {
            icon: git,
            name: 'Git'
        },
        {
            icon: html,
            name: 'HTML'
        },
        {
            icon: js,
            name: 'JavaScript'
        },
        {
            icon: mongodb,
            name: 'MongoDB'
        },
        {
            icon: nodejs,
            name: 'NodeJS'
        },
        {
            icon: nextjs,
            name: 'NextJS'
        },
        {
            icon: python,
            name: 'Python'
        },
        {
            icon: reactjs,
            name: 'ReactJS'
        },
        {
            icon: tailwind,
            name: 'TailwindCSS'
        },
        {
            icon: typescript,
            name: 'TypeScript'
        }
    ]
    console.log(skills);
    return (
        <>
            <section className='z-0 flex flex-col mb-10 mt-10'>
                <div className="z-0 mb-10">
                    <p className={"sm:text-[18px] text-[14px] uppercase tracking-wider"}>Consider</p>
                    <p className={"font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>My Skills</p>
                    <p className={"text-muted-foreground md:text-[20px] sm:text-[13px] xs:text-[10px] text-[10px]"}>The
                        tools and languages I specialize in.</p>
                </div>
                <div className='flex flex-wrap justify-center gap-10'>
                    {skills.map((skill, index) => {
                        return (
                            <div className='w-28 h-28' key={skill.name}>
                                <BallCanvas icon={skill.icon} />
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}