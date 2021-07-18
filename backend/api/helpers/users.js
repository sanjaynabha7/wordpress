const mongoose = require("mongoose");
const Users = require("../../models/users");

addUser = (req, res) => {
    const payload = req.body;
    Users.create(payload).then(createdRecord => {
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

module.exports = { addUser };
