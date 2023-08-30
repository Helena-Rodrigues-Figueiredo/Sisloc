'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT,
      },
      technical_information: {
        type: Sequelize.STRING
      },
      weekly_price: {
        type: Sequelize.FLOAT
      },
      daily_price: {
        type: Sequelize.FLOAT
      },
      monthly_price: {
        type: Sequelize.FLOAT
      },
      fortnightly_price: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
