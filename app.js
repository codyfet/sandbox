require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({extended: true, limit: '50mb'}));
app.use(express.static(__dirname + '/client/dist'));

app.use("/api/session", require("./routes/session.routes"));
app.use("/api/code", require("./routes/code.routes"));
app.use("/api/task", require("./routes/task.routes"));

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Connection to db succeeded.");
        app.listen(PORT, () => console.log(`App started on ${PORT}.`));
    } catch (error) {
        console.log("Server error", error.message);
        process.exit(1);
    }
}

start();
