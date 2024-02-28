const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Movies");
});

router.get("/1", (req, res) => {
  res.send("GET Movie 1");
});

router.post("/", (req, res) => {
  res.send("Create Movie");
});

router.put("/1", (req, res) => {
  res.send("Update Movie 1");
});

router.delete("/1", (req, res) => {
  res.send("Delete Movie 1");
});

module.exports = router;
