import express from "express";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.use("/Backend/posts", postRoute);
app.use("/Backend/auth", authRoute);

// app.use("/Backend/test", (req, res) => {
//   res.send("It works!");
// });

// app.use("/Backend/auth/register", (req, res) => {
//   res.send("It works!");
// });

// app.use("/Backend/auth/login", (req, res) => {
//   res.send("It works!");
// });

// app.use("/Backend/auth/logout", (req, res) => {
//   res.send("It works!");
// });

// app.use("/Backend/posts", (req, res) => {
//   res.send("It works!");
// });

// app.use("/Backend/posts", (req, res) => {
//   res.send("It works!");
// });

// app.use("/Backend/posts/12312", (req, res) => {
//   res.send("It works!");
// });

app.listen(8800, () => {
  console.log("Server is running!");
});
