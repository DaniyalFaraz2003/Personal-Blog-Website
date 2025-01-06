import { NextResponse } from 'next/server';
import Project from '@/models/project';
import { connectToDatabase } from '@/config/database';

export async function GET(request, { params }) {
    const projectID = (await params).projectID;
    
    const data = await fetchProjectByID(projectID);
    if (!data) {
        return NextResponse.json({ status: 404, body: { message: 'Not found' } });
    }
    return NextResponse.json(data)
}


async function fetchProjectByID(id) {
    // Mock function to simulate fetching data by ID
    // Replace this with your actual data fetching logic
    await connectToDatabase()
    const project = await Project.findById(id);
    return project;
}