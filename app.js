const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({extended: true, limit: '50mb'}));

// app.use("/api/auth", require("./routes/auth.routes"));

app.use("/api/record", require("./routes/record.routes"));
app.use("/api/session", require("./routes/session.routes"));
app.use("/api/stat", require("./routes/stat.routes"));

const PORT = 5000;

async function start() {
    try {
        await mongoose.connect("mongodb://admin:.gb.gb30@ds129904.mlab.com:29904/conference", {
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


