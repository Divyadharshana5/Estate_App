import express from "express";

const app = express();

app.use("/Backend/test", (req, res) => {
  res.send("It works!");
});

app.listen(8800, () => {
  console.log("Server is running!");
});
