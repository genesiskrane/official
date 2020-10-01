const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use('/',
  express.static(
    path.join(path.dirname(require.main.filename), "client", "dist")
  )
);
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Running @ 3000");
});
