import mongoose from "mongoose";

const users_Schema = new mongoose.Schema({
    userName: { type: "string", required: true, unique: true },
    email: { type: "string", required: true, unique: true },
    password: String,
    role: { type: String, enum: ["admin", "student"], default: "user" },
    group: { type: String, enum: ["control", "ex"], required: function () { return this.role == "student" } },
    date: Date,
    preTest_Score: { type: Number, default: 0, required: function () { return this.role == "student" } },
    postTest_Score: { type: Number, default: 0, required: function () { return this.role == "student" } },
    preTest_Status: { type: Boolean, default: false, required: function () { return this.role == "student" } },
    postTest_Status: { type: Boolean, default: false, required: function () { return this.role == "student" } },
    pre_scale: { type: Boolean, default: false, required: function () { return this.role == "student" } },
    post_scale: { type: Boolean, default: false, required: function () { return this.role == "student" } }
});

const Users = mongoose.model("Users", users_Schema);
export default Users;
