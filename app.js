const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const topicsPage = fs.readFileSync("./public/pages/homepage/home.html").toString();
const topicsheader = fs.readFileSync("./public/pages/homepage/components/header.html").toString();
const topicspanelOne = fs.readFileSync("./public/pages/homepage/components/panelOne.html").toString();
const topicspanelTwo = fs.readFileSync("./public/pages/homepage/components/panelTwo.html").toString();
const topicspanelThree = fs.readFileSync("./public/pages/homepage/components/panelThree.html").toString();
const topicspanelFour = fs.readFileSync("./public/pages/homepage/components/panelFour.html").toString();
const topicspanelFive = fs.readFileSync("./public/pages/homepage/components/panelFive.html").toString();
const topicsfooter = fs.readFileSync("./public/pages/homepage/components/footer.html").toString();
const homepage = topicsPage + topicsheader + topicspanelOne + topicspanelTwo + topicspanelThree + 
                        topicspanelFour + topicspanelFive + topicsfooter;

const topicHeader = fs.readFileSync("./public/pages/topics/components/header.html").toString();
const topicFooter = fs.readFileSync("./public/pages/topics/components/footer.html").toString();

const javascriptPageContent = fs.readFileSync("./public/pages/topics/pages/javascript/javascript.html").toString();
const javascriptPageTitle = topicHeader.replace("%%TITLE%%", "Javascript");
const javascriptPage = javascriptPageTitle.replace("%%PAGE%%", "Javascript") + javascriptPageContent + topicFooter;

const restPageContent = fs.readFileSync("./public/pages/topics/pages/REST/rest.html").toString();
const restPageTitle = topicHeader.replace("%%TITLE%%", "REST");
const restPage = restPageTitle.replace("%%PAGE%%", "REST") + restPageContent + topicFooter;

const nodePageContent = fs.readFileSync("./public/pages/topics/pages/node/node.html").toString();
const nodePageTitle = topicHeader.replace("%%TITLE%%", "Node.js");
const nodePage = nodePageTitle.replace("%%PAGE%%", "Node.js") + nodePageContent + topicFooter;

const expressPageContent = fs.readFileSync("./public/pages/topics/pages/express/express.html").toString();
const expressPageTitle = topicHeader.replace("%%TITLE%%", "Express");
const expressPage = expressPageTitle.replace("%%PAGE%%", "Express") + expressPageContent + topicFooter;

const ssrPageContent = fs.readFileSync("./public/pages/topics/pages/SSR/ssr.html").toString();
const ssrPageTitle = topicHeader.replace("%%TITLE%%", "SSR");
const ssrPage = ssrPageTitle.replace("%%PAGE%%", "SSR") + ssrPageContent + topicFooter;

app.get("/", (req, res) => {
    res.send(homepage);
});

app.get("/one", (req, res) => {
    res.send(javascriptPage);
});

app.get("/two", (req, res) => {
    res.send(restPage);
});

app.get("/three", (req, res) => {
    res.send(nodePage);
});

app.get("/four", (req, res) => {
    res.send(expressPage);
});

app.get("/five", (req, res) => {
    res.send(ssrPage);
});

const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () => {
    console.log("The server is running on port", server.address().port);
});