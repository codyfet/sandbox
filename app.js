require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json({extended: true, limit: '50mb'}));

app.use("/api/session", require("./routes/session.routes"));
app.use("/api/code", require("./routes/code.routes"));
app.use("/api/task", require("./routes/task.routes"));

// if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/dist")));
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "dist", "index.html")));
// }

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
