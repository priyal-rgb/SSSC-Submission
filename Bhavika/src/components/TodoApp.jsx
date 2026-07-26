import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <p className="subtitle">Stay organized, one task at a time.</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-info">
        <span>Total: {todos.length}</span>
        <span>
          Completed: {todos.filter((todo) => todo.completed).length}
        </span>
      </div>

      {todos.length === 0 ? (
        <p className="empty-message">No tasks added yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoApp;