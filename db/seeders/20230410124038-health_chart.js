'use strict';

var lo = require("lodash");
var data = require("../../data.json");

var bmi_cat = lo.map(data.bmi_cat, (v, i) => ({
  id: i + 1,
  type: v,
}));

var health_risk = lo.map(data.health_risk, (v, i) => ({
  id: i + 1,
  type: v,
}));


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bmi_cat", bmi_cat, {});
    await queryInterface.bulkInsert("health_risk", health_risk, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bmi_cat', null, {});
    await queryInterface.bulkDelete('health_risk', null, {});
  }
};
