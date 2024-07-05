const Utente = require('./utente');
const Annuncio = require('./annuncio');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Richiesta', {
    id_utente: {
      type: DataTypes.INTEGER,
      references: {
        model: Utente,
        key: 'id'
      }
    },
    id_annuncio: {
      type: DataTypes.INTEGER,
      references: {
        model: Annuncio,
        key: 'id'
      }
    },
    messaggio: { type: DataTypes.TEXT },
    data_richiesta: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });
};
