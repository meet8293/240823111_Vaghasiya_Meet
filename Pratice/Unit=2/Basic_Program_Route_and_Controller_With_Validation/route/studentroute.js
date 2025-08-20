const express = require("express");
const Router = express.Router();
const studentcontroller = require("../controller/studentcontroller");
const {
  createValidator,
  updateValidator,
  validate,
} = require("../validators/studentvalidator");

Router.get("/index", studentcontroller.index);
Router.get("/show/:id", studentcontroller.show);
Router.post("/store", (req, res, next) => {
    const result = validate(createValidator, req.body);
    if (!result.success) 
    {
    return res.status(400).json({ status: "error", errors: result.errors });
    }
    studentcontroller.store(req, res, next);
});

Router.post("/update/:id", (req, res, next) => {
    const result = validate(updateValidator, req.body);
    if (!result.success) 
    {
    return res.status(400).json({ status: "error", errors: result.errors });
    }
    studentcontroller.store(req, res, next);
});

Router.delete("/delete/:id", studentcontroller.delete);

module.exports = Router;
