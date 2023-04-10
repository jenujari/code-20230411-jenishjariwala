const BmiCategory = require("./bmi");
const HealthRisk = require("./risk");
const User = require("./users");


// Define a method to set relationships of the models
const sync_relations = async () => {
  User.belongsTo(BmiCategory, { foreignKey: "bmi_category_id" , as : "bmi_category" });
  User.belongsTo(HealthRisk, { foreignKey: "health_risk_id" , as :"health_risk"});

  BmiCategory.hasMany(User, { foreignKey: "bmi_category_id" });
  HealthRisk.hasMany(User, { foreignKey: "health_risk_id" });
}

module.exports = sync_relations