const User = require("../db/models/users");

// handler for getting user health report data in json
const handler = async (req, res) => {

  // get users with thier bmi category and health risk mapping
  let users = await User.findAll({
    include: [ "bmi_category", "health_risk" ],
  });


  // process users array and map bmi_category and health_risk with only values insted of entire record.
  users = users.map(u => {
    const bmi_category = u.bmi_category.type;
    const health_risk = u.health_risk.type;
    let x = {...u.get({plain:true}),bmi_category,health_risk};
    return x;
  });

  res.json(users);
};

module.exports = handler;
