module.exports = (models) => {
  const {
    Account: Account,
    AccountTypes: AccountTypes,
    Bill: Bill,
    BillLineItem: BillLineItem,
    ChartOfAccount: ChartOfAccount,
    Currency: Currency,
    Customer: Customer,
    FiscalYear: FiscalYear,
    Invoice: Invoice,
    InvoiceLineItem: InvoiceLineItem,
    PaymentMethod: PaymentMethod,
    Tax: Tax,
    Transaction: Transaction,
    TransactionEntry: TransactionEntry,
    User: User,
    Vendor: Vendor,
  } = models;

  AccountTypes.hasMany(Account, { foreignKey: "AccountTypeID" });
  Account.belongsTo(AccountTypes, {
    foreignKey: "AccountTypeID",
  });

  Account.hasOne(ChartOfAccount, { foreignKey: "Account.id" });
  ChartOfAccount.belongsTo(Account, {
    foreignKey: "Account.id",
  });

  FiscalYear.hasMany(Transaction, {
    foreignKey: "FiscalYear.id",
  });
  Transaction.belongsTo(FiscalYear, {
    foreignKey: "FiscalYear.id",
  });

  Transaction.hasMany(TransactionEntry, {
    foreignKey: "Transaction.id",
  });
  TransactionEntry.belongsTo(Transaction, {
    foreignKey: "Transaction.id",
  });

  Account.hasMany(TransactionEntry, {
    foreignKey: "Account.id",
  });
  TransactionEntry.belongsTo(Account, {
    foreignKey: "Account.id",
  });

  Customer.hasMany(Invoice, { foreignKey: "Customer.id" });
  Invoice.belongsTo(Customer, { foreignKey: "Customer.id" });

  Invoice.hasMany(InvoiceLineItem, { foreignKey: "Invoice.id" });
  InvoiceLineItem.belongsTo(Invoice, {
    foreignKey: "Invoice.id",
  });

  Vendor.hasMany(Bill, { foreignKey: "Vendor.id" });
  Bill.belongsTo(Vendor, { foreignKey: "Vendor.id" });

  Bill.hasMany(BillLineItem, { foreignKey: "Bill.id" });
  BillLineItem.belongsTo(Bill, { foreignKey: "Bill.id" });
};
