'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('telefones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Telefone: {
        type: Sequelize.STRING
      },
      pessoaId:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'pessoas'
          },
          key:'id',
          onUpdate:'RESTRICT',
          onDelete:'RESTRICT',
        },
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('telefones');
  }
};