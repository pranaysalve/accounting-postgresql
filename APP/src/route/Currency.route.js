const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Currency"))
  .post(controller.createOne("Currency"));

router
  .route("/:id")
  .get(controller.getOne("Currency"))
  .patch(controller.updateOne("Currency"))
  .delete(controller.deleteOne("Currency"));

router.route("/many").get(controller.createMany("Currency"));

module.exports = router;
