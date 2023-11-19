const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Customer"))
  .post(controller.createOne("Customer"));

router
  .route("/:id")
  .get(controller.getOne("Customer"))
  .patch(controller.updateOne("Customer"))
  .delete(controller.deleteOne("Customer"));

router.route("/many").post(controller.createMany("Customer"));

module.exports = router;
