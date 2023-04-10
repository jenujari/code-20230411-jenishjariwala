'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn("users","bmi_category_id",{
      type : Sequelize.INTEGER
    });

    await queryInterface.addColumn("users","health_risk_id",{
      type : Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("users","bmi_category_id")
    await queryInterface.removeColumn("users","health_risk_id")
  }
};
