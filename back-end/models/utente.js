module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Utente', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome_completo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefono: {
      type: DataTypes.STRING
    },
    tipo: {
      type: DataTypes.ENUM('agenzia', 'in_cerca', 'proprietario'),
      allowNull: false
    },
    p_iva: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    tableName: 'utenti'
  });
};
