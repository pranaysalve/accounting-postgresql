const { Client } = require("pg");
const { devpostgresql } = require("../../src/config/database.config");
const data = require("./vendor.data");

const tableName = "Vendor";

async function insertData() {
  const client = new Client(devpostgresql);

  try {
    await client.connect();
    for (const record of data) {
      const values = Object.values(record).map((value) =>
        typeof value === "string" ? `'${value}'` : value
      );
      const query = `INSERT INTO ${tableName}(${Object.keys(record).join(
        ", "
      )}) VALUES(${values.join(", ")})`;
      await client.query(query);
    }
    console.log("Data inserted successfully!!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

insertData();
