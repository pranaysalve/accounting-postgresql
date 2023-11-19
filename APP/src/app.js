const express = require("express");

//Routers
const Account = require("./route/Account.route");
const AccountType = require("./route/AccountType.route");
const Bill = require("./route/Bill.route");
const BillLineItem = require("./route/BillLineItem.route");
const ChartOfAccount = require("./route/ChartOfAccounts");
const Currency = require("./route/Currency.route");
const Customer = require("./route/Customer.route");
const FiscalYear = require("./route/FiscalYear.route");
const Invoice = require("./route/Invoice.route");
const InvoiceLineItem = require("./route/InvoiceLineItem.route");
const PaymentMethod = require("./route/PaymentMethod.route");
const Tax = require("./route/Tax.route");
const Transaction = require("./route/Transaction.route");
const TransactionEntry = require("./route/TransactionEntry.route");
const User = require("./route/User.route");
const Vendor = require("./route/Vendor.route");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    req.method,
    decodeURI(req.url),
    res.statusCode,
    res.statusMessage
  );
  next();
});

// final routes
app.use("/api/account", Account);
app.use("/api/accounttype", AccountType);
app.use("/api/bill", Bill);
app.use("/api/bill-details", BillLineItem);
app.use("/api/chartofaccounts", ChartOfAccount);
app.use("/api/currency", Currency);
app.use("/api/customer", Customer);
app.use("/api/fiscal-year", FiscalYear);
app.use("/api/invoice", Invoice);
app.use("/api/invoice-details", InvoiceLineItem);
app.use("/api/payment-method", PaymentMethod);
app.use("/api/tax", Tax);
app.use("/api/transaction", Transaction);
app.use("/api/transaction-entry", TransactionEntry);
app.use("/api/user", User);
app.use("/api/vendor", Vendor);



module.exports = app;
