module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Agenzia', {
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
    }
  }, {
    timestamps: true,
    tableName: 'agenzie'
  });
};
