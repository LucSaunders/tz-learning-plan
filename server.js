// Basic Node-Express app for Docker training

'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8050;
const HOST = "0.0.0.0.";

const app = express();

// Basic one-line response for get request 
app.get("/", (request, response) => {
    response.send("Hallo. Ich lerne Docker mit dir.\n");
});

// Another simple string response for a get /tech request
app.get("/tech", (request, response) => {
    response.send("Andere Technologien fur mich zu lernen:\n Jenkins CI\n AWS\n Cloud Native Patterns \n .Net core")
});

app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);

