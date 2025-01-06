const express = require('express');
const router = express.Router();

const { handleContactForm } = require('../controller/contactController')

router.post('/contact', handleContactForm);

module.exports = router;