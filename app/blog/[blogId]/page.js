"use client";

import {ContentLayout} from "@/Components/admin-panel/content-layout";
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {unified} from 'unified'
import Highlight from '@tiptap/extension-highlight';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight'
import 'highlight.js/styles/dark.css'; // Import your preferred highlight.js theme
import * as React from "react";
import { useEffect, useState } from "react";
import "./editor.css"

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import cpp from 'highlight.js/lib/languages/cpp'

const lowlight = createLowlight(all)

lowlight.register('javascript', javascript);
lowlight.register('python', python);
lowlight.register('cpp', cpp)

const markdownContent = "# **Introduction to C++ Programming**\n" +
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
    const [markdown, setMarkdown] = useState(markdownContent);
    const [htmlContent, setHtmlContent] = useState("");

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                codeBlock: false, // Disable the default code block
            }),
            CodeBlockLowlight.configure({
                lowlight, // Pass the lowlight instance
            }),
            Highlight,
            Typography,
        ],

        content: htmlContent, // Initial empty content
        editable: false,
    });

    useEffect(() => {
        const convertMarkdownToHtml = async () => {
            const file = await unified()
                .use(remarkParse)
                .use(remarkHtml)
                .process(markdown);

            const convertedHtml = String(file);
            setHtmlContent(convertedHtml);
            console.log(convertedHtml);

            // Dynamically update the editor's content
            if (editor) {
                editor.commands.setContent(convertedHtml);
            }
        };

        convertMarkdownToHtml();
    }, [markdown, editor]); // Re-run when markdown or editor instance changes


    return (
        <ContentLayout pathname={`blog/${blogId}`}>
            <EditorContent editor={editor} className={"tiptap-editor"} />
        </ContentLayout>
    );
}
