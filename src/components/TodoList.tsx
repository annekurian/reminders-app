import React from "react";
import Todo from "../models/todo";

interface TodoListProps {
  items: Todo[];
  onRemoveTodo: (id: number) => void;
  onUpdateTodo: (id: number, completed: boolean) => void;
}

function getItemClass(item: Todo) {
  let classes = "form-check-label ";
  return (classes += item.completed ? "text-decoration-line-through" : "");
}

function TodoList({ items, onRemoveTodo, onUpdateTodo }: TodoListProps) {
  return (
    <div className="card">
      <div className="card-header bg-primary">Todo List</div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            <input
              type="checkbox"
              className="form-check-input me-1"
              id="completed"
              checked={item.completed}
              onChange={(e) => onUpdateTodo(item.id, e.target.checked)}
            />
            <label htmlFor="completed" className={getItemClass(item)}>
              {item.title}
            </label>
            <button
              className="btn text-secondary float-end"
              onClick={() => onRemoveTodo(item.id)}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
