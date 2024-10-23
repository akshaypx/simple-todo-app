export function TodoCard(props) {
  const { todo, handleUpdateTodo, todoIndex, handleDeleteTodo } = props;
  console.log(todo);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todo.completed}
          onClick={() => handleUpdateTodo(todoIndex)}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
