import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import Users from "../../models/users-models.js";
import bcrypt from "bcryptjs";
const login = async (req, res) => {
    const { userName, password } = req.body
    const getUser = await Users.findOne({ userName })
    if (!getUser) {
        return res.status(404).json({ message: "المستخدم غير موجود" })
    }
    const password_unHash = await bcrypt.compare(password, getUser.password)
    if (!password_unHash) {
        return res.status(401).json({ success: false, message: "كلمة المرور غير صحيحة" })
    }
    const userData = getUser.toObject()
    if (userData.role === "admin") {
        delete userData.preTest_Score;
        delete userData.pre_scale;
        delete userData.pre_scale;
        delete userData.postTest_Score;
        delete userData.post_scale;
        delete userData.preTest_Status;
        delete userData.postTest_Status;
    }
    delete userData.password
    const token = await jwt.sign({ id: getUser["_id"] }, process.env.TOKEN_KEY)
    res.cookie('access_token',token, {httpOnly:true}).status(202).json({ success: true, data: userData })
}
export default login
