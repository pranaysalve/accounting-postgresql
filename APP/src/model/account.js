// const account = {
//   tables: [
//     {
//       name: "Users",
//       columns: [
//         { name: "UserID", type: "SERIAL", primary_key: true },
//         { name: "Username", type: "VARCHAR(50)", not_null: true },
//         { name: "PasswordHash", type: "VARCHAR(255)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//       ],
//     },
//     {
//       name: "Accounts",
//       columns: [
//         { name: "AccountID", type: "SERIAL", primary_key: true },
//         { name: "AccountName", type: "VARCHAR(100)", not_null: true },
//         { name: "AccountType", type: "VARCHAR(50)", not_null: true },
//         { name: "Balance", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//       ],
//     },
//     {
//       name: "Vendors",
//       columns: [
//         { name: "VendorID", type: "SERIAL", primary_key: true },
//         { name: "VendorName", type: "VARCHAR(100)", not_null: true },
//         { name: "Address", type: "VARCHAR(255)" },
//         { name: "ContactNumber", type: "VARCHAR(20)" },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//       ],
//     },
//     {
//       name: "PurchaseOrders",
//       columns: [
//         { name: "POID", type: "SERIAL", primary_key: true },
//         { name: "VendorID", type: "INT", not_null: true },
//         { name: "OrderDate", type: "DATE", not_null: true },
//         { name: "TotalAmount", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [{ table: "Vendors", column: "VendorID" }],
//         },
//       ],
//     },
//     {
//       name: "PurchaseOrderDetails",
//       columns: [
//         { name: "PODetailID", type: "SERIAL", primary_key: true },
//         { name: "POID", type: "INT", not_null: true },
//         { name: "ProductName", type: "VARCHAR(100)", not_null: true },
//         { name: "Quantity", type: "INT", not_null: true },
//         { name: "UnitPrice", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [{ table: "PurchaseOrders", column: "POID" }],
//         },
//       ],
//     },
//     {
//       name: "Invoices",
//       columns: [
//         { name: "InvoiceID", type: "SERIAL", primary_key: true },
//         { name: "VendorID", type: "INT", not_null: true },
//         { name: "InvoiceDate", type: "DATE", not_null: true },
//         { name: "TotalAmount", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [{ table: "Vendors", column: "VendorID" }],
//         },
//       ],
//     },
//     {
//       name: "InvoiceDetails",
//       columns: [
//         { name: "InvoiceDetailID", type: "SERIAL", primary_key: true },
//         { name: "InvoiceID", type: "INT", not_null: true },
//         { name: "ProductName", type: "VARCHAR(100)", not_null: true },
//         { name: "Quantity", type: "INT", not_null: true },
//         { name: "UnitPrice", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [{ table: "Invoices", column: "InvoiceID" }],
//         },
//       ],
//     },
//     {
//       name: "DebitNotes",
//       columns: [
//         { name: "DebitNoteID", type: "SERIAL", primary_key: true },
//         { name: "VendorID", type: "INT", not_null: true },
//         { name: "DebitNoteDate", type: "DATE", not_null: true },
//         { name: "Amount", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [{ table: "Vendors", column: "VendorID" }],
//         },
//       ],
//     },
//     {
//       name: "CreditNotes",
//       columns: [
//         { name: "CreditNoteID", type: "SERIAL", primary_key: true },
//         { name: "VendorID", type: "INT", not_null: true },
//         { name: "CreditNoteDate", type: "DATE", not_null: true },
//         { name: "Amount", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [{ table: "Vendors", column: "VendorID" }],
//         },
//       ],
//     },
//     {
//       name: "DeliveryChallans",
//       columns: [
//         { name: "ChallanID", type: "SERIAL", primary_key: true },
//         { name: "VendorID", type: "INT", not_null: true },
//         { name: "ChallanDate", type: "DATE", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [{ table: "Vendors", column: "VendorID" }],
//         },
//       ],
//     },
//     {
//       name: "Transactions",
//       columns: [
//         { name: "TransactionID", type: "SERIAL", primary_key: true },
//         { name: "TransactionDate", type: "DATE", not_null: true },
//         { name: "Description", type: "TEXT" },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//       ],
//     },
//     {
//       name: "TransactionEntries",
//       columns: [
//         { name: "EntryID", type: "SERIAL", primary_key: true },
//         { name: "TransactionID", type: "INT", not_null: true },
//         { name: "AccountID", type: "INT", not_null: true },
//         { name: "Amount", type: "DECIMAL(12, 2)", not_null: true },
//         { name: "IsDebit", type: "BOOLEAN", not_null: true },
//         { name: "CreatedAt", type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" },
//         {
//           name: "UpdatedAt",
//           type: "TIMESTAMP",
//           default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
//         },
//         {
//           name: "foreign_keys",
//           references: [
//             { table: "Transactions", column: "TransactionID" },
//             { table: "Accounts", column: "AccountID" },
//           ],
//         },
//       ],
//     },
//   ],
// };



