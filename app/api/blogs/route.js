import { NextResponse } from 'next/server';
import { blogs } from '@/data/blogs';

export async function GET() {
    try {
        const blogs = await getAllBlogs(); // Replace with your data fetching logic
        blogs.forEach((blog, index) => {
            blogs[index].date = new Date(blog.date).toDateString();
        })
        await sleep(5);
        return NextResponse.json({ blogs });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

async function getAllBlogs() {
    // Replace with your actual data fetching logic, e.g., database query
    return blogs
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}