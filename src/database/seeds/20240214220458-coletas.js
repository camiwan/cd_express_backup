'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const empresas = await queryInterface.sequelize.query('SELECT id FROM empresas;', { type: queryInterface.sequelize.QueryTypes.SELECT });

    const usuarios = await queryInterface.sequelize.query('SELECT id FROM usuarios;', { type: queryInterface.sequelize.QueryTypes.SELECT });


    const coletas = [];

    // Loop para criar 10 registros
    for (let i = 1; i <= 8; i++) {
      coletas.push({
        empresa_id: i,
        usuario_id: i,
        nome: `Coleta ${i}`,
        uf: `UF ${i}`,
        cidade: `Cidade ${i}`,
        bairro: `Bairro ${i}`,
        rua: `Rua ${i}`,
        numero: `Número ${i}`,
        complemento: `Complemento ${i}`,
        cep: `CEP ${i}`,
        criado_em: new Date(),
        data_da_coleta: new Date(),
        descricao: `Descrição da Coleta ${i}`,
        ativo: true,
        created_at: new Date(),
        update_at: new Date()
      });
    }

    // Insere os registros na tabela coletas
    await queryInterface.bulkInsert('coletas', coletas, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove os registros inseridos na tabela coletas
    await queryInterface.bulkDelete('coletas', null, {});
  }
};
