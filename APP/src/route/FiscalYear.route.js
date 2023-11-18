const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("FiscalYear"))
  .post(controller.createOne("FiscalYear"));

router
  .route("/:id")
  .get(controller.getOne("FiscalYear"))
  .patch(controller.updateOne("FiscalYear"))
  .delete(controller.deleteOne("FiscalYear"));

router.route("/many").get(controller.createMany("FiscalYear"));

module.exports = router;
