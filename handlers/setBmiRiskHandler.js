const BmiCategory = require("../db/models/bmi");
const HealthRisk = require("../db/models/risk");
const User = require("../db/models/users");
const helpers = require("./../utils/helpers");

// handler function for cron job that maps user's health risk and bmi category based on thier bmi value.
const handler = async (req, res) => {

  // get users , bmi categories, health risk types records from db.
  const users = await User.findAll();
  const bmi_cats = await BmiCategory.findAll();
  const risks = await HealthRisk.findAll();

  // process on all users and map user's bmi_category_id and health_risk_id 
  // with id of records saved in db using helper functions
  users.forEach((user) => {
    const risk = helpers.risk_extractor(user.bmi, risks);
    const bmi_cat = helpers.bmi_category_extractor(user.bmi, bmi_cats);

    if (bmi_cat) user.bmi_category_id = bmi_cat.id;
    if (risk) user.health_risk_id = risk.id;

    user.save();
  });

  res.status(200);
  res.send();
};

module.exports = handler;