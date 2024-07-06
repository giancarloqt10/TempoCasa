const Agenzia = require('./agenzia');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Agente', {
    id_agenzia: {
      type: DataTypes.INTEGER,
      references: {
        model: Agenzia,
        key: 'id'
      }
    },
    nome_completo: { type: DataTypes.STRING, allowNull: false },
    p_iva: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false },
    telefono: { type: DataTypes.STRING },
    ruolo: { type: DataTypes.STRING }
  });
};
