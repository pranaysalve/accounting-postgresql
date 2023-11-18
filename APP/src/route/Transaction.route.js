const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Transaction"))
  .post(controller.createOne("Transaction"));

router
  .route("/:id")
  .get(controller.getOne("Transaction"))
  .patch(controller.updateOne("Transaction"))
  .delete(controller.deleteOne("Transaction"));

router.route("/many").get(controller.createMany("Transaction"));

module.exports = router;
