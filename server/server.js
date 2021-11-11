const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const http = require("http");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
var schedule = require("node-schedule");
var useragent = require("express-useragent");

const expressip = require("express-ip");

// SETUP MIDDLEWARE
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short")); // combine

app.use(cors());
app.use(helmet());
app.enable("trust proxy");
app.use(useragent.express());
app.use(expressip().getIpInfoMiddleware);

const port = 3001;

var routes = require("./routes/route");
const { config } = require("process");
const { use } = require("./routes/route");
app.use("/", cors(), routes);

app.listen(port, () => {
  console.log(`App server is listening at http://localhost:${port}`);
});
