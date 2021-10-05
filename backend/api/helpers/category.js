const mongoose = require("mongoose");
const Category = require("../../models/category");

addCategory = (req, res) => {
    const payload = req.body;
    Category.create(payload).then(createdRecord => {
        console.log(payload)
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: createdRecord,
        });
    }).catch(e => {
        res.status(400).send({
            status: 400,
            msg: "error",
            data: e,
        });
    });

};


getCategories = (req, res) => {
    Category.find().then(records => {
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: records,
        });
    })
}

updateCategory = (req, res) => {
    const Post = req.body;
    Category.findOneAndUpdate({ _id: req.body.id }, Post).then(createdRecord => {
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: createdRecord,
        });
    }).catch(e => {
        res.status(400).send({
            status: 400,
            msg: "error",
            data: e,
        });
    });
}




module.exports = { addCategory, getCategories, updateCategory };
