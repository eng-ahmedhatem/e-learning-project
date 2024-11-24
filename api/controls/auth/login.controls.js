import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import Users from "../../models/users-models.js";
import bcrypt from "bcryptjs";
const login = async (req, res) => {
    const {userName,password} = req.body
    const getUser = await Users.findOne({userName})
    if(!getUser){
        console.log(getUser)
        return res.status(404).json({message:"المستخدم غير موجود"})
    }
    const password_unHash = await bcrypt.compare(password, getUser.password)
    if(!password_unHash){
        return res.status(401).json({success:false, message:"كلمة المرور غير صحيحة"})
    }
    const userData = getUser.toObject() 
    delete userData.password
    const token = await jwt.sign({id:getUser["_id"]},process.env.TOKEN_KEY)
    res.status(202).json({success:true,token,data:userData})
}
export default login
