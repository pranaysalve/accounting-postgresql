const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Account = sequelize.define("Account", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    AccountName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    AccountTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Balance: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
  });

  const AccountTypes = sequelize.define("AccountTypes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TypeName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: false,
    },
  });

  const Bill = sequelize.define("Bill", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    VendorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BillNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    BillDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DueDate: {
      type: DataTypes.DATE,
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });

  const BillLineItem = sequelize.define("BillLineItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    BillID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
  });

  const ChartOfAccount = sequelize.define("ChartOfAccount", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    AccountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  const Currency = sequelize.define("Currency", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CurrencyCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    CurrencyName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });

  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CustomerName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    ContactPerson: {
      type: DataTypes.STRING(100),
    },
    Phone: {
      type: DataTypes.STRING(15),
    },
    Email: {
      type: DataTypes.STRING(50),
    },
    City: {
      type: DataTypes.STRING(50),
    },
    State: {
      type: DataTypes.STRING(50),
    },
    PinCode: {
      type: DataTypes.INTEGER,
    },
  });

  const FiscalYear = sequelize.define("FiscalYear", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  const Invoice = sequelize.define("Invoice", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    InvoiceNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DueDate: {
      type: DataTypes.DATE,
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });

  const InvoiceLineItem = sequelize.define("InvoiceLineItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    InvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
  });

  const PaymentMethod = sequelize.define("PaymentMethod", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    MethodName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });

  const Tax = sequelize.define("Tax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TaxName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Rate: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
  });

  const Transaction = sequelize.define("Transaction", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TransactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    FiscalYearID: {
      type: DataTypes.INTEGER,
    },
  });

  const TransactionEntry = sequelize.define("TransactionEntry", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TransactionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AccountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    IsDebit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    PasswordHash: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    UserRole: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });

  const Vendor = sequelize.define("Vendor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    VendorName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    ContactPerson: {
      type: DataTypes.STRING(100),
    },
    Phone: {
      type: DataTypes.STRING(15),
    },
    Email: {
      type: DataTypes.STRING(50),
    },
    City: {
      type: DataTypes.STRING(50),
    },
    State: {
      type: DataTypes.STRING(50),
    },
    PinCode: {
      type: DataTypes.INTEGER,
    },
  });

  return {
    Account,
    AccountTypes,
    Bill,
    BillLineItem,
    ChartOfAccount,
    Currency,
    Customer,
    FiscalYear,
    Invoice,
    InvoiceLineItem,
    PaymentMethod,
    Tax,
    Transaction,
    TransactionEntry,
    User,
    Vendor,
  };
};
