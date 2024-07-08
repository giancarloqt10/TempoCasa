module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Agente', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_agenzia: {
      type: DataTypes.INTEGER,
      references: {
        model: 'agenzie',
        key: 'id'
      }
    },
    nome_completo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p_iva: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING
    },
    ruolo: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    tableName: 'agenti'
  });
};
