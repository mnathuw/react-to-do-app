import "./App.css";
import TodoList from "./components/TodoList";
function App() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="todo-app">
      <h1>What's the Plan for Today? {date}</h1>
      <TodoList />
    </div>
  );
}

export default App;
