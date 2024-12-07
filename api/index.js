import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http";
import { Server as socketIo } from "socket.io";
import cookieParser from "cookie-parser";
import bcryptjs from "bcryptjs";

import exam from "./models/exams.models.js";
import router from "./routes/auth.route.js";
import exams_router from "./routes/exams.route.js";
import token_auth from "./middleware/token_auth.js";
import Lesson from "./models/lesson.module.js";
import router_updateUser from "./routes/userUpdate.js";
import lessons_route from "./routes/lessons.route.js";
import Users from "./models/users-models.js";
import dash_router from "./routes/dash.route.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new socketIo(server, {
  cors: {
    origin: "*",
  }
});

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", router);
app.use("/api", token_auth);
app.use("/api", exams_router);
app.use("/api", router_updateUser);
app.use("/api", lessons_route);
app.use("/api", dash_router);

mongoose.connect(process.env.MONGODB).then(async () => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log(err);
});

const users = {};

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('join', (username) => {
    users[socket.id] = username;
    io.emit('message', { user: "Admin", text: `${username} انضم إلى الدردشة.` });
  });

  socket.on('sendMessage', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    const username = users[socket.id];
    if (username) {
      io.emit('message', { user: "Admin", text: `${username} غادر الدردشة.` });
      delete users[socket.id];
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
