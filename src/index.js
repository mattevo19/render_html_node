import express from "express";
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.use("/", router);

app.listen(3000, () => {
  console.log("listening on 3000!!!");
});
