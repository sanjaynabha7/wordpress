const { addUser } = require('../helpers/users');
const express = require("express");
const router = express.Router();

    router.post('/create-user', (req,res) => {
        addUser(req,res);
    })


module.exports = router;  