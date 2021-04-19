const {Schema, model} = require("mongoose");

/**
 * Модель Задача (вложенная).
 */
const Task = new Schema({
    solvedNumber: {type: Number},
    solvedTime: {type: Date},
});

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    ip: {type: String},
    started: {type: Date, required: true},
    finished: {type: Date},
    solvedTasks: [Task]
});

module.exports = model("Session", schema);