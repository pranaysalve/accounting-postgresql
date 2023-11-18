const { SUPADB, SUPAURL } = require("../config/supabase.config");
const { models, sequelize } = require("../config/dbConnect.config");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { v4: uuidv4 } = require("uuid");
exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // let { data, error } = await SUPADB.from(Model).select("*");

    const model = models[Model];
    const doc = await model.findAll();

    if (!doc) {
      return res
        .status(400)
        .json({ error: new AppError(error.message, error.code) });
    }
    if (!doc.length) {
      return res.status(200).json({
        result: doc.length,
        data: {
          status: "success",
          message: "No account exist! Try to create new a new account",
        },
      });
    }

    res.status(200).json({
      result: doc.length,
      data: {
        status: "success",
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (!req.body) {
      if (error) {
        return res.status(400).json({ error: new AppError("Enter data", 400) });
      }
    }

    const model = models[Model];

    // const { data, error } = await SUPADB.from(Model).insert([doc]).select();
    const doc = await model.findAll(req.body);
    console.log({ doc });
    const data = await model.create(req.body);
    if (data !== null) {
      return res.status(400).json({
        data: data,
      });
      // return res
      //   .status(400)
      //   .json({ error: new AppError(error.message, error.code) });
    }

    res.status(200).json({
      result: data.length,
      data: {
        status: "success",
        data: data,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const { data, error } = await SUPADB.from(Model)
      .update({ other_column: "otherValue" })
      .eq("_id", req.params.id)
      .select();

    if (error) {
      return res
        .status(400)
        .json({ error: new AppError(error.message, error.code) });
    }
    res.status(200).json({
      result: data.length,
      data: {
        status: "success",
        data: data,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const model = models[Model];

    const data = await model.destroy({ where: { id: req.params.id } });
    // const { error } = await SUPADB.from(Model)
    //   .delete()
    //   .eq("_id", req.params.id);
    if (!data) {
      return next(new AppError(data.message, data.code));
    }

    res.status(200).json({
      result: 1,
      data: {
        status: "success",
        message: "Deleted successfully!",
      },
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const model = models[Model];
    const data = await model.findAll({ where: { id: req.params.id } });

    if (!data.length) {
      res.status(200).json({
        result: data.length,
        data: {
          status: "success",
          message: "No account exist! Try to create new a new account",
        },
      });
    }

    res.status(200).json({
      result: data.length,
      data: {
        status: "success",
        data: data,
      },
    });
  });

exports.createMany = (Model) =>
  catchAsync(async (req, res, next) => {
    const model = models[Model];

    const data = await model.bulkCreate(req.body);

    if (!data) {
      return res.status(404).json({ error: "Error uploading data" });
    }

    res.status(200).json({
      result: data.length,
      data: {
        status: "success",
        data: data,
      },
    });
  });
