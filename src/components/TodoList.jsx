import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, activeTab, handleUpdateTodo, handleDeleteTodo } = props;
  const tab = activeTab;
  const filteredTodosList =
    tab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  return (
    <>
      {filteredTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
}
