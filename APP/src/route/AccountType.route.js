const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("AccountTypes"))
  .post(controller.createOne("AccountTypes"));

router
  .route("/:id")
  .get(controller.getOne("AccountTypes"))
  .patch(controller.updateOne("AccountTypes"))
  .delete(controller.deleteOne("AccountTypes"));

router.route("/many").post(controller.createMany("AccountTypes"));

module.exports = router;
