const User = require("../db/models/users");

const handler = async (req, res) => {
  let users = await User.findAll({
    include: [ "bmi_category", "health_risk" ],
  });


  users = users.map(u => {
    const bmi_category = u.bmi_category.type;
    const health_risk = u.health_risk.type;
    let x = {...u.get({plain:true}),bmi_category,health_risk};
    return x;
  });

  res.json(users);
};

module.exports = handler;
