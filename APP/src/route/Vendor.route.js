const router = require("express").Router();
const controller = require("../controller/vendorController");

router
  .get("/", controller.getAll)
  .post("/", controller.createOne)
  .post("/create-many", controller.createMany);

router
  .get("/:id", controller.getOne)
  .patch("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = router;
