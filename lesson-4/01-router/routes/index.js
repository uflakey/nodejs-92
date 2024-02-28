const express = require("express");

const router = express.Router();

const userRoutes = require("./users");
const movieRoutes = require("./movies");
const bookRoutes = require("./books");
const sellerRoutes = require("./sellers");

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);
router.use("/books", bookRoutes);
router.use("/sellers", sellerRoutes);

module.exports = router;
