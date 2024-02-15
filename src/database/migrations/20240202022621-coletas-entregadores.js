'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coletasEntregadores', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },
      id_coleta: {
        type: Sequelize.BIGINT
      },
      id_entregador: {
        type: Sequelize.BIGINT
      },
      id_usuario: {
        type: Sequelize.BIGINT
      },
      criadoEm: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coletasEntregadores');
  }
};
