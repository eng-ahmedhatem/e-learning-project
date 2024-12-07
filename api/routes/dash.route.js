import express from 'express';
import Users from '../models/users-models.js';
const dash_router = express.Router()

dash_router.get("/all/users", async (req, res) => {

    const usersData = await Users.find({ role: "student" })
    res.json({ success: true, data: usersData })
})



dash_router.get("/all", async (req, res) => {
    try {
        const { postTest } = req.query;
        const status = postTest === "true";
        const updateAll = await Users.updateMany({}, { $set: { start_pre_And_post: status } });
        res.json({ success: true, modifiedCount: updateAll.modifiedCount });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});


export default dash_router


