const { fileUpload } = require('../helpers/fileUpload');
const express = require("express");
const multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage }).single("file");
const router = express.Router();

router.post('/upload-file', (req, res) => {
    fileUpload(req, res);
})



module.exports = router;