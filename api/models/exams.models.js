import mongoose from "mongoose";
const exams_Schema = new mongoose.Schema({
    exam_title: { type: String },
    exam_questions: [{ question: String, options: [String], correct_answer: String }]
})
const Exam = mongoose.model("Exam", exams_Schema)

export default Exam