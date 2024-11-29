import bcryptjs from "bcryptjs";
import Users from "../../models/users-models.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    const { userName, email, password, role, date, group } = req.body;

    // تحقق من أن الحقل group موجود إذا كان الدور student
    if (role === "student" && !group) {
        return res.status(400).json({ message: "حقل المجموعة مطلوب للطلاب." });
    }

    const passHash = bcryptjs.hashSync(password, 9);
    const addNew_user = new Users({ userName, email, date, password: passHash, role, group });
    const token = jwt.sign({ id: addNew_user["_id"] }, process.env.TOKEN_KEY);

    try {
        await addNew_user.save();
        const userData = addNew_user.toObject();
        if (role == "admin") {
            delete userData.preTest_Score;
            delete userData.pre_scale;
            delete userData.pre_scale;
            delete userData.postTest_Score;
            delete userData.post_scale;
            delete userData.preTest_Status;
            delete userData.postTest_Status;

            
        }
        delete userData.password;

        res.cookie('access_token',token, {httpOnly:true}).status(201).json({
            success: true,
            
            data: userData
        });
    } catch (err) {
        if (err.keyPattern) {
            if (err.keyPattern.userName == 1) {
                return res.status(500).json({ message: "اسم المستخدم الذي ادخلته غير متاح، ادخل اسم اخر" });
            }
            if (err.keyPattern.email == 1) {
                return res.status(500).json({ message: "البريد الإلكتروني الذي ادخلته غير متاح، استخدم بريد اخر" });
            }
        }
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};
