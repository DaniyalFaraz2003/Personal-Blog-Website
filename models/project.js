import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
    title: String,
    description: String,
    image: String,
    githubUrl: String,
    demoUrl: String,
    copyRightInfo: String,
    problem: String,
    solution: String,
    techStack: [String],
    features: [
        {
            title: String,
            description: String
        }
    ]
})

const Project = models.Project || model('Project', projectSchema);
export default Project;