const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.redirect("/index.html");
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.use(express.static(path.join(__dirname, "client", "dist")));
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Running @ 3000");
});
