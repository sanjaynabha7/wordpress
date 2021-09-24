const mongoose = require("mongoose");
const Posts = require("../../models/posts");

addNewPost = (req, res) => {
    const payload = req.body;
    Posts.findOne({ email: payload.email }, (err, User) => {
        if (Posts) {
            res.send({ message: 'User already registered ddd' })
        } else {
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
        }

    });

};


getUsers = (req, res) => {
    User.find().then(records => {
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: records,
        });
    })
}


module.exports = { addNewPost, getUsers, login };
