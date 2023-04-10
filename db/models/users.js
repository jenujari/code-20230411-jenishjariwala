const { DataTypes, Model } = require("sequelize");

// Import the DbConnection instance
const DbConnection = require("./../../dbConn");

// Define a User model that extends the Sequelize Model class
class User extends Model {}

// Initialize the User model with attributes and options
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female"),
    },
    height_cm: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    weight_kg: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    // Use the DbConnection instance for the connection
    sequelize: DbConnection.getConnection(),
    // Set the model name for easier reference
    modelName: "User",
    // Set the table name for the model
    tableName: "users"
  }
);

module.exports = User;
