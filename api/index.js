import mongoose from "mongoose";
import express from "express";
import fs from "fs"
import dotenv from "dotenv";
import exam from "./models/exams.models.js";
import router from "./routes/auth.route.js";
import exams_router from "./routes/exams.route.js";
import token_auth from "./middleware/token_auth.js";

import Lesson from "./models/lesson.module.js";
import cookieParser from "cookie-parser";
import router_updateUser from "./routes/userUpdate.js";
import lessons_route from "./routes/lessons.route.js";
const app = express()
dotenv.config()
app.use(cookieParser());
app.use(express.json())
app.use("/api/auth", router)
app.use("/api", token_auth)
app.use("/api", exams_router)
app.use("/api",router_updateUser)
app.use("/api",lessons_route)

mongoose.connect(process.env.MONGODB).then(async () => {
  console.log("Connected to MongoDB")

  }).catch(err => { console.log(err) })
app.listen(3000)