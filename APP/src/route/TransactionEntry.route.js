const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("TransactionEntry"))
  .post(controller.createOne("TransactionEntry"));

router
  .route("/:id")
  .get(controller.getOne("TransactionEntry"))
  .patch(controller.updateOne("TransactionEntry"))
  .delete(controller.deleteOne("TransactionEntry"));

router.route("/many").get(controller.createMany("TransactionEntry"));

module.exports = router;
