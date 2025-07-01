import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/Backend/posts", postRoute);
app.use("/Backend/auth", authRoute);
app.use("/Backend/test", testRoute);
app.use("/Backend/users", userRoute);
app.use("/Backend/chats", chatRoute);
app.use("/Backend/messages", messageRoute);

app.listen(8000, () => {
  console.log("Server is running!");
});

app.get("/", (req, res) => {
  res.json({ message: "Api is running 🚀 !" });
});
