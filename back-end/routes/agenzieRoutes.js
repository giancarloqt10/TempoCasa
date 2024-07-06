const express = require('express');
const { Agenzia } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const agenzia = await Agenzia.create(req.body);
    res.status(201).json(agenzia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const agenzie = await Agenzia.findAll();
    res.status(200).json(agenzie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
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
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Agenzia.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAgenzia = await Agenzia.findByPk(req.params.id);
      res.status(200).json(updatedAgenzia);
    } else {
      res.status(404).json({ error: 'Agenzia non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Agenzia.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Agenzia non trovata' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
