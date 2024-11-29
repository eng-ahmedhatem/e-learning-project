import express from 'express';
import userUpdated_controller from '../controls/userUpdate.control.js';
const router_updateUser = express.Router();
router_updateUser.post("/user-update/:id",userUpdated_controller)
export default router_updateUser