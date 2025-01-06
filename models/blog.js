import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
    title: String,
    username: String,
    date: String,
    description: String,
    badges: [String],
    image: String,
    latest: Boolean,
    content: String
})

const Blog = models.Blog || model('Blog', blogSchema);
export default Blog;