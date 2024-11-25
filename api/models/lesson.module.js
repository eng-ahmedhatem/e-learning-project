import mongoose from "mongoose"
const lessonSchema = mongoose.Schema({
    order_ar:String,
    order:Number,
    title:String,
    objectives:[String],
    videoLink:String,
    links:[String],
    test:{type:mongoose.Schema.Types.ObjectId,ref:"Exam"},
    text_content:String
})

const Lesson = mongoose.model("Lesson", lessonSchema)
export default Lesson