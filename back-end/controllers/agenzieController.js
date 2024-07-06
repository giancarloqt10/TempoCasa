const { Agenzia } = require('../models');

exports.createAgenzia = async (req, res) => {
  try {
    const agenzia = await Agenzia.create(req.body);
    res.status(201).json(agenzia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAgenzie = async (req, res) => {
  try {
    const agenzie = await Agenzia.findAll();
    res.status(200).json(agenzie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAgenziaById = async (req, res) => {
  try {
    const agenzia = await Agenzia.findByPk(req.params.id);
    if (agenzia) {
      res.status(200).json(agenzia);
    } else {
      res.status(404).json({ error: 'Agenzia non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateAgenzia = async (req, res) => {
  try {
    const [updated] = await Agenzia.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedAgenzia = await Agenzia.findByPk(req.params.id);
      res.status(200).json(updatedAgenzia);
    } else {
      res.status(404).json({ error: 'Agenzia non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAgenzia = async (req, res) => {
  try {
    const deleted = await Agenzia.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Agenzia non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
