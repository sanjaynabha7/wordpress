const { addNewPost, getUsers, login } = require('../helpers/posts');
const express = require("express");
const router = express.Router();

    router.post('/add-new-post', (req,res) => {
        addNewPost(req,res);
    })
    router.post('/login', (req,res) => {
        login(req,res);
    })
    router.get('/get-user', (req,res) => {
        getUsers(req,res);
    })

module.exports = router;   