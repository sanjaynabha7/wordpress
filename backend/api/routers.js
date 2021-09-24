const express = require("express");
const router = express.Router();

/**
 * ATTENTION: For maintainability please keep the lists in alphabetical order
 */
 const users = require("./routers/users");
 const posts = require("./routers/posts");



 router.use("/auth", users);
 router.use("/post", posts);


 module.exports = router;