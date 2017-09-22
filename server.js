const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

//const routes = require("./routes/routes.js");
//const router = require(path.join(__dirname,"controllers", "controller.js"));

const app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static(path.join("public")));

//app.use("/", routes);



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//mongoose.connect("mongodb://localhost/nytreact");

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",
    {
        useMongoClient: true
    }
);


// Launch App - Listen on port...
// ------------------------------------------------
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log("App running on port "+ PORT + "!");
});