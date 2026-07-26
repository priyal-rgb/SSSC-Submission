function TodoItem({ todo, deleteTask, toggleTask }) {
  return (
    <div className="todo-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTask(todo.id)}
        />

        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;