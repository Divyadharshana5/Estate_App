import express from "express";

const app = express();

app.use("/Backend/test", (req, res) => {
  res.send("It works!");
});

app.use("/Backend/auth/register", (req, res) => {
  res.send("It works!");
});

app.use("/Backend/auth/login", (req, res) => {
  res.send("It works!");
});

app.use("/Backend/auth/logout", (req, res) => {
  res.send("It works!");
});

app.use("/Backend/posts", (req, res) => {
  res.send("It works!");
});

app.use("/Backend/posts", (req, res) => {
  res.send("It works!");
});

app.use("/Backend/posts/12312", (req, res) => {
  res.send("It works!");
});

app.listen(8800, () => {
  console.log("Server is running!");
});
