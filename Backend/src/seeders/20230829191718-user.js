"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Frederico",
          email: "fredx@sisloc.com.br",
          password: "$12$OSM/D0X3N9FwjoiIar0tjOxwE8HjO4fTj3bZ5gwN8x.NWw0AW8NqG",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
