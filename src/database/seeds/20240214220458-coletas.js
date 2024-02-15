'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Array para armazenar os registros de coletas
    const coletas = [];

    // Loop para criar 10 registros
    for (let i = 1; i <= 10; i++) {
      coletas.push({
        id_empresa: i,
        id_usuario: i,
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
        create_at: new Date(),
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
