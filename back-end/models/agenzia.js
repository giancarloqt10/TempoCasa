module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Agenzia', {
      nome_agenzia: { type: DataTypes.STRING, allowNull: false },
      indirizzo: { type: DataTypes.STRING },
      cap: { type: DataTypes.STRING },
      citta: { type: DataTypes.STRING },
      regione: { type: DataTypes.STRING },
      telefono: { type: DataTypes.STRING }
    });
};
  