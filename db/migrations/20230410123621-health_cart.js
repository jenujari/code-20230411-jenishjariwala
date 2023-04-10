'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable("bmi_cat", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable("health_risk", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('bmi_cat');
    await queryInterface.dropTable('health_risk');
  }
};
