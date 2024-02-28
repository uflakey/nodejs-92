const express = require("express");

const app = express();

// app.get("/movies/1", (req, res) => {
//   res.send("GET Movie 1");
// });

// app.get("/movies/2", (req, res) => {
//   res.send("GET Movie 2");
// });

// app.get("/movies/3", (req, res) => {
//   res.send("GET Movie 3");
// });

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  res.send(`GET Movie ${id}`);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
