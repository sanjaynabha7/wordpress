const { addNewPost, getPosts, updatePosts } = require('../helpers/posts');
const express = require("express");
const router = express.Router();

    router.post('/add-new-post', (req,res) => {
        addNewPost(req,res);
    })

    router.get('/get-all-posts', (req,res) => {
        getPosts(req,res);
    })

    router.put('/update-post', (req,res) => {
        updatePosts(req,res);
    })


module.exports = router;   