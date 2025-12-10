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
    logger.error(`Error adding task: ${error.message}`);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const data = await Task.find();
    logger.info(data);
    res.status(200).json({ tasks: data });
  } catch (error) {
    logger.error(`Error featching: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  if (!name && !status) {
    res.status(400).json({ error: "Name or status is required" });
  }
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { name, status },
      { new: true }
    );
    res.status(200).json({ updatedTask: updatedTask });
    logger.info(`Task updated successfully: ${updatedTask}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
    logger.error(`Error updating task: ${error.message}`);
  }
};

export { addTask, getAllTasks, updateTask };
