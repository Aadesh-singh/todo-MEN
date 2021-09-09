const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    dueDate: {
        type: Date,
        required: false
    }
});

const tasks = mongoose.model('tasks', todoSchema);

module.exports = tasks;