'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Fleets", [
      {
        name: "Ride",
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "XL",
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shuttle",
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Delivery",
        price: 6000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Fleets", null, {cascade: true, restartIdentity: true, truncate: true})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
