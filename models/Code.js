const {Schema, model} = require("mongoose");

const schema = new Schema({
    // name: {type: String, required: true},
    // started: {type: Date, required: true},
    // solvedTasks: [Task]
    code: String,
    isActive: Boolean
});

module.exports = model("Code", schema);