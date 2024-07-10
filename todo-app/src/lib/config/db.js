import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://lalitmaxpro:JD6V8kKWtKHr4krl@cluster0.bw41vqm.mongodb.net/todo-app")
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB', err));

}