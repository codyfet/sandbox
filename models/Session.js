const {Schema, model} = require("mongoose");

/**
 * Модель Жанр.
 */
const Task = new Schema({
    solvedNumber: {type: Number},
    solvedTime: {type: Date},
});

const schema = new Schema({
    name: {type: String, required: true},
    started: {type: Date, required: true},
    solvedTasks: [Task]
});

module.exports = model("Session", schema);