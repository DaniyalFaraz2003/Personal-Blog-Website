import mongoose from "mongoose"

let isConnected = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("Using existing connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        isConnected = true;
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }

}