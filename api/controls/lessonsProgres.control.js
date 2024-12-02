import Progress from "../models/stuudent_progress.module.js"

const lessonsProgress_controller_get =  ( async (req, res) => {
    const {id} =  req.user
    if (!id) return  res.json({massage:"not access"}).status(401)
    
    try {
        const get = await Progress.find({ user_id: id }).populate("Lesson_id")

        res.json({
            success: true,
            data: get
        })
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        }).status(500)
    }

})
const lessonsProgress_controller_add =  ( async (req, res) => {
    const {id} =  req.user
    console.log(req.params)
    if (!id) return  res.json({massage:"not access"}).status(401)
        const {Lesson_id,test_mark,completed,test_score} = req.body
    if (!Lesson_id) return  res.json({massage:"Lesson_id  is empty"}).status(400)
    if (!completed) return  res.json({massage:"completed  is empty"}).status(400)
    if (!test_score) return  res.json({massage:"test_score  is empty"}).status(400)
    if (!test_mark) return  res.json({massage:"test_mark  is empty"}).status(400)
    
    try {
        const get = await new Progress ({
            user_id: id,
            Lesson_id,
            completed,
            test_score,
            test_mark
        })
        await get.save()
        res.json({
            success: true,
            massage: "progress add success"
        })
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        }).status(500)
    }

})
export {lessonsProgress_controller_get, lessonsProgress_controller_add}

