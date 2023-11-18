const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .route("/")
  .get(controller.getAll("Account"))
  .post(controller.createOne("Account"));

router
  .route("/:id")
  .get(controller.getOne("Account"))
  .patch(controller.updateOne("Account"))
  .delete(controller.deleteOne("Account"));

router.route("/many").post(controller.createMany("Account"));

module.exports = router;
