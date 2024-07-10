import {Todo} from "@/lib/models/TodoModel";
import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

// Connect to the database
async function LoadDB() {
    try {
        await ConnectDB();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}
LoadDB();

// GET method handler
export async function GET(request) {
    const todos = await Todo.find({});
    return NextResponse.json({ todos: todos })
}

// POST method handler
export async function POST(request) {
    try {
        // Ensure request body is parsed correctly
        const { title, description } = await request.json();

        // Create a new Todo document
        const newTodo = await Todo.create({
            title,
            description,
        });

        // Return success response
        return NextResponse.json({ msg: "Todo Created", todo: newTodo });
    } catch (error) {
        console.error("Error creating todo:", error);
        // Return error response
        return NextResponse.json({ error: "Failed to create todo" }, { status: 500 });
    }
}
