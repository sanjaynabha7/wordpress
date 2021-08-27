const { addUser, getUsers, login } = require('../helpers/users');
const express = require("express");
const router = express.Router();

    router.post('/create-user', (req,res) => {
        addUser(req,res);
    })
    router.post('/login', (req,res) => {
        login(req,res);
    })
    router.get('/get-user', (req,res) => {
        getUsers(req,res);
    })

module.exports = router;   