import mongoose from "mongoose"
import express from "express"
import getAllExams from "../controls/exams.controls.js"
const exams_router = express.Router()
exams_router.get("/exams",getAllExams)
export default exams_router