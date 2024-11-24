import express from "express"
import {register} from "../controls/auth/register.controls.js"
import login from "../controls/auth/login.controls.js"

const router = express.Router()
router.post("/register",register)
router.post("/login",login)
export default router
