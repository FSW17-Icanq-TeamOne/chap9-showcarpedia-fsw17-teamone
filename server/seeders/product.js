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
        photoProducts: [
          "https://firebasestorage.googleapis.com/v0/b/react-upload-f84bf.appspot.com/o/multipleImages%2FWed%20Apr%2020%202022%2015%3A59%3A23%20GMT%2B0700%20(Western%20Indonesia%20Time)Proxmox-tunning-jepra.png?alt=media&token=f61ffe79-7b3b-4895-abe5-78d76c5ea3da",
          "https://firebasestorage.googleapis.com/v0/b/react-upload-f84bf.appspot.com/o/multipleImages%2FWed%20Apr%2020%202022%2015%3A59%3A23%20GMT%2B0700%20(Western%20Indonesia%20Time)Proxmox-tunning-jepra-3.png?alt=media&token=17481d8c-4433-41a0-9aff-8463fb1c9109",
          "https://firebasestorage.googleapis.com/v0/b/react-upload-f84bf.appspot.com/o/multipleImages%2FWed%20Apr%2020%202022%2015%3A59%3A23%20GMT%2B0700%20(Western%20Indonesia%20Time)Proxmox-tunning-jepra-2.png?alt=media&token=aa147b5f-c799-4544-be2c-5edaf960b852"
      ],
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