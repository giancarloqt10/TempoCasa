'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    await queryInterface.createTable('agenzie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nome_agenzia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      indirizzo: {
        type: DataTypes.STRING
      },
      cap: {
        type: DataTypes.STRING
      },
      citta: {
        type: DataTypes.STRING
      },
      regione: {
        type: DataTypes.STRING
      },
      telefono: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('agenzie');
  }
};
