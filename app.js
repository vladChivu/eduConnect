const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");



const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () => {
    console.log("The server is running on port", server.address().port);
})