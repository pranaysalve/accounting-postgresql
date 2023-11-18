const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Invoice"))
  .post(controller.createOne("Invoice"));

router
  .route("/:id")
  .get(controller.getOne("Invoice"))
  .patch(controller.updateOne("Invoice"))
  .delete(controller.deleteOne("Invoice"));

router.route("/many").get(controller.createMany("Invoice"));

module.exports = router;
