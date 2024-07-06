const express = require('express');
const { Agente } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const agente = await Agente.create(req.body);
    res.status(201).json(agente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const agenti = await Agente.findAll();
    res.status(200).json(agenti);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const agente = await Agente.findByPk(req.params.id);
    if (agente) {
      res.status(200).json(agente);
    } else {
      res.status(404).json({ error: 'Agente non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Agente.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAgente = await Agente.findByPk(req.params.id);
      res.status(200).json(updatedAgente);
    } else {
      res.status(404).json({ error: 'Agente non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Agente.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Agente non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
