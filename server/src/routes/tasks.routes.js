import { Router } from "express";
import { addTask } from "../controllers/tasks.controller.js";


const router = Router();

router.route("/addTask").post(addTask);

export default router;
