const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const topicsPage = fs.readFileSync("./public/pages/topicspage/topicspage.html").toString();
const topicsheader = fs.readFileSync("./public/pages/topicspage/components/header.html").toString();
const topicspanelOne = fs.readFileSync("./public/pages/topicspage/components/panelOne.html").toString();
const topicspanelTwo = fs.readFileSync("./public/pages/topicspage/components/panelTwo.html").toString();
const topicspanelThree = fs.readFileSync("./public/pages/topicspage/components/panelThree.html").toString();
const topicspanelFour = fs.readFileSync("./public/pages/topicspage/components/panelFour.html").toString();
const topicspanelFive = fs.readFileSync("./public/pages/topicspage/components/panelFive.html").toString();
const topicsfooter = fs.readFileSync("./public/pages/topicspage/components/footer.html").toString();

const alltopicspage = topicsPage + topicsheader + topicspanelOne + topicspanelTwo + topicspanelThree + 
                        topicspanelFour + topicspanelFive + topicsfooter;

app.get("/", (req, res) => {
    res.send(alltopicspage);
})

const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () => {
    console.log("The server is running on port", server.address().port);
})