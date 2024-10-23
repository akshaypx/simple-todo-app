import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo } = props;
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input !== "") {
      handleAddTodo({ input: input, completed: false });
      setInput("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={(e) => handleAdd(e)}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
