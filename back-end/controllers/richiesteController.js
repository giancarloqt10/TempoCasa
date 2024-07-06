const { Richiesta } = require('../models');

exports.createRichiesta = async (req, res) => {
  try {
    const richiesta = await Richiesta.create(req.body);
    res.status(201).json(richiesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRichieste = async (req, res) => {
  try {
    const richieste = await Richiesta.findAll();
    res.status(200).json(richieste);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRichiestaById = async (req, res) => {
  try {
    const richiesta = await Richiesta.findByPk(req.params.id);
    if (richiesta) {
      res.status(200).json(richiesta);
    } else {
      res.status(404).json({ error: 'Richiesta non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRichiesta = async (req, res) => {
  try {
    const [updated] = await Richiesta.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedRichiesta = await Richiesta.findByPk(req.params.id);
      res.status(200).json(updatedRichiesta);
    } else {
      res.status(404).json({ error: 'Richiesta non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRichiesta = async (req, res) => {
  try {
    const deleted = await Richiesta.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Richiesta non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
