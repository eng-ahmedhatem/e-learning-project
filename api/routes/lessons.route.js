import express from 'express';
import lessons_controller from '../controls/lessons.control.js';
import {lessonsProgress_controller_get , lessonsProgress_controller_add} from '../controls/lessonsProgres.control.js';
const lessons_route = express.Router();
lessons_route.get("/lessons",lessons_controller)
lessons_route.get("/lessons/progress/get",lessonsProgress_controller_get)
lessons_route.post("/lessons/progress",lessonsProgress_controller_add)

export default lessons_route;


// 674c2958de82e9f8b87b21f7 