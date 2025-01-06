import { NextResponse } from 'next/server';
import Blog from '@/models/blog';
import { connectToDatabase } from '@/data/database';

export async function GET() {
    try {
        const blogs = await getAllBlogs(); // Replace with your data fetching logic
        blogs.forEach((blog, index) => {
            blogs[index].date = new Date(blog.date).toDateString();
        })
        return NextResponse.json({ blogs });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

async function getAllBlogs() {
    // Replace with your actual data fetching logic, e.g., database query
    await connectToDatabase();
    const blogs = await Blog.find({});
    return blogs;
}