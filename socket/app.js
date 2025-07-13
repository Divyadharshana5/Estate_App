import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUsers = [];

const addUser = (userId, socketId) => {};

io.on("connection", (socket) => {
  socket.on("newUser", (user) => {});
});

io.listen("4000");
