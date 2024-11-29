import Users from "../models/users-models.js";

const userUpdated_controller = async (req, res, next) => {
    try {
        const { id } = req.params
        if (id !== req.user.id) {
            res.json({ message: "Invalid" }).status(404)
            return;
        }
        const update = await Users.findByIdAndUpdate(id,req.body,{new:true})
        res.json({ message: "success update" })
        // console.log(update)
    } catch (error) {
        res.json({ message: "Failed update" }).status(500)
        console.log(error)

    }


}

export default userUpdated_controller;