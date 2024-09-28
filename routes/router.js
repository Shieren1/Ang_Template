const express = require('express');
const router = express.Router();
const sma = require('../controller/SmaController'); 


router.get('/', sma.index);
router.get('/gallery', sma.gallery);
router.get('/about', sma.about);

module.exports = router;