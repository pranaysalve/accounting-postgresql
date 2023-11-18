const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("User"))
  .post(controller.createOne("User"));

router
  .route("/:id")
  .get(controller.getOne("User"))
  .patch(controller.updateOne("User"))
  .delete(controller.deleteOne("User"));

router.route("/many").post(controller.createMany("User"));

module.exports = router;
