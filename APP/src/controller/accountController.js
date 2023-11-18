const handler = require("./factoryHandler");

exports.getAll = handler.getAll("Account");
exports.getOne = handler.getOne("Account");
exports.createOne = handler.createOne("Account");
exports.updateOne = handler.updateOne("Account");
exports.deleteOne = handler.deleteOne("Account");
