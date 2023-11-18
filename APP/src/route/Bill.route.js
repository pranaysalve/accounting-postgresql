const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Bill"))
  .post(controller.createOne("Bill"));

router
  .route("/:id")
  .get(controller.getOne("Bill"))
  .patch(controller.updateOne("Bill"))
  .delete(controller.deleteOne("Bill"));

router.route("/many").post(controller.createMany("Bill"));

module.exports = router;
