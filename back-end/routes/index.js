const express = require('express');
const utentiRoutes = require('./utentiRoutes');
const agenzieRoutes = require('./agenzieRoutes');
const agentiRoutes = require('./agentiRoutes');
const annunciRoutes = require('./annunciRoutes');
const richiesteRoutes = require('./richiesteRoutes');

const router = express.Router();

router.use('/utenti', utentiRoutes);
router.use('/agenzie', agenzieRoutes);
router.use('/agenti', agentiRoutes);
router.use('/annunci', annunciRoutes);
router.use('/richieste', richiesteRoutes);

module.exports = router;