import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const initialItems = [
  { id: 1, text: "Learn React Fundamentals", completed: false },
  { id: 2, text: "Learn Intermediate React Fundamentals", completed: true },
  { id: 3, text: "Learn Advanced React Fundamentals", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialItems);

  /**
   * handleAddTodoItem method will add new Todo Item in the Todo List.
   * @param {string} text Passing it to the Todo item object.
   */
  function handleAddTodoItem(text) {
    setTodos([...todos, { id: +Date.now(), text, completed: false }]);
  }

  /**
   * handleCompletedTodo method will toggle Todo item checkbox based on their id.
   * @param {number} id Passing it to toggle Todo item checkbox with specific id.
   */
  function handleCompletedTodo(id) {
    setTodos((completedTodo) =>
      completedTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  /**
   * handleDeleteTodoItem method will remove the Todo item from the Todo list based on their id.
   * @param {number} id Passing it to remove the Todo item from the Todo list
   */
  function handleDeleteTodoItem(id) {
    setTodos((deleteTodo) => deleteTodo.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app">
      <h1>My Todo's</h1>
      <TodoForm onHandleAddTodoItem={handleAddTodoItem} />
      <TodoList
        todos={todos}
        onCompletedTodo={handleCompletedTodo}
        onDelete={handleDeleteTodoItem}
      />
    </div>
  );
}
