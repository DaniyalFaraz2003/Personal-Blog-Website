"use client";

import {ContentLayout} from "@/Components/admin-panel/content-layout";
import {Remark, useRemark} from 'react-remark';
import * as React from "react";
import {useEffect} from "react";
import "./modest.css"


const markdown = "# Introduction to C++ Programming\n" +
    "C++ is a powerful, high-performance programming language commonly used for system software, game development, and applications where efficiency is critical. This article introduces the basics of C++ and why it's a valuable skill for developers.\n" +
    "## Why Learn C++?\n" +
    "C++ offers several advantages, making it popular in both industry and academia:\n" +
    "1. **Efficiency**: C++ provides high-level abstraction without sacrificing low-level control over hardware.\n" +
    "2. **Versatility**: Suitable for a range of applications, from game engines to complex software.\n" +
    "3. **Community and Resources**: With its long-standing popularity, there are countless resources and a large community of C++ developers.\n" +
    "## Setting Up Your Environment\n" +
    "To get started with C++, you’ll need an IDE (Integrated Development Environment) or a text editor and a compiler. Some popular choices include:\n" +
    "1. **Visual Studio Code**: Lightweight and customizable.\n" +
    "2. **CLion**: Comprehensive IDE by JetBrains.\n" +
    "3. **GCC (GNU Compiler Collection)**: Commonly used C++ compiler available on most systems.\n" +
    "After installing, set up your first project to ensure everything works as expected.\n" +
    "## Basic Syntax and Structure\n" +
    "A simple C++ program includes several key components:\n" +
    "```cpp\n" +
    "#include <iostream> // Standard input-output library\n" +
    "\n" +
    "int main() {\n" +
    "    std::cout << \"Hello, World!\" << std::endl;\n" +
    "    return 0;\n" +
    "}\n" +
    "```"

export default function Page({ params }) {
    const { blogId } = params;
    const [reactContent, setMarkdownSource] = useRemark();

    useEffect(() => {
        setMarkdownSource(markdown);
    }, []);

    return (
        <ContentLayout pathname={`blog/${blogId}`}>
            <div className="styledDiv">
                {reactContent}
            </div>
        </ContentLayout>
    );
}
