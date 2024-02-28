const express = require("express");

const app = express();

const routes = require("./routes");

app.use("/api", routes);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
