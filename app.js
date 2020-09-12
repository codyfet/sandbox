const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({extended: true, limit: '50mb'}));
app.use(express.static(__dirname + '/public'));
// const path = require('path');
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.use("/api/session", require("./routes/session.routes"));
app.use("/api/code", require("./routes/code.routes"));
app.use("/api/task", require("./routes/task.routes"));

const PORT = process.env.PORT || 5000;

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


