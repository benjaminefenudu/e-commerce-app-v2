const router = require("express").Router();
const verify = require("../middlewares/verifyToken");

// Import route logic functions from route controller
const { getUsers, getSpecificUser } = require("../controllers/dbAdmin");

// Set routes to get all users or find specific user
router.route("/").get(getUsers).post(getSpecificUser);
// Use GET to list all users
// Use POST and enter email in request body to find specific user

module.exports = router;
