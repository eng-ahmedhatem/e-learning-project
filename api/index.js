import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import admin from "./models/admins-models.js";
import bcryptjs from "bcryptjs"

dotenv.config()
mongoose.connect(process.env.MONGODB).then(async () => {
}).catch(err =>{console.log(err)})