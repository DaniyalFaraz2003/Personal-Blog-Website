import { NextResponse } from "next/server";
import Project from "@/models/project";
import { connectToDatabase } from "@/data/database";

export async function GET() {
    try {
        const projects = await getAllProjects(); // Replace with your data fetching logic
        return NextResponse.json({ projects });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

async function getAllProjects() {
    // Replace with your actual data fetching logic, e.g., database query
    await connectToDatabase();
    const projects = Project.find({});
    return projects;
}