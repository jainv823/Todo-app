import { Router } from "express";
import {
  addTask,
  getAllTasks,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.route("/").get(getAllTasks);
router.route("/addTask").post(addTask);
router.route("/updateTask/:id").put(updateTask);

export default router;
