const { DataTypes, Model } = require("sequelize");

// Import the DbConnection instance
const DbConnection = require("./../../dbConn");

// Define a Bmi Category model that extends the Sequelize Model class
class BmiCategory extends Model {}

// Initialize the Bmi Category model with attributes and options
BmiCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    modelName: "BmiCategory",
    // Set the table name for the model
    tableName: "bmi_cat",
    // Ignore createdAt and Updated AT
    createdAt:false,
    updatedAt:false
  }
);

module.exports = BmiCategory;
