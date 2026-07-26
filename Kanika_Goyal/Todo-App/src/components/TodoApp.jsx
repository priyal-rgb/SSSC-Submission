import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-container">
      <h1>📝 Daily Task Manager</h1>

      <div className="input-section">
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

        <button onClick={addTask}>Add</button>
      </div>

      <h3>Total Tasks: {tasks.length}</h3>

      {tasks.length === 0 ? (
        <p>✨ No tasks yet. Add your first task!</p>
      ) : (
        tasks.map((item, index) => (
          <TodoItem
            key={index}
            task={item}
            index={index}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoApp;