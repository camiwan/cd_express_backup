'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const empresasData = [];

    // Gerar dados para 10 empresas
    for (let i = 0; i < 5; i++) {
      empresasData.push({
        razao_social: `Empresa ${i + 1}`,
        nome_fantasia: `Empresa Fantasia ${i + 1}`,
        cnpj: `00000000000${i}`,
        ie: `1234567890${i}`,
        uf: 'SP',
        cidade: 'São Paulo',
        bairro: 'Centro',
        rua: `Rua ${i}`,
        numero: `${i + 100}`,
        complemento: `Complemento ${i}`,
        cep: `00000-00${i}`,
        pessoa_de_contato: `Contato ${i}`,
        pessoa_de_contato_2: `Contato2 ${i}`,
        telefone: `1111-1111${i}`,
        telefone_2: `2222-2222${i}`,
        email: `empresa${i}@exemplo.com`,
        email_2: `contato${i}@exemplo.com`,
        observacao: `Observação ${i}`,
        //createdAt: new Date(),
        //updatedAt: new Date(),
      });
    }

    // Inserir os dados no banco de dados
    await queryInterface.bulkInsert('Empresas', empresasData, {});

    console.log('Seed de empresas criada com sucesso!');
  },

  down: async (queryInterface, Sequelize) => {
    // Adicione a lógica de desfazer as alterações, se necessário
  },
};
