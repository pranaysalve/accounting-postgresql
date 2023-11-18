const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .get("/", controller.getAll("Account"))
  .post("/", controller.createOne("Account"));

router
  .get("/:id", controller.getOne("Account"))
  .patch("/:id", controller.updateOne("Account"))
  .delete("/:id", controller.deleteOne("Account"));

module.exports = router;
