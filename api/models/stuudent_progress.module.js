import mongoose from "mongoose"
const ProgressSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    Lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" },
    completed:Boolean,
    test_score: { type: Number, default: 0 }
})

const Progress = mongoose.model("Progress", ProgressSchema)