const Transaction = require("../models/Transactions");

// @desc    GET all trsnaction
// @route    Get /api/v1/transactions
// @public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "SERVER ERROR"
    });
  }
};

// @desc    add trsnaction
// @route    post /api/v1/transactions
// @public
exports.addTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      const messages = Object.values(err.error).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else
      return res.send(500).json({
        success: false,
        error: "SERVER ERROR"
      });
  }
};

// @desc    delete trsnaction
// @route    delete /api/v1/transactions/:id
// @public
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found"
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "SERVER ERROR"
    });
  }
};
