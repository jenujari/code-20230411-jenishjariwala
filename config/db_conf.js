const path = require("path");

const dbPath = path.join(__dirname, "..", "database.sqlite");

module.exports = {
  development: {
    storage: dbPath,
    database: "database",
    dialect: "sqlite",
  },
};
