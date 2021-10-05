const { addCategory, getCategories, updateCategory } = require('../helpers/category');
const express = require("express");
const router = express.Router();

    router.post('/add-category', (req,res) => {
        addCategory(req,res);
    })

    router.get('/get-categories', (req,res) => {
        getCategories(req,res);
    })

    router.put('/update-category', (req,res) => {
        updateCategory(req,res);
    })


module.exports = router;   