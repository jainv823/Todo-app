import { Task } from "../models/task.model.js";
import logger from "../../logger.js";

const addTask = async (req, res) => {
  const { name, status } = req.body;
  try {
    if (!name && !status) {
      throw new Error("Name is required!");
    }
    const task = await Task.insertOne({
      name,
      status,
    });
    res.status(200).json(task);
    logger.info(`Task added successfully: ${task}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
    (`Error adding task: ${error.message}`);
  }
};

export { addTask };
