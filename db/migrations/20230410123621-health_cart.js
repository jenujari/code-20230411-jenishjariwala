"use strict";

/** 
 * This is a Sequelize migration file that creates two tables: "bmi_cat" and "health_risk" with two columns each: "id" and "type".
 */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the "bmi_cat" table
    await queryInterface.createTable("bmi_cat", {
      // Define the "id" column with auto-incrementing integers as primary key
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // Define the "type" column with STRING type
      type: {
        type: Sequelize.STRING,
      },
    });

    // Create the "health_risk" table
    await queryInterface.createTable("health_risk", {
      // Define the "id" column with auto-incrementing integers as primary key
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // Define the "type" column with STRING type
      type: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop the "bmi_cat" table
    await queryInterface.dropTable('bmi_cat');

    // Drop the "health_risk" table
    await queryInterface.dropTable('health_risk');
  }
};
