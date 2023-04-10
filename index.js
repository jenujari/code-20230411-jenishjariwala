var express = require("express");
var bodyParser = require("body-parser");
var createError = require("http-errors");

var dbConn = require("./dbConn");
var handlers = require("./handlers");
const sync_relations = require("./db/models/rel_sync");

const app = express();
const port = 5000;

/* initial configs */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/health", handlers.healthRiskHandler);
app.get("/cron", handlers.setBmiRiskHandler);

/* unhandled routes */
app.use(function (_, __, next) {
  next(createError(404));
});

app.listen(port, async () => {
  await dbConn.testConn();
  await sync_relations();
  console.log(`Example app listening at http://localhost:${port}`);
});
