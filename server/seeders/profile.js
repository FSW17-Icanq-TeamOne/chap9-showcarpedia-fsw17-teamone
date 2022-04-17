'use strict';

const { query } = require("express");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Profiles", [
      {
        userId: 1,
        fullName: "Administrator",
        birthDate: "10-03-2022",
        city: "Binar Academy",
        country: false,
        mobilePhone: "628103011999",
        profilePicture: "https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // down dipake buat revert alias kalau jalanin db:seed:undo:all
    await queryInterface.bulkDelete("Profiles", null, {})
  }
};