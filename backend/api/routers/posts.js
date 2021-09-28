const { addNewPost, getPosts } = require('../helpers/posts');
const express = require("express");
const router = express.Router();

    router.post('/add-new-post', (req,res) => {
        addNewPost(req,res);
    })

    router.get('/get-all-posts', (req,res) => {
        getPosts(req,res);
    })

module.exports = router;   