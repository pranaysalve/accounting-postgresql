const handler = require("./factoryHandler");

console.log("vendor controller");
exports.getAll = handler.getAll("Vendor");
exports.getOne = handler.getOne("Vendor");
exports.createOne = handler.createOne("Vendor");
exports.deleteOne = handler.deleteOne("Vendor");
exports.updateOne = handler.updateOne("Vendor");
exports.createMany = handler.createMany("Vendor");
