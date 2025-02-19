const { Utente } = require('../models');

exports.createUtente = async (req, res) => {
  try {
    const utente = await Utente.create(req.body);
    res.status(201).json(utente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUtenti = async (req, res) => {
  try {
    const utenti = await Utente.findAll();
    res.status(200).json(utenti);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUtenteById = async (req, res) => {
  try {
    const utente = await Utente.findByPk(req.params.id);
    if (utente) {
      res.status(200).json(utente);
    } else {
      res.status(404).json({ error: 'Utente non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUtente = async (req, res) => {
  try {
    const [updated] = await Utente.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedUtente = await Utente.findByPk(req.params.id);
      res.status(200).json(updatedUtente);
    } else {
      res.status(404).json({ error: 'Utente non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUtente = async (req, res) => {
  try {
    const deleted = await Utente.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Utente non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
