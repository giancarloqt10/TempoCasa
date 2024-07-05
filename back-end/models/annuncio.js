module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Annuncio', {
      id_agente: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Agente',
          key: 'id'
        }
      },
      immagini: {
        type: DataTypes.TEXT('long'),  // Utilizzo di LONGTEXT per supportare JSON
        get() {
          const rawValue = this.getDataValue('immagini');
          return JSON.parse(rawValue || '[]');
        },
        set(value) {
          this.setDataValue('immagini', JSON.stringify(value));
        }
      },
      titolo: { type: DataTypes.STRING, allowNull: false },
      descrizione: { type: DataTypes.TEXT },
      prezzo: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      contratto: { type: DataTypes.STRING },
      tipologia: { type: DataTypes.STRING },
      superficie: { type: DataTypes.INTEGER },
      locali: { type: DataTypes.INTEGER },
      piano: { type: DataTypes.INTEGER },
      totale_piani_edificio: { type: DataTypes.INTEGER },
      disponibilita: { type: DataTypes.STRING },
      altre_caratteristiche: { type: DataTypes.STRING },
      anno_di_costruzione: { type: DataTypes.INTEGER },
      stato: { type: DataTypes.STRING },
      riscaldamento: { type: DataTypes.STRING },
      climatizzatore: { type: DataTypes.STRING },
      efficienza_energetica: { type: DataTypes.STRING },
      mappa_latitudine: { type: DataTypes.DECIMAL(9, 6) },
      mappa_longitudine: { type: DataTypes.DECIMAL(9, 6) },
      data_pubblicazione: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
  };
  