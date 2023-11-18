const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .get("/", controller.getAll("AccountTypes"))
  .post("/", controller.createOne("AccountTypes"));

router
  .get("/:id", controller.getOne("AccountTypes"))
  .patch("/:id", controller.updateOne("AccountTypes"))
  .delete("/:id", controller.deleteOne("AccountTypes"));

module.exports = router;
