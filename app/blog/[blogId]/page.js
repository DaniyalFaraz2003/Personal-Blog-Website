"use client";

import { ContentLayout } from "@/Components/admin-panel/content-layout";
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight'
import 'highlight.js/styles/dark.css'; // Import your preferred highlight.js theme
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/Components/ui/skeleton";
import "./editor.css"

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import cpp from 'highlight.js/lib/languages/cpp'

const lowlight = createLowlight(all)

lowlight.register('javascript', javascript);
lowlight.register('python', python);
lowlight.register('cpp', cpp)

function SkeletonCard() {
    return (
        <div className={"flex  w-full flex-col items-center justify-center gap-5"}>
            <Skeleton className={"w-[70%] h-[200px]"} />
            <Skeleton className={"w-full h-[30px]"} />
            <Skeleton className={"w-[80%] h-[30px]"} />
            <Skeleton className={"w-[85%] h-[30px]"} />
            <Skeleton className={"w-[73%] h-[30px]"} />
            <Skeleton className={"w-full h-[30px]"} />
        </div>
    )
}

export default function Page({ params }) {
    const { blogId } = params;
    const [markdown, setMarkdown] = useState("");
    const [title, setTitle] = useState("");
    const [htmlContent, setHtmlContent] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/blogs/${blogId}`);
                setMarkdown(response.data.content);
                setTitle(response.data.title);
            } catch (err) {
                // Handle error
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [])

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
            Image.configure({
                inline: true,
            }),
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
        <ContentLayout pathname={`blog/${title}`}>
            {!loading && <EditorContent editor={editor} className={"tiptap-editor"} />}
            {loading && <SkeletonCard />}
        </ContentLayout>
    );
}
