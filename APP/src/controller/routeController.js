const handler = require("./factoryHandler");

exports.getAll = (Model) => handler.getAll(Model);
exports.getOne = (Model) => handler.getOne(Model);
exports.createOne = (Model) => handler.createOne(Model);
exports.deleteOne = (Model) => handler.deleteOne(Model);
exports.updateOne = (Model) => handler.updateOne(Model);
exports.createMany = (Model) => handler.createMany(Model);
