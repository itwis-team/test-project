const express = require('express');
const {getTransactions, createTransaction} = require('../controllers/transactionController');

const router = express.Router();

router.route('/transactions').get(getTransactions);
router.route('/transactions').post(createTransaction);

module.exports = router;