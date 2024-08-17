const express = require('express');
const router = express.Router();
const CrudController = require('../controller/CrudController');
router.post("/:modelName", async (req, res) => {
    try {
        const modelName = req.params.modelName;
        const Model = require(`../model/${modelName}`);
        await CrudController.create(Model, res, req);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = router