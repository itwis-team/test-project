const Transaction = require('../models/Transaction');
const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');

exports.getTransactions = asyncErrorHandler(async (req, res, next) => {
    const transactions = await Transaction.find();

    res.status(200).json({
        success: true,
        transactions,
    });
});

exports.createTransaction = asyncErrorHandler(async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);

        res.status(201).json({
            success: true,
            transaction
        });
    } catch (error) {
        res.status(422).json({
            success: false,
            error: error.message
        });
    }
});
