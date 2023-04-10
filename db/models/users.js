const { DataTypes, Model } = require("sequelize");

// Import the DbConnection instance
const DbConnection = require("./../../dbConn");

// Define a User model that extends the Sequelize Model class
class User extends Model {}

// Initialize the User model with attributes and options
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female"),
    },
    height_cm: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    weight_kg: { 
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    bmi: {
      type: DataTypes.VIRTUAL,
      get() {
        var w = this.getDataValue('weight_kg')
        var h_sq = this.getDataValue('height_cm')
        h_sq = h_sq / 100
        h_sq = Math.pow(h_sq,2)
        if (h_sq == 0) return 0;
        return parseFloat(parseFloat(w / h_sq).toFixed(3))
      }
    },
    bmi_category_id: {
      type: DataTypes.INTEGER,
    },

    health_risk_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Use the DbConnection instance for the connection
    sequelize: DbConnection.getConnection(),
    // Set the model name for easier reference
    modelName: "User",
    // Set the table name for the model
    tableName: "users",
    // Ignore createdAt and Updated AT
    createdAt:false,
    updatedAt:false
  }
);

module.exports = User;
