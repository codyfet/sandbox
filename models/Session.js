const {Schema, model} = require("mongoose");

/**
 * Модель Задача.
 */
const Task = new Schema({
    solvedNumber: {type: Number},
    solvedTime: {type: Date},
});

const schema = new Schema({
    name: {type: String, required: true},
    started: {type: Date, required: true},
    finished: {type: Date},
    solvedTasks: [Task]
});

module.exports = model("Session", schema);