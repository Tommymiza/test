const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("testtttt");
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  console.log("test apiiiii");
  res.send("Hello Api!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
