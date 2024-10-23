import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todos")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todos"));
    setTodos(db.todos);
  }, []);

  const handleUpdateTodo = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(newTodos);
    save(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodos);
    save(newTodos);
  };

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    save(newTodos);
  };

  const save = (currentTodos) => {
    localStorage.setItem("todos", JSON.stringify({ todos: currentTodos }));
  };

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoList
        todos={todos}
        activeTab={activeTab}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
