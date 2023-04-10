"use strict";

/** 
 * This is a Sequelize migration file that creates a table named "users" with four columns: "id", "gender", "height_cm", and "weight_kg".
 */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the "users" table
    await queryInterface.createTable("users", {
      // Define the "id" column with auto-incrementing integers as primary key
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // Define the "gender" column with ENUM type and allowed values of "Male" and "Female"
      gender: {
        type: Sequelize.ENUM("Male", "Female"),
      },
      // Define the "height_cm" column with INTEGER type and default value of 0
      height_cm: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      // Define the "weight_kg" column with FLOAT type and default value of 0
      weight_kg: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop the "users" table
    await queryInterface.dropTable('users');
  },
};
