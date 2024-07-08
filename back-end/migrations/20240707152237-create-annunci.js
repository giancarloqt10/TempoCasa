'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    await queryInterface.createTable('annunci', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_agente: {
        type: DataTypes.INTEGER,
        references: {
          model: 'agenti',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      immagini: {
        type: DataTypes.TEXT
      },
      titolo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descrizione: {
        type: DataTypes.TEXT
      },
      prezzo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      contratto: {
        type: DataTypes.STRING(50)
      },
      tipologia: {
        type: DataTypes.STRING(50)
      },
      superficie: {
        type: DataTypes.INTEGER
      },
      locali: {
        type: DataTypes.INTEGER
      },
      piano: {
        type: DataTypes.INTEGER
      },
      totale_piani_edificio: {
        type: DataTypes.INTEGER
      },
      disponibilita: {
        type: DataTypes.STRING(50)
      },
      altre_caratteristiche: {
        type: DataTypes.STRING(255)
      },
      anno_di_costruzione: {
        type: DataTypes.INTEGER
      },
      stato: {
        type: DataTypes.STRING(50)
      },
      riscaldamento: {
        type: DataTypes.STRING(100)
      },
      climatizzatore: {
        type: DataTypes.STRING(100)
      },
      efficienza_energetica: {
        type: DataTypes.STRING(100)
      },
      mappa_latitudine: {
        type: DataTypes.DECIMAL(9, 6)
      },
      mappa_longitudine: {
        type: DataTypes.DECIMAL(9, 6)
      },
      data_pubblicazione: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('annunci');
  }
};
