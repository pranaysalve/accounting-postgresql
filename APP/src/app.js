const express = require("express");

//Routers
const Account = require("./route/Account.route");
const AccountType = require("./route/AccountType.route");
const CreditNote = require("./route/Account.route");
const DebitNote = require("./route/Account.route");
const DeliveryChallan = require("./route/Account.route");
const Invoice = require("./route/Account.route");
const InvoiceDetails = require("./route/Account.route");
const PurchaseOrder = require("./route/Account.route");
const PurchaseOrderDetails = require("./route/Account.route");
const Vendor = require("./route/Vendor.route");
const Bill = require("./route/Bill.route");
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
app.use("/api/vendor", Vendor);
app.use("/api/bill", Bill);

// temp routes
app.use("/api/invoice", Invoice);
app.use("/api/invoice-details", InvoiceDetails);
app.use("/api/credit-note", CreditNote);
app.use("/api/debit-note", DebitNote);
app.use("/api/delivery-challan", DeliveryChallan);
app.use("/api/purchase-order", PurchaseOrder);
app.use("/api/purchase-order-details", PurchaseOrderDetails);

module.exports = app;
