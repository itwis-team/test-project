const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = mongoose.Schema({
    hash: {
        type: String,
        required: [true, "Please enter tx hash"]
    },
    data: {
        type: Schema.Types.Mixed,
        required: [true, "Please enter tx data"]
    },
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);