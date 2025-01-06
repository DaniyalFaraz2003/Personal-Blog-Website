import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/config/database';
import Blog from '@/models/blog';

export async function GET(request, { params }) {
    const blogID = (await params).blogID;
    
    const data = await fetchBlogByID(blogID);
    if (!data) {
        return NextResponse.json({ status: 404, body: { message: 'Not found' } });
    }
    return NextResponse.json(data)
}


async function fetchBlogByID(id) {
    // Mock function to simulate fetching data by ID
    // Replace this with your actual data fetching logic
    await connectToDatabase();
    const blog = await Blog.findById(id);
    if (!blog) {
        return null;
    }
    return blog;
}