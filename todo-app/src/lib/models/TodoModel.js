const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Todo =mongoose.models.Todo ||  mongoose.model('Todo', todoSchema);

export {Todo}
