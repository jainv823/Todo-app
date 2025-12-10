import { Router } from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.route("/").get(getAllTasks);
router.route("/addTask").post(addTask);
router.route("/updateTask/:id").put(updateTask);
router.route("/deleteTask/:id").delete(deleteTask);


export default router;
