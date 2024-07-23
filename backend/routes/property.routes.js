const router = require("express").Router();

const Property = require("../models/Property.model");

router.get("/", async (req, res, next) => {
  try {
    const properties = await Property.find();
    res.status(200).json({ data: properties });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json({ data: property });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Property.create(req.body);
    res.status(201).json({ response: response });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ data: property });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: property });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
