const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Books");
});

router.get("/1", (req, res) => {
  res.send("GET Book 1");
});

router.post("/", (req, res) => {
  res.send("Create Book");
});

router.put("/1", (req, res) => {
  res.send("Update Book 1");
});

router.delete("/1", (req, res) => {
  res.send("Delete Book 1");
});

module.exports = router;
