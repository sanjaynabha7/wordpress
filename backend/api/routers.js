const express = require("express");
const router = express.Router();

/**
 * ATTENTION: For maintainability please keep the lists in alphabetical order
 */
 const users = require("./routers/users");



 router.use("/auth", users);


 module.exports = router;