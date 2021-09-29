const mongoose = require("mongoose");
const Posts = require("../../models/posts");

addNewPost = (req, res) => {
    const payload = req.body;
    Posts.create(payload).then(createdRecord => {
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


getPosts = (req, res) => {
    Posts.find().then(records => {
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: records,
        });
    })
}

updatePosts = (req, res) => {
    const Post = req.body;
    Posts.findOneAndUpdate({ _id: req.body.id }, Post).then(createdRecord => {
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




module.exports = { addNewPost, getPosts, updatePosts };
