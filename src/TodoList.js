import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onCompletedTodo, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todo={todoItem}
          onCompletedTodo={onCompletedTodo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
