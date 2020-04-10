const express = require ("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HTML get requests
module.exports = function(app) {

    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
      app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    };



app.listen(PORT, () => {
    console.log("Listening on port" + PORT)
})

