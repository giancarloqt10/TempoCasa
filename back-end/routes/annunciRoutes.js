const express = require('express');
const { Annuncio } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const annuncio = await Annuncio.create(req.body);
    res.status(201).json(annuncio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const annunci = await Annuncio.findAll();
    res.status(200).json(annunci);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const annuncio = await Annuncio.findByPk(req.params.id);
    if (annuncio) {
      res.status(200).json(annuncio);
    } else {
      res.status(404).json({ error: 'Annuncio non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Annuncio.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAnnuncio = await Annuncio.findByPk(req.params.id);
      res.status(200).json(updatedAnnuncio);
    } else {
      res.status(404).json({ error: 'Annuncio non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Annuncio.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Annuncio non trovato' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;