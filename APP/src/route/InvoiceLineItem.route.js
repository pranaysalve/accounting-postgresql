const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("InvoiceLineItem"))
  .post(controller.createOne("InvoiceLineItem"));

router
  .route("/:id")
  .get(controller.getOne("InvoiceLineItem"))
  .patch(controller.updateOne("InvoiceLineItem"))
  .delete(controller.deleteOne("InvoiceLineItem"));

router.route("/many").get(controller.createMany("InvoiceLineItem"));

module.exports = router;
