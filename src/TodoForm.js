import { useState } from "react";

export function TodoForm({ onHandleAddTodoItem }) {
  const [text, setText] = useState("");

  /**
   * handleSubmit method will add the Todo List item in the Todo List
   * @param {object} e Passing event object to prevent the default submit behaviour
   * @returns
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (!text) {
      return;
    }

    onHandleAddTodoItem(text);
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
