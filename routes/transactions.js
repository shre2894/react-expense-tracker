const express = require("express");
const router = express.Router();

const {
  getTransactions,
  addTransactions,
  deleteTransactions
} = require("../controllers/transactions");

router.route("/").get(getTransactions);
router.route("/").post(addTransactions);
router.route("/:id").delete(deleteTransactions);

module.exports = router;
