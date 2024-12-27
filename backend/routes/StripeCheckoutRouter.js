const express = require('express');
const router = express.Router();

const { Checkout, verifyJobStatus } = require('../controller/checkoutController')

router.post('/checkout', Checkout);
router.post('/verifyJobStatus', verifyJobStatus);

module.exports = router;