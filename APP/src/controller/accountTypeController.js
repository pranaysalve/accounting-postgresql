const handler = require("./factoryHandler");

exports.getAll = handler.getAll("AccountTypes");
exports.getOne = handler.getOne("AccountTypes");
exports.createOne = handler.createOne("AccountTypes");
exports.deleteOne = handler.deleteOne("AccountTypes");
exports.updateOne = handler.updateOne("AccountTypes");
