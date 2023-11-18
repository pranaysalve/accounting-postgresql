const router = require("express").Router();
const controller = require("../controller/accountTypeController");

router.get("/", controller.getAll).post("/", controller.createOne);

router
  .get("/:id", controller.getOne)
  .patch("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = router;
