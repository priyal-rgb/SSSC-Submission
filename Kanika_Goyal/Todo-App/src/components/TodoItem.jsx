function TodoItem({ task, index, deleteTask }) {
  return (
    <div className="todo-item">
      <span>{task}</span>

      <button onClick={() => deleteTask(index)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;