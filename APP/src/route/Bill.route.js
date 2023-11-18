const router = require("express").Router();
const controller = require("../controller/routeController");
router
  .get("/", controller.getAll("Bill"))
  .post("/", controller.createOne("Bill"))
  .post("/create-many", controller.createMany("Bill"));

router
  .get("/:id", controller.getOne("Bill"))
  .patch("/:id", controller.updateOne("Bill"))
  .delete("/:id", controller.deleteOne("Bill"));

module.exports = router;
