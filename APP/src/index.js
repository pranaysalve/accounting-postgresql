const app = require("./app");
const { sequelize } = require("./config/dbConnect.config");
const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => console.log("db connected successfully"))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
