const {Schema, model} = require("mongoose");

/**
 * Модель Код.
 */
const schema = new Schema({
    code: String,
    isActive: Boolean
});

module.exports = model("Code", schema);