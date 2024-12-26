const express = require('express');
const router = express.Router();

const { Checkout } = require('../controller/checkoutController')

router.post('/checkout', Checkout);

module.exports = router;