const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("ChartOfAccount"))
  .post(controller.createOne("ChartOfAccount"));

router
  .route("/:id")
  .get(controller.getOne("ChartOfAccount"))
  .patch(controller.updateOne("ChartOfAccount"))
  .delete(controller.deleteOne("ChartOfAccount"));

router.route("/many").get(controller.createMany("ChartOfAccount"));

module.exports = router;
