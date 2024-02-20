const mongoose = require("mongoose");

const Shchema = mongoose.Schema;

// categoris => field = [type, color];
const categories_model = new Shchema({
  type: { type: String, default: "Доход" },
  color: { type: String, default: "#FCBE44" },
});
// transactions => field = [name, type, amount, date];
const transaction_model = new Shchema({
  name: { type: String, default: "Аренда" },
  type: { type: String, default: "Доход" },
  amount: { type: Number, default: 300 },
  date: { type: Date, default: Date.now },
});

const Categories = mongoose.model("categories", categories_model);
const Transaction = mongoose.model("transaction", transaction_model);

exports.default = Transaction;

module.exports = {
  Categories,
  Transaction,
};
