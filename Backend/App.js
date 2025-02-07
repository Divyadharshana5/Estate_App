import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/Backend/posts", postRoute);
app.use("/Backend/auth", authRoute);

app.listen(8000, () => {
  console.log("Server is running!");
});

app.get("/", (req, res) => {
  res.json({ message: "Api is running 🚀 !" });
});
