const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Tax"))
  .post(controller.createOne("Tax"));

router
  .route("/:id")
  .get(controller.getOne("Tax"))
  .patch(controller.updateOne("Tax"))
  .delete(controller.deleteOne("Tax"));

router.route("/many").get(controller.createMany("Tax"));

module.exports = router;
