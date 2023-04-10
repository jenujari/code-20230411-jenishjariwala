var express = require("express");
var bodyParser = require("body-parser");
var createError = require("http-errors");

var handlers = require("./handlers");

const app = express();

/* initial configs */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/usershealth", handlers.healthRiskHandler);
app.get("/cron", handlers.setBmiRiskHandler);

/* unhandled routes */
app.use(function (_, __, next) {
  next(createError(404));
});

module.exports = app