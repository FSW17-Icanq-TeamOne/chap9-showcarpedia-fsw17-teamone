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
    await queryInterface.bulkInsert("Products", [
      {
        title: "MobilAvanza",
        brand: "Toyota",
        year: 2021,
        kiloMeter: 10000,
        grade: 5,
        category: "Avanza",
        description: "Murah Toyota Avanza",
        photoProducts: ["https://cloud.jpnn.com/photo/arsip/normal/2021/11/10/toyota-avanza-2021-foto-dok-toyota-indonesia-a5wvl-buyl.jpg"],
        delete: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Mobil Itu",
        brand: "Porsche",
        year: 2021,
        kiloMeter: 10000,
        grade: 5,
        category: "Porsche",
        description: "Murah Mobil itu",
        photoProducts: ["https://cloud.jpnn.com/photo/arsip/normal/2021/11/10/toyota-avanza-2021-foto-dok-toyota-indonesia-a5wvl-buyl.jpg"],
        delete: false,
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
    await queryInterface.bulkDelete("Products", null, {})
  }
};