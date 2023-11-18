const router = require("express").Router();
const controller = require("../controller/routeController");

router
  .get("/", controller.getAll("BillLineItem"))
  .post("/", controller.createOne("BillLineItem"))
  .post("/create-many", controller.createMany("BillLineItem"));

router
  .get("/:", controller.getOne("BillLineItem"))
  .patch("/:id", controller.updateOne("BillLineItem"))
  .delete("/APP/:id", controller.deleteOne("BillLineItem"));
