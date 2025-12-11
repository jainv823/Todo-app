import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <h1 className="title">TODO APP</h1>
      <TodoForm />
      <TodoList />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
