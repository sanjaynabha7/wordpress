const express = require("express");
const router = express.Router();

/**
 * ATTENTION: For maintainability please keep the lists in alphabetical order
 */
 const users = require("./routers/users");
 const posts = require("./routers/posts");
 const category = require("./routers/category");
 const fileUpload = require("./routers/fileUploadService");



 router.use("/auth", users);
 router.use("/post", posts);
 router.use("/category", category);
 router.use("/file", fileUpload);
 


 module.exports = router;