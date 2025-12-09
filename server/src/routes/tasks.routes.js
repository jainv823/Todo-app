import { Router } from "express";
import { addTask, getAllTasks } from "../controllers/tasks.controller.js";


const router = Router();

router.route("/").get(getAllTasks)
router.route("/addTask").post(addTask);

export default router;
