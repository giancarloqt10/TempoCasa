module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Richiesta', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_utente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'utenti',
        key: 'id'
      }
    },
    id_annuncio: {
      type: DataTypes.INTEGER,
      references: {
        model: 'annunci',
        key: 'id'
      }
    },
    messaggio: {
      type: DataTypes.TEXT
    }
  }, {
    timestamps: true,
    tableName: 'richieste'
  });
};
