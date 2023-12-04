export function TodoItem({ todo, onCompletedTodo, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onCompletedTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button type="button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}
