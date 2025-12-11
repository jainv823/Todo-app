import "./TodoForm.css";
import Card from "../UI/Card/Card";
import { useState } from "react";
import axios from "axios";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/v1/tasks/");
      const taskList = await data.data.tasks;
      setTasks(taskList);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(task);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/tasks/addTask",
        {
          name: task,
        }
      );
      setTask("");
      getTasks();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card>
      <form className="todo_form" action="submit" method="post">
        <input
          className="todo_input"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Enter your todo task here"
        />
        <button className="addBtn" type="submit" onClick={submitHandler}>
          ADD TASK
        </button>
      </form>
    </Card>
  );
};

export default TodoForm;
