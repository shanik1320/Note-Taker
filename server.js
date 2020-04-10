const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const db = require("../db/db")

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// HTML get requests

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


app.get("/api/tables", function (req, res) {
    res.json(db);
});

app.post("/api/tables", function (req, res) {


});

app.listen(PORT, () => {
    console.log("Listening on port:" + PORT)
})

