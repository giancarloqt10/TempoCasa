const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const Utente = require('./utente')(sequelize, DataTypes);
const Agenzia = require('./agenzia')(sequelize, DataTypes);
const Agente = require('./agente')(sequelize, DataTypes);
const Annuncio = require('./annuncio')(sequelize, DataTypes);
const Richiesta = require('./richiesta')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  Utente,
  Agenzia,
  Agente,
  Annuncio,
  Richiesta
};

module.exports = db;
