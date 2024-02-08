'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const empresas = await queryInterface.sequelize.query('SELECT id FROM empresas;', { type: queryInterface.sequelize.QueryTypes.SELECT });

    const usuarios = [];
    for (let i = 0; i < 10; i++) {
      usuarios.push({
        nome: `Usuário ${i + 1}`,
        email: `usuario${i + 1}@example.com`,
        password_hash: `senha${i + 1}`,
        empresaId: empresas[i % empresas.length].id, // Associar a empresa de acordo com o índice
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('usuarios', usuarios);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
