import Lesson from "../models/lesson.module.js"

const lessons_controller = async (req,res )=> {
    const all_lessons = await Lesson.find({}).populate("test")
    res.json({success: true, data: all_lessons})
}
export default lessons_controller