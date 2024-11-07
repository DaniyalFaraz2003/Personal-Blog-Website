"use client";

import {ContentLayout} from "@/Components/admin-panel/content-layout";
import * as React from "react";

export default function Page({params}) {
    const { blogId } = params;

    // Fetch the blog post data using the ID

    return (
        <ContentLayout pathname={`blog/${blogId}`}>
            <div>
                <h1>Post {blogId}</h1>
                {/* Render the post content here */}
            </div>
        </ContentLayout>

    )
}