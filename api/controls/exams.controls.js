import mongoose from "mongoose";
import Exam from "../models/exams.models.js";

const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find({}).limit(1);
    res.status(200).json(exams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching exams" });
  }
};

export default getAllExams;
