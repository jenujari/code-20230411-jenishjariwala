var express = require("express");
var bodyParser = require("body-parser");
var createError = require("http-errors");

// bring handlers to bind with routes
var handlers = require("./handlers");

const app = express();

/* initial configs */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /cron and /usershealth routes bind with respective handlers
app.get("/usershealth", handlers.healthRiskHandler);
app.get("/cron", handlers.setBmiRiskHandler);

/* unhandled routes will get 404 not found response. */
app.use(function (_, __, next) {
  next(createError(404));
});

module.exports = app