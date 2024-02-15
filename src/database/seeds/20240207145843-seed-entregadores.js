'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const quantidadeRegistros = 8;

    // Verifica se já existem registros de entregadores
    const entregadoresExistem = await queryInterface.sequelize.query(
      'SELECT * FROM Entregadores;'
    );

    if (entregadoresExistem[0].length > 0) {
      console.log('Já existem registros de entregadores no banco de dados. Seed cancelado.');
      return;
    }

    // Cria 10 registros de entregadores
    const seedData = Array.from({ length: quantidadeRegistros }, (_, index) => ({
      nome: `Entregador ${index + 1}`,
      email: `entregador${index + 1}@exemplo.com`,
      telefone: `123456789${index}`,
      descricao: `Descrição do entregador ${index + 1}`,
      criado_em: new Date(),
      ativo: true,
    }));

    // Insere os registros no banco de dados
    await queryInterface.bulkInsert('Entregadores', seedData, {});

    console.log(`Seed de entregadores concluído. ${quantidadeRegistros} registros foram adicionados.`);


  }, // fim de up

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Entregadores', null, {});

  }
};
