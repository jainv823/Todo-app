import "./TodoList.css";
import Card from "../UI/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("pending");

    const getTasks = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/v1/tasks/");
      const taskList = await data.data.tasks;
      setTasks(taskList);
      setIsLoading(false);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => getTasks();
  });

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/tasks/deleteTask/${id}`
      );
      console.log(response.data);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id) => {
    try {
      const updatedTask = await axios.put(
        `http://localhost:3000/api/v1/tasks/updateTask/${id}`,
        { status: status }
      );
      console.log(`Task updated: ${{ ...updatedTask }}`);
    } catch (error) {
      console.log(`Error updating the task: ${error.message}`);
    }
  };

  const updateHandler = (e) => {
    const id = e.target.id;
    if (e.target.tagName !== "BUTTON") {
      if (status === "pending") {
        setStatus("completed");
      } else {
        setStatus("pending");
      }
      updateTask(id);
    }
  };

  return (
    <Card>
      {isLoading && <p>Loading...</p>}
      <ul className="todo__list">
        {tasks.map((task) => {
          return (
            <li
              id={task._id}
              key={task._id}
              className={
                task.status === "pending"
                  ? "todo__listItem"
                  : "todo__listItem__completed"
              }
              onClick={(e) => updateHandler(e)}
            >
              <span>{task.name}</span>
              <button
                className="deleteBtn"
                onClick={() => deleteTask(task._id)}
              >
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
