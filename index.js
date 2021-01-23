const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.send("Hello From App!");
});

app.get("/:anything", (req, res) => {
  return res.send(`Hello you wrote ${req.params.anything}`);
});

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
