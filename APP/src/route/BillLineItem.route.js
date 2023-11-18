const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("BillLineItem"))
  .post(controller.createOne("BillLineItem"));

router
  .route("/:id")
  .get(controller.getOne("BillLineItem"))
  .patch(controller.updateOne("BillLineItem"))
  .delete(controller.deleteOne("BillLineItem"));

router.route("/many").post(controller.createMany("BillLineItem"));

module.exports = router;
