"use client";

import TypingAnimator from 'react-typing-animator';
import { Button } from "@/components/ui/button";
//
// export default function HeroSectionWithEmailInput() {
//     const textArray = ["Software Engineer", "Full-Stack Developer", "Team Lead"]
//     return (
//         <>
//             {/* Hero */}
//             <div className="container">
//                 {/* Grid */}
//                 <div className="max-w-2xl text-center mx-auto mt-10">
//                     <div className="lg:col-span-3">
//                         <p className="mt-3 text-xl text-muted-foreground">
//                             Hello I am,
//                         </p>
//                         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
//                             Daniyal Faraz
//                         </h1>
//                         <TypingAnimator
//                             textArray={textArray}
//                             cursorColor="#333"
//                             textColor="#555"
//                             fontSize="24px"
//                             loop
//                             typingSpeed={60}
//                             delaySpeed={1000}
//                             backspace
//                             height="60px"
//                             dynamicDelay
//                             style={{fontFamily: "Helvetica" , fontWeight: "bold", marginTop: "10px"}}
//                         />
//
//                         {/* Brands */}
//                         {/*<div className="mt-6 lg:mt-12">*/}
//                         {/*    <span className="text-xs font-medium uppercase">my toolbox:</span>*/}
//                         {/*    <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-2 w-full">*/}
//                         {/*        <img alt="Node.js"*/}
//                         {/*             src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>*/}
//                         {/*        <img alt="React"*/}
//                         {/*             src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>*/}
//                         {/*        <img alt="Next.js"*/}
//                         {/*             src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>*/}
//                         {/*        <img alt="C++"*/}
//                         {/*             src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"/>*/}
//                         {/*        <img alt="C#"*/}
//                         {/*             src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"/>*/}
//                         {/*        <img alt="Python"*/}
//                         {/*             src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>*/}
//                         {/*        <img alt="Flask"*/}
//                         {/*             src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>*/}
//                         {/*        <img alt="Django"*/}
//                         {/*             src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"/>*/}
//                         {/*        <img alt="Docker"*/}
//                         {/*             src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>*/}
//                         {/*        <img alt="Git"*/}
//                         {/*             src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>*/}
//                         {/*        <img alt="AWS"*/}
//                         {/*             src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>*/}
//                         {/*        <img alt="Azure"*/}
//                         {/*             src="https://img.shields.io/badge/Microsoft_Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white"/>*/}
//
//                         {/*    </div>*/}
//                         {/*</div>*/}
//                         {/* End Brands */}
//                     </div>
//                     {/* End Col */}
//                 </div>
//                 {/* End Grid */}
//             </div>
//             {/* End Hero */}
//         </>
//     );
// }


export default function HeroSectionGradientBackground() {
    const textArray = ["Software Engineer", "Full-Stack Developer", "Team Lead"]
    return (
        <>
            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="relative z-10">
                    <div className="container py-5 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <p className="">Hello I am</p>
                            {/* Title */}
                            <div className="mt-5 max-w-2xl">
                                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                    Daniyal Faraz
                                </h1>
                            </div>
                            <TypingAnimator
                                textArray={textArray}
                                cursorColor="#333"
                                textColor="#555"
                                fontSize="24px"
                                loop
                                typingSpeed={60}
                                delaySpeed={1000}
                                backspace
                                height="60px"
                                dynamicDelay
                                style={{fontFamily: "Helvetica" , fontWeight: "bold", marginTop: "10px"}}
                            />
                            {/* End Title */}
                            <div className="mt-5 max-w-3xl">
                                <p className="text-xl text-muted-foreground">
                                    And welcome to my digital corner! Where I share insights, projects, and blogs on the latest trends in tech. Join me on this journey of innovation and problem-solving!
                                </p>
                            </div>
                            {/* Buttons */}
                            <div className="mt-8 gap-3 flex justify-center">
                                <a href={"#about"}><Button size={"lg"}>Continue</Button></a>
                            </div>
                            {/* End Buttons */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero */}
        </>
    );
}
