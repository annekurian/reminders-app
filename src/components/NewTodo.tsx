import React, { useState } from "react";

interface NewTodoProps {
  onAddTodo: (title: string, completed: boolean) => void;
  completed: boolean;
}

function NewTodo({ onAddTodo }: NewTodoProps): JSX.Element {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddTodo(title, completed);
    setTitle("");
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary mb-3"
        data-bs-toggle="collapse"
        data-bs-target="#NewTodo"
      >
        New Todo
      </button>
      <div className="collapse" id="NewTodo">
        <div className="card card-body col-sm-6 mb-3">
          <form onSubmit={submitForm}>
            <label htmlFor="title">Description</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              placeholder="Grocery shopping, Bill payment, etc"
              className="form-control"
            />
            <div className="form-check mt-3">
              <label htmlFor="status">Completed</label>
              <input
                checked={completed}
                type="checkbox"
                id="status"
                className="form-check-input"
                onChange={(e) => setCompleted(e.target.checked)}
              />
            </div>
            <button className="btn btn-primary my-3">Save</button>
            <button
              className="btn btn-primary mx-3"
              data-bs-toggle="collapse"
              data-bs-target="#NewTodo"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewTodo;
