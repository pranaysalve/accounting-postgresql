const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .get("/", controller.getAll("Vendor"))
  .post("/", controller.createOne("Vendor"))
  .post("/create-many", controller.createMany("Vendor"));

router
  .get("/:id", controller.getOne("Vendor"))
  .patch("/:id", controller.updateOne("Vendor"))
  .delete("/:id", controller.deleteOne("Vendor"));

module.exports = router;
