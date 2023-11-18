const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Vendor"))
  .post(controller.createOne("Vendor"));

router
  .route("/:id")
  .get(controller.getOne("Vendor"))
  .patch(controller.updateOne("Vendor"))
  .delete(controller.deleteOne("Vendor"));

router.route("/many").get(controller.createMany("Vendor"));

module.exports = router;
