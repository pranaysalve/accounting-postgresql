const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("PaymentMethod"))
  .post(controller.createOne("PaymentMethod"));

router
  .route("/:id")
  .get(controller.getOne("PaymentMethod"))
  .patch(controller.updateOne("PaymentMethod"))
  .delete(controller.deleteOne("PaymentMethod"));

router.route("/many").get(controller.createMany("PaymentMethod"));

module.exports = router;
