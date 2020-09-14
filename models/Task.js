const {Schema, model} = require("mongoose");

/**
 * Модель Задача.
 */
const schema = new Schema({
    id: {type: Number, required: true},
    description: {type: String, required: true},
    preCode: {type: String, required: true},
    test: {type: String, required: true},
    testsCount: {type: Number, required: true}
});

module.exports = model("Task", schema);