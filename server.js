const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = http.createServer(app);

const db = require("./db");
db.connectDb();

let taskApp = require("./taskmanagement/router");
app.use("/taskapp", taskApp);

server.listen(3000, () => {
  console.log("server running on port", 3000);
});
