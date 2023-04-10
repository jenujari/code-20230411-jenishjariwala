const { DataTypes, Model } = require("sequelize");

// Import the DbConnection instance
const DbConnection = require("./../../dbConn");

// Define a Health Risk model that extends the Sequelize Model class
class HealthRisk extends Model {}

// Initialize the Health Risk model with attributes and options
HealthRisk.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    // Use the DbConnection instance for the connection
    sequelize: DbConnection.getConnection(),
    // Set the model name for easier reference
    modelName: "HealthRisk",
    // Set the table name for the model
    tableName: "health_risk",
    // Ignore createdAt and Updated AT
    createdAt:false,
    updatedAt:false
  }
);

module.exports = HealthRisk;
