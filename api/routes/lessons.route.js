import express from 'express';
import lessons_controller from '../controls/lessons.control.js';
const lessons_route = express.Router();
lessons_route.get("/lessons",lessons_controller)

export default lessons_route;
