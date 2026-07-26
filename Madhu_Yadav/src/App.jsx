import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
 const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
  const updatedTodos = [...todos];

  updatedTodos[index].completed =
    !updatedTodos[index].completed;

  setTodos(updatedTodos);
};

  return (
    <div className="container">
      <h1>📝 Todo App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <p>Total Tasks: {todos.length}</p>

      {todos.length === 0 && <p>No tasks yet 🚀</p>}

      <ul className="todo-list">
  {todos.map((todo, index) => (
    <li key={index}>
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;